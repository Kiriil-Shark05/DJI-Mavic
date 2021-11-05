new Swiper('.swiper-container', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	autoHeight: true,

	slidesPerView: 1,

	speed: 700,

	// spaceBetween: 300,

	centeredSlides: true,

	loop: true,

	effect: 'fade',

	fadeEffect: {
		crossFade: true
	},

});