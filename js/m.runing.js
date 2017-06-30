
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
	var calendar = new LCalendar();
    calendar.init({
        'trigger': '#picktime', //标签id
        'type': 'ym', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': '1980-1', //最小日期
        'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1)
    });
})

