$(document).ready(function() {
    $('.accordion_btn').click(function() {
        // Закрываем все открытые аккордеоны, кроме текущего
        $('.accordion_content').not($(this).next()).slideUp();
        // Вращаем стрелку вниз для всех кнопок, кроме текущей
        $('.arrow').not($(this).find('.arrow')).css('transform', 'rotate(0deg)');

        // Плавно открываем или закрываем текущий аккордеон
        $(this).next().slideToggle();

        // Вращаем стрелку вниз или возвращаем в исходное положение для текущей кнопки
        var rotateValue = $(this).next().is(':visible') ? 'rotate(90deg)' : 'rotate(0deg)';
        $(this).find('.arrow').css('transform', rotateValue);

        // Дополнительно закрываем текущий аккордеон, если он уже открыт
        $('.accordion_content').not($(this).next()).slideUp();
        $('.arrow').not($(this).find('.arrow')).css('transform', 'rotate(0deg)');
    });
});