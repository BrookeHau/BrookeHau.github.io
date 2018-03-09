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


//hover over resume
var involvementHover = document.querySelectorAll('.mainbullet a');
involvementHover.forEach(function(item){
	item.addEventListener('mouseover', function(){
		item.style.color = 'darkseagreen';
	})
});

var involvementHover = document.querySelectorAll('.mainbullet a');
involvementHover.forEach(function(item){
	item.addEventListener('mouseout', function(){
		item.style.color = 'black';
	})
});