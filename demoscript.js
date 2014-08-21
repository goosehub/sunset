$(document).ready(function() {

	$( "body" ).animate({
		    opacity: 1.0,
		}, 4000, "easeInOutQuad" );

	$( "#sun" ).animate({
		    opacity: 1.0,
		}, 6000, "linear" );

	$( "#mountains" ).delay( 4000 ).animate({
	    marginTop: "-25%",
	}, 3000, "easeOutExpo");

	$('#sun').on("click", function(){

		$( "#sun" ).animate({
		    marginBottom: "-300px",
		}, 8000, "easeInSine" );

		$( "#sunset, #sun" ).animate({
		    opacity: 0.0,
		}, 7000 , "easeInCubic" );

		$( "#space" ).delay( 4000 ).animate({
		    opacity: 1.0,
		}, 10000, "easeInCubic" );

	});

});