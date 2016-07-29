var getImages = document.getElementsByTagName('img');

for (var index = 0; index < getImages.length; index++) {

	getImages[index].addEventListener("click", function (event) {

		if (event.target.className == "pokemon") {

			event.target.setAttribute("src", "http://www.wcscdist.com/ecom_img/original-3504-6207-pokemonlogo.jpg");
		
		} else {


			event.target.setAttribute("src", "http://orig03.deviantart.net/a14a/f/2014/072/c/9/person_icon_by_topfreetemplates-d7a0tf1.gif");
		}

	});

}
