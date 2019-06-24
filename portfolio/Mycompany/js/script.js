menu.onclick = function myFunction() {
	var x = document.getElementById('MyTopnav');
	if (x.className === "topnav") {
		x.className += " responsive";
	}else{
		x.className = "topnav";
	}
}
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 500, 'swing', function () {
 window.location.hash = target;
 });
 });