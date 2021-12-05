
let body2 = document.querySelector('body');

let headerMenu = document.querySelector('.header__menu');

let headerBurger = document.querySelector('.header__burger');

headerBurger.addEventListener("click", function() {
  headerMenu.classList.toggle('_active');
  headerBurger.classList.toggle('_active');
  body2.classList.toggle('_lock');
});


// 'use strict'


// let header = document.querySelector('header');
// let headerHeight = header.offsetHeight;
// let fullscreen = document.getElementById('fullscreen');
// let fullscreenHeight = fullscreen.offsetHeight;
// let scrollPosition = window.pageYOffset;

// window.addEventListener("load", function() {
// scrollPosition = this.pageYOffset;

// if (scrollPosition >= headerHeight) {
// 	header.classList.add('_active');
// } else {
// 	header.classList.remove('_active');
// }

// if (header.classList.contains('_active') == false) {
// 	header.classList.add('_begin');
// } else {
// 	header.classList.remove('_begin');
// }

// if (scrollPosition >= fullscreenHeight) {
// 	header.classList.add('_fixed');
// } else {
// 	header.classList.remove('_fixed');
// }

// });

// window.addEventListener("scroll", function() {
// scrollPosition = this.pageYOffset;

// if (scrollPosition >= headerHeight) {
// 	header.classList.add('_active');
// } else {
// 	header.classList.remove('_active');
// }

// if (header.classList.contains('_active') == false) {
// 	header.classList.add('_begin');
// } else {
// 	header.classList.remove('_begin');
// }

// if (scrollPosition >= fullscreenHeight) {
// 	header.classList.add('_fixed');
// } else {
// 	header.classList.remove('_fixed');
// }

// });





