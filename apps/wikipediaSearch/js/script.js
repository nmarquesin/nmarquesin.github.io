$(document).ready(function() {

  function open_wiki() {
    var url = "https://en.wikipedia.org/wiki/" + $("#search-text").val();
    window.open(url);
  }

  $(document).keyup(function(event){
    if(event.keyCode == 13){
      console.log(event.keyCode);
      $("#submit-btn").click();
    }
  });

  $("#submit-btn").click( function(){
    open_wiki();
  });


});
