import { handleScrollHeader } from './handleScrollHeader.js';
window.onload = function () {
    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 3,
        spaceBetween: 24,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        centeredSlides: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: true,
        },
    });

    handleScrollHeader();
};
