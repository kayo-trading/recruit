document.querySelectorAll('.recruit-accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const content = btn.nextElementSibling;

    item.classList.toggle('active');

    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});
