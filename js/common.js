$(function() {
	//二级菜单
	if($(window).width()>768){
		$(".nav>li").hover(function() {
			$(this).find('.sonNav').stop().slideDown(300);
			$(this).children('a').addClass('redText');
			$(this).children('a').find('span').addClass('slideup');
		}, function() {
				$(this).find('.sonNav').stop().slideUp(150);
				$(this).children('a').removeClass('redText');
				$(this).children('a').find('span').removeClass('slideup');
		});
	} else if($(window).width()<=768){
		$(".nav>li").hover(function() {
		$(this).find('.sonNav').stop(true, true).slideDown(300);
		$(this).children('a').addClass('redText');
		$(this).children('a').find('span').addClass('sm-slide');
	}, function() {
		$(this).find('.sonNav').stop(true, true).slideUp(300);
		$(this).children('a').removeClass('redText');
		$(this).children('a').find('span').removeClass('sm-slide');
	});
	}
	$(".jhlogo").click(function() {
		changePage('about.html');
	});
	
	//回到顶部
	window.onscroll = function() {
		var oTop = document.getElementById('backToTop');
		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrolltop > 100) {
			oTop.style.display = 'block'
		} else {
			oTop.style.display = 'none'
		}
	}

});

function logo(pageUrl) {
	var index = pageUrl.indexOf("&");
	pageUrl = pageUrl.substring(0, index);
	location.href = pageUrl;//'https://www.hscpro.com/'
}
//加载子页面
function changePage(pageUrl) {
	var index = pageUrl.indexOf("&");
	pageUrl = pageUrl.substring(0, index);
	
	//alert("changePage="+pageUrl)
	$("#id_content").load('pages/' + pageUrl);
	document.documentElement.scrollTop = document.body.scrollTop = 0;
}
