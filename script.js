document.addEventListener('DOMContentLoaded', () => {
    // Animación secuencial para fade-in y slide-in
    const fadeEls = document.querySelectorAll('.fade-in');
    const slideLeftEls = document.querySelectorAll('.slide-in-left');
    const slideRightEls = document.querySelectorAll('.slide-in-right');

    fadeEls.forEach((el, i) => {
        el.style.animationDelay = `${0.2 + i * 0.2}s`;
    });
    slideLeftEls.forEach((el, i) => {
        el.style.animationDelay = `${0.4 + i * 0.2}s`;
    });
    slideRightEls.forEach((el, i) => {
        el.style.animationDelay = `${0.6 + i * 0.2}s`;
    });
});
