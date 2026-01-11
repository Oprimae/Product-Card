document.querySelector('.product-sizes').addEventListener('click', (e) => {
  if (!e.target.classList.contains('product-size')) return;

  document.querySelectorAll('.product-size').forEach(s => s.classList.remove('selected'));
  e.target.classList.add('selected');
});

const basketButton = document.querySelector('.card-button');
const popup = document.getElementById('popup');

const DISPLAY_DURATION = 5000;
let isVisible = false;
basketButton.addEventListener('click', () => {
  if (isVisible) return;

  isVisible = true;
  popup.classList.add('show');

  setTimeout(() => {
    popup.classList.remove('show');
    isVisible = false;
  }, DISPLAY_DURATION);
});
