$(document).ready(function() {
    $('.burger-icon').click(function() {
        $('.burger-menu').slideToggle();
        $('body').toggleClass('no-scroll');
    });

    // Добавляем обработчик события клика на кнопки внутри меню
    $('.burger-menu a').click(function() {
        // Проверяем ширину экрана
        if ($(window).width() < 768) {
            // Закрываем меню
            $('.burger-menu').slideUp();
            $('body').removeClass('no-scroll');
        }
    });
});

$(document).ready(function() {
    $('.accordion_btn').click(function() {
        // Проверяем, открыт ли текущий аккордеон
        var isOpen = $(this).next().is(':visible');

        // Закрываем все открытые аккордеоны, кроме текущего
        $('.accordion_content').not($(this).next()).slideUp();
        // Вращаем стрелку вниз для всех кнопок, кроме текущей
        $('.arrow').not($(this).find('.arrow')).css('transform', 'rotate(0deg)');

        // Плавно открываем или закрываем текущий аккордеон
        $(this).next().slideToggle();

        // Вращаем стрелку вниз или возвращаем в исходное положение для текущей кнопки
        var rotateValue = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
        $(this).find('.arrow').css('transform', rotateValue);

        // Если текущий аккордеон был открыт, то не выполняем дополнительные операции
        if (isOpen) {
            return;
        }

        // Дополнительно закрываем все другие аккордеоны
        $('.accordion_content').not($(this).next()).slideUp();
        $('.arrow').not($(this).find('.arrow')).css('transform', 'rotate(0deg)');
    });
});
$(document).ready(function() {
    // Функция для анимации цифр
    function animateNumbers(target, start, end, duration) {
        $({ value: start }).animate({ value: end }, {
            duration: duration,
            step: function() {
                $(target).text(Math.floor(this.value));
            },
            complete: function() {
                $(target).text(end);
            }
        });
    }

    // Анимация при загрузке страницы
    animateNumbers('.mission_result_box:nth-child(1) span', 0, 300, 2000);
    animateNumbers('.mission_result_box:nth-child(2) span', 0, 3, 2000);
    animateNumbers('.mission_result_box:nth-child(3) span', 0, 46, 2000);
});