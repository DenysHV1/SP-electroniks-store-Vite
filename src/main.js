// import { itemsSlider } from './js/array-slider-pictures';
const swiperWrapper = document.querySelector('.swiper-wrapper');

import path1xSlider1 from "./img/slider-1-1x.jpg"
import path2xSlider1 from "./img/slider-1-2x.jpg"
import path1xSlider2 from "./img/slider-2-1x.jpg"
import path2xSlider2 from "./img/slider-2-2x.jpg"
import path1xSlider3 from "./img/slider-3-1x.jpg"
import path2xSlider3 from "./img/slider-3-2x.jpg"
import path1xSlider4 from "./img/slider-4-1x.jpg"
import path2xSlider4 from "./img/slider-4-2x.jpg"
import path1xSlider5 from "./img/slider-5-1x.jpg"
import path2xSlider5 from "./img/slider-5-2x.jpg"

const itemsSlider = [
	{
		hash: 'slider1',
		src1: path1xSlider1,
		pathImg: path2xSlider1,
		alt: 'slider1'
	},
	{
		hash: 'slider2',
		src1: path1xSlider2,
		pathImg: path2xSlider2,
		alt: 'slider2'
	},
	{
		hash: 'slider3',
		src1: path1xSlider3,
		pathImg: path2xSlider3,
		alt: 'slider3'
	},
	{
		hash: 'slider4',
		src1: path1xSlider4,
		pathImg: path2xSlider4,
		alt: 'slider4'
	},
	{
		hash: 'slider5',
		src1: path1xSlider5,
		pathImg: path2xSlider5,
		alt: 'slider4'
	},
]


console.log(itemsSlider);

const sliderMarkup = itemsSlider.map(
  ({
    src1,
    pathImg,
    alt,
    hash,
  }) => `<div data-hash = "${hash}"class="swiper-slide">
  <img
srcset="
  ${src1} 1x,
  ${pathImg} 2x
"
src="${pathImg}"
alt="${alt}"
class="swiper__img"
/>
</div>`
);
swiperWrapper.insertAdjacentHTML('afterbegin', sliderMarkup);
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    type: 'bullets',
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  hashNavigation: {
    watchState: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  autoHeight: true,
  loop: true,
//   autoplay: {
//     delay: 3000,
//     stopOnLastSlide: false,
//     disableOnInteraction: false,
//   },
  speed: 800,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});