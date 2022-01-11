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
    autoplaySpeed: 10000,
});

// On slide change, pause all videos
$('.home-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('video')[0].play();
});

// On slide chnage, play a video inside the current slide
$('.home-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    if( $('.home-slider .slick-slide.slick-current').find('video').length !== 0) {
        $(".home-slider .slick-current video")[0].play();
    }
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

$('.product-gallery-preview').slick({
    slidesToShow: 5,
    vertical: true,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.product-gallery-max',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                vertical: false,
                slidesToShow: 3,
            }
        }
    ]
});

$('.product-gallery-max').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    // asNavFor: '.product-gallery-preview',
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

// amount
$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click",function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

new WOW().init();