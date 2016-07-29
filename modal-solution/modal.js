var smallImages = document.getElementsByTagName("img");
console.log(smallImages);


//tell the loop where to begin, which is zero index
//tell the loop how long to run as many times as there are list items (smallImages.length)
//increment the index so it will move through the array, up 1 each time
for (var index = 0; index < smallImages.length; index++) {
	smallImages[index].addEventListener("click", function (event) {
		console.log(event);
		var modalOverlay = document.createElement("div");
		var modalContainer = document.createElement("div");
		var largeImage = document.createElement("img");
		var closeButton = document.createElement("button");
		
		modalOverlay.className = "modalOverlay";
		modalContainer.className = "modalContainer";
		largeImage.className = "large";
		closeButton.className = "close";
		closeButton.textContent = "D:";

		closeButton.addEventListener("click", function(){
			document.body.removeChild(modalOverlay);
			document.body.removeChild(modalContainer);
		});

		largeImage.src = event.target.src;

		modalContainer.appendChild(largeImage);
		modalContainer.appendChild(closeButton);
		document.body.appendChild(modalOverlay);
		document.body.appendChild(modalContainer);
		

	});
}

//stating point
//how long to run
//increment up so it can keep going