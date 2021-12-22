$('[name="phone"]').mask('+7(999) 999-99-99');

// mobile menu
$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.home-slider').slick({
    slidesToShow: 1,
    fade: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
});

// слайдер категорий
$(document).ready(function () {
    $('.category-slider').each(function () {
        $(this).slick({
            slidesToShow: 1,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
            appendArrows: $(this).parents('.section-slider').find('.slider-nav'),
        });
    });
});

$(document).ready(function () {
    $('.reviews-slider').each(function () {
        $(this).slick({
            slidesToShow: 1,
            variableWidth: true,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
            appendArrows: $(this).parents('.section-slider').find('.slider-nav'),
        });
    });
});


$('.about-slider').slick({
    slidesToShow: 1,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
});


//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        $('.mobile-menu').fadeOut();

        return false;
    });
});
//плавный скролл end

$('.catalog .row').each(function () {
    if ($(this).find('.catalog-col').length > 20) {
        $(this).find('.catalog-col').slice(20).hide();
    }
});


$('.btn-load').on('click', function (e) {
    e.preventDefault();
    $('.catalog-col:hidden').slice(0, 5).slideDown();
});

new WOW().init();