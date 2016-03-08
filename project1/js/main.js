
$('.doors:not(.rightDoor)').on('click', function() {
	$(this).addClass("rightDoor");


});

$('html, body').on('click', '.centerheadstone', function() {
	$(this).remove();
	$('.headstones').removeClass("blurall");
});
