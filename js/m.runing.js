// 字母定位函数
function brank_letter() {
		var $aside_letter = $('aside.aside_letter');
		if ($aside_letter.length>0) {
				$('aside.aside_letter li.letter_item').on('touchstart', function(e){
					var $letter_item_index = $(this).index();//当前字母的序号，与dl列表对应
					var dl_offsetTop = $('dl.filter_details_kind').eq($letter_item_index).offset().top;
					$(window).scrollTop(dl_offsetTop); //滚动条高度设置为对应dl列表距文档顶部高度
					if (e.type == 'touchstart') e.preventDefault();
				})
			}else{ return; }
		} 
function buySellEnvent(){
		var h = 0;
		$('div.form_inner_con div.form_box').css({"display": "none"}).eq(0).css({"display": "block"});
		h = $('div.form_inner_con div.form_box').eq(0).height();
		$('div.form_inner_con').height(h);
		$('ul.buy_sell_tit>li>a').mouseover(function(){
				if ($(this).hasClass("current")) { 
					return false;
				}else {
					$(this).parents('ul.buy_sell_tit').find('a.current').removeClass('current');
					$(this).addClass('current');
					$('div.form_inner_con div.form_box').css({"display": "none"}).eq($(this).parent().index()).css({"display": "block"});
					 h = $('.car_list_con').eq($(this).parent().index()).height();
					$('div.form_inner_con').height(h);
				}
		})
	}
$(function(){
	buySellEnvent();
	brank_letter();
	var calendar = new LCalendar();
    calendar.init({
        'trigger': '#picktime', //标签id
        'type': 'ym', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': '1980-1', //最小日期
        'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1)
    });

})

