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
    iframe.id = "if";
    iframe.frameborder = '0';
    iframe.src = 'https://codepen.io/bozik/embed/wjdKKM?height=600&theme-id=dark&default-tab=result';
    iframePopup.prepend(iframe);
};

function createExpIframe (iframePopup) {
    let iframe = document.createElement('iframe');
    iframe.id = "if";
    iframe.frameborder = '0';
    iframe.src = 'https://web.archive.org/web/20190117140809/https://exponea.com/online-retail-formula/';
    iframePopup.prepend(iframe);
};

function createExp2Iframe (iframePopup) {
    let iframe = document.createElement('iframe');
    iframe.id = "if";
    iframe.frameborder = '0';
    iframe.src = 'https://web.archive.org/web/20190117141027/https://exponea.com/nrf-bigshow/';
    iframePopup.prepend(iframe);
};

function createBuIframe (iframePopup) {
    let iframe = document.createElement('iframe');
    iframe.id = "if";
    iframe.frameborder = '0';
    iframe.src = 'https://web.archive.org/web/20220105175224/https:/exploring.buckleup.sk/en/eremote-control-clm-presentation-remotely';
    iframePopup.prepend(iframe);
};

function createBu2Iframe (iframePopup) {
    let iframe = document.createElement('iframe');
    iframe.id = "if";
    iframe.frameborder = '0';
    iframe.src = 'https://web.archive.org/web/20220105162003/https://www.schuelke4office.at/en';
    iframePopup.prepend(iframe);
};

function createBu3Iframe (iframePopup) {
    let iframe = document.createElement('iframe');
    iframe.id = "if";
    iframe.frameborder = '0';
    iframe.src = 'https://web.archive.org/web/20220105175237/https://exploring.buckleup.sk/en/upscale-clm-presentation-with-interactive-puzzle';
    iframePopup.prepend(iframe);
};

function createBu4Iframe (iframePopup) {
    let iframe = document.createElement('iframe');
    iframe.id = "if";
    iframe.frameborder = '0';
    iframe.src = 'https://web.archive.org/web/20220105172627/https:/www.act4yourheart.com/se';
    iframePopup.prepend(iframe);
};

function createBu5Iframe (iframePopup) {
    let iframe = document.createElement('iframe');
    iframe.id = "if";
    iframe.frameborder = '0';
    iframe.src = 'https://web.archive.org/web/20220105174210/https:/www.pribehhudby.com/';
    iframePopup.prepend(iframe);
};


function removeIframe () {
    $("#iframe-popup iframe").remove();
};

function toggleBodyOverflow() {
  if (document.body.style.overflow !== "hidden") {
      document.body.style.overflow = "hidden";
  } else {
      document.body.style.overflow = "initial";
  }
};

function iframeReady(overlay) {
    $('#if').on( 'load', function() {
        // code will run after iframe has finished loading
        overlay.removeClass("active");
    } );
};

function switchTheme() {
    if (document.documentElement.getAttribute("data-theme") == "") {
        if (document.documentElement.getAttribute("data-theme") !== "light") {
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    } else {
        if (document.documentElement.getAttribute("data-theme") !== "light") {
            localStorage.setItem('theme', 'light');
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
};

$(document).ready(function() {
    let iframePopup = $("#iframe-popup");
    let overlay = $("#iframe-overlay");

    // Game popup handler
    $("#game").click(function () {
        toggleBodyOverflow();
        overlay.toggleClass("active");
        iframePopup.fadeIn(200);
        createGameIframe(iframePopup);
        iframeReady(overlay);
    });

    // Exp poup handler
    $("#exp").click(function () {
        toggleBodyOverflow();
        overlay.toggleClass("active");
        iframePopup.fadeIn(200);
        createExpIframe(iframePopup);
        iframeReady(overlay);
    });

    // Exp2 poup handler
    $("#exp2").click(function () {
        toggleBodyOverflow();
        overlay.toggleClass("active");
        iframePopup.fadeIn(200);
        createExp2Iframe(iframePopup);
        iframeReady(overlay);
    });

    // Bu poup handler
    $("#bu").click(function () {
        toggleBodyOverflow();
        overlay.toggleClass("active");
        iframePopup.fadeIn(200);
        createBuIframe(iframePopup);
        iframeReady(overlay);
    });

    // Bu2 poup handler
    $("#bu2").click(function () {
        toggleBodyOverflow();
        overlay.toggleClass("active");
        iframePopup.fadeIn(200);
        createBu2Iframe(iframePopup);
        iframeReady(overlay);
    });

    // Bu3 poup handler
    $("#bu3").click(function () {
        toggleBodyOverflow();
        overlay.toggleClass("active");
        iframePopup.fadeIn(200);
        createBu3Iframe(iframePopup);
        iframeReady(overlay);
    });

    // Bu4 poup handler
    $("#bu4").click(function () {
        toggleBodyOverflow();
        overlay.toggleClass("active");
        iframePopup.fadeIn(200);
        createBu4Iframe(iframePopup);
        iframeReady(overlay);
    });

    // Bu5 poup handler
    $("#bu5").click(function () {
        toggleBodyOverflow();
        overlay.toggleClass("active");
        iframePopup.fadeIn(200);
        createBu5Iframe(iframePopup);
        iframeReady(overlay);
    });

    // Close popup handler
    $(".close").click(function () {
        toggleBodyOverflow();
        iframePopup.fadeOut(200);
        removeIframe();
    });

});
