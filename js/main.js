$(document).ready(function () {
	 var $hamburger = $(".hamburger"), $menu = $('.modal--menu'), $switching;
		  $hamburger.on("click", function(e) {
		  	if ($menu.hasClass('active--menu')) {
		  		$switching = false;
		  		$menu.stop(false, true).slideToggle(300);
		  		$menu.removeClass('active--menu');
		  		// $('body').css({"overflow-y":"scroll"});
		  	}else{
		  		$menu.stop(false, true).slideToggle(300);
		  		// $('body').css({"overflow":"hidden"});
		  		$switching = true;
		  		$menu.addClass('active--menu');
		  	}

		    $hamburger.toggleClass("is-active", $switching);
		    // Do something else, like open/close menu
	});
		  $('.port--worker').mouseenter(function(){
		  		$(this).find('.show--about--port ').stop().fadeTo("500", 1);
		  }); 

		  $('.port--worker').mouseleave(function(){
		  		$(this).find('.show--about--port ').stop().fadeTo("500", 0);
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



		  $('.menu--modal--content > ul > li > a ').click(function(){
		  	 var menu = $(this).parent().parent().parent().parent().parent();
		  	 menu.slideUp('100');
		  	 $switching = false;
		  	 menu.removeClass('active--menu');
		  	 // $('body').css({"overflow-y":"scroll"});
		  	 $hamburger.removeClass('is-active');
		  });

			 if ($(window).width() > 700) {

			  $('.testimonial').slick({
			    autoplay: true,
			    autoplaySpeed: 7000,
			    nextArrow: '<img src="../img/Testimonials/arrow-right.png" class="slick-next" alt="arrow-right" style="position:absolute; top:50px; right:5px;" />',
			    prevArrow: '<img src="../img/Testimonials/arrow-left.png" class="slick-prev" alt="arrow-left" style="position:absolute; top:50px; left:5px;" />',
			    slidesToShow: 2,
  				slidesToScroll: 1
			  });
			 }else{
			 	  $('.testimonial').slick({
				    autoplay: true,
				    autoplaySpeed: 7000,
				    nextArrow: '<img src="../img/Testimonials/arrow-right.png" class="slick-next" alt="arrow-right" style="position:absolute; top:50px; right:5px;" />',
				    prevArrow: '<img src="../img/Testimonials/arrow-left.png" class="slick-prev" alt="arrow-left" style="position:absolute; top:50px; left:5px;" />',
				    slidesToShow: 1,
	  				slidesToScroll: 1
				  });
			 }
			  $(".phone").mask("+7(999)999-99-99");
		

});