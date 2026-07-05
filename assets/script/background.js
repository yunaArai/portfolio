$(function () {

    function toggleHeaderBg() {
        if ($(window).width() > 768) return;

        const mvHeight = $('.mv').outerHeight();

        $('.c-humburger-menu').toggleClass(
            'is-bg',
            $(window).scrollTop() > mvHeight
        );
    }

    $(window).on('scroll resize', toggleHeaderBg);
    toggleHeaderBg();
});