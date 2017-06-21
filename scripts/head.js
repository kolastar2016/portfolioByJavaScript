
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
    document.getElementById('textslide').firstElementChild.innerHTML = quotes[counter];
    counter++;
    setTimeout(loop, 900);
}

loop();

/*move slider img*/
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,1000);

function nextSlide() {
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
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

pauseButton.onclick = function() {
  if(playing) {
    pauseSlideshow();
  } else {
    playSlideshow();
  }
};