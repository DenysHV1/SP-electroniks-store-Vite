import"./assets/styles-77d66d7b.js";import{S as o}from"./assets/vendor-c0264615.js";const e=document.querySelector(".white-theme-js"),s=document.querySelector(".dark-theme-js"),r=document.querySelector(".body-theme");s.addEventListener("click",()=>{s.classList.add("is-active"),e.classList.add("is-active"),r.classList.add("dark")});e.addEventListener("click",()=>{s.classList.remove("is-active"),e.classList.remove("is-active"),r.classList.remove("dark")});const c="/SP-electroniks-store-Vite/assets/slider-1-1x-0d58e141.jpg",n="/SP-electroniks-store-Vite/assets/slider-1-2x-6d4edfd3.jpg",p="/SP-electroniks-store-Vite/assets/slider-2-1x-6e6deda9.jpg",h="/SP-electroniks-store-Vite/assets/slider-2-2x-c42bd608.jpg",u="/SP-electroniks-store-Vite/assets/slider-3-1x-0bd7ee71.jpg",S="/SP-electroniks-store-Vite/assets/slider-3-2x-bb232605.jpg",g="/SP-electroniks-store-Vite/assets/slider-4-1x-c9b64956.jpg",m="/SP-electroniks-store-Vite/assets/slider-4-2x-c2fe8d90.jpg",x="/SP-electroniks-store-Vite/assets/slider-5-1x-30604060.jpg",k="/SP-electroniks-store-Vite/assets/slider-5-2x-616a3931.jpg",w=document.querySelector(".swiper-wrapper"),i=[{hash:"slider1",src1:c,pathImg:n,alt:"slider1"},{hash:"slider2",src1:p,pathImg:h,alt:"slider2"},{hash:"slider3",src1:u,pathImg:S,alt:"slider3"},{hash:"slider4",src1:g,pathImg:m,alt:"slider4"},{hash:"slider5",src1:x,pathImg:k,alt:"slider4"}];console.log(i);const v=i.map(({src1:a,pathImg:t,alt:l,hash:d})=>`<div data-hash = "${d}"class="swiper-slide">
  <img
srcset="
  ${a} 1x,
  ${t} 2x
"
src="${t}"
alt="${l}"
class="swiper__img"
/>
</div>`);w.insertAdjacentHTML("afterbegin",v);new o(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{type:"bullets",el:".swiper-pagination",clickable:!0,dynamicBullets:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,hashNavigation:{watchState:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoHeight:!0,loop:!0,speed:800,effect:"fade",fadeEffect:{crossFade:!0}});
//# sourceMappingURL=commonHelpers2.js.map
