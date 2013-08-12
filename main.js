$(document).ready(function () {

    $("#mood").click(function () {
        $("#imgToggler img").toggle().toggleClass('show');
    });
    $("#jump").click(function () {
        $("#imgToggler img.show").effect('bounce',2000);
    });
    $("#left").click(function(){
      $("#imgToggler").css("margin-left",'+=50');
        
    });
    $("#right").click(function(){
      $("#imgToggler").css("margin-left", "-=50" );

    });
    $("#top").click(function(){
      $("#imgToggler").css( "margin-top", "-=50" );

    });
    $("#down").click(function(){
      $("#imgToggler").css( "margin-top", "+=50" );
    });
});