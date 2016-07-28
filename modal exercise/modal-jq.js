var smallImages = $("img");

smallImages.click(function (event) {
	var modalOverlay = $('<div class="modalOverlay"></div');
	var modalContainer = $('<div class="modalContainer"></div');
	var largeImage = $('<img class="large">');
	var closeButton = $('<button class="close">X</button>');

	largeImage.attr('src', event.currentTarget.src);

	closeButton.click(function (){
		modalOverlay.remove();
		modalContainer.remove();

	});

	modalContainer
		.append(largeImage)
		.append(closeButton);

	$('body')
		.append(modalOverlay)
		.append(modalContainer);
});


