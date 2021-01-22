const sections = document.querySelectorAll(".hero");
function goToSection(section) {
  gsap.to(window, {
    scrollTo: {y: section, autoKill: false, offsetY:46},
    duration: .5
  });
}
gsap.from(".li1", {
  scrollTrigger: {
    trigger: ".li1",
    // markers: true,
    start: "top 200",
    end: "top 46",
    toggleActions: "play none reverse none",
    onEnter: () => gsap.to(window, {
      scrollTo: {y: ".li1", autoKill: false, offsetY:46},
      duration: .6
    })}
  });
  gsap.from(".li1", {
    scrollTrigger: {
      trigger: ".li1",
      // markers: true,
      start: "bottom bottom",
      end: "bottom 20%",
      toggleActions: "play none reverse none",
      onEnterBack: () => gsap.to(window, {
        scrollTo: {y: ".li1", autoKill: false, offsetY:46},
        duration: .6
      })}
    });
sections.forEach(section => {
  ScrollTrigger.create({
    trigger: section,
    // markers: true,
    start: "top 42%",
    end: "top 46",
    onEnter: () => goToSection(section),
  });
  ScrollTrigger.create({
    trigger: section,
    // markers: true,
    start: "bottom bottom",
    end: "bottom 20%",
    onEnterBack: () => goToSection(section),
  });
});
function changeSrc (i,j){
  var arr= $(".butts img");
  $(arr[i]).attr("src","pics/icons/gray.svg").css("width", "5px");
  $(arr[j]).attr("src","pics/icons/black.svg").css("width", "6px");
}
gsap.from(".butS", {
  scrollTrigger: {
    trigger: ".butS",
    start: "top 300",
    // markers:true,
    onEnter: () => changeSrc(0,1)
    }
  });
  gsap.from(".butS", {
    scrollTrigger: {
      trigger: ".butS",
      start: "top 50%",
        end: "top bottom",
      // markers:true,
      onEnterBack: () => changeSrc(1,0)
      }
    });
  gsap.from(".butE", {
    scrollTrigger: {
      trigger: ".butE",
      start: "top 300",
      // markers:true,
      onEnter: () => changeSrc(1,2)
      }
    });
    gsap.from(".butE", {
      scrollTrigger: {
        trigger: ".butE",
        start: "top 50%",
          end: "top bottom",
        // markers:true,
        onEnterBack: () => changeSrc(2,1)
        }
      });
  function changesrc (){
    var arr= $(".butts img");
    $(arr[1]).attr("src","pics/icons/gray.svg").css("width", "5px");
    $(arr[2]).attr("src","pics/icons/black.svg").css("width", "6px");
  }

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
  $(".hero").removeClass("hero");
  $(".li1").removeClass("li1");
}
