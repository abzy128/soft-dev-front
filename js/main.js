$("#theme-switch-button").on("click", function (e) {
  e.preventDefault();
  if ($("html").attr("data-bs-theme") == "dark") {
    
    $("html").attr("data-bs-theme", "light");
    
    $("#theme-switch-button").removeClass("fa-sun");
    $("#theme-switch-button").addClass("fa-moon");
    
    $("#logo").attr("src", "/images/icon-dark.svg");
    
    $("body").removeClass("bg-dark");
    $("body").addClass("bg-light");
  } else {
    $("html").attr("data-bs-theme", "dark");
    
    $("#theme-switch-button").removeClass("fa-moon");
    $("#theme-switch-button").addClass("fa-sun");
    
    $("#logo").attr("src", "/images/icon-light.svg");

    $("body").removeClass("bg-light");
    $("body").addClass("bg-dark");
  }
});
$('.dropdown').hover(function() {
  $(this).addClass('show');
  $(this).find('.dropdown-menu').addClass('show');
}, function() {
  $(this).removeClass('show');
  $(this).find('.dropdown-menu').removeClass('show');
});