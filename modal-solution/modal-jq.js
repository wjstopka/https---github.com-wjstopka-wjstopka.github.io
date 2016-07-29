var smallImages = $('img');


//With JQUERY, you no longer need to loop over the images.
//Assigning a click event to smallImages, assigns a click event
//to all images 
smallImages.click(function (event) {

//Creating elements with Jquery. Note how with JQuery we can assign a class
//to them at the same time we create them. 
	var modalOverlay = $('<div class="modalOverlay"></div>');
	var modalContainer = $('<div class="modalContainer"></div>');
	var largeImage = $('<img class="large">');

	//We can also set the inside text of the button 
	var closeButton = $('<button class="close">D:</button>');

	//Setting the src attribute on the new large image element
	//we created. Note: instead of target jQuery calls the property
	//currentTarget.
	largeImage.attr('src', event.currentTarget.src);

	closeButton.click(function () {	
		//removing the container and overlay. We no longer
		//have to remove the specifically from the body.
		modalContainer.remove();
		modalOverlay.remove();

	});

//Adding children (the image and button) to the modal Container
//Note that JQuery allows us to chain commands.
	modalContainer
		.append(largeImage)
		.append(closeButton);


//Adding the modal overlay and container to the body		

	$('body')
		.append(modalOverlay)
		.append(modalContainer);
});

