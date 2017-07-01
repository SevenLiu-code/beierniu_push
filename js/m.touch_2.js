

$(function(){
	// $('div.form_row>input').focus(function(){
	// 	if ( $('div.budget_price').find('i').hasClass('rotate') ) {
	// 			$('div.budget_price').find('i').removeClass('rotate');
	// 			$('div.budget_price').parent().find('.budget_price_selet').hide();
	// 			$(window).scrollTop(0);
	// 		}
	// 	});
	
	//二手车买卖页
	// $('div.budget_price').on('touchstart' ,function(e){
	// 	if( $(this).find('i').hasClass('rotate') ){
	// 		$(this).find('i').removeClass('rotate');
	// 		$('div.mask').hide();//遮罩层隐藏
	// 		$('.budget_price_selet').css({"display": "none"});
	// 		$(window).scrollTop(0);
	// 	}else{ 
	// 		$(this).find('i').addClass('rotate');
	// 		$('div.form_row>input').blur();//所有input失去焦点
	// 		$('div.mask').show();//遮罩层打开
	// 		$('.budget_price_selet').css({"display": "block"});
	// 		$(window).scrollTop($('body').height());
	// 	 }
	// 	 if ( e.type == 'touchstart' ) e.preventDefault();
	// });
	
	// $('div.budget_price, div.budget_price>i').on('touchend', function(e){
	// 	$('div.budget_price>span').html('');//清空模拟placeholder
	// 	$('select.budget_price_select').css({'display':'block'});
	// 	$('i.select_triangle').css({'display':'block'});
	// 	$('select.budget_price_select').trigger('click');//选择框模拟点击
	// });
	
	$('select.budget_price_select, div.budget_price>i').one('tap', function(e){
		$('select.budget_price_select>option').first().attr({'disabled':'disabled'});	
	});
	$('select.budget_price_select').change(function(){
		$(this).addClass('change');
	})
	//寻求合作页表单提交
	$('.coopera_form button.form_commit').tap(function(){
		var $this = $(this);
		var Rex_phone = /^1[34578][\d]{9}$/;
		var $box = $(this).parents('.coopera_inner');
		var phone = $box.find('input.phone').val();
		if (phone == '' || phone.length == 0) { 
			$box.find('p.phone_error_text').html('请输入手机号码').show();
		 }else if (!Rex_phone.test(phone)){
		 	$box.find('p.phone_error_text').html('您输入的手机号码有误').show();
		 }else{
			$box.find('p.phone_error_text').hide();
			$box.find('.coopera_form_con').hide();
			$box.find('.ask_box_success').show();
		 }
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
	})

})
