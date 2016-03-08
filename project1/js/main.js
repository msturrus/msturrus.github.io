window.onload = function () {
	// localStorage.getItem('intellect');
	// localStorage.getItem('cunning');
	// localStorage.getItem('acumen');
	$('#char-intellect').html("Intellect: " + localStorage.getItem('intellect'));
	$('#char-cunning').html("Cunning: " + localStorage.getItem('cunning'));
	$('#char-acumen').html("Acumen: " + localStorage.getItem('acumen'));
}

var doorCounter = 0;

// local variable stats (only relevant on charcreation.html)
var intellect = 0;
var cunning = 0;
var acumen = 0;

// Only relevant for hallgame.html --- Win conditions: Player will win if he selects all doors without
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

// Generates and displays random character stats
$('#roll-btn').click(function() {
	var intellectr = Math.floor(Math.random()* 100);
	var cunningr = Math.floor(Math.random()* 100);
	var acumenr = Math.floor(Math.random()* 100);
	$('#intellect').html("Intellect: " + intellectr);
	$('#cunning').html("Cunning: " + cunningr);
	$('#acumen').html("Acumen: " + acumenr);
	return intellect = intellectr, cunning = cunningr, acumen = acumenr;

})

// Stores latest roll as character stats
$('#comt-btn').click(function() {
	localStorage.setItem('intellect', intellect);
	localStorage.setItem('cunning', cunning);
	localStorage.setItem('acumen', acumen);
	$('#char-intellect').html("Intellect: " + intellect);
	$('#char-cunning').html("Cunning: " + cunning);
	$('#char-acumen').html("Acumen: " + acumen);
})

$('.scienceBox').click(function() {
	localStorage.setItem('specialty', 'science');
	// $('.rogueryBox').css('opacity', '.5');
	$('.rogueryBox').removeClass('rogueryBox');
	// $('.urban-combatBox').css('opacity', '.5');
	$('.urban-combatBox').removeClass('urban-combatBox');
})

$('.rogueryBox').click(function() {
	localStorage.setItem('specialty', 'roguery');
	// $('.scienceBox').css('opacity', '.5');
	$('.scienceBox').removeClass('scienceBox');
	// $('.urban-combatBox').css('opacity', '.5');
	$('.urban-combatBox').removeClass('urban-combatBox');
})

$('.urban-combat').click(function() {
	localStorage.setItem('specialty', 'urbanCombat');
	// $('.scienceBox').css('opacity', '.5');
	$('.scienceBox').removeClass('scienceBox');
	// $('.rogueryBox').css('opacity', '.5');
	$('.rogueryBox').removeClass('rogueryBox');
})

// Show's/hides character sheet
$('#charToggle').click(function() {
	$('.characterSheet').slideToggle();
})

// function handleDrop(e) {
//   // this/e.target is current target element.
//
//   if (e.stopPropagation) {
//     e.stopPropagation(); // Stops some browsers from redirecting.
//   }
//
//   // Don't do anything if dropping the same column we're dragging.
//   if (dragSrcEl != this) {
//     // Set the source column's HTML to the HTML of the column we dropped on.
//     dragSrcEl.innerHTML = this.innerHTML;
//     this.innerHTML = e.dataTransfer.getData('text/html');
//   }
//
//   return false;
// }
// $('html, body').on('click', '.centerheadstone', function() {
// 	$(this).remove();
// 	$('.headstones').removeClass("blurall");
// });
