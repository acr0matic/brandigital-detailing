const widget = document.getElementById('widget');

if (widget) {
  const container = widget.closest('.widget');

  widget.addEventListener('click', () => container.classList.toggle('widget--open'));

  ['click', 'scroll'].forEach(event =>
    window.addEventListener(event, (e) => {
      if (!widget.contains(e.target)) widget.parentNode.classList.remove('widget--open');
    })
  );
}