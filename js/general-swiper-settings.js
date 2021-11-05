
let pageSlider = new Swiper('.page', {

	wrapperClass: "page__wrapper",
	slideClass: "page__screen",

	direction: "vertical",

	slidesPerView: "auto",

	parallax: true,

	keyboard: {

		enabled: true,

		onlyInViewport: true,

		pageUpDown: true,
	},

	mousewheel: {

		sensitivity: 1,

	},

	watchOverflow: true,

	speed: 800,

	observer: true,

	observeParents: true,

	observeSlideChildren: true,

	scrollbar: {

		el: ".page__scroll",

		dragClass: "page__drag-scroll",

		draggable: true,

	},

	init: false,

	on: {
		init: function () {
			menuSlider();
		},

		slideChange: function () {
			menuSliderRemove();
			if (pageSlider.realIndex == 0) {
				menuLinks[pageSlider.realIndex].classList.remove('_active');
			} else {
				menuLinks[(pageSlider.realIndex) - 1].classList.add('_active');
			}
		
		}
	}

})


let menuLinks = document.querySelectorAll('.header__item');

function menuSlider() {
	if (menuLinks.length > 0) {
		// menuLinks[(pageSlider.realIndex) + 1].classList.add('_active');
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function (e) {
				menuSliderRemove();
				pageSlider.slideTo((index + 1), 800);
				menuLink.classList.add('_active');
				e.preventDefault();
			});
		}
	}
}

function menuSliderRemove() {
	let menuLinkActive = document.querySelector(".header__item._active");

	if (menuLinkActive) {
		menuLinkActive.classList.remove('_active');
	}
}

pageSlider.init();