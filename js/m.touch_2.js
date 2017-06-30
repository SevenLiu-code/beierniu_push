

$(function(){
	//二手车买卖页
	$('div.budget_price').on('touchstart' ,function(e){
		if( $(this).find('i').hasClass('rotate') ){
			$(this).find('i').removeClass('rotate');
			$(this).parent().find('.budget_price_selet').hide();
			$(window).scrollTop(0);
		}else{ 
			$(this).find('i').addClass('rotate');
			$('ul.budget_price_selet>li').removeClass('active');
			$(this).parent().find('ul.budget_price_selet').show();
			$(window).scrollTop($('body').height());
		 }
		 if ( e.type == 'touchstart' ) e.preventDefault();
	});
	$('ul.budget_price_selet>li').tap(function(){
		var text = $(this).html();
		var data = $(this).attr('data');
		$(this).addClass('active');
		$('div.budget_price>span').html(text);
		$('div.budget_price>i').removeClass('rotate');
		$('.budget_price_selet').hide();
		$('div.budget_price').attr({'data': data});
	});
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
})
