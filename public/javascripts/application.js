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
  $("div.location_finder button").live("click", function() {
    $("div.location_search").hide();
    $("div.location_select").show();
    $("div.location_suggestions").html("");
    JSON_url = "http://maps.google.com/maps/geo?q=" + $("#address_query").val() +
               "&key=ABQIAAAAQEr9TuV_HM_RESkrFixrbBQ2zmKkM91hfvLpqxmsruD80EpYvxRJ04C0a46ORhfmQMz7blpad7gahA" +
               "&sensor=false" + "&output=json" + "&callback=?";
    $.getJSON(JSON_url, function(data) {
      jQuery.each(data.Placemark, function (i, location) {
        if (location["AddressDetails"]["Accuracy"] > 6) {
          $("div.location_suggestions").append("<a href='#' title='Select this address' class='select_location'>" + location["address"] + "</a>");
        }
      });
    });
    return false;
  });
  // Select Location
  $("div.location_finder div.location_suggestions a").live("click", function() {
    address = $(this).html();
    $("div.location_select").hide();
    $("div.location_address").show();
    $("div.location_address span.value").html(address);
    $("#address").val(address);
    return false;
  });
  // Try again
  $("div.location_finder p.try_again a").live("click", function() {
    $("div.location_select").hide();
    $("div.location_search").show();
    return false;
  });
  // Find another
  $("div.location_address label.description a").live("click", function() {
    $("div.location_address").hide();
    $("div.location_search").show();
    $("div.location_search span.cancel").show();
    return false;
  });
  // Cancel find another
  $("div.location_search span.cancel a").live("click", function() {
    $("div.location_search").hide();
    $("div.location_search span.cancel").hide();
    $("div.location_address").show();
  });
  // Save and close modal window
  $("#add_a_location #save_location").live("click", function() {
    $("div.modal_window").jqmHide();
  });

});

$().ready(function() {
  $("div.modal_window").jqm();
});