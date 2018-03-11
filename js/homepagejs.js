//change nav Element display
const navElems = document.querySelectorAll('nav ul li');

navElems.forEach(function(navElem) {
  navElem.addEventListener('mouseover', function() {
    navElems.forEach(function(navElem) {
      navElem.classList.remove('active')
    })
    this.classList.add('active');
    navElems.forEach(function(navElem) {
      if (!navElem.classList.contains('active')) {
        navElem.style.opacity = '0.5'
      }
    })
  })
  navElem.addEventListener('mouseout', function() {
    navElems.forEach(function(navElem) {
      navElem.style.opacity = '1';
    })
  })
})

//change opacity of link sections when you hover
var imageHover = document.querySelectorAll('.recipes')
imageHover.forEach(function(image){
	image.addEventListener('mouseover', function(){
		image.style.opacity = 0.4;
	})
});

var imageHover = document.querySelectorAll('.recipes')
imageHover.forEach(function(image){
	image.addEventListener('mouseout', function(){
		image.style.opacity = 1;
	})
});

var imageHover = document.querySelectorAll('.life')
imageHover.forEach(function(image){
	image.addEventListener('mouseover', function(){
		image.style.opacity = 0.4;
	})
});

var imageHover = document.querySelectorAll('.life')
imageHover.forEach(function(image){
	image.addEventListener('mouseout', function(){
		image.style.opacity = 1;
	})
});

var imageHover = document.querySelectorAll('.wellness')
imageHover.forEach(function(image){
	image.addEventListener('mouseover', function(){
		image.style.opacity = 0.4;
	})
});

var imageHover = document.querySelectorAll('.wellness')
imageHover.forEach(function(image){
	image.addEventListener('mouseout', function(){
		image.style.opacity = 1;
	})
});

//change footer font size when you hover
var footer = document.querySelector('footer a')
	footer.addEventListener('mouseover', function(){
	footer.style.fontSize = '25px';
	});

var footer = document.querySelector('footer a')
	footer.addEventListener('mouseout', function(){
	footer.style.fontSize = '16px';
	});



//popup window
 let modal = document.querySelector(".modal");
    var trigger = document.querySelector(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);

    //contact dropdown menu
  let button = document.querySelector('.contact-menu');
	let menu = document.querySelector("#menu");

    button.addEventListener('click', function(){
    	if(menu.style.display === 'block'){
    		menu.style.display = 'none';
    	} else {
    		menu.style.display = 'block';
    	}
    })

  //see more content collapsible button
  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
