/* Author: Philip Beel theodin.co.uk */

$(function() {

	$('#dj-form').submit(function (event) {
		event.preventDefault();
		// check the field was validated
		var songChoice = $('#song-choice').val();
		if(songChoice <= 1) {
			alert('Please enter the song and artists name');
		} else {
			$('#dj-form').hide();
			$('#song-loading').fadeIn();

			$.ajax({
				type: 'POST',
				url: 'http://www.philandjacquigethitched.com/dj-mailer.php',
				data: {
					song: songChoice,
				},
				success: function(data) {
					$('#song-result-message').html('<span>Thank you</span>');
				},
				error:function(e) {
					$('#song-result-message').html('<p>Sorry there was an issue sending your song choice, <a href="http://philandjacquigethited.com">please try again.</a></p>');
				}
			});

			setTimeout(function () {
				$('#song-loading').hide();
				$('.song-result-message').fadeIn();
			}, 3000);
		}

	});

	// RSVP form
	$('#rsvp-form').submit(function(event) {
		event.preventDefault();
		// check the form field was entered
		var rsvpName = $('#rsvp-name').val();
		var rsvpAttendance = $('#rsvp-attendance').val();
		
		if (rsvpName <= 1) {
			alert('Please enter the name/names of who will be attending.');
		} else {

			$('#rsvp-form').hide();
			$('#rsvp-loading').fadeIn();

			$.ajax({
				type: 'POST',
				url: 'http://www.philandjacquigethitched.com/mailer.php',
				data: {
					name: rsvpName,
					attendance: rsvpAttendance,
				},
				success: function(data) {
					$('#rsvp-result-message').html('<span>Thank you, your RSVP has been recieved.</span>');
					//@todo: store a local storage token to note they have submitted a response
					
				},
				error:function(e){
					$('#rsvp-result-message').html('<span>Sorry there was an issue sending your RSVP, <a href="http://philandjacquigethited.com">please try again.</a></span>');
				}
			});

			setTimeout(function () {
				$('#rsvp-loading').hide();
				$('.rsvp-result-message').fadeIn();
			}, 3000);
		}
	});

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
