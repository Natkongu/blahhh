/**
 Set the scroll events for the HTML5 Scroll Load plugin and keeping the aside always in view.
 */
var asideTop = $('aside').offset().top - parseFloat($('aside').css('marginTop').replace(/auto/, 0));
$(window).scroll(function () {
    var asideY = $(this).scrollTop();
    if (asideY >= asideTop) {
        $('aside').css({
            position: 'fixed',
            top: '0px'
        })
    } else {
        $('aside').removeAttr('style')
    }
});
