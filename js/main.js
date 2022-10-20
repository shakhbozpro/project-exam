let siteLogo = document.querySelector(".site-logo");
let navMenyu = document.querySelector(".site-nav");
let themeBtn = document.querySelector(".theme-btn");
let burgerBtn = document.querySelector(".burger-btn");

burgerBtn.addEventListener("click", () => {
   burgerBtn.classList.toggle("shownav");
   navMenyu.classList.toggle("shownav");
   themeBtn.classList.toggle("d-none");
   siteLogo.classList.toggle("ms-auto");
   siteLogo.classList.toggle("ms-0");
   burgerBtn.classList.toggle("burger-close-btn");
});

let heroVideoBtn = document.querySelector(".hero-video-btn");
let heroVideoWrapper = document.querySelector(".hero-video-wrapper");
let heroVideoCloseBtn = document.querySelector(".video-close-btn");

heroVideoBtn.addEventListener("click", () => {
   heroVideoBtn.classList.add("hero-video-added");
   heroVideoWrapper.classList.add("hero-video-added");
})


heroVideoCloseBtn.addEventListener("click", () => {
   heroVideoBtn.classList.remove("hero-video-added");
   heroVideoWrapper.classList.remove("hero-video-added");
})

// Slick carousel codes

$('.slider-list').slick({
   dots: true,
   centerMode: true,
   slidesToShow: 3,
   autoplay: true,
   autoplaySpeed: 2000,
   variableWidth: true,
   infinite: true,
   responsive: [
      {
         breakpoint: 1000,
         settings: {
            centerMode: true,
            slidesToShow: 2
         }
      },
      {
         breakpoint: 600,
         settings: {
            centerMode: true,
            slidesToShow: 1
         }
      }
   ]
});