

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
                '$(this).scrollTop() +  $(window).height() > top <br/>' +
                ($(this).scrollTop() +  $(window).height()) + ' > ' +  top
        );
        if ($(this).scrollTop() + $(window).height() > top) {
            $('#div_to_animate').addClass('display_block animated bounceInLeft');
        }
    });
});