export default() => {
  const mobileButton = document.querySelector('.header__open-btn');
  const mobileMenu = document.querySelector('.menu-mobile');
  const closeMenu = document.querySelector('.header__close-btn');

  mobileButton.addEventListener('click', e => {
    mobileButton.classList.toggle('header__open-btn--active');
    mobileMenu.classList.toggle('menu-mobile--active');
  })

  closeMenu.addEventListener('click', e => {
    mobileMenu.classList.remove('menu-mobile--active');
    mobileButton.classList.remove('header__open-btn--active');
  })

  window.addEventListener('click', e => {
    if (!document.querySelector('.menu-mobile').contains(e.target) && !document.querySelector('.header__open-btn').contains(e.target)) {
      if (mobileMenu.classList.contains('menu-mobile--active') && mobileButton.classList.contains('header__open-btn--active')) {
        mobileMenu.classList.remove('menu-mobile--active');
        mobileButton.classList.remove('header__open-btn--active');
      }
    }
  })
}
