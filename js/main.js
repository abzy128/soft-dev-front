// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


//
// Place any custom JS here
//

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })
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
  