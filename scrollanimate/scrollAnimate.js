

$(function () {
    console.log('Page has loaded ... ');
    $('#btn_animate').click(function () {

        var div = $('#div_to_animate');

        div.addClass('display_block animated');
        if (div.hasClass('bounceInLeft')) {
            div.removeClass('bounceInLeft');
            div.addClass('bounceOutRight');
        } else {
            div.removeClass('bounceOutRight');
            div.addClass('bounceInLeft');
        }


    });

    $(window).scroll(function () {
        var top = $('#container').offset().top;
        $('.menu').html(
                'Window height is: ' + $(window).height() + '; ' +
                'scrolltop is ' + $(window).scrollTop() + '; Location of div is at ... ' + $('#container').offset().top);
        if ($(this).scrollTop() > top) {
            $('#div_to_animate').addClass('display_block animated bounceInLeft');
        }
    });
});