
//First get all the elements we need via jquery.


var button = $('button').first();
var headline = $('.headline').first();

var body = $('body').first();
var container = $('.container').first();

//Get the two image containers. Note, the water container is initially being hidden using CSS. 
var firePokemonContainer = $('.pokemon-fire').first();
var waterPokemonContainer = $('.pokemon-water').first();


//Set a click event to the button
button.click(function () {

	//Create an if statement that checks to see which class is on the body. 

	if (body.attr("class") == "fire") {

		//if the body has a class of fire, do this on click: 

		headline.text('Water Pokemon');
		button.text('Show My Fire Pokemon');


		//Change border color of the container 
		container.css({'border': '5px solid #4ff5ff'});

		//set the button class to fire (becuase we want it to be red)
		button.attr('class', 'fire');

		//set the body class to water (because we want to use the water theme) Note, the classes fire and water are being used on both the body and the buttons
		body.attr('class', 'water');

	} else {

		//What happens when the class does not equal fire. In this case, this will be what happens when the body class is equal to water. 

		headline.text('Fire Pokemon');
		button.text('Show My Water Pokemon');

		container.css({'border': '5px solid #e54c54'});

		button.attr('class', 'water');
		body.attr('class', 'fire');


	}

	//Toggle is a  jquery function that toggles between show and hide and always does the opposite. Here when we use toggle on the water container, it will initially show it and when we use it on the fire container, it will hide it.
	waterPokemonContainer.toggle();
	firePokemonContainer.toggle();

});
