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
    slidesPerView: 'auto',
    spaceBetween: 30,

    loop: true,
    breakpoints: {

        100: {

            spaceBetween: 20,
            centeredSlides: true,
            loop: false,
        },
        768: {
            loop: true,
            centeredSlides: false,
            slidesPerView: 'auto',
            spaceBetween: 30,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
});
var swiper = new Swiper(".resultStudSwiper", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    cssMode: true,
    loop: true,
    breakpoints: {

        100: {

            spaceBetween: 20,
            centeredSlides: true,
            loop: false,
        },
        768: {
            loop: true,
            centeredSlides: false,
            slidesPerView: 'auto',
            spaceBetween: 30,
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
});

function playVideo(button) {
    var videoPreview = button.closest('.video_preview');
    videoPreview.style.display = 'none';

    var iframe = videoPreview.nextElementSibling;
    iframe.style.display = 'block';

    // Автоматический запуск видео после скрытия превью
    iframe.src += "&autoplay=1";
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});