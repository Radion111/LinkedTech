let topslider = new Swiper(".brandssliderrr", {
  observer: true,

  observeParent: true,

  observeSlideChildren: true,

  autoHeight: true,

  slidesPerView: 4,

  spaceBetween: 84,

  loop: true,

  breakpoints: {
    320: {
      slidesPerView: 1,

      spaceBetween: 0,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    654: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
    1000: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

let popularproduct = document.querySelector(".popularproduct__addmorea");
popularproduct.addEventListener("click", function popularProduct(event) {
  event.preventDefault();
  popularproduct.remove();
  document.querySelector(".hideblock").classList.add("active");
});

let populartabs = document.querySelectorAll(".popularproduct__tabsa");
let tabsconten = document.querySelectorAll(".popularproduct__tabscontent");
populartabs.forEach(function tabs(item) {
  item.addEventListener("click", function popularTabs(event) {
    event.preventDefault();
    let id = event.target.getAttribute("href");
    populartabs.forEach((item2) => {
      item2.classList.remove("active");
    });
    tabsconten.forEach((item2) => {
      item2.classList.remove("active");
    });
    document.querySelector(id).classList.add("active");
    item.classList.toggle("active");
  });
  document.querySelector(".popularproduct__tabsa").click();
});
// burger menu

let burgermenu = document.querySelector(".burger-menu");
burgermenu.addEventListener("click", function burgerMenu(event) {
  burgermenu.classList.toggle("active");
  document.querySelector(".header-top__nav").classList.toggle("active");
  document.getElementsByTagName("body")[0].classList.toggle("lock");
});

let headertop = document.querySelectorAll(".header-top__a");

headertop.forEach((item) => {
  item.addEventListener("click", function headerTop(event) {
    event.preventDefault();
    burgermenu.classList.remove("active");
    document.querySelector(".header-top__nav").classList.remove("active");
  });
});
// Вспливающее меню  при клике

//! Для медленого скрола напишу на native javascript поже

let scroll = document.querySelectorAll(".header-top__a");

scroll.forEach((item) => {
  item.addEventListener("click", function Scrollinto(event) {
    event.preventDefault();
    let id = item.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  });
});
