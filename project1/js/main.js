window.onload = function () {
	// localStorage.getItem('intellect');
	// localStorage.getItem('cunning');
	// localStorage.getItem('acumen');
	$('#char-intellect').html("Intellect: " + localStorage.getItem('intellect'));
	$('#char-cunning').html("Cunning: " + localStorage.getItem('cunning'));
	$('#char-acumen').html("Acumen: " + localStorage.getItem('acumen'));
}

var doorCounter = 0;
var intellect = 0;
var cunning = 0;
var acumen = 0;

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

$('#roll-btn').click(function() {
	var intellectr = Math.floor(Math.random()* 100);
	var cunningr = Math.floor(Math.random()* 100);
	var acumenr = Math.floor(Math.random()* 100);
	$('#intellect').html("Intellect: " + intellectr);
	$('#cunning').html("Cunning: " + cunningr);
	$('#acumen').html("Acumen: " + acumenr);
	return intellect = intellectr, cunning = cunningr, acumen = acumenr;

})
$('#comt-btn').click(function() {
	localStorage.setItem('intellect', intellect);
	localStorage.setItem('cunning', cunning);
	localStorage.setItem('acumen', acumen);
	$('#char-intellect').html("Intellect: " + intellect);
	$('#char-cunning').html("Cunning: " + cunning);
	$('#char-acumen').html("Acumen: " + acumen);
})

$('#charToggle').click(function() {
	$('.characterSheet').slideToggle();
})
// $('html, body').on('click', '.centerheadstone', function() {
// 	$(this).remove();
// 	$('.headstones').removeClass("blurall");
// });
