'use strict';

var btnModal = document.querySelector('.btn-modal'),
    modal    = document.querySelector('.contacts__modal'),
    page     = $('html, body'),
    navElem  = document.querySelectorAll('.header__nav-item');

document.addEventListener('scroll', function () {
    if (pageYOffset >= 100) {
        document.querySelector('.header').classList.add('header_fixed')
    } else {
        document.querySelector('.header').classList.remove('header_fixed')
    }
});

$('a[href*="#"]').click(function() {
    page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


$('.header__btn').click(function() {
    page.animate({
        scrollTop: $('#contacts').offset().top
    }, 400);
    modal.style.display = 'block';
    document.querySelector('.burger').classList.remove('active');
    document.querySelector('.header__nav').classList.remove('active');
    return false;
});

document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('active');
    closeMenu()
});

function closeMenu() {
    navElem.forEach(function (el) {
        el.addEventListener('click', function () {
            document.querySelector('.burger').classList.remove('active');
            document.querySelector('.header__nav').classList.remove('active')
        });
    })
}

$('.slider__item').slick({
    speed: 500
});

btnModal.addEventListener('click', function () {
    modal.style.display = 'block'
});

document.querySelector('.close').addEventListener('click', closeModal);
function closeModal() {
    modal.style.display = 'none'
}
