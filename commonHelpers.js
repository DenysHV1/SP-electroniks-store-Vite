/* empty css                      */import{S as n}from"./assets/vendor-c0264615.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=document.querySelector(".white-theme-js"),l=document.querySelector(".dark-theme-js"),o=document.querySelector(".body-theme");l.addEventListener("click",()=>{l.classList.add("is-active"),d.classList.add("is-active"),o.classList.add("dark")});d.addEventListener("click",()=>{l.classList.remove("is-active"),d.classList.remove("is-active"),o.classList.remove("dark")});const p="/slider-fadeEffect-Vite/assets/slider-1-1x-0d58e141.jpg",f="/slider-fadeEffect-Vite/assets/slider-1-2x-6d4edfd3.jpg",u="/slider-fadeEffect-Vite/assets/slider-2-1x-6e6deda9.jpg",h="/slider-fadeEffect-Vite/assets/slider-2-2x-c42bd608.jpg",m="/slider-fadeEffect-Vite/assets/slider-3-1x-0bd7ee71.jpg",g="/slider-fadeEffect-Vite/assets/slider-3-2x-bb232605.jpg",x="/slider-fadeEffect-Vite/assets/slider-4-1x-c9b64956.jpg",y="/slider-fadeEffect-Vite/assets/slider-4-2x-c2fe8d90.jpg",S="/slider-fadeEffect-Vite/assets/slider-5-1x-30604060.jpg",b="/slider-fadeEffect-Vite/assets/slider-5-2x-616a3931.jpg",v=document.querySelector(".swiper-wrapper"),w=[{hash:"slider1",src1:p,pathImg:f,alt:"slider1"},{hash:"slider2",src1:u,pathImg:h,alt:"slider2"},{hash:"slider3",src1:m,pathImg:g,alt:"slider3"},{hash:"slider4",src1:x,pathImg:y,alt:"slider4"},{hash:"slider5",src1:S,pathImg:b,alt:"slider4"}],E=w.map(({src1:c,pathImg:s,alt:i,hash:r})=>`<div data-hash = "${r}"class="swiper-slide">
  <img
srcset="
  ${c} 1x,
  ${s} 2x
"
src="${s}"
alt="${i}"
class="swiper__img"
/>
</div>`);v.insertAdjacentHTML("afterbegin",E);new n(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{type:"bullets",el:".swiper-pagination",clickable:!0,dynamicBullets:!0},simulateTouch:!0,touchRatio:1,touchAngle:45,hashNavigation:{watchState:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},autoHeight:!0,loop:!0,autoplay:{delay:3e3,stopOnLastSlide:!1,disableOnInteraction:!1},speed:800,effect:"fade",fadeEffect:{crossFade:!0}});
//# sourceMappingURL=commonHelpers.js.map
