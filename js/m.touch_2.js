

$(function(){
	//select
	$('select.budget_price_select, div.budget_price>i').one('tap', function(e){
		$('select.budget_price_select>option').first().attr({'disabled':'disabled'});	
	});
	// $('select.budget_price_select').change(function(){
	// 	$(this).addClass('change');
	// })

	//请求子系列
	$('li.find_set').on('touchstart', function(e){
		var brand = $(this).find('a').attr('data-brand');
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
					$('section.brank_set').show();
					}
				}
			});
		if ( e.type == 'touchstart' ) e.preventDefault();
	});
	//子品牌页返回
	$('section.brank_set .filter_head>a').on('touchstart', function(e){

		$('section.brank_set').hide();
		$('section.car_brank').show();
		if ( e.type == 'touchstart' ) e.preventDefault();
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
		 	var brank_select = $box.find('div.brank_select').attr('data');
		 	//取到品牌选择的data
		 	arry.push(name, phone, price, brank_select);
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
		var car_brand = $box.find('div.brand_select').attr('data');//品牌车型
		var mileage = $box.find('input.mileage_input').val();//表显里程
		$box.find('p.error_text').hide();//隐藏所以错误提示文本
		if (name == '' || name.length == 0) { 
			$box.find('p.name_error_text').html('买家姓名为必填项').show();
		 }else if (!Rex_phone.test(phone)){
		 	$box.find('p.phone_error_text').html('手机号码填写有误').show();
		 }else if( car_brand == 'none' ){
		 	$box.find('p.brand_error_text').html('请选择品牌车型').show();
		 }else if( Rex_mileage.test(mileage) ){
		 	$box.find('p.mileage_error_text').html('表显里程输入有误').show();
		 }else{
		 	//取到品牌选择的data
		 	arry.push(name, phone, price, brank_select);
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
	//错误文本触碰关闭
	$('p.error_text').on('touchstart', function(e){
		$(this).hide();
		if ( e.type == 'touchstart' ) { e.preventDefault(); }
	})

	//表单页表单提交成功返回
	$('.form_con_inner a.return').tap(function(){
		clearInterval(waiting);
		costom_form_get_code = true;
		$('button.get_code').html('获取验证码');
		$('.form_con_inner .form_input_con').show();
		$('.form_con_inner .ask_box_success').hide();
	})
	//选择品牌
	$('div.brank_select').on('touchstart', function(e){
		$('.hidden_part').css({'display':'none'});
		$('section.car_brank').css({'display':'block'});
		if ( e.type == 'touchstart' ) e.preventDefault();
	})
	$('section.car_brank>.filter_head>a').on('touchstart', function(e){
		$('section.car_brank').css({'display':'none'});
		$('.hidden_part').css({'display':'block'});
		if ( e.type == 'touchstart' ) e.preventDefault();
	});

	//提交成功返回
	$('div.return_link>a').on('touchstart', function(e){
		$('div.ask_box_success').hide();
		$('div.buy_sell_form_con').show();
		if ( e.type == 'touchstart' ) e.preventDefault();
	})
})
