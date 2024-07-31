// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

// protfolio filters
$(window).on("load", function () {
  var t = $(".portfolio-container");
  t.isotope({
    filter: ".new",
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: !1,
    },
  }),
    $(".filters a").click(function () {
      $(".filters .active").removeClass("active"), $(this).addClass("active");
      var i = $(this).attr("data-filter");
      return (
        t.isotope({
          filter: i,
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1,
          },
        }),
        !1
      );
    });
});

// google maps
function initMap() {
  // Styles a map in night mode.
  var map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.674, lng: -73.945 },
    zoom: 12,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });
}

const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  const hCaptcha = form.querySelector(
    "textarea[name=h-captcha-response]"
  ).value;

  if (!hCaptcha) {
    e.preventDefault();
    alert("Please fill out captcha field");
    return;
  }
});

function contactMe(option) {
  const greeting = "Hello, Stacy! How are you doing today? ";
  const userText =
    " My dog is [dog breed] and [dog age] years old. Our case is [short description].";
  if (option === "long-term") {
    const text =
      greeting + "I am interested in a long-term partnership." + userText;
    document.getElementById("user-text-area").value = text;
  } else if (option === "starter") {
    const text = greeting + "I am interested in a starter pack." + userText;
    document.getElementById("user-text-area").value = text;
  } else if (option === "daily") {
    const text = greeting + "I am interested in daily pack." + userText;
    document.getElementById("user-text-area").value = text;
  } else if (option === "favorite") {
    const text = greeting + "I am interested in favorite pack." + userText;
    document.getElementById("user-text-area").value = text;
  } else if (option === "fluffy") {
    const text = greeting + "I am interested in fluffy pack." + userText;
    document.getElementById("user-text-area").value = text;
  }

  // scroll to contact form
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function like(id) {
  const likeButton = document.getElementById(id);
  const likeCount = likeButton.querySelector("span");
  const currentCount = parseInt(likeCount.innerHTML);
  if (likeButton.style.color === "red") {
    likeCount.innerHTML = currentCount - 1;
    likeButton.disabled = false;
    likeButton.style.color = "black";
    return;
  }
  likeCount.innerHTML = currentCount + 1;
  likeButton.disabled = true;
  likeButton.style.color = "red";
}
