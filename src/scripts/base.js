const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const isMobile = window.matchMedia('(max-width: 576px)').matches;
const isSmallTablet = window.matchMedia('(max-width: 768px)').matches;
const isTablet = window.matchMedia('(max-width: 991px)').matches;

const modalParams = {
  awaitCloseAnimation: true,
  disableFocus: true,
  disableScroll: true,
}

const scrollParams = {
  speed: 500,
  speedAsDuration: true,
  offset: -90,
  header: '#header',
}

let currentModal = null;

if (isSmallTablet) scrollParams.offset = -30;
if (isMobile) scrollParams.offset = -15;

const StyleСlass = {
  'header': {
    'background': 'header--background',
  },

  'mobile': {
    'open': 'mobile-menu--open',
  },
}