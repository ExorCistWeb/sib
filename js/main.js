var swiper = new Swiper(".resultSwiperTop", {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    spaceBetween: 40,
    speed: 7000,
    autoplay: {
        delay: 0,
        autoplayDisableOnInteraction: false,
        disableOnInteraction: true,
    },
    allowTouchMove: false
});
var swiper = new Swiper(".resultSwiperBottom", {
    slidesPerView: 'auto',
    // centeredSlides: true,
    loop: true,
    spaceBetween: 40,
    speed: 8000,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
        reverseDirection: true,
        autoplayDisableOnInteraction: false,
    },
    allowTouchMove: false
});
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});