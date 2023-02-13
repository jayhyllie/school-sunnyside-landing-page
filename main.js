let navBtn = document.querySelector('.mobile .header__nav--list');
let navMenu = document.querySelector('.mobile .header__list');

navBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
})