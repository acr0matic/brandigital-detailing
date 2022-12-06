const header = document.getElementById('header');

if (header) {

  let isReach = false;
  let isOpen = false;

  SetHeight(header);
  window.addEventListener('resize', () => SetHeight(header));

  function SetHeight(target) {
    const height = target.offsetHeight;
    document.documentElement.style.setProperty('--height', height + 'px');
  }

  window.addEventListener('scroll', () => {
    isReach = window.scrollY > 0;

    if (isReach || isOpen) header.classList.add(StyleСlass.header.background);
    else header.classList.remove(StyleСlass.header.background);
  });


  // const mobile = document.querySelector('#mobile-menu');
  // const mobileNav = mobile.querySelectorAll('.nav__link');
  // const burger = header.querySelector('.header__action .hamburger');

  // burger.addEventListener('click', () => Menu());

  // mobileNav.forEach(link => {
  //   link.addEventListener('click', () => Menu());
  // });

  // function Menu() {
  //   isOpen = !isOpen;

  //   if (!isReach) header.classList.toggle(StyleСlass.header.background);

  //   mobile.classList.toggle(StyleСlass.mobile.open);
  //   burger.classList.toggle('is-active')
  // }
}