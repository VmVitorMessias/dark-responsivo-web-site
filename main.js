const menu = document.getElementById('nav-menu');
const navList = document.getElementById('nav-list');

const navMenu = () => {
    navList.classList.toggle('show-menu');
    menu.classList.toggle('active');
}

menu.addEventListener('click', navMenu);