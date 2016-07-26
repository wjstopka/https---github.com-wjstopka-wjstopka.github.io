var pageHeader = document.getElementById("mainHeader");
pageHeader.textContent = "javascript sports water";

var sandwichImagesElems = document.getElementsByClassName("sandwichpic");
console.log(sandwichImagesElems);

var myButtons = document.getElementsByTagName("button");
console.log(myButtons);

myButtons[0].addEventListener("click", function () {
	
	sandwichImagesElems[0].src = "https://wswdelivery.com/wp-content/uploads/2015/05/gatorade-variety-550x515.jpg"
	sandwichImagesElems[1].src = "http://cdn.bulbagarden.net/upload/thumb/c/ca/092Gastly.png/250px-092Gastly.png"
	// alert("Ghastly likes Gatorade");

});

myButtons[1].addEventListener("click", function () {
	var myImages = document.getElementsByTagName("img");
	myImages[0].className = "juice";
	myImages[1].className = "juice";
});


myButtons[1,0].addEventListener("click", function() {
	
var myJuice = document.getElementsByClassName("juice");
	myJuice[0].src = "https://wswdelivery.com/wp-content/uploads/2015/05/gatorade-variety-550x515.jpg"
	myJuice[1].src ="http://cdn.bulbagarden.net/upload/thumb/c/ca/092Gastly.png/250px-092Gastly.png"

	
})