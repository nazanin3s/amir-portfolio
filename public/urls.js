$(document).ready(function(){
    if (document.documentElement.scrollWidth< 500){
  var el = $("body").find("[aria-label='3d Rendering']");
  for(i=0; i < el.length; ++i){
  var url =$(el[i]).attr("href");
  var ar = url.split("#");
  var nu = ar[0] + "#m" + ar[1];
  $(el[i]).attr("href", nu);
}
}
  // console.log(nu);
});
