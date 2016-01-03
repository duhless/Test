$(document).ready(function() {
	$('#other-link').on('click', function() {
		$(this).toggleClass('active')
		$('#social-other').slideToggle('fast');
	});

	$('.nav-links > ul > li > a').on('click', function() {
		$('html, body').animate({ 
			scrollTop:  $('#'+$(this).data('target')).offset().top
		}, 1000); 
        return false;
	});

	$('.navigation .btn-menu').on('click', function() {
		$('.nav-links').toggleClass('active');
	});
});