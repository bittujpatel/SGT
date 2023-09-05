$(document).ready(function() {
    $('.dropdown-toggle').mouseover(function() {
        $('.dropdown-menu').show();
    });

    $('.dropdown-toggle').mouseout(function() {
        var t = setTimeout(function() {
            $('.dropdown-menu').hide();
        }, 100);
        $('.dropdown-menu').on('mouseenter', function() {
            $('.dropdown-menu').show(); // Corrected the selector here
            clearTimeout(t);
        }).on('mouseleave', function() {
            $('.dropdown-menu').hide(); // Corrected the selector here
        });
    });
});


document.getElementById('getQuotationBtn').addEventListener('click', function() {
    window.location.href = 'tel:+919880301591';
});
