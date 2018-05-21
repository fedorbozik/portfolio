/*AOS init*/
AOS.init();

/*smooth scroll initialization*/
var scroll = new SmoothScroll('a[href*="#"]');


/* BACKGROUND VIDEO JS SOURCE */
var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#bgvid");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed
vid.pause();
// to capture IE10
vidFade();
});


pauseButton.addEventListener("click", function() {
  if (vid.paused) {
    vid.play();
    // disabled because it causes the fixed social icons to go crazy
    //vid.classList.toggle("stopfade");
  } else {
    vid.pause();
    //vid.classList.toggle("stopfade");
  }
});

// CONTACT FORM STUFF
function processSubmitEmailRequest(){
    var address = "fedor.bozik@itvkurze.sk";
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("message").value;

    var url = 'mailto:' + address + '?subject=' + subject + '&body=' + body;
    window.open(url, "_blank")
};







