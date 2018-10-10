// script.js
$( "span" ).each(function( index ) {
    var eventName = $(this).text();
    if(eventName === "Startups2Students") {
        var newString = eventName.substring(0, 9) + "<br>" + eventName.substring(9);
        $("span:contains('2')").replaceWith(newString);
    }
  });

