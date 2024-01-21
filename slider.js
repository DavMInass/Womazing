function prev() {
    document.getElementById('slider-container').scrollLeft -= 405;
}

function next() {
    document.getElementById('slider-container').scrollLeft += 420;
}
 
// Header Slider

let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

 // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}


  // Dream Team Womazing Slider

  let slideNaN = 1;
showDivs(slideNaN);

function plusDivs(n) {
  showDivs(slideNaN += n);
}



function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Slides");
  var y = document.getElementsByClassName("dot1");
  if (n > x.length) {slideNaN = 1}
  if (n < 1) {slideNaN = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < y.length; i++) {
    y[i].className = y[i].className.replace(" active1", "");
  }
  x[slideNaN-1].style.display = "block";  
  y[slideNaN-1].className += " active1";
}


function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("mySlidesSecond  ");
  let dots = document.getElementsById("dot1");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
 
}



 