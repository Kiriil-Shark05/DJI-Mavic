'use strict'


let header = document.querySelector('header');
let fullscreen = document.getElementById('fullscreen');
let fullscreenHeight = fullscreen.offsetHeight;
let scrollPosition = window.pageYOffset;

window.addEventListener("load", function() {
scrollPosition = this.pageYOffset;

if (scrollPosition >= fullscreenHeight) {
	header.classList.add('_active')
} else {
	header.classList.remove('_active')
}

});

window.addEventListener("scroll", function() {
scrollPosition = this.pageYOffset;

if (scrollPosition >= fullscreenHeight) {
	header.classList.add('_active')
} else {
	header.classList.remove('_active')
}

});





