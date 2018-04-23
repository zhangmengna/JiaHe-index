$(function() {
	/*$(".conLeft li a").click(function() {
		$(this).addClass('active').parent().siblings().find('a').removeClass('active')
		if ($(".first").hasClass('active')) {
			$(".pageOneCon").css('display', 'block');
			$(".pageTwoCon").css('display', 'none');
		}
		if ($('.second').hasClass('active')) {
			$(".pageTwoCon").css('display', 'block');
			$(".pageOneCon").css('display', 'none');
		}
	})*/
	$(".selectType li a").click(function() {
		$(this).addClass('redText').parent().siblings().find('a').removeClass('redText');
		if ($(this).hasClass('redText')) {
			$(this).css('background', 'url(images/key-active.png) no-repeat 10px').parent().siblings().find('a').css('background', 'url(images/key.png) no-repeat 10px')
		} else {
			$(this).css('background', 'url(images/key.png) no-repeat 10px')
		}
	})

	/*解决方案Tab*/
	$(".tab a").click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		var index = $(this).index();
		number = index;
		$('.conRightCon').addClass('hide').removeClass('show');
		$('.conRightCon:eq(' + index + ')').addClass('show').removeClass('hide');
	});
	var auto = 1; //等于1则自动切换，其他任意数字则不自动切换
	if (auto == 1) {
		var number = 0;
		var maxNumber = $('.tabbox .tab a').length;

		function autotab() {
			number++;
			number == maxNumber ? number = 0 : number;
			$('.tab a:eq(' + number + ')').addClass('active').siblings().removeClass('active');
			$('.conRightCon:eq(' + number + ')').removeClass('hide').addClass('show').siblings().removeClass('show').addClass('hide');
		}
	}

})

function openPage(target) {
	if (target == "jigou") {       
		window.open("http://cloud.hscpro.com/hecsp?v=2.0");
	} else {
		window.open("http://cloud.hscpro.com/cecm/login_defualt?v=2.0");
	}
}