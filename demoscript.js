$(document).ready(function() {

	$( "body" ).animate({
		    opacity: 1.0,
		}, 4000, "easeInQuint" );

	$( "#sun" ).fadeIn(6000, "easeInSine" );

	$( "#mountains" ).delay( 4000 ).animate({
	    marginTop: "-25%",
	}, 3000, "easeOutExpo");

	$( "#clickTheSun" ).delay( 6500 ).animate({
	    opacity: 0.5,
	    letterSpacing: '10px',
	    marginLeft: "-15%",
	}, 2000 , "easeOutBack" );

	$('#sun').on("click", function(){

		$( "#clickTheSun" ).animate({
		    marginBottom: "-300px",
		}, 1000, "easeInBack" );

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