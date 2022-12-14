const widget = document.getElementById('widget');

if (widget) {
  const container = widget.closest('.widget');

  widget.addEventListener('click', () => container.classList.toggle('widget--open'));

  ['click', 'scroll'].forEach(event =>
    window.addEventListener(event, (e) => {
      if (!widget.contains(e.target)) container.classList.remove('widget--open');
    })
  );

  const pageHeight = document.body.scrollHeight - window.innerHeight;
  window.addEventListener('scroll', () => {
    if (window.scrollY > pageHeight - 300) container.classList.add('widget--hide');
    else container.classList.remove('widget--hide');
  });
}