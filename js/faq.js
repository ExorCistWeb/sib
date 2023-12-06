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