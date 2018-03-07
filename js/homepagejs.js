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

var imageHover = document.querySelectorAll('img')
imageHover.forEach(function(image){
	image.addEventListener('mouseover', function(){
		image.style.fadeOut(0.1);
	})
});

var footer = document.querySelector('footer a')
	footer.addEventListener('mouseover', function(){
	footer.style.fontSize = '25px';
	});

var footer = document.querySelector('footer a')
	footer.addEventListener('mouseout', function(){
	footer.style.fontSize = '16px';
	});


var blogLink = document.querySelector('.recipes a');
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

window.alert("Welcome to my Portfolio!");

