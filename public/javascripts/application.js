$(function(){

  // Homeage: Search for Carpool
  $("#home_controller.index #pitch div.try form button").click(function() {
    $("#pitch").children().animate({
      opacity: 0.01
    }).parent().slideUp();
    $("#search_results").append($("#pitch div.try"));
    $("#map").animate({
      height: "520px"
    });
    $("#search_results").animate({
      width: "238px"
    });
    $("#search_results div.try").animate({
      opacity: 1
    });
    $("#pitch div.try").replaceWith("");
    return false;
  });

});