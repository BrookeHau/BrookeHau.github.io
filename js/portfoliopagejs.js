//change font size of navigation bar items
var navList = document.querySelectorAll('nav ul li a')
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
});

/*var navList = document.querySelectorAll('nav ul li a')
navList.forEach(function(list){
	if(list.addEventListener('mouseover')){function(){
	list.style.opacity = 1;
	}} else{
		list.style.opacity=.5;
	}

});*/

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