
'use strict'

let parallaxItems = document.querySelectorAll('[data-swiper-parallax-opacity]');

if (parallaxItems.length > 0) {
		for (let index = 0; index < parallaxItems.length; index++) {
			const parallaxItem = parallaxItems[index];
			parallaxItem.removeAttribute('data-swiper-parallax-opacity')
			parallaxItem.setAttribute('data-swiper-parallax-opacity', 1)
		}
}
