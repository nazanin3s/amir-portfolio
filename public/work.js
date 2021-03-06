$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:(document.documentElement.scrollWidth> 500),
    margin:46,
    nav:false,
     dots: false,
    items:3,
    rewind: true,
    center:true,
    autoWidth:true,
    // URLhashListener: true,
  startPosition: 'URLHash',
  responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:3,
            stagePadding: 200,

        }
    }
});
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.11",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b)["offsetParent"in a.fn?"offsetParent":"parent"]();return c.length||(c=a("body")),parseInt(c.css("fontSize"),10)},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
// $('.owl-carousel').on('changed.owl.carousel', function(event) {
//   location.hash = 'slide' + event.property.value;
// })
$('.owl-carousel').on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        $('.owl-carousel').trigger('next.owl');
    } else {
        $('.owl-carousel').trigger('prev.owl');
    }
    e.preventDefault();
});

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
  if (document.documentElement.scrollWidth< 500){
    $(".work .item").css({"height":"auto", "width":"calc(100vw - 3%)"});
    $('link[title=owl]').disabled=true;
    document.querySelector('script[src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"]').remove();
    document.querySelector('script[src="work.js"]').remove();
    $('link[title="owl"]').attr('disabled', 'disabled');
    $('link[title="owl"]').remove();
$('[class^="owl"]').removeClass();
$(".work div").removeClass("item");
$(".work img").css({"width": "calc(100vw - 40%)", "position":"relative", "margin-left":"20%"});
$(".work div").addClass("notrans");

}
// var uRl = window.location.hash;
// var pImages = $("div img");
// var myHash = $(".owl-carousel div.center div");


// $(window).scroll(function(){
  // console.log(uRl);
  // for(i=0 ; i<myHash.length; ++i){
  // window.history.replaceState(uRl,"Amir Mohseni | Project 1","bb");
  // var myHas = $(h).attr("data-has");
// };
var imageID = $("div[data-hash]");
console.log($(imageID[0]));
// window.location.replace( baseUrl + '#' + imageID );
