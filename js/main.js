const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 5000,
  },
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.swiper-prev-button',
    nextEl: '.swiper-next-button',
  },
});