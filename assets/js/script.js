//  top button  //

$(document).ready(function () {
  $(".top").hide(0);

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".top").fadeIn(200);
    } else {
      $(".top").fadeOut(300);
    }
  });
  $(".top").click(function () {
    event.preventDefault();

    $("html , body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// sticky menu bar //

function menuSticky() {
  if ($(".is-sticky-on").length > 0) {
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= 250) {
        $(".is-sticky-on").addClass("is-sticky-menu");
      } else {
        $(".is-sticky-on").removeClass("is-sticky-menu");
      }
    });
  }
}
menuSticky();

// counter //

$(document).ready(function () {
  $(".counter-value").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 5000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});

// testimonial

$(".slider-1").owlCarousel({
  slideBy: 1,
  autoplay: true,
  loop: true,
  autoplaySpeed: 500,
  smartSpeed: 500,
  margin: 10,
  nav: false,
  autoplayHoverPause: true,
  dot: true,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 1,
    },
    991: {
      items: 1,
    },
  },
});

// team

$(".slider-2").owlCarousel({
  slideBy: 1,
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  animateOut: "fadeOut",
  autoplaySpeed: 800,
  smartSpeed: 500,
  margin: 12,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>',
  ],
  navClass: ["owl-prev", "owl-next"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    991: {
      items: 4,
    },
  },
});

// patners

$(".slider-3").owlCarousel({
  slideBy: 1,
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  animateOut: "fadeOut",
  autoplaySpeed: 800,
  smartSpeed: 500,
  margin: 10,
  dots: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    767: {
      items: 2,
    },
    991: {
      items: 5,
    },
  },
});

$(".slider-4").owlCarousel({
  slideBy: 1,
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  autoplaySpeed: 500,
  smartSpeed: 500,
  margin: 12,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>',
  ],
  navClass: ["owl-prev", "owl-next"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    991: {
      items: 4,
    },
  },
});

$(".slider-5").owlCarousel({
  slideBy: 1,
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  autoplaySpeed: 500,
  smartSpeed: 500,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>',
  ],
  navClass: ["owl-prev", "owl-next"],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    767: {
      items: 2,
    },
    991: {
      items: 3,
    },
  },
});

// cursor

const video = document.getElementById("myVideo");
video.addEventListener("ended", () => {
  video.currentTime = 0;
  video.play();
});

// aos liberey //

AOS.init();
