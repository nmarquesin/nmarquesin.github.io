var country;
var city;
var latitude;
var longitude;
var html;
var tempC;
var tempF;
var tempColor;
var unit;
var icon;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude; //60.1839
    longitude = position.coords.longitude;  //5.4638

// This bit requests weather data to the Weather API
  html= "https://api.apixu.com/v1/current.json?key=8ea251502a7642d09da215312172703&q="+String(latitude)+","+String(longitude);

  $.getJSON(html, function(data){
    $(".city").html(data.location.name+", "+data.location.region+" - "+data.location.country);
    $(".position").html("Lat: "+data.location.lat+" & Lon: "+data.location.lon);
        tempC = Math.round(data.current.temp_c);
        tempF = Math.round(data.current.temp_f);
        $(".temp").html(tempC);
        $(".celsius").html(tempC+"&degC");
        $(".fahrenheit").html(tempF+"&degF");
        $(".situation").html(data.current.condition.text);
        icon = "<img src='http:"+data.current.condition.icon+"'>";
        $(".icon").html(icon);
  });

  });
}
