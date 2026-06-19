

$(function () {

    var $slides = $('.slider .slide');
    var current = 0;

    function showSlide(idx) {

        $slides.removeClass('active').hide();
        $slides.eq(idx).addClass('active').show();
        $('.slide-index').text((idx + 1) + ' / ' + $slides.length);
    }


    showSlide(current);


    $('.slider-next').on('click', function () {
        current = (current + 1) % $slides.length;
        showSlide(current);
    });
    $('.slider-prev').on('click', function () {
        current = (current - 1 + $slides.length) % $slides.length;
        showSlide(current);
    });


    var autoplay = setInterval(function () { $('.slider-next').trigger('click'); }, 5000);
    $('.slider').hover(function () {
        clearInterval(autoplay);
    }, function () {
        autoplay = setInterval(function () { $('.slider-next').trigger('click'); }, 5000);
    });

    // Normalize initial accordion state: show bodies for items marked active, hide others
    $('.accordion .accordion-body').each(function () {
        var $item = $(this).closest('.accordion-item');
        if ($item.hasClass('active')) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });

    $('.accordion-header').on('click', function (e) {
        e.preventDefault();
        var $item = $(this).closest('.accordion-item');

        // close other items (stop animations first)
        $item.siblings('.accordion-item').removeClass('active').find('.accordion-body').stop(true, true).slideUp(160);

        // toggle current item
        $item.toggleClass('active');
        $item.find('.accordion-body').stop(true, true).slideToggle(160);
    });


    $('[data-open-modal]').on('click', function (e) {
        e.preventDefault();
        var target = $(this).data('open-modal');
        $('#' + target).addClass('active');
    });


    $('.modal-overlay').on('click', function (e) {

        if (e.target === this) {
            $(this).removeClass('active');
        }
    });
    $('.modal-close').on('click', function () {
        $(this).closest('.modal-overlay').removeClass('active');
    });


    $('.modal-dialog').on('click', function (e) { e.stopPropagation(); });
});
