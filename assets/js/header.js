const hamMenu = document.querySelector('.ham-menu');

const linkMenu = document.querySelector('.menu');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('ham-menu--active');
  linkMenu.classList.toggle('menu--active');
  document.body.classList.toggle('body--lock');
});