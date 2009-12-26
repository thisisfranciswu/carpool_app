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
      if (data.Status["code"] == 200) {
        location_suggestions_count = 0;
        jQuery.each(data.Placemark, function (i, location) {
          if (location["AddressDetails"]["Accuracy"] > 6) {
            location_suggestions.append("<a href='' title='Select this address' class='select_location'>" + location["address"] + "</a>");
            location_suggestions_count++;
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
    location_address.find("input[type=hidden]").val(address);
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
    $("div.modal_window").jqmHide();
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