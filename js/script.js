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


    $(".card1").mouseover(function(){
        $(".card-title1").show();
    });
    $(".card1").mouseleave(function(){
        $(".card-title1").hide();
    });

    $(".card2").mouseover(function(){
        $(".card-title2").show();
    });
    $(".card2").mouseleave(function(){
        $(".card-title2").hide();
    });

    $(".card3").mouseover(function(){
        $(".card-title3").show();
    });
    $(".card3").mouseleave(function(){
        $(".card-title3").hide();
    });

    $(".card4").mouseover(function(){
        $(".card-title4").show();
    });
    $(".card4").mouseleave(function(){
        $(".card-title4").hide();
    });

    $(".card5").mouseover(function(){
        $(".card-title5").show();
    });
    $(".card5").mouseleave(function(){
        $(".card-title5").hide();
    });

    $(".card6").mouseover(function(){
        $(".card-title6").show();
    });
    $(".card6").mouseleave(function(){
        $(".card-title6").hide();
    });
    $(".card7").mouseover(function(){
        $(".card-title7").show();
    });
    $(".card7").mouseleave(function(){
        $(".card-title7").hide();
    });
    $(".card8").mouseover(function(){
        $(".card-title8").show();
    });
    $(".card8").mouseleave(function(){
        $(".card-title8").hide();
    });


   

  });
  function send(){
    var userName = document.getElementById("form6Example1").value;
    var email = document.getElementById("form6Example2").value;
    var userInput = document.getElementById("form6Example7").value;
    
    
    if (userName !== "" && email !== "" && userInput !== ""){
        alert("Hi " + userName + ", We have received your message via this email " + email + " and will get back to you. For more inquiries, call us: Tel 0712345678/0787654321" );
        var userName="";
        var email="";
        var userInput="";
    }
    else {
        alert("Kindly fill in the form");
        
        reset();
    }
    
}