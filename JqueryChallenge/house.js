var colorOptions = $('li');

// var houseBody = $('.house-body')[0];

var houseBody = $('.house-body').first();

	colorOptions.click(function (event) {


	var $target = $(event.target);
	var houseColor = $target.attr('swatchColor');
	console.log(houseColor);

	houseBody.css('fill', houseColor);

	});