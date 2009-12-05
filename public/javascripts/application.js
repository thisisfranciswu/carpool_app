$(function(){

  // Homepage: Search for Carpool
  $("#home_controller.index #pitch div.try form button").live("click", function() {
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

  // Homepage: Refine Search for Carpool
  $("#home_controller.index #search_results div.try form button").live("click", function() {
    return false;
  });

  // Add a location
  $("#add_a_location #find_location").live("click", function() {
    $("#did_you_mean").show();
    return false;
  });
  $("#add_a_location #save_location").live("click", function() {
    $("div.modal_window").jqmHide();
  });

  // Find Location
  $("button.find_location").live("click", function() {
    $(this).parent().next().show();
    return false;
  });
  $("#add_a_location #save_location").live("click", function() {
    $("div.modal_window").jqmHide();
  });

});

$().ready(function() {
  $("div.modal_window").jqm();
});