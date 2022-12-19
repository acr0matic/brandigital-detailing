const modalPromotion = document.getElementById("modal-promotion");
if (modalPromotion) {
  const picture = modalPromotion.querySelector('.modal__picture .image');
  const title = modalPromotion.querySelector('.modal__title');
  const price = modalPromotion.querySelector('.modal__subtitle');
  const content = modalPromotion.querySelector('.modal__text');
  const action = modalPromotion.querySelector('.modal__action button');

  const cards = document.querySelectorAll('.card-promotion');
  cards.forEach(card => {
    const button = card.querySelector('button');

    button.addEventListener('click', () => {
      picture.dataset.src = card.querySelector('.card__picture .image').src;
      title.innerHTML = card.querySelector('.card__title').innerHTML;
      price.innerHTML = card.querySelector('.card__hidden .price').innerHTML;
      content.innerHTML = card.querySelector('.card__hidden .content').innerHTML;
      action.dataset.subject = title.innerHTML;

      LazyLoad.resetStatus(picture)
      lazyLoadInstance.update();

      action.addEventListener('click', () => {
        // MicroModal.close('modal-promotion', modalParams);
        // MicroModal.show('modal-callback', modalParams);
      });
    });
  });
}

const modalPortfolio = document.getElementById("modal-portfolio");
if (modalPortfolio) {
  const title = modalPortfolio.querySelector('.modal__title');
  const gallery = modalPortfolio.querySelector('.slider-portfolio-gallery .swiper-wrapper');
  const thumb = modalPortfolio.querySelector('.slider-portfolio-thumb .swiper-wrapper');

  const cards = document.querySelectorAll('.card-portfolio');
  cards.forEach(card => {
    const button = card.querySelector('button');

    button.addEventListener('click', () => {
      title.innerHTML = card.querySelector('.card__title').innerHTML;

      gallery.innerHTML = card.querySelector('.card__hidden .gallery').innerHTML;
      thumb.innerHTML = card.querySelector('.card__hidden .thumb').innerHTML;

      lazyLoadInstance.update();
      porfolioGallery.update();
      porfolioThumb.update();
    });
  });
}

const modalService = document.getElementById("modal-service");
if (service) {
  const title = modalService.querySelector('.modal__title');
  const table = modalService.querySelector('.modal__table');
  const text = modalService.querySelector('.modal__action p');
  const picture = modalService.querySelector('.modal__additional .image');
  const action = modalService.querySelector('.modal__action button');

  const cards = document.querySelectorAll('.card-service');
  cards.forEach(card => {
    const button = card.querySelector('button');

    button.addEventListener('click', () => {
      title.innerHTML = card.querySelector('.card__title').innerHTML;
      table.innerHTML = card.querySelector('.card__hidden .table').outerHTML;
      text.innerHTML = card.querySelector('.card__hidden p').innerHTML;

      const image = card.querySelector('.card__hidden img');
      if (image) picture.dataset.src = image.src;

      action.dataset.subject = title.innerHTML;

      LazyLoad.resetStatus(picture)
      lazyLoadInstance.update();
    });
  });
}