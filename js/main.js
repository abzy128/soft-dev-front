// Animation on hover
var logo = document.getElementById("logo");
logo.addEventListener("mouseover", function (e) {
  e.preventDefault();
  logo.classList.add("animate__animated");
  logo.classList.add("animate__rubberBand");
  logo.classList.add("animate__infinite");
});
logo.addEventListener("mouseout", function (e) {
  e.preventDefault();
  logo.classList.remove("animate__animated");
  logo.classList.remove("animate__rubberBand");
  logo.classList.remove("animate__infinite");
});

// Enable popovers
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

// check OS of user
function getOS() {
  const userAgent = window.navigator.userAgent,
    platform =
      window.navigator?.userAgentData?.platform || window.navigator.platform,
    macosPlatforms = ["macOS", "Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (/Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
}
// Handle download button
var downloadButton = document.getElementById("download-button");
try {
  downloadButton.onclick = function (e) {
    e.preventDefault();
    var os = getOS();
    if (os == "Mac OS") {
      window.location.href = "https://apps.apple.com/us/app/xcode/id497799835";
    } else {
      alert("Sorry, this app is only available on macOS");
    }
  };
} catch (error) {
  console.log(error);
}

// Dark/Light Mode switcher
$("#theme-switch-button").on("click", function (e) {
  e.preventDefault();
  // Play sound on theme change
  new Audio("/soft-dev-front/sound/f1_team_radio.mp3").play();
  new Audio("/sound/f1_team_radio.mp3").play();
  if ($("html").attr("data-bs-theme") == "dark") {
    $("html").attr("data-bs-theme", "light");

    $("#theme-switch-button").removeClass("fa-sun");
    $("#theme-switch-button").addClass("fa-moon");

    $("#logo").attr("src", "/images/icon-dark.svg");

    $("body").removeClass("bg-dark");
    $("body").addClass("bg-light");

    $("nav").removeClass("border-light");
    $("nav").addClass("border-dark");
    $("footer") > $("div").removeClass("border-light");
    $("footer") > $("div").addClass("border-dark");
  } else {
    $("html").attr("data-bs-theme", "dark");

    $("#theme-switch-button").removeClass("fa-moon");
    $("#theme-switch-button").addClass("fa-sun");

    $("#logo").attr("src", "/images/icon-light.svg");

    $("body").removeClass("bg-light");
    $("body").addClass("bg-dark");

    $("nav").removeClass("border-dark");
    $("nav").addClass("border-light");
    $("footer") > $("div").removeClass("border-dark");
    $("footer") > $("div").addClass("border-light");
  }
});
// Open Dropdown menu on hover
$(".dropdown").on("hover", function (e) {
  $(this).addClass("show");
  $(this).find(".dropdown-menu").addClass("show");
});
// Open link on search
$("#search-form").on("submit", function (e) {
  e.preventDefault();
  window.location.href = $("#search-input").val();
});

$("img, p").on("click", function (e) {
  $(this).toggleClass("jello");
});
