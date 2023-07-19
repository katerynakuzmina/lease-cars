//tabs

const tabItem = document.querySelectorAll('.tabs__btn-item'),
      tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(elem => {
  elem.addEventListener('click', open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(item => {
    item.classList.remove('tabs__btn-item--active');
  });

  tabTarget.classList.add('tabs__btn-item--active');

  tabContent.forEach(item => {
    item.classList.remove('tabs__content-item--active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

//menu burger
const menuBtn = document.querySelector('.menu__btn'),
      menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
});

//slider
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: "fade",
});