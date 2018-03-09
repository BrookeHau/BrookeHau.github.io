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


//alert that you're heading to my blog when you click on the link
var blogLink = document.querySelector('#recipe-slider li a');
blogLink.onclick = function(){
		alert("You are now heading to my personal blog!")
}

var blogLink2 = document.querySelector('.life a');
blogLink2.onclick = function(){
		alert("You are now heading to my personal blog!")
}

var blogLink3 = document.querySelector('.wellness a');
blogLink3.onclick = function(){
	alert("You are now heading to my personal blog!");

}

//initial popup window to welcome you to my blog
window.alert("Welcome to my Portfolio!");

//popup window
 var modal = document.querySelector(".modal");
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