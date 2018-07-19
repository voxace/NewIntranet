$(document).ready(function () {
	$("#header").fadeTo(0, 0.01).delay(25).fadeTo("slow", 1);
	$("#button1").fadeTo(0, 0.01).delay(50).fadeTo("slow", 1);
	$("#button2").fadeTo(0, 0.01).delay(75).fadeTo("slow", 1);
	$("#button3").fadeTo(0, 0.01).delay(100).fadeTo("slow", 1);
	$("#button4").fadeTo(0, 0.01).delay(125).fadeTo("slow", 1);
	$("#button5").fadeTo(0, 0.01).delay(150).fadeTo("slow", 1);
	$("#button6").fadeTo(0, 0.01).delay(175).fadeTo("slow", 1);
  $("#button7").fadeTo(0, 0.01).delay(200).fadeTo("slow", 1);
  $("#button8").fadeTo(0, 0.01).delay(225).fadeTo("slow", 1);
	$("#main-menu").fadeTo(0, 0.01).delay(250).fadeTo("slow", 1);
	$("#search").fadeTo(0, 0.01).delay(275).fadeTo("slow", 1);
	$("#date-info").fadeTo(0, 0.01).delay(300).fadeTo("slow", 1);
	$("#content").fadeTo(0, 0.01).delay(325).fadeTo("slow", 1);

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
