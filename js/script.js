const hamburher = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburher.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

new WOW().init();

//mask

var selector = document.getElementById("tel");

var im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);