$(function() {
  $(".contact-button").on("click", function() {
    $(".contact-modal").show();
    $(".modal-layer").show();
    $("body").css("overflow", "hidden");

    $(".modal-layer").on("click", function() {
      $(".contact-modal").hide();
      $(".modal-layer").hide();
      $("body").css("overflow", "visible");
    });
  });
});