new Swiper(".feedback-slider", {
    loop: true,
    speed: 900,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    autoplay: {
        delay: 4000,
        // pauseOnMouseEnter: true,
    },
});

new Swiper(".blog__slider", {
    spaceBetween: 30,
    initialSlide: 1,
    loop: true,
    slideToClickedSlide: true,
    breakpoints: {
        593: {
            centeredSlides: true,
            slidesPerView: 2,
            spaceBetween: 30,
            loop: false,
        },

        1000: {
            slidesPerView: 3,
            spaceBetween: 40,
            centeredSlides: true,
            loop: false,
        },
    },
    navigation: {
        nextEl: ".blog__nextBtn",
        prevEl: ".blog__prevBtn",
    },
});
