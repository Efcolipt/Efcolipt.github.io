$(document).ready(function () {
	 var $hamburger = $(".hamburger"), $menu = $('.modal--menu'), $switching;
		  $hamburger.on("click", function(e) {
		  	if ($menu.hasClass('active--menu')) {
		  		$switching = false;
		  		$menu.stop(false, true).slideToggle(300);
		  		$menu.removeClass('active--menu');
		  		$('body').css({"overflow-y":"scroll"});
		  	}else{
		  		$menu.stop(false, true).slideToggle(300);
		  		$('body').css({"overflow":"hidden"});
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
		  			$(this).find('.answere--question').slideDown('slow').attr('data-id',1);
		  			$(this).find('.icon--close_open > img').addClass('rotate-close').removeClass('rotate-open');
		  			

		  	}else{
		  			$(this).find('.icon--close_open > img').addClass('rotate-open').removeClass('rotate-close');
		  			$(this).find('.answere--question').slideUp('slow').attr('data-id',0);
			}


		  });

		  $(".menu--modal--content > ul > li > a").click(function() {
			    var elementClick = $(this).attr("href")
			    var destination = $(elementClick).offset().top;
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
		  	 $('body').css({"overflow":"scroll"});
		  	 $hamburger.removeClass('is-active');
		  });

		 
			  $('.testimonial').slick({
			    autoplay: false,
			    autoplaySpeed: 7000
			  });
		

});