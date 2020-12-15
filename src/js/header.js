/* header */
export function minHeader(point) {
  let header = document.querySelector('.header')
  let level = 150;
  if (point > level) {
    header.classList.add('header_min')
  } else {
    header.classList.remove('header_min')
  }
}

export function changeBurger() {
  let nav = document.querySelector('.header__nav');
  let bodyofpage = document.querySelector('body');
  let burgerItem = document.querySelector('.header__burger');
  burgerItem.addEventListener('click', burgerStateShow);

  function burgerStateShow() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      if (!nav.classList.contains('header__nav_active')) {
        nav.classList.add('header__nav_active');
        bodyofpage.style.overflow = 'hidden';
      } else {
        nav.classList.remove('header__nav_active');
        bodyofpage.style.overflow = 'visible';
      }
    }
  }
}
