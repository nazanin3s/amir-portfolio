$(window).scroll(function(){
   sessionStorage.scrollPos = $(window).scrollTop();

   var init = function () {
       //get scroll position in session storage
       $("body").scrollTop(sessionStorage.scrollPos || 0)
   };
   window.onload = init;
   
});
