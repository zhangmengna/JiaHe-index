$(function() {
	$(".section1").slide({
		titCell: ".hd ul",
		mainCell: ".bd ul",
		effect: "fade",
		interTime: 5000,
		delayTime: 1000,
		autoPlay: true,
		autoPage: true,
		trigger: "click"
	});
	var nav = navigator.userAgent;
	var isIE6 = /msie 6/i.test(nav);
	var isIE7 = /msie 7/i.test(nav);
	var isIE8 = /msie 8/i.test(nav);
	switch(true){
		case isIE6:$(".section1 .hd").css('bottom','100px');break;
		case isIE7:$(".section1 .hd").css('bottom','100px');break;
		case isIE8:$(".section1 .hd").css('bottom','100px');break;
		default:break;
	}

	
	$(".productCon .con").hover(function() {
		$(this).find('.hoverAnimate').css('opacity', '0.9')
		$(this).find('.hoverAnimateCon').delay(2000).css('opacity', '1')
		$(".icon1 img",this).attr('src', 'images/button_protects_provide_for_the_aged_selected.png')
		$(".icon2 img",this).attr('src', 'images/button_protects_medical_insurance_selected.png')
		$(".icon3 img",this).attr('src', 'images/button_protects_population_health_selected.png')
	}, function() {
		$(this).find('.hoverAnimate').css('opacity', '0')
		$(this).find('.hoverAnimateCon').css('opacity', '0')
		$(".icon1 img",this).attr('src', 'images/button_protects_provide_for_the_aged_default.png')
		$(".icon2 img",this).attr('src', 'images/button_protects_medical_insurance_default.png')
		$(".icon3 img",this).attr('src', 'images/button_protects_population_health_default.png')
	});
	/*$(".solutionCon .con").hover(function() {
		$(this).find('.hoverAnimate').css('opacity', '0.9')
		$(this).find('.hoverAnimateCon').delay(2000).css('opacity', '1')
	}, function() {
		$(this).find('.hoverAnimate').css('opacity', '0')
		$(this).find('.hoverAnimateCon').css('opacity', '0')
	});*/
	/*$(".icon1 img").hover(function() {
		$(this).attr('src', 'images/button_protects_provide_for_the_aged_selected.png')
	}, function() {
		$(this).attr('src', 'images/button_protects_provide_for_the_aged_default.png')
	});*/
	/*$(".icon2 img").hover(function() {
		$(this).attr('src', 'images/button_protects_medical_insurance_selected.png')
	}, function() {
		$(this).attr('src', 'images/button_protects_medical_insurance_default.png')
	});
	$(".icon3 img").hover(function() {
		$(this).attr('src', 'images/button_protects_population_health_selected.png')
	}, function() {
		$(this).attr('src', 'images/button_protects_population_health_default.png')
	});*/
	$(window).resize(function() {
		autoScrolling();
	});
	
	//滚屏效果
	$('#fullPage').fullpage({
		scrollBar: true,
		paddingTop: '130px',
		/*keyboardScrolling: true,*/
		anchors: ['page1', 'page2', 'page3', 'page4','page5'],

		verticalCentered: false,
		/*css3: true,*/
		afterLoad: function(anchorLink, index) {
			$(".section div").show()
			if (index == 2) {
				$('.section2 .productTitle').delay(100).removeClass('fadeOutUp').addClass('animated fadeInUp'),
					$('.section2 .productCon').delay(1000).removeClass('fadeOutDown').addClass('animated fadeInUpBig')
			}
			/*if (index == 3) {
				$('.section3 .solutionTitle').delay(100).removeClass('fadeOutUp').addClass('animated fadeInUp'),
					$('.section3 .solutionFirst').delay(1000).removeClass('flipOutX').addClass('animated slideInLeft'),
					$('.section3 .solutionSecond').delay(1000).removeClass('flipOutX').addClass('animated slideInLeft'),
					$('.section3 .solutionThird').delay(1000).removeClass('flipOutX').addClass('animated slideInLeft'),
					$('.section3 .solutionFour').delay(1000).removeClass('flipOutX').addClass('animated slideInLeft')
			}*/
			if (index == 3) {
				$('.section3 .partnerTitle').delay(100).removeClass('fadeOutUp').addClass('animated fadeInUp'),
					$('.section3 .partnerCon').delay(1000).removeClass('fadeOutDown').addClass('animated fadeInLeft')
			}
			if (index == 4) {
				$('.section4 .industryTitle').delay(100).removeClass('fadeOutUp').addClass('animated fadeInUp'),
					$('.section4 .industryLeft').delay(3000).removeClass('fadeOutDown').addClass('animated fadeInLeft')
				$('.section4 .industryRight').delay(4000).removeClass('fadeOutDown').addClass('animated fadeInRight')
			}
			if (index == 5) {
				$('.section5 .aboutTitle').delay(100).removeClass('fadeOutUp').addClass('animated fadeInUp'),
					$('.section5 .aboutCon').delay(1000).removeClass('fadeOutDown').addClass('animated fadeInLeft')
			}
		},
		onLeave: function(index, direction) {
			$(".section div").hide();
			if (index == '2') {
				$('.section2 .productTitle').delay(100).addClass('animated fadeOutUp'),
					$('.section2 .productCon').delay(1000).addClass('animated fadeOutDown')
			}
			/*if (index == '3') {
				$('.section3 .solutionTitle').delay(100).addClass('animated fadeOutUp'),
					$('.section3 .solutionFirst').delay(1000).addClass('animated flipOutX'),
					$('.section3 .solutionSecond').delay(1000).addClass('animated flipOutX'),
					$('.section3 .solutionThird').delay(1000).addClass('animated flipOutX'),
					$('.section3 .solutionFour').delay(1000).addClass('animated flipOutX')
			}*/
			if (index == '3') {
				$('.section3 .partnerTitle').delay(100).addClass('animated fadeOutUp'),
					$('.section3 .partnerCon').delay(1000).addClass('animated fadeOutDown')
			}
			if (index == '4') {
				$('.section4 .industryTitle').delay(100).addClass('animated fadeOutUp'),
					$('.section4 .industryLeft').delay(1000).addClass('animated fadeOutDown'),
					$('.section4 .industryRight').delay(1000).addClass('animated fadeOutDown')
			}
			if (index == '5') {
				$('.section5 .aboutTitle').delay(100).addClass('animated fadeOutUp'),
					$('.section5 .aboutCon').delay(1000).addClass('animated fadeOutDown')
			}

		}
	});
    //小于1024禁止滚屏
	function autoScrolling() {
		var $ww = $(window).width();
		if ($ww < 1024) {
			$.fn.fullpage.setAutoScrolling(false);
		} else {
			$.fn.fullpage.setAutoScrolling(true);
		}
	}
	autoScrolling();

	//轮播图
	$(".prev,.next").hover(function() {
		$(this).stop(true, false).fadeTo("show", 0.9);
	}, function() {
		$(this).stop(true, false).fadeTo("show", 0.4);
	});

	$("#id_content").show();
})
//跳转到先择的子页面
function soluteFun(id) {
	location.href = 'model.html?id=' + id
}

//进度条
var etControl = {};
        etControl.process = function (config) {
            /*需要放在html中的body标签后面使用本控件*/

            var count = 0;
            /*更新进度条*/
           var el=$(".loading")
            this.updateProcess = function (percent) {
                setTimeout(function () { $(".loading").animate({ width: percent + "%" }).text(percent + "%") }, ++count * 500);
    
                if (percent == 100) {           /*100%就从页面移除loading标签*/
                    setTimeout(function () {
                        $(el).hide(500);
                        setTimeout(function () { $(el).remove() }, 500);
                    }, count * 500 + 800);
                }
                
            };
        }
    var p = new etControl.process();
    
    function fun(classname, pec){
    	//alert(classname)
	    $("body").load("$("+classname+")",function(){ 			
	    	$(classname).css('display','block')	;
	    	p.updateProcess(pec);
	    });
    }
    
   //fun(".section1",34);
   //fun(".section2",47);
   //fun(".section3",64);
   //fun(".section4",78);
   //fun(".section5",100);