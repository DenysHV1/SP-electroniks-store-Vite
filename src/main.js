import { itemsSlider } from './js/array-slider-pictures';
const swiperWrapper = document.querySelector('.swiper-wrapper');

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