"use strict";

var slider = document.querySelector('.menuNav');
var isDown = false;
var startX;
var scrollLeft;
slider.addEventListener('mousedown', function (e) {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', function () {
  isDown = false;
});
slider.addEventListener('mouseup', function () {
  isDown = false;
});
slider.addEventListener('mousemove', function (e) {
  if (!isDown) return;
  e.preventDefault();
  var x = e.pageX - slider.offsetLeft;
  var walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
//# sourceMappingURL=all.js.map
