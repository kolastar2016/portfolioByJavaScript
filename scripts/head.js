/* text move*/
var quotes = new Array();
quotes[0] = 'Hello !!!';
quotes[1] = 'Do';
quotes[2] = 'You';
quotes[3] = 'Like';
quotes[4] = 'My';
quotes[5] = 'Site ?';
var counter = 0;
 function slideQuotes() {
  if (counter > 5) {
    counter = 0;
  }
  document.getElementById('textSlide').innerHTML = quotes[counter];
  counter++;
  setTimeout(slideQuotes, 900);
}
slideQuotes();

//Slide image
var myIndex = 0;
function slidesImg(){
	var x = document.getElementsByClassName('slide');
	for ( var i = 0; i < x.length; i++) {
		  x[i].style.display = 'none';  
    }
    myIndex++;
    if (myIndex > x.length) {
		  myIndex = 1
    }    
    x[myIndex-1].style.display = 'block';  
    setTimeout(slidesImg, 2000); // Change image every 2 seconds
}
slidesImg();
