$(document).ready(function() {
    var iframe = $('iframe');
    var iframeDocument = iframe.contents();
    var aside = iframeDocument.find('aside');
    var asideTop = aside.offset().top - parseFloat(aside.css('marginTop').replace(/auto/, 0));
    var stickPoint = 200; // Point where the aside becomes sticky
    var unstickPoint = 20000; // Point where the aside becomes unstuck

    iframeDocument.scroll(function() {
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
