// main slider
const swiper = new Swiper('#main-slider', {
    direction: 'horizontal',
    loop: true,
    swipeHandler: '.swiper-button-prev, .swiper-button-next',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },

});


// image slider
const swiperImage = new Swiper('#img-slider', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    nested: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            zoom: true,
        },
        // when window width is >= 800px
        800: {
            zoom: false,
        },
    }
});