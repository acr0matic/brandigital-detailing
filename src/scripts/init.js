const lazyLoadInstance = new LazyLoad({
  elements_selector: '.lazy__item',

  callback_enter: (trigger) => {
    const container = trigger.closest('.lazy');
    const loader = container.querySelector('.preloader');

    if (loader) loader.classList.remove('preloader--hide');
  },

  callback_loaded: (trigger) => {
    const container = trigger.closest('.lazy');
    const loader = container.querySelector('.preloader');

    if (loader) loader.classList.add('preloader--hide');
  },
});

const scrollController = new SmoothScroll('a[href*="#"]', scrollParams);

const forms = document.querySelectorAll('form');
forms.forEach(form => {
  new Form(form);
});

MicroModal.init(modalParams);

const modalTrigger = document.querySelectorAll('[data-modal], [data-micromodal-trigger]');
modalTrigger.forEach(trigger => trigger.addEventListener('click', () => {
  currentModal = trigger.dataset.modal || trigger.dataset.micromodalTrigger;
  const modal = document.getElementById(currentModal);

  if (modal) {
    const form = modal.querySelector('form');
    if (form) form.dataset.subject = trigger.dataset.subject;
  }
}));
