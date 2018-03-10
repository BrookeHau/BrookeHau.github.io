//change font size of navigation bar items
/*var navList = document.querySelectorAll('nav ul li a')
navList.forEach(function(list){
	list.addEventListener('mouseover', function(){
	list.style.fontSize = '25px';
	})
});

var navList = document.querySelectorAll('nav ul li a')
navList.forEach(function(list){
	list.addEventListener('mouseout', function(){
	list.style.fontSize = '16px';
	})
});*/

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

//change footer font size when you hover
var footer = document.querySelector('footer a')
	footer.addEventListener('mouseover', function(){
	footer.style.fontSize = '25px';
	});

var footer = document.querySelector('footer a')
	footer.addEventListener('mouseout', function(){
	footer.style.fontSize = '16px';
	});

//change portfolio hover properties
var portlink = document.querySelector('.virtualpet a');
portlink.addEventListener('mouseover', function(){
	portlink.style.color = 'darkseagreen';
});

var portlink = document.querySelector('.virtualpet a');
portlink.addEventListener('mouseout', function(){
	portlink.style.color = 'indianRed';
});


var portlink2 = document.querySelector('.reviewsite a');
portlink2.addEventListener('mouseover', function(){
	portlink2.style.color = 'darkseagreen';
});

var portlink2 = document.querySelector('.reviewsite a');
portlink2.addEventListener('mouseout', function(){
	portlink2.style.color = 'indianRed';
});


var portlink3 = document.querySelector('.blog a');
portlink3.addEventListener('mouseover', function(){
	portlink3.style.color = 'darkseagreen';
});

var portlink3 = document.querySelector('.blog a');
portlink3.addEventListener('mouseout', function(){
	portlink3.style.color = 'indianRed';
});

var portlink4 = document.querySelector('.fullstacksite a');
portlink4.addEventListener('mouseover', function(){
	portlink4.style.color = 'darkseagreen';
});

var portlink4 = document.querySelector('.fullstacksite a');
portlink4.addEventListener('mouseout', function(){
	portlink4.style.color = 'indianRed';
});

//expand and collapse text
var text = document.querySelector('.collapseText');
var expandButton = document.querySelector('.expandButton');
var skills = document.querySelector('.skills');

expandButton.addEventListener('click', function(){
	if(text.style.display === 'block'){
		text.style.display = 'none';
	} else {
		text.style.display = 'block';
skills.replace("Skills", "Less");
	}
})