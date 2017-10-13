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

    // Subscribe popup
    
    var visitedPage = sessionStorage.getItem("respPopUp");

    setTimeout(function() {
      $(".hover-layer").on("mouseover", function() {
        if (!visitedPage) {
          $("#email-popup").fadeIn();
          $("body").css("overflow", "hidden");
         
          visitedPage = true;
          sessionStorage.setItem("respPopUp", true);
         
          $(".fa-times, .no-thanks, .yes-please").on("click", function() {
            $("body").css("overflow", "scroll");
            $("#email-popup").hide();
          });
        }
      });
    }, 5000);
});