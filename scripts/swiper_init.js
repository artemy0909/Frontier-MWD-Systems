"use strict";

var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3,
    slidesOffsetBefore: 100,
    pagination: {
        el: '.swiper-pagination',
    },
});
