const header = document.getElementById('header');

if (header) {
  function SetHeight(target) {
    const height = target.offsetHeight;
    document.documentElement.style.setProperty('--height', height + 'px');
  }

  function CheckHeader() {
    isReach = window.scrollY > 0;

    if (isReach || isOpen) header.classList.add(StyleСlass.header.background);
    else header.classList.remove(StyleСlass.header.background);
  }

  let isReach = false;
  let isOpen = false;

  SetHeight(header);
  window.addEventListener('resize', () => SetHeight(header));

  CheckHeader();
  window.addEventListener('scroll', () => CheckHeader());



  const mobile = document.querySelector('.mobile-menu');
  const mobileOverlay = document.querySelector('.mobile-menu');
  const mobileNav = mobile.querySelectorAll('.nav__link');

  const headerBurger = header.querySelector('.hamburger');
  const mobileBurger = mobile.querySelector('.hamburger');

  headerBurger.addEventListener('click', () => Menu());
  mobileBurger.addEventListener('click', () => Menu());
  mobileOverlay.addEventListener('click', () => Menu());

  mobileNav.forEach(link => {
    link.addEventListener('click', () => Menu());
  });

  function Menu() {
    mobile.classList.toggle(StyleСlass.mobile.open);
    document.body.classList.toggle('disable-scroll');
  }
}