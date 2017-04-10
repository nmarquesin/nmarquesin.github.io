$(document).ready(function() {

  $("#submitBtn").click( function() {
    var url = "https://en.wikipedia.org/wiki/" + $("#text").val();
    window.open(url);
});


});
