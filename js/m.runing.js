
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
	// $('#picktime').mdatetimer({
	// 	mode : 1, //时间选择器模式： 1 ：年月日，2 ：年月日时分（ 24 小时），3 ：年月日时分（ 12 小时），4 ：年月日时分秒。默认： 1
	// 	format : 2, //时间格式化方式： 1 ：2015 年 06月 10 日 17 时 30分 46 秒，2 ： 2015-05-10  17:30:46。默认： 2
	// 	years : [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017], // 年份数组
	// 	nowbtn : false, //是否显示现在按钮
	// 	onOk : null,  //点击确定时添加额外的执行函数 默认null
	// 	onCancel : null, //点击取消时添加额外的执行函数 默认null
	// })
})

