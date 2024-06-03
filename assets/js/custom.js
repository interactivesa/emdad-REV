

$(document).ready(function () {






    // swiper home banner
    let swiper = new Swiper(".homeSwiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    let swiper2 = new Swiper(".partnersSwiper", {
        slidesPerView: 5,
        // width:auto,
        spaceBetween: 20,
        slidesPerGroup: 5,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
            slidesPerGroup: 1,
          },
          // when window width is >= 480px
          700: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
          },
          // when window width is >= 640px
          1000: {
            slidesPerView: 3,
            spaceBetween: 40,
            slidesPerGroup: 3,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 20,
            slidesPerGroup: 5,
          }
        },
        pagination: {
          el: ".swiper-pagi",
          clickable: true,
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      });


      let cStudySwiper = new Swiper(".caswStudySwiper", {
        slidesPerView: 2,
        // width:auto,
        spaceBetween: 90,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          700: {
            slidesPerView: 2,
            spaceBetween: 90,
          },
          // when window width is >= 640px
         
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });




      // Custom function which toggles between sticky class (is-sticky)
    //   var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
    //     var stickyHeight = sticky.outerHeight();
    //     var stickyTop = stickyWrapper.offset().top;
    //     if (scrollElement.scrollTop() >= stickyTop) {
    //         stickyWrapper.height(stickyHeight);
    //         sticky.addClass("is-sticky");
    //     }
    //     else {
    //         sticky.removeClass("is-sticky");
    //         stickyWrapper.height('auto');
    //     }
    // };

    // Find all data-toggle="sticky-onscroll" elements
    // $('[data-toggle="sticky-onscroll"]').each(function () {
    //     var sticky = $(this);
    //     var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    //     sticky.before(stickyWrapper);
    //     sticky.addClass('sticky');

    //     // Scroll & resize events
    //     $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
    //         stickyToggle(sticky, stickyWrapper, $(this));
    //     });

    //     // On page load
    //     stickyToggle(sticky, stickyWrapper, $(window));
    // });
// end document ready
});


  if($('.homeClassParent').length ){
    $('.menuCustom').addClass('homeClass')
  //   $(window).scroll(function() {    
  //     var scroll = $(window).scrollTop();
  
  //     if (scroll >= 100) {
  //         $(".menuCustom ").removeClass("homeClass");
  //     } else {
  //         $(".menuCustom ").addClass("homeClass");
  //     }
  // });
 }




//  home counting up
 if($('.contributions').length ){
  var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

  var $counters = $(".counter");

  /* Start counting, do this on DOM ready or with Waypoints. */
  $counters.each(function (ignore, counter) {
    var waypoint = new Waypoint({
      element: $(this),
      handler: function () {
        counterUp(counter, {
          duration: 2000,
          delay: 5,
        });
        // this.destroy();
      },
      offset: "bottom-in-view",
    });
  });
}




$( ".our-solutions .sol-card" ).hover(
  function() {
    $( ".our-solutions .sol-card" ).removeClass("active")
    $( this ).addClass("active");

  },

);
