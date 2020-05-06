$(document).ready(function () {
    var pages_footer = $("#banner .slick .item").size()
    $("#pages_footer").append(pages_footer);

    $('#banner .slick').slick({
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        fade: true,
        autoplaySpeed: 3000,
        dots: true,
        sNavFor: '#banner #schedule',
    });

    $('#banner #schedule').slick({
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        fade: true,
        autoplaySpeed: 3000,
        sNavFor: '#banner .slick',
    });
});