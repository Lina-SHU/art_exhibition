const slider = document.querySelector('.menuNav');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
});
slider.addEventListener('mouseup', () => {
  isDown = false;
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});