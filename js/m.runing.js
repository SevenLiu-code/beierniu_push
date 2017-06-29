
function buySellEnvent(){
		var h = 0;
		$('div.form_inner_con div.form_box').hide().eq(0).show();
		h = $('div.form_inner_con div.form_box').eq(0).height();
		$('div.form_inner_con').height(h);
		$('ul.buy_sell_tit>li>a').mouseover(function(){
				if ($(this).hasClass("current")) { 
					return false;
				}else {
					$(this).parents('ul.buy_sell_tit').find('a.current').removeClass('current');
					$(this).addClass('current');
					$('div.form_inner_con div.form_box').hide().eq($(this).parent().index()).show();
					 h = $('.car_list_con').eq($(this).parent().index()).height();
					$('div.form_inner_con').height(h);
				}
		})
	}

$(function(){
	buySellEnvent();
})

