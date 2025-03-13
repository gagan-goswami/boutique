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

AOS.init();

// portfolio tab filters //

$(".owl-filter-bar").on("click", ".item", function (e) {
  e.preventDefault();
  var $item = $(this);
  var filter = $item.data("owl-filter");
  $(".owl-filter-bar .item").removeClass("active");
  $item.addClass("active");
  if (filter === "*") {
    $(".filter-item").show();
  } else {
    $(".filter-item").hide();
    $(filter).show();
  }
  owl.trigger("refresh.owl.carousel");
});

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

// cursor

// packaging

$(".slider-4").owlCarousel({
  slideBy: 1,
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  animateOut: "fadeOut",
  autoplaySpeed: 800,
  smartSpeed: 500,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    767: {
      items: 2,
    },
    991: {
      items: 4,
    },
  },
});

// company profile

$(".slider-5").owlCarousel({
  slideBy: 1,
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  animateOut: "fadeOut",
  autoplaySpeed: 800,
  smartSpeed: 500,
  margin: 10,
  dot: false,
  nav: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    767: {
      items: 2,
    },
    991: {
      items: 4,
    },
  },
});

// company profile
$(document).ready(function () {
  // Initialize Owl Carousel
  $(".slider-6").owlCarousel({
    slideBy: 1,
    autoplay: true,
    autoplayHoverPause: true,
    loop: true,
    dots: false,
    nav: false,
    animateOut: "fadeOut",
    autoplaySpeed: 500,
    smartSpeed: 1000,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      767: {
        items: 3,
      },
      991: {
        items: 4,
      },
    },
  });

  $(".zoomable-image").on("dblclick", function () {
    $(this).toggleClass("zoomed");
  });
});

// useful tools

$(".slider-7").owlCarousel({
  slideBy: 1,
  autoplay: true,
  autoplayHoverPause: true,
  loop: true,
  animateOut: "fadeOut",
  autoplaySpeed: 800,
  smartSpeed: 500,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    767: {
      items: 4,
    },
    991: {
      items: 6,
    },
  },
});

// video bg

// const video = document.getElementById("background-video");
// video.playbackRate = 50;

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("background-video");
  // Try playing the video after a small delay
  setTimeout(function () {
    video.play();
  }, 100);
});

// aos liberey //

AOS.init();

var typing = new Typed(".text", {
  strings: [
    "Social Media Marketing",
    "Website Development",
    "Paid Marketing",
    "Search Engine Optimization",
    "Graphic Designing",
    "Email Marketing",
  ],
  typeSpeed: 60, // Slightly increased for smoother effect
  backSpeed: 30, // Slightly decreased for a more natural feel
  startDelay: 300, // Small delay before starting
  backDelay: 1000, // Pause before backspacing
  smartBackspace: true, // Prevents unnecessary backspacing
  loop: true,
  showCursor: true, // Ensures cursor visibility
  cursorChar: "|", // Custom cursor for better visibility
});

// portfolio //

function showImage(imageSrc, modalImageId) {
  document.getElementById(modalImageId).src = imageSrc;
}
