//change opacity of nav elements
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
