import"./assets/styles-77d66d7b.js";import{S as d}from"./assets/vendor-c0264615.js";const e=document.querySelector(".white-theme-js"),s=document.querySelector(".dark-theme-js"),i=document.querySelector(".body-theme");s.addEventListener("click",()=>{s.classList.add("is-active"),e.classList.add("is-active"),i.classList.add("dark")});e.addEventListener("click",()=>{s.classList.remove("is-active"),e.classList.remove("is-active"),i.classList.remove("dark")});const c=[{hash:"slider1",src1:"./img/slider-1-1x.jpg",pathImg:"./img/slider-1-2x.jpg",alt:"slider1"},{hash:"slider2",src1:"./img/slider-2-1x.jpg",pathImg:"./img/slider-2-2x.jpg",alt:"slider2"},{hash:"slider3",src1:"./img/slider-3-1x.jpg",pathImg:"./img/slider-3-2x.jpg",alt:"slider3"},{hash:"slider4",src1:"./img/slider-4-1x.jpg",pathImg:"./img/slider-4-2x.jpg",alt:"slider4"},{hash:"slider5",src1:"./img/slider-5-1x.jpg",pathImg:"./img/slider-5-2x.jpg",alt:"slider4"}],p=document.querySelector(".swiper-wrapper"),o=c.map(({src1:r,pathImg:t,alt:a,hash:l})=>`<div data-hash = "${l}"class="swiper-slide">
  <img
srcset="
  ${r} 1x,
  ${t} 2x
"
src="${t}"
alt="${a}"
class="swiper__img"
/>
</div>`);p.insertAdjacentHTML("afterbegin",o);new d(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{type:"bullets",el:".swiper-pagination",clickable:!0,dynamicBullets:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,hashNavigation:{watchState:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoHeight:!0,loop:!0,speed:800,effect:"fade",fadeEffect:{crossFade:!0}});
//# sourceMappingURL=commonHelpers2.js.map
