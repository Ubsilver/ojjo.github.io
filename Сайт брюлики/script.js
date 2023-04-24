const menuButton = document.querySelector('#menuButton');
const menuList = document.querySelector('#menuList');

menuButton.addEventListener('click', () => {
  menuList.classList.toggle('show');
});