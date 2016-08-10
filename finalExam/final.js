var waterBtn = document.getElementById('water');
var monType = document.getElementsByTagName('img');
var pageHeader = document.getElementById('mainHead');
var pageColor = document.getElementById('page')
console.log(waterBtn);
console.log(monType);
console.log(pageHeader);


waterBtn.addEventListener('click', function() {

	console.log('click event for water button');

	if (monType.className = 'fire') {

	pageHeader.textContent = 'Water Pokemon';

		monType[0].src = "https://s-media-cache-ak0.pinimg.com/236x/ee/12/bb/ee12bbd9397285af4f988655864fdba2.jpg"
		monType[1].src = "http://fanaru.com/pokemon/image/118746-pokemon-palpitoad.png"
		monType[2].src = "http://vignette3.wikia.nocookie.net/pokemon/images/7/78/194Wooper.png/revision/latest/scale-to-width-down/200?cb=20140329014021"



	}

});


