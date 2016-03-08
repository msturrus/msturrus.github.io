var doorCounter = 0;

// Win conditions: Player will win if he selects all doors without
// triggering an alert || Player has 1/15 chance of winning per door
// checked.

// Lose conditions:  Player has 1/20 chance of tripping an alert
// per door checked.
$('.doors').on('click', function() {
	console.log(this);
	self = this;
	if (doorCounter === 20){
		var youWin = $('<div>You found the capsule!</div>');
		$(self).addClass("lastDoor");
		$(youWin).addClass('gotCaught');
		$('body').append(youWin);
	} else if (Math.floor(Math.random()* 20) === 1){
		var gotCaught = $('<div>Ya got caught, son!</div>');
		$(self).addClass("wrongDoor");
		$(gotCaught).addClass('gotCaught');
		$('body').append(gotCaught);
		setTimeout($('main').addClass('preposterous'), 5000);
	} else if (Math.floor(Math.random()* 15) === 1){
		var youWin = $('<div>You found the capsule!</div>');
		$(self).addClass("lastDoor");
		$(youWin).addClass('gotCaught');
		$('body').append(youWin);
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
