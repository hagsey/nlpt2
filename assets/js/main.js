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

    var x = sessionStorage.getItem("respPopUp");

    if (!x) {
      setTimeout(function() {
          $("#email-popup").fadeIn();
          $("body").css("overflow", "hidden");
          sessionStorage.setItem("respPopUp", true);
          $(".fa-times, .no-thanks, .yes-please").on("click", function() {
              $("body").css("overflow", "scroll");
              $("#email-popup").hide();
          });
      }, 7000);      
    }
});