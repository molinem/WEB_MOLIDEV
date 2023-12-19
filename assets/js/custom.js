
$(document).ready(function() {
    "use strict";

		// header transitions
		function headerSticky(){
			var windowPos=$(window).scrollTop();
			if( windowPos>20){
				$('.fixed-top').addClass("on-scroll");
				$('.navbar').addClass("navbar-light").removeClass("navbar-dark");
			} else {
				$('.fixed-top').removeClass("on-scroll");
				$('.navbar').addClass("navbar-dark").removeClass("navbar-light");
			}
		}
		headerSticky();
		$(window).scroll(headerSticky);

		// scrollspy
        $('body').scrollspy({
        	offset:	190,
            target:	'.dtr-scrollspy'
        });
		
		// nav scroll	
		var myoffset = $('#dtr-header-global').height();
		$('.navbar a[href^="#"]').click(function(){  
			event.preventDefault();  
			$('html, body').animate({
				scrollTop: $($(this).attr('href')).offset().top - myoffset
			}, "slow","easeInSine");
		});
		
		// Sroll to top	
		var duration = 400;
		$('#take-to-top').on('click', function(event) {
			event.preventDefault();
		$('html, body').animate({scrollTop: 0}, duration);
			return false;
		});
		
		var scroll = new SmoothScroll('a.dtr-scroll-link[href*="#"]', {
			speed: 500,
			speedAsDuration: true,
			updateURL: false, 
		});
		
		$('.dtr-bg-carousel').slick({
			slidesToShow: 1,
			autoplay: true,
			fade: true,
			autoplaySpeed: 4000,
			arrows: false,
			dots: false,
			speed: 1000,
			cssEase: 'linear',
		});

		
		$('.dtr-blog-carousel').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				},
			  ]
		});
		
		$(function () {
			var v = $("#contactform").validate({
				submitHandler: function (form) {
					$(form).ajaxSubmit({
						target: "#result",
						clearForm: true
					});
				}
			});
		});
		
		$('#contactform #message').val('');

		$('.dtr-portfolio-grid').imagesLoaded( function () {
			$('.dtr-portfolio-grid').isotope( 
				{
				itemSelector: '.dtr-portfolio-item',
				masonry: {},
				});
			});
			$('.dtr-filter-nav a').on('click', function () {
				$('.dtr-filter-nav a').removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$('.dtr-portfolio-grid').isotope({
				filter: selector
			});
			return false;
		});

});