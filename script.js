const menuList = document.querySelectorAll('.item');
let toggle = document.querySelector('#toggle');

function closeMenu() {
  toggle.checked = false;
};

menuList.forEach(element => {
  element.addEventListener('click', closeMenu);
});