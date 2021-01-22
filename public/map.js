function initMap(){
  var Opts= {
    zoom:14 ,
    center: {lat:50.440592, lng: 30.505694},
    mapId: '677855c796540969'
  }
  var map = new google.maps.Map(
        document.getElementById('map'), Opts);

         var marker = new google.maps.Marker({
           position: {lat:50.440592, lng: 30.505694},
           map: map});
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
