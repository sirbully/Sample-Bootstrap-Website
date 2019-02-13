(function ($) {
	"use strict";
	
	/*----------------------------
    Mobile Menu Active
    ------------------------------ */
	$(".mainmenu ul#primary-menu").slicknav({
		allowParentLinks: true,
		prependTo: '.mobile-menu',
	});
	
	/*----------------------------
    Top Navigation Sticky
    ------------------------------ */
	jQuery(window).on('scroll', function() {
		if ($(this).scrollTop() > 10) {
			$('.header').addClass("sticky");
			$('.site_logo').attr('src','img/logo2.png');
			$('.mainmenu li a').css({"color":"#000"});
			$('.mainmenu ul li a').on({
				mouseenter: function () {
					$(this).css("border-top","1px solid #000");
				},
				mouseleave: function () {
					$(this).css("border-top","0");
				}
			});
		} else {
			$('.header').removeClass("sticky");
			$('.site_logo').attr('src','img/logo.png');
			$('.mainmenu li a').css({"color":"#fff"});
			$('.mainmenu ul li a').on({
				mouseenter: function () {
					$(this).css("border-top","1px solid #fff");
				},
				mouseleave: function () {
					$(this).css("border-top","0");
				}
			});
		}
	});
	
	/*----------------------------
    Smooth Scroll Animation
    ------------------------------ */
	$('.mainmenu li a, .logo a,.slicknav_nav li a').on('click', function () {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
			if ($target.length) {
				var targetOffset = $target.offset().top;
				$('html,body').animate({scrollTop: targetOffset}, 2000);
				return false;
		  	}
		}
	});
	
	/*----------------------------
    Counterup
    ------------------------------ */
	$('.counter').counterUp({
		delay: 20,
		time: 3000
	});
	
	/*----------------------------
    Mountain Slick Slider
    ------------------------------ */
	$('.mountain-wrap').slick({
		autoplay: true,
		dots: true,
		autoplaySpeed: 1000,
		slidesToShow: 3,
		centerPadding: '20%',
		centerMode: true,
		prevArrow: '',
		nextArrow: '',
		responsive: [{
		  breakpoint: 992,
		  settings: {
			slidesToShow: 1,
			centerPadding: '33.3%'
		  }
		},{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 1,
			centerPadding: '0'
		  }
		}]
	});
	
	/*----------------------------
    Scroll to Top
    ------------------------------ */
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 600) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').on('click', function () {
		$('html, body').animate({scrollTop : 0},2000);
		return false;
	});
	
	/*----------------------------
    Preloader
    ------------------------------ */
	jQuery(window).on('load', function(){
		jQuery(".preloader").fadeOut(500);
	});

}(jQuery));