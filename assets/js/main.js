$('.currency_selector__wrap').on('click', function () {

    $('.currency_active').removeClass('active');

    $(this).next().addClass('active');
});