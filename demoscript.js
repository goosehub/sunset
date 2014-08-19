$(document).ready(function() {

	$("body").fadeIn(8000);

	$("#sun").fadeIn(8000);

	$( "#mountains" ).delay( 2000 ).animate({
	    marginTop: "-25%",
	}, 6000 );

	$( "#sun" ).animate({
	    marginBottom: "-300px",
	}, 8000, "linear" );

	$( "#sunset, #sun" ).delay( 10000 ).animate({
	    opacity: 0.0,
	}, 5000 );

	$( "#space" ).delay( 14000 ).animate({
	    opacity: 4.0,
	}, 20000 );

});