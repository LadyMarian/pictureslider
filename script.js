const frame = document.getElementById("frame");
const left = document.getElementById("left");
const right = document.getElementById("right");
const random = document.getElementById("random");

const images = ["01.jpg", "02.jpg",	"03.jpg", "04.jpg",	"05.jpg",
			   	"06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg",
			   	"11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg",
			    "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg",
			   	"21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg",
			    "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg",
			   	"31.jpg", "32.jpg", "33.jpg", "34.jpg", "35.jpg",
			    "36.jpg", "37.jpg", "38.jpg", "39.jpg", "40.jpg",
			   	"41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg",
			    "46.jpg"];


let currentImage = Math.floor(Math.random() * images.length);

function setBackgroundOnPageLoad() {
	frame.style.backgroundImage = `url("img/${images[currentImage]}")`;	
}

function clickRight() {
	currentImage = currentImage + 1; 
	if (currentImage > (images.length - 1)) {
		currentImage = 0;
	}
	frame.style.backgroundImage = `url("img/${images[currentImage]}")`;
}

function clickLeft() {
	currentImage = currentImage - 1;
	if (currentImage < 0) {
		currentImage = images.length - 1;
	}
	frame.style.backgroundImage = `url("img/${images[currentImage]}")`;
}

function randomImage() {
	currentImage = Math.floor(Math.random() * images.length);
	frame.style.backgroundImage = `url("img/${images[currentImage]}")`;
}

left.addEventListener("click", clickLeft);
right.addEventListener("click", clickRight);
random.addEventListener("click", randomImage);
setBackgroundOnPageLoad();
