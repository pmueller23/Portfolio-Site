var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

$("a").click(function (e) {
  $("html, body").animate(
    {
      scrollTop: $("#contact").offset().top,
    },
    1000
  );
});

$("#menu li a").on("click", function () {
  $("#menu li a.current").removeClass("current");
  $(this).addClass("current");
});
