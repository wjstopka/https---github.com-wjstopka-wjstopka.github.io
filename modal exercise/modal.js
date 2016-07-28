var smallImages = document.getElementsByTagName("img");

for (var index = 0; index < smallImages.length; index++) {
	smallImages[index].addEventListener("click", function (event) {
		console.log(event)
		// create modal elements
		var modalOverlay = document.createElement("div");
		var modalContainer = document.createElement("div");
		var largeImage = document.createElement("img");
		var closeButton = document.createElement("button");

		// assign class names to elements
		modalOverlay.className = "modalOverlay";
		modalContainer.className = "modalContainer";
		largeImage.className = "large";
		closeButton.className = "close";

		closeButton.textContent = "X";

		closeButton.addEventListener("click", function() {
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