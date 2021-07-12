
$(document).ready(function(){

    $('.testimonials-slider').slick({
        slidesToShow: 1,
        //slidesToScroll: 1,
        prevArrow: '<button type="button" class="testimonials-slider__slider-btn testimonials-slider__slider-btn-prev">' +
            '<span class="testimonials-slider__arrow testimonials-slider__arrow_prev"></span></button>',
        nextArrow: '<button type="button" class="testimonials-slider__slider-btn testimonials-slider__slider-btn-next">' +
            '<span class="testimonials-slider__arrow testimonials-slider__arrow_next"></span></button>',
        infinite: true,
        initialSlide: 2,
        centerMode: true,
        variableWidth: true
    });

    $('.testimonials-slider').slick('setPosition');

    $('.carousel-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="carousel-slider__slider-btn carousel-slider__slider-btn-prev">' +
            '<img src="../icons/arrow-right-1.png" alt="" class="svg"></button>',
        nextArrow: '<button type="button" class="carousel-slider__slider-btn carousel-slider__slider-btn-next">' +
            '<img src="../icons/arrow-right-1.png" alt="" class="svg"></button>',
        infinite: true,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 953,
                settings: {
                    slidesToShow: 3

                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 360,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            }
        ]
    });

});

