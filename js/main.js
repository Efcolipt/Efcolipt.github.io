$(document).ready(function () {
	 var $hamburger = $(".hamburger"), $menu = $('.modal--menu'), $switching;
			$hamburger.on("click", function() {
				if ($menu.hasClass('active--menu')) {
					$switching = false;
					$menu.stop(false, true).slideToggle(300);
					$menu.removeClass('active--menu');
				}else{
					$menu.stop(false, true).slideToggle(300);
					$switching = true;
					$menu.addClass('active--menu');
				}

				$hamburger.toggleClass("is-active", $switching);
		});

			$('.question').click(function(){
				var data_id = $(this).find('.answere--question').attr('data-id');
				if (data_id == 0) {
						$(this).find('.answere--question').stop(false, true).slideToggle(300).attr('data-id',1);
						$(this).find('.icon--close_open > img').addClass('rotate-close').removeClass('rotate-open');
						

				}else{
						$(this).find('.icon--close_open > img').addClass('rotate-open').removeClass('rotate-close');
						$(this).find('.answere--question').stop(false, true).slideToggle(300).attr('data-id',0);
			}


			});

			$("a").click(function() {
					var elementClick = $(this).attr("href")
					var destination = $(elementClick).offset().top;
					destination -= 90;
					jQuery("html:not(:animated),body:not(:animated)").animate({
						scrollTop: destination
					}, 800);
					return false;
		 });

			$(document).on('mouseenter',".port--worker" , function(){
				$(this).find('.links--or--watchNow').stop().fadeIn(300).css({"visibility":"visible"});
			});
			$(document).on('mouseleave',".port--worker", function(){
				$(this).find('.links--or--watchNow').stop().fadeOut(300);
			});

			$('.menu--modal--content > ul > li > a ').click(function(){
				 var menu = $(this).parent().parent().parent().parent().parent();
				 menu.slideUp('100');
				 $switching = false;
				 menu.removeClass('active--menu');
				 // $('body').css({"overflow-y":"scroll"});
				 $hamburger.removeClass('is-active');
			});

			
				$('.testimonial').slick({
					nextArrow: '<img src="../img/Testimonials/arrow-right.png" class="slick-next" alt="arrow-right" style="position:absolute; top:50px; right:5px;" />',
					prevArrow: '<img src="../img/Testimonials/arrow-left.png" class="slick-prev" alt="arrow-left" style="position:absolute; top:50px; left:5px;" />',
					slidesToShow: 2,
					slidesToScroll: 1,
					responsive: [
					  {
					    breakpoint: 768,
					    settings: {
					    	slidesToShow: 1,
								slidesToScroll: 1
					    }
					  }
					]
				});
			 $('.content--start').slick({
			 	  nextArrow: '<img src="../img/Testimonials/arrow-right.png" class="slick-next" alt="arrow-right" style="position:absolute; top:50px; right:5px;" />',
				  prevArrow: '<img src="../img/Testimonials/arrow-left.png" class="slick-prev" alt="arrow-left" style="position:absolute; top:50px; left:5px;" />',
				  infinite: true,
				  speed: 15000,
				  slidesToShow: 1,
				  adaptiveHeight: true,
				  autoplay: true
			});
				$(".phone").mask("+7(999)999-99-99");
		
				$('.slick-dots').find('button').html("");
});