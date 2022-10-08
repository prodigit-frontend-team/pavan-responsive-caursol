const slider = new Swiper('.slider', {
  loop: true,
  speed: 500,
  centeredSlides: true,
  slidesPerView: 3,
  navigation: {
    prevEl: '.button-prev',
    nextEl: '.button-next' },

  on: {
    slideChangeTransitionStart: function () {
      setBeforePrevAfterNext(this);
    } } });



function setBeforePrevAfterNext($swiper) {
  let prev = $swiper.el.querySelector('.swiper-slide-prev');
  let next = $swiper.el.querySelector('.swiper-slide-next');
  let duplicate_prev = $swiper.el.querySelector('.swiper-slide-duplicate-prev');
  let duplicate_next = $swiper.el.querySelector('.swiper-slide-duplicate-next');
  let before_prev = prev.previousElementSibling;
  let after_next = next.nextElementSibling;

  $swiper.el.querySelectorAll('.swiper-slide-before-prev').forEach(element => {
    element.classList.remove('swiper-slide-before-prev');
  });
  $swiper.el.querySelectorAll('.swiper-slide-after-next').forEach(element => {
    element.classList.remove('swiper-slide-after-next');
  });

  before_prev.classList.add('swiper-slide-before-prev');
  after_next.classList.add('swiper-slide-after-next');

  if (duplicate_prev &&
  duplicate_prev.previousElementSibling)
  {
    duplicate_prev.previousElementSibling.classList.add('swiper-slide-before-prev');
  }

  if (duplicate_next &&
  duplicate_next.nextElementSibling)
  {
    duplicate_next.nextElementSibling.classList.add('swiper-slide-after-next');
  }
}