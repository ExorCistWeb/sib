function openPopup(popupId) {
    console.log('Opening popup: ' + popupId);
    $('body').addClass('no-scroll');
    $('#' + popupId).fadeIn().css('display', 'flex');
}

function closePopup(popupId) {
    console.log('Closing popup: ' + popupId);
    $('body').removeClass('no-scroll');
    $('#' + popupId).fadeOut();
}

// Close the popup when clicking on the overlay
$('.overlay').on('click', function(e) {
    if (e.target === this) {
        var popupId = $(this).attr('id');
        closePopup(popupId);
    }
});

// Open the corresponding popup when a button is clicked
$('.btn').on('click', function() {
    var popupId = $(this).data('popup-target');
    openPopup(popupId);
});