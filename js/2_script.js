$(document).scroll(function(){

	var y = $(document).scrollTop();
	$("#update").html(y);

	if (y > 200){
		$("#one").fadeIn();

	}

	else {
		$("#one").fadeOut();
	}

	if (y > 400 && y < 800) {
		$("#two").fadeIn();
	}

	else {
		$("#two").fadeOut();
	}



});