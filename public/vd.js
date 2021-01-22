$('.plybtn').click(function () {
  var vid = $(this).parent().children(".video");
  console.log(vid);
    if( vid.get(0).paused){
        vid.get(0).play();
        vid.get(0).setAttribute("controls", "controls")
        vid.next().css("display", "none");
    }
    else{
       vid.get(0).pause();

        $(".plybtn").css("display", "block");
    }
});
$("#Projects video").hover(hIn , hOut);
function hIn(){
var sr = $(this).attr("poster").split(".");
var nsr = sr[0] + "Gif.gif";
$(this).attr("poster", nsr);
};
function hOut(){
var sr = $(this).attr("poster").split("G");
var nsr = sr[0] + ".jpg";
$(this).attr("poster", nsr);
};

const $menuBtn = document.querySelector(".menu-btn");
let isMenuOpen = false;
$menuBtn.addEventListener("click", () => {
  if (!isMenuOpen) {
    $menuBtn.classList.add("open");
    $("#navbarTogglerDemo02").addClass('show');
  } else {
    $menuBtn.classList.remove("open");
    $("#navbarTogglerDemo02").removeClass('show');

  }
  isMenuOpen = !isMenuOpen;
});
