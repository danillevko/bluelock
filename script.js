const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  menu.classList.toggle('open');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', () => {
  burger.classList.remove('open');
  menu.classList.remove('open');
  overlay.classList.remove('show');
});

document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    menu.classList.remove('open');
    overlay.classList.remove('show');
  });
});
