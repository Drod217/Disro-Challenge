$(window).resize(function() {
  location.reload();
});

$(document).ready(function() {
  $(".nav-funds").on("click", function() {
    balance = parseInt($(".balance").text());
    balance += 1.0;
    $(".balance").text(balance.toFixed(2));
  });
});

function myFunction(x) {
  x.classList.toggle("change");
}

$(".hamburger").click(function() {
  $(".left-container").toggle();
  $(".nav-funds").toggle();
  $(".funds").toggle();
  $(".nav-funds").css("height", "10vh");
});
