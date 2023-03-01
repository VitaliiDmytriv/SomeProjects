$(document).ready(function () {
    // Swiper ========================================

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

    // Поява drop menu в футері ===========================

    handleDropdownTriger();

    function handleDropdownTriger() {
        let screenSize = $(window).width();
        let fontBase = parseInt($("html").css("font-size"));

        if (screenSize / fontBase < 62.5) {
            // vieport width  / fz root element < (1000px = 62.5rem)
            $(".dropdown-triger")
                .off("click")
                .on("click", function (e) {
                    e.preventDefault();
                    if ($(this).next().css("display") !== "block") {
                        $(this).next().slideDown();
                        $($(this)).addClass("active");
                    } else {
                        $(this).next().slideUp();
                        $($(this)).removeClass("active");
                    }
                });
        } else {
            $(".dropdown-triger").off("click");
            $(".dropdown-menu").css("display", "block");
        }
    }

    $(window).resize(function () {
        handleDropdownTriger();
    });
});
