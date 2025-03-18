$(document).ready(function() {
    var aside = $('aside');
    var asideTop = aside.offset().top - parseFloat(aside.css('marginTop').replace(/auto/, 0));
    var stickPoint = 200; // Point where the aside becomes sticky
    var unstickPoint = 800; // Point where the aside becomes unstuck

    $(window).scroll(function() {
        var asideY = $(this).scrollTop();
        if (asideY >= asideTop + stickPoint && asideY <= asideTop + unstickPoint) {
            aside.css({
                position: 'fixed',
                top: '0px'
            });
        } else {
            aside.css({
                position: '',
                top: ''
            });
        }
    });
});
