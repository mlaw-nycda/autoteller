var saiyans = [
	'gohan.png',
	'goku.jpg',
	'nappa.png',
	'vegeta.jpg',
	'trunks.jpg'
]

var gallery = document.getElementById('gallery');

var count = 0;
for (thisItem in saiyans) {
	// print img tag
	// set img src = "images/" + saiyans[count]
	var newImage = document.createElement('img');
	newImage.src = "images/" + saiyans[count];
	newImage.classList.add("responsive");
	newImage.classList.add("image-container");
	gallery.appendChild(newImage);
	count = count + 1;
}
