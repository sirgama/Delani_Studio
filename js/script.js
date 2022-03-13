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