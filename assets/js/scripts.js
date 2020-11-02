// bootstrap
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();   
});

// transparent navbar which change opacity when scrolled
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

function displayprog(imgs) {
  // Get the expanded image
  var expandImg1 = document.getElementById("expandedImg1");
  // Get the image text
  var imgText1 = document.getElementById("imgtext1");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg1.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText1.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg1.parentElement.style.display = "block";
}


function displayphotography(imgs) {
  // Get the expanded image
  var expandImg2 = document.getElementById("expandedImg2");
  // Get the image text
  var imgText2 = document.getElementById("imgtext2");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg2.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText2.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg2.parentElement.style.display = "block";
}

function animateonscroll(){
  AOS.init();
}
