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
