// import { itemsSlider } from './js/array-slider-pictures';
const itemsSlider = [
		{
			hash: 'slider1',
			src1: "./img/slider-1-1x.jpg",
			src2: "./img/slider-1-2x.jpg",
			alt: 'slider1'
		},
		{
			hash: 'slider2',
			src1: "./img/slider-2-1x.jpg",
			src2: "./img/slider-2-2x.jpg",
			alt: 'slider2'
		},
		{
			hash: 'slider3',
			src1: "./img/slider-3-1x.jpg",
			src2: "./img/slider-3-2x.jpg",
			alt: 'slider3'
		},
		{
			hash: 'slider4',
			src1: "./img/slider-4-1x.jpg",
			src2: "./img/slider-4-2x.jpg",
			alt: 'slider4'
		},
		{
			hash: 'slider5',
			src1: "./img/slider-5-1x.jpg",
			src2: "./img/slider-5-2x.jpg",
			alt: 'slider4'
		},
	]
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiperWrapper = document.querySelector('.swiper-wrapper');

const sliderMarkup = itemsSlider.map(
  ({
    src1,
    src2,
    alt,
    hash,
  }) => `<div data-hash = "${hash}"class="swiper-slide">
  <img
srcset="
  ${src1} 1x,
  ${src2} 2x
"
src="${src2}"
alt="${alt}"
class="swiper__img"
/>
</div>`
);
swiperWrapper.insertAdjacentHTML('afterbegin', sliderMarkup);

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