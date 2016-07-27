var previousBtn = document.getElementById("prev");
var	nextBtn = document.getElementById("next");
var imageContainerList = document.getElementsByTagName("li");
var selectedIndex = 0;

var selectedContainer = imageContainerList[selectedIndex];

console.log(previousBtn);
console.log(nextBtn);
console.log(imageContainerList);

previousBtn.addEventListener("click", function () {
	console.log("click event for previous button");

	if (selectedIndex == 0) {
		selectedIndex = imageContainerList.length-1;
	}else{
		selectedIndex = selectedIndex - 1;
}
	selectedContainer.className = "";
	selectedContainer = imageContainerList[selectedIndex];
	selectedContainer.className = "selected";
});

nextBtn.addEventListener("click", function() {
	console.log("click event for next button");

	if (selectedIndex == (imageContainerList.length-1)) {
		selectedIndex = 0;
	}else{
		selectedIndex = selectedIndex + 1;

	}
	selectedContainer.className = "";
	selectedContainer = imageContainerList[selectedIndex];
	selectedContainer.className = "selected";

});

