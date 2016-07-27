
// Grab the element with an ID of main header and store it in a 
// variable called mainHeader
var mainHeader = document.getElementById("mainHeader");


// //on page load this changes the text of the main header to
// "Javascript Sports Water"
mainHeader.textContent = "Javascript Sports Water";


// Get all elements with the class name of sandwichpic and store them in a variable called
// sandwichPicElems
var sandwichPicElems = document.getElementsByClassName("sandwichpic");
console.log(sandwichPicElems);


// Get all elements with the tag of button
var myButtons = document.getElementsByTagName("button");
console.log(myButtons);


// Add a click event listener to the first button

myButtons[0].addEventListener ("click", function () {
	// the code within this function creates an alert and changes
	// the text of the first button
	alert("haha that tickles!");
	myButtons[0].textContent = "haha that tickles";
});

// Store the second button in a variable called secondButton
var secondButton = myButtons[1];


// Add an event listener to the button which runs the code your specify on click.
secondButton.addEventListener ("click", function () {

	// Add the class "rec-border" to each picture on click.
	sandwichPicElems[0].className += " red-border";
	sandwichPicElems[1].className += " red-border";

});