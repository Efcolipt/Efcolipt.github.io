$(document).ready(function () {
	$(document).on('mouseenter', '.this--person--img', function () {
		$(this).find('.name--person').stop().fadeTo("500", 1);
	}); 

	$(document).on('mouseleave', '.this--person--img',function () {
		$(this).find('.name--person').stop().fadeTo("500", 0);
	});
});