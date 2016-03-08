var doorCounter = 0;


$('.doors:not(.rightDoor)').on('click', function() {
	self = this;
	if (doorCounter === 20){
		var youWin = $('<div>You Win!</div>');
		$(self).addClass("lastDoor");
		$(youWin).addClass('gotCaught');
		$('body').append(youWin);
	} else if (Math.floor(Math.random()* 5) === 1){
		var gotCaught = $('<div>Ya got caught, son!</div>');
		$(self).addClass("wrongDoor");
		$(gotCaught).addClass('gotCaught');
		$('body').append(gotCaught);
		$('main').addClass('preposterous');
	}
		else {
		$(self).addClass('rightDoor');
		doorCounter++;
	}


});

$('html, body').on('click', '.centerheadstone', function() {
	$(this).remove();
	$('.headstones').removeClass("blurall");
});
