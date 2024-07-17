// import Swiper from "swiper"
// import { Navigation, Pagination } from "swiper/modules"

// import "swiper/css"
// import "swiper/css/pagination"

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  //   // Navigation arrows
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
})

const nav = document.querySelector(".navigation")
const menu = document.querySelector(".fa-bars")

menu.addEventListener("click", function () {
  nav.classList.toggle("active")
})
