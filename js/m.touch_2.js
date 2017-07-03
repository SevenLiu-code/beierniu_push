

$(function(){
	//select
	$('select.budget_price_select, div.budget_price>i').one('tap', function(e){
		$('select.budget_price_select>option').first().attr({'disabled':'disabled'});	
		$('select.budget_price_select').addClass('current');
	});

	//车系不可选择品牌进入
	$('input.brank_select_set_off').tap(function(e){
		$('.hidden_part').css({'display':'none'});
		$('section.car_brank').css({'display':'block'});
		// if ( e.type == 'touchend' ) e.preventDefault();
	});
	//车系可选择品牌进入
	$('input.brank_select_set').on('touchend', function(e){
		$('section.brank_set').addClass('find_set_detail');//添加类标志，用于区分事件
		$('.hidden_part').css({'display':'none'});
		$('section.car_brank').css({'display':'block'});
		if ( e.type == 'touchend' ) e.preventDefault();
	})
	//品牌选择页返回
	$('section.car_brank>.filter_head>a').on('touchend', function(e){
		$('section.brank_set').removeClass('find_set_detail');//去掉类标志
		$('section.car_brank').css({'display':'none'});
		$('.hidden_part').css({'display':'block'});
		if ( e.type == 'touchend' ) e.preventDefault();
	});
	//子系列页返回
	$('section.brank_set .filter_head>a').on('touchend', function(e){
		$('section.brank_set').hide();
		$('section.car_brank').show();
		if ( e.type == 'touchend' ) e.preventDefault();
	});
	//请求车系
	$('li.find_set').tap(function(e){
		// var brand = $(this).find('a').attr('data-brand');//品牌参数
		// $.ajax({
		// 	cache : true,
		// 	type : "POST",
		// 	url : "",
		// 	data : "",
		// 	async : false,
		// 	dataType:"json",
		// 	success: function(data) {
		// 		if(data.code==3){
					$('section.car_brank').hide();
					//子系列添加内容
					$('section.brank_set').show();
			// 		}
			// 	}
			// });
		if ( e.type == 'touchend' ) e.preventDefault();
	});
	//请求车辆款式
	$('section.find_set_detail li.find_set').on('touchend', function(e){
		var brand = $(this).find('a').attr('data-brand');//车系参数
		$.ajax({
			cache : true,
			type : "POST",
			url : "",
			data : "",
			async : false,
			dataType:"json",
			success: function(data) {
				if(data.code==3){
					$('section.car_brank').hide();
					//款式添加内容
					$('section.brank_set').show();
					}
				}
			});
		if ( e.type == 'touchend' ) e.preventDefault();
	});
	//品牌车型选中
	$('a.car_brands_option').on('touchend', function(){
		var html = $(this).html();
		$('input.brank_select_set_off').addClass('current').val(html);
		$('section.car_brank, section.brank_set').hide();
		$('.hidden_part').show();
		if ( e.type == 'touchend' ) e.preventDefault();
	});
	//录入买家页表单提交
	$('button.buy_car_commit').tap(function(){
		var arry = [];
		var $this = $(this);
		var Rex_phone = /^1[34578][\d]{9}$/;
		var $box = $(this).parents('.buy_car_form');
		var name = $box.find('input.name_input').val();
		var phone = $box.find('input.phone_input').val();
		var price = $box.find('select').val();
		$box.find('p.error_text').hide();//隐藏所以错误提示文本
		if (name == '' || name.length == 0) { 
			$box.find('p.name_error_text').html('买家姓名为必填项').show();
		 }else if (!Rex_phone.test(phone)){
		 	$box.find('p.phone_error_text').html('手机号码填写有误').show();
		 }else if( price == 'none' ){
			$box.find('p.price_error_text').html('预算价格为必选项').show();
		 }else {
		 	var brank_select_text = $box.find('input.brank_select').val();
		 	//取到用户选择车辆品牌车系文本
		 	arry.push(name, phone, price, brank_select_text);
		 	$.ajax({
				cache : true,
				type : "POST",
				url : "",
				data : "",
				async : false,
				dataType:"json",
				success: function(data) {
					if(data.code==3){
						$('div.buy_sell_form_con').hide();
						$('div.ask_box_success').show();
					}
				}
			});
		 }
	});

	//录入车源页表单提交
	$('button.sell_car_commit').tap(function(){
		var arry = [];
		var $this = $(this);
		var Rex_phone = /^1[34578][\d]{9}$/;
		var Rex_mileage = /^(([0-9]{1,2})|([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2}))$/;
		var $box = $(this).parents('.sell_car_form');
		var name = $box.find('input.name_input').val();//卖家姓名
		var phone = $box.find('input.phone_input').val();//手机号码
		var brank_select_text = $box.find('input.brand_select').attr('data');//品牌车型
		var time = $box.find('input.time_input').val();
		var mileage = $box.find('input.mileage_input').val();//表显里程
		$box.find('p.error_text').hide();//隐藏所以错误提示文本
		if (name == '' || name.length == 0) { 
			$box.find('p.name_error_text').html('买家姓名为必填项').show();
		 }else if (!Rex_phone.test(phone)){
		 	$box.find('p.phone_error_text').html('手机号码填写有误').show();
		 }else if( brank_select == 'none' ){
		 	$box.find('p.brand_error_text').html('请选择品牌车型').show();
		 }else if( time == '' || time.length == 0 ){
		 	$box.find('p.time_error_text').html('请选择上牌时间').show();
		 }else if( Rex_mileage.test(mileage) ){
		 	$box.find('p.mileage_error_text').html('表显里程输入有误').show();
		 }else{
		 	//取到品牌选择的data
		 	arry.push(name, phone, brank_select, time, mileage);
		 	$.ajax({
				cache : true,
				type : "POST",
				url : "",
				data : "",
				async : false,
				dataType:"json",
				success: function(data) {
					if(data.code==3){
						$('div.buy_sell_form_con').hide();
						$('div.ask_box_success').show();
					}
				}
			});
		 }
	});
	//错误提示文本触碰关闭
	$('p.error_text').on('touchend', function(e){
		$(this).hide();
		if ( e.type == 'touchend' ) { e.preventDefault(); }
	});
	//提交成功返回
	$('div.return_link>a').on('touchend', function(e){
		$('div.ask_box_success').hide();
		$('div.buy_sell_form_con').show();
		if ( e.type == 'touchend' ) e.preventDefault();
	});
})
