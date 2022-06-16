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
    zoom: true,

    breakpoints: {
        320: {
            zoom: {
                maxRatio: 3,
            }
        },
        576: {
            zoom: {
                maxRatio: 2,
            }
        },
        1280: {
            zoom: {
                maxRatio: 1.2,
            }
        }
    },
});


