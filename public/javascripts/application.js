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

  // Find Location
  $("button.find_location").live("click", function() {
    JSON_url = "http://maps.google.com/maps/geo?q=" + $("#address").val() +
               "&key=ABQIAAAAQEr9TuV_HM_RESkrFixrbBQ2zmKkM91hfvLpqxmsruD80EpYvxRJ04C0a46ORhfmQMz7blpad7gahA" +
               "&sensor=false" + "&output=json" + "&callback=?";
    var possible_location = [];
    $.getJSON(JSON_url, function(data) {
      jQuery.each(data.Placemark, function (i, location) {
        possible_location[i] = [];
        possible_location[i]["address"] = location["address"];
        alert(possible_location[i]["address"]);
      });
    });

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