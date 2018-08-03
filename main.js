$(document).ready(function() {
  $(".nav-funds").on("click", function() {
    balance = parseInt($(".balance").text());
    balance += 1.0;
    $(".balance").text(balance.toFixed(2));
  });
});
