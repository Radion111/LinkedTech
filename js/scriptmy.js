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

// Для медленого скрола напишу на native javascript поже
$(document).ready(function () {
  $(".header-top__a").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top + "px",
      },
      {
        duration: 1000,
        easing: "linear",
      }
    );
    return false;
  });
});

$(document).ready(function () {
  $(".popularproduct__addmorea").click(function (e) {
    e.preventDefault();
    $(".hideblock").addClass("active");
    $(this).remove();
  });
});

$(document).ready(function () {
  $(".popularproduct__tabsa").click(function (e) {
    e.preventDefault();
    $(".popularproduct__tabsa").removeClass("active");
    $(".popularproduct__tabscontent").removeClass("active");

    $(this).addClass("active");
    $($(this).attr("href")).addClass("active");
  });
  $(".popularproduct__tabsa:first").click();
});
$(document).ready(function () {
  $(".burger-menu").click(function (event) {
    $(".burger-menu,.header-top__nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

$(document).ready(function () {
  $(".header-top__a").click(function (e) {
    e.preventDefault();
    $(".burger-menu,.header-top__nav").removeClass("active");
  });
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

// Вспливающее меню  при клике
