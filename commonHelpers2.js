import"./assets/styles-77d66d7b.js";import{S as d}from"./assets/vendor-c0264615.js";const e=document.querySelector(".white-theme-js"),s=document.querySelector(".dark-theme-js"),r=document.querySelector(".body-theme");s.addEventListener("click",()=>{s.classList.add("is-active"),e.classList.add("is-active"),r.classList.add("dark")});e.addEventListener("click",()=>{s.classList.remove("is-active"),e.classList.remove("is-active"),r.classList.remove("dark")});const o="/SP-electroniks-store-Vite/assets/slider-1-1x-0d58e141.jpg",c="/SP-electroniks-store-Vite/assets/slider-1-2x-6d4edfd3.jpg",n="/SP-electroniks-store-Vite/assets/slider-2-1x-6e6deda9.jpg",p="/SP-electroniks-store-Vite/assets/slider-2-2x-c42bd608.jpg",h="/SP-electroniks-store-Vite/assets/slider-3-1x-0bd7ee71.jpg",u="/SP-electroniks-store-Vite/assets/slider-3-2x-bb232605.jpg",S="/SP-electroniks-store-Vite/assets/slider-4-1x-c9b64956.jpg",m="/SP-electroniks-store-Vite/assets/slider-4-2x-c2fe8d90.jpg",g="/SP-electroniks-store-Vite/assets/slider-5-1x-30604060.jpg",x="/SP-electroniks-store-Vite/assets/slider-5-2x-616a3931.jpg",k=document.querySelector(".swiper-wrapper"),w=[{hash:"slider1",src1:o,pathImg:c,alt:"slider1"},{hash:"slider2",src1:n,pathImg:p,alt:"slider2"},{hash:"slider3",src1:h,pathImg:u,alt:"slider3"},{hash:"slider4",src1:S,pathImg:m,alt:"slider4"},{hash:"slider5",src1:g,pathImg:x,alt:"slider4"}],b=w.map(({src1:i,pathImg:t,alt:a,hash:l})=>`<div data-hash = "${l}"class="swiper-slide">
  <img
srcset="
  ${i} 1x,
  ${t} 2x
"
src="${t}"
alt="${a}"
class="swiper__img"
/>
</div>`);k.insertAdjacentHTML("afterbegin",b);new d(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{type:"bullets",el:".swiper-pagination",clickable:!0,dynamicBullets:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,hashNavigation:{watchState:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoHeight:!0,loop:!0,autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!1},speed:800,effect:"fade",fadeEffect:{crossFade:!0}});
//# sourceMappingURL=commonHelpers2.js.map
