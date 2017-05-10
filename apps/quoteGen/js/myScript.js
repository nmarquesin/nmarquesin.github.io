
$(document).ready(function() {
  $("#getMessage").on("click", function(){
    $("#getMessage").html("Get Another Quote");
    $.getJSON( "https://random-quote-generator.herokuapp.com/api/quotes/random", function(json){
      console.dir(json);

    var html ='';

    html +="<a class=\"twitter-share-button\" href=\"https://twitter.com/intent/tweet?text=";
    html += json.quote;
    html += " -- ";
    html += json.author;
    html +="\" target=\"blank\"><img src=\"https://static.addtoany.com/images/blog/tweet-button-2015.png\" alt=\"Tweet this\" width=\"80px\"/></a>";
    $(".message").html(json.quote);
    $(".author").html(json.author);
    $(".tweet-this").html(html);

    });
  });
});
