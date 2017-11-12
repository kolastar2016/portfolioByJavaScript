
/* text move*/
var quotes = new Array();

quotes[0] = "Hello !!!";
quotes[1] = "Do";
quotes[2] = "You";
quotes[3] = "Like";
quotes[4] = "My";
quotes[5] = "Site ?";

var counter = 0;
  function loop() {
    if (counter > 5) counter = 0;
    document.getElementById('textslide').innerHTML = quotes[counter];
    counter++;
    setTimeout(loop, 900);
}

loop();

/*
//Slide image
var myIndex = 0;
function slidesImg(){
	var x = document.getElementsByClassName("slide");
	for ( var i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {
		myIndex = 1
	}    
    x[myIndex-1].style.display = "block";  
    setTimeout(slidesImg, 2000); // Change image every 2 seconds
}
slidesImg();
*/

/*move slider img*/
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,1000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow() {
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow() {
  pauseButton.innerHTML = 'Pause';
  playing = true;
  slideInterval = setInterval(nextSlide,1000);
}
