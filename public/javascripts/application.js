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
    init_location_finder($(this));
    location_suggestions.html("");
    JSON_url = "http://maps.google.com/maps/geo?q=" + address_query.val() +
               "&key=ABQIAAAAQEr9TuV_HM_RESkrFixrbBQ2zmKkM91hfvLpqxmsruD80EpYvxRJ04C0a46ORhfmQMz7blpad7gahA" +
               "&sensor=false" + "&output=json" + "&callback=?";
    $.getJSON(JSON_url, function(data) {
      location_suggestions_count = 0;
      location_latlng = []
      if (data.Status["code"] == 200) {
        jQuery.each(data.Placemark, function (i, location) {
          if (location["AddressDetails"]["Accuracy"] > 6) {
            location_suggestions.append("<a href='' rel='" + i + "' title='Select this address' class='select_location'>" + location["address"] + "</a>");
            location_suggestions_count++;
            location_latlng[i] = []
            location_latlng[i]["lat"] = location["Point"]["coordinates"][0];
            location_latlng[i]["lng"] = location["Point"]["coordinates"][1];
          }
        });
        if (location_suggestions_count > 0) {
          location_search.removeClass("err");
          location_search.hide();
          location_select.show();
        } else {
          location_search.addClass("err");
        }
      } else {
        location_search.addClass("err");
      }
    });
    return false;
  });
  // Select Location
  $("div.location_finder div.location_suggestions a").live("click", function() {
    init_location_finder($(this));
    address = $(this).html();
    location_select.hide();
    location_address.show();
    location_address.find("span.value").html(address);
    location_address.find("#location_address").val(address);
    i = parseInt($(this).attr("rel"));
    location_address.find("#location_lat").val(location_latlng[i]["lat"]);
    location_address.find("#location_lng").val(location_latlng[i]["lng"]);
    return false;
  });
  // Try again
  $("div.location_finder p.try_again a").live("click", function() {
    init_location_finder($(this));
    location_select.hide();
    location_search.show();
    return false;
  });
  // Find another
  $("div.location_address label.description a").live("click", function() {
    init_location_finder($(this));
    location_address.hide();
    location_search.show();
    location_search.find("span.cancel").show();
    return false;
  });
  // Cancel find another
  $("div.location_search span.cancel a").live("click", function() {
    location_search.hide();
    location_search.find("span.cancel").hide();
    location_address.show();
  });
  // Save and close modal window
  $("#add_a_location #save_location").live("click", function() {
    alert($("#location_lat").val() + "," + $("#location_lng").val());
//    var point = new GLatLng($("#location_lat").val(), $("#location_lng").val());
    var point = new GLatLng(37.4419, -122.1419);
    map.addOverlay(point);
    $("div.modal_window").jqmHide();
    return false;
  });

});

$().ready(function() {
  $("div.modal_window").jqm();
});

function init_location_finder(e) {
  this_location_finder = $(e).parents("div.location_finder")
  location_search = this_location_finder.find("div.location_search");
  location_select = this_location_finder.find("div.location_select");
  location_suggestions = this_location_finder.find("div.location_suggestions");
  location_address = this_location_finder.find("div.location_address");
  address_query = this_location_finder.find("input.address_query");
}

function createMarker(point,html) {
  var marker = new GMarker(point);
  GEvent.addListener(marker, "click", function() {
    marker.openInfoWindowHtml(html);
  });
  return marker;
}