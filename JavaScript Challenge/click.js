var getCandy = document.getElementsByTagName("h1")[0];

var candyButton = document.getElementsByTagName("button")[0];

candyButton.addEventListener("click", function () {
	getCandy.className = "red";
	getCandy.textContent = "No Candy For You!";

})