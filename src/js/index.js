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
const menuIcon = document.querySelector(".burger-menu i")

menuIcon.addEventListener("click", function () {
  nav.classList.toggle("active")
  if (nav.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars")
    menuIcon.classList.add("fa-xmark")
  } else {
    menuIcon.classList.remove("fa-xmark")
    menuIcon.classList.add("fa-bars")
  }
})
