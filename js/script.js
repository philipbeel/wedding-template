/* Author: Philip Beel */

$(function() {
	
	// Scroll to top of page
	$('a.scroll-top').click(function(){
		$('html, body').animate({scrollTop: '0px'}, 1000);
		return false;
	});
	
	// Smooth internal link scrolling
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});


});
