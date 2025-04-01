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
  nav: false,
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

// track order //

// Toggle between tabs
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    if (tab.textContent === "Track Order") {
      document.getElementById("guestTrack").style.display = "block";
      document.getElementById("ordersList").style.display = "none";
    } else {
      document.getElementById("guestTrack").style.display = "none";
      document.getElementById("ordersList").style.display = "block";
    }
  });
});

// Tracking Modal Functions
function openTrackingModal(orderId) {
  const modal = document.getElementById("trackingModal");
  document.getElementById("modalOrderId").textContent = orderId;

  // Update modal content based on orderId if needed
  // This is where you would fetch real order data in a production environment

  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeTrackingModal() {
  const modal = document.getElementById("trackingModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Close modal when clicking outside
window.addEventListener("click", (event) => {
  const modal = document.getElementById("trackingModal");
  if (event.target === modal) {
    closeTrackingModal();
  }
});

// Login/Register button functionality
document.getElementById("loginBtn").addEventListener("click", () => {
  alert("Login functionality would go here");
  // In a real implementation, this would redirect to login page or show login modal
});

document.getElementById("registerBtn").addEventListener("click", () => {
  alert("Register functionality would go here");
  // In a real implementation, this would redirect to register page
});

// Guest tracking form submission
document.querySelector(".track-form button").addEventListener("click", () => {
  const orderId = document.querySelector(
    '.track-form input[type="text"]'
  ).value;
  const phone = document.querySelector(
    '.track-form input[type="text"]:nth-child(2)'
  ).value;

  if (!orderId || !phone) {
    alert("Please enter both Order ID and Phone Number");
    return;
  }

  // In a real implementation, this would validate and fetch order details
  alert(`Tracking order ${orderId} with phone ${phone}`);
});
