$("#theme-switch-button").on("click", function (e) {
  e.preventDefault();
  if ($("html").attr("data-bs-theme") == "dark") {
    $("html").attr("data-bs-theme", "light");
    $("#theme-switch-button").removeClass("fa-sun");
    $("#theme-switch-button").addClass("fa-moon");
  } else {
    $("html").attr("data-bs-theme", "dark");
    $("#theme-switch-button").removeClass("fa-moon");
    $("#theme-switch-button").addClass("fa-sun");
  }
});
