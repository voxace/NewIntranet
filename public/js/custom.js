$(document).ready(function () {

	$( "#hamburger" ).click(function() {
		$( ".nav" ).slideToggle( "slow", function() {
		});
	});

	if ($(window).width() < 800) {
		$( ".nav" ).slideUp( 0, function() {});
		$( "#search" ).hide();
		$( "#date-info" ).hide();
	}
	else {
		$( ".nav" ).slideDown( 0, function() {});
		$( "#search" ).show();
		$( "#date-info" ).show();
	}

	$(window).resize(function() {
		if ($(window).width() < 800) {
			$( ".nav" ).slideUp( 0, function() {});
			$( "#search" ).hide();
		$( "#date-info" ).hide();
		}
		else {
			$( ".nav" ).slideDown( 0, function() {});
			$( "#search" ).show();
			$( "#date-info" ).show();
		}
	});
});
