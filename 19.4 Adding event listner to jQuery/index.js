$("h1").css("color", "yellow");
$(document).keypress( function(event) {
    $("h1").text(event.key);
});