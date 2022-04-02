
'use strict'

let header = document.querySelector('.header');

let wrapper = document.querySelector('.wrapper');

let body = document.querySelector('.body');

let page = document.querySelector('.page');

let pageSlider = null;

let SliderDestroyBool = false;

const animItems = document.querySelectorAll('._anim-items');

const anchors = document.querySelectorAll('a[href*="#"]')



window.addEventListener("DOMMouseScroll", function (e) {

	let breakpoint = 1112;

	if (window.innerWidth <= breakpoint) {
		wrapper.classList.add('_loaded');
		page.classList.add('_mobile');
		wrapper.classList.add('_mobile');
		SliderDestroy();
		animation();
		SliderDestroyBool = true;
		menuSliderMobile();
		
	} else {
		page.classList.remove('_mobile');
		wrapper.classList.remove('_mobile');
		SliderInit();
		SliderDestroyBool = false;
		pageSlider.init();
	}
});


window.addEventListener("resize", function (e) {

	let breakpoint = 1112;

	if (window.innerWidth <= breakpoint) {
		wrapper.classList.add('_loaded');
		page.classList.add('_mobile');
		wrapper.classList.add('_mobile');
		header.classList.add('_mobile');
		MobileHeader();
		arrowRemove();
		SliderDestroy();
		SliderDestroyBool = true;
		animation();
	} else {
		page.classList.remove('_mobile');
		wrapper.classList.remove('_mobile');
		header.classList.remove('_mobile');
		arrowAdd();
		SliderInit();
		SliderDestroyBool = false;
		pageSlider.init();
	}

	if (window.innerWidth == breakpoint) {
		location.reload();
	}
});

document.addEventListener("DOMContentLoaded", function (e) {

	let breakpoint = 1112;

	if (window.innerWidth <= breakpoint) {
		wrapper.classList.add('_loaded');
		page.classList.add('_mobile');
		wrapper.classList.add('_mobile');
		header.classList.add('_mobile');
		MobileHeader()
		arrowRemove();
		SliderDestroy();
		animation();
		SliderDestroyBool = true;

	} else {
		page.classList.remove('_mobile');
		wrapper.classList.remove('_mobile');
		header.classList.remove('_mobile');
		arrowAdd();
		SliderInit();
		SliderDestroyBool = false;
		pageSlider.init();
	}
});




function SliderInit () {
  if (pageSlider == null) {

	pageSlider = new Swiper('.page', {


	wrapperClass: "page__wrapper",
	slideClass: "page__screen",

	direction: "vertical",

	slidesPerView: "auto",

	simulateTouch: false,

	// freeMode: true,

	touchRatio: 0.55,

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
			arrowSlider();

			setScrollType();

			wrapper.classList.add('_loaded');

			if (pageSlider.realIndex >= 1) {
				header.classList.add('_active');
			} else {
				header.classList.remove('_active');
			}
		},

		slideChange: function () {
			menuSliderRemove();
			slideArrowsRemove();
			if (pageSlider.realIndex == 0) {
				menuLinks[pageSlider.realIndex].classList.remove('_active');
			} else {
				menuLinks[(pageSlider.realIndex) - 1].classList.add('_active');
			}

			if (pageSlider.realIndex >= 1) {
				header.classList.add('_active');
			} else {
				header.classList.remove('_active');
			}
		
		},

		resize: function() {
			setScrollType();
		}
	},

	});

	

}
}

function SliderDestroy () {
  if (pageSlider) {
    pageSlider.destroy();

    pageSlider = null;
  }
}

function MobileHeader() {
	
	for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    menuSliderRemoveMobile();
		anchor.classList.add('_active52');
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


}

let arrows = document.querySelectorAll('.arrow');


function arrowAdd() {
	if (arrows.length > 0) {
		for (let index = 0; index < menuLinks.length; index++) {
			const arrow = arrows[index];
			arrow.classList.remove('_remove');
		}
	}
}

function arrowRemove() {
	if (arrows.length > 0) {
		for (let index = 0; index < menuLinks.length; index++) {
			const arrow = arrows[index];
			arrow.classList.add('_remove');
		}
	}
}



let menuLinks = document.querySelectorAll('.header__item');

let sectionArray = document.querySelectorAll('._anim-items');

function menuSlider() {
	if (menuLinks.length > 0) {
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

function menuSliderMobile() {
	if (sectionArray.length > 0) {
				for (let index = 0; index < menuLinks.length; index++) {
					for (let index = 0; index < sectionArray.length; index++) {
						const menuLink = menuLinks[index];
						const section = sectionArray[index];

						if (section.classList.contains('_active52')) {
								menuSliderRemoveMobile();
								menuLink.classList.add('_active52');
								}
							}
			}
	}
	}
// }




function menuNoSlider() {
	if (menuLinks.length > 0) {
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function (e) {
				e.preventDefault();
			});
		}
	}
}






let slideArrows = document.querySelectorAll('.swiper-arrow');

function arrowSlider() {
	if (slideArrows.length > 0) {
		for (let index = 0; index < slideArrows.length; index++) {
			const slideArrow = slideArrows[index];
			slideArrow.addEventListener("click", function (e) {
				slideArrowsRemove();
				pageSlider.slideTo((index + 1), 800);
				slideArrow.classList.add('_active');
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

function menuSliderRemoveMobile() {
	let menuLinkActive = document.querySelector(".header__item._active52");

	if (menuLinkActive) {
		menuLinkActive.classList.remove('_active52');
	}
}


function slideArrowsRemove() {
	let slideArrowActive = document.querySelector(".swiper-arrow._active");

	if (slideArrowActive) {
		slideArrowActive.classList.remove('_active');
	}
}

function setScrollType() {

	if (wrapper.classList.contains('_free')) {
		wrapper.classList.remove('_free');
		pageSlider.params.freeMode = false;
	}

		if (window.innerHeight <= 680) {
			wrapper.classList.add('_free');
			pageSlider.params.freeMode = true;
			// SliderDestroy();
		}
}




function animation() {

		setTimeout(function() {

      if (animItems.length > 0) {
        function animOnScroll(params) {
          for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 10;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
              animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
              animItem.classList.add('_active52')
            } else {
              
                animItem.classList.remove('_active52');
              

            }
          }
       	}
      

        function offset(el) {
          const rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return {top: rect.top + scrollTop, left: rect.left + scrollLeft }
        }
        setTimeout(() => {
          animOnScroll();
        }, 300);

}
  
}, 200);





}

