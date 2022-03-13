$(document).ready(function() {
    $(".img1, .titl1").click(function() {
      $(".what1").toggle();
      $(".img1").toggle();
    });
    $(".what1").click(function() {
        $(".img1").toggle();
        $(".what1").toggle();
      });


      $(".img2, .titl2").click(function() {
        $(".what2").toggle();
        $(".img2").toggle();
      });
      $(".what2").click(function() {
          $(".img2").toggle();
          $(".what2").toggle();
        });

        $(".img3, .titl3").click(function() {
            $(".what3").toggle();
            $(".img3").toggle();
          });
          $(".what3").click(function() {
              $(".img3").toggle();
              $(".what3").toggle();
            });
  });
  