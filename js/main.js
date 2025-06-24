/* NAV */
document.addEventListener('DOMContentLoaded', () => {
    const hamburguer = document.querySelector('#hamburguer-icon');

    hamburguer.addEventListener('click', () => {
        ['options', 'menu-options', 'hamburguer-icon'].forEach(id => {
            document.getElementById(id).classList.toggle('show');
        });
        document.body.classList.toggle('no-scroll');
    });


    /* CAROUSEL */
    const slides = document.querySelectorAll('.cards');
    const btns = document.querySelectorAll('.btn');
    let currentSlide = 1;

    const clearActiveClasses = () => {
        slides.forEach(slide => slide.classList.remove('active'));
        btns.forEach(btn => {
            btn.classList.remove('active');
            btn.classList.add('regular-opt');
        });
    };

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            clearActiveClasses();
            slides[i].classList.add('active');
            btn.classList.add('active');
            btn.classList.remove('regular-opt');
            currentSlide = i;
        });
    });
});
