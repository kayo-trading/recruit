// ===========================
// FAQ アコーディオン
// ===========================
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

// ===========================
// TOPに戻るボタン（ふわっと表示）
// ===========================
const topBtn = document.querySelector('.recruit-top-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});
