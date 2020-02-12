// AOS init
AOS.init();

// CONTACT FORM STUFF
function processSubmitEmailRequest() {
    var address = 'fedor.bozik@outlook.com';
    var subject = document.getElementById('subject').value;
    var body = document.getElementById('message').value;

    var url = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
    window.open(url, "_blank")
};

function createGameIframe (iframePopup) {
    let iframe = document.createElement('iframe');
    iframe.frameborder = '0';
    iframe.src = 'https://codepen.io/bozik/embed/wjdKKM?height=600&theme-id=dark&default-tab=result';
    iframePopup.prepend(iframe);
};

function removeIframe () {
    $("#iframe-popup iframe").remove();
};

$( document ).ready(function() {
    console.log( "ready!" );

    let iframePopup = $("#iframe-popup");

    // Game popup handler
    $("#game").click(function () {
        iframePopup.fadeIn(200);
        createGameIframe(iframePopup);
    });

    $(".close").click(function () {
        iframePopup.fadeOut(200);
        removeIframe();
    });

});