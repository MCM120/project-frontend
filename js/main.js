/*nav*/

const hamburguer = document.querySelector('#hamburguer-icon')
const options = document.querySelector('#options')
const navMenu = document.querySelector('#menu-options')

hamburguer.addEventListener('click', () => {
    options.classList.toggle('show')
    document.body.classList.toggle('no-scroll');
    navMenu.classList.toggle('show')
    hamburguer.classList.toggle('show')
})


/*""carousel""*/

var slides = document.querySelectorAll('.cards');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var nav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active')

        btns.forEach((btn) => {
            btn.classList.remove('active')
            btn.classList.add('regular-opt')
        })
    })

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    btns[manual].classList.remove('regular-opt');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        nav(i);
        currentSlide = i;
    })
});

console.log("empanada")