var locality = `/locations`;
// var queryURLgoogle = `https://maps.googleapis.com/maps/api/js?key=yBJAJ69BYp6PCX2ZGwMh4_fJGVxRF6lW68&callback=initMap`
var queryURLbrewery = `http://api.brewerydb.com/v2/${locality}/?key=94780a63bf05dcb19f858d5285c41fbb`
console.log(queryURLbrewery)
var firebaseConfig = {
    apiKey: "AIzaSyAPPCVJIU212WdBYfANzZW1NJnpAA1NNMk",
    authDomain: "beertastic-e3433.firebaseapp.com",
    databaseURL: "https://beertastic-e3433.firebaseio.com",
    projectId: "beertastic-e3433",
    storageBucket: "",
    messagingSenderId: "970654909512",
    appId: "1:970654909512:web:a2becba690b986b4ea447d"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var breweryTypeLoc = `/brewery/:breweryId/locations`;
var beerByBrewery = `/beer/:beerId/breweries`;
var endpoint = "brewery/:breweryId/locations";
var map;
function createMap() {
    var options = {
        center: { lat: 39.74, lng: -104.99 },
        zoom: 8
    };
    map = new google.maps.Map(document.getElementById("map"), options);
    //  $("#map").append(map)
    console.log(map)
    infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (p) {
            var position = {
                lat: p.coords.latitude,
                lng: p.coords.longitude
            };
            infoWindow.setPosition(position);
            infoWindow.setContent("Your location");
            infoWindow.open(map);
        }, function () {
            handleLocationError("Geolocation service failed", map.center);
        })
    } else {
        handleLocationError("No geolocation available", map.center);
    }
}
function handleLocationError(content, position) {
    infoWindow.setPosition(position);
    infoWindow.setContent(content);
    infoWindow.open(map);
};

// firebase.initializeApp(firebaseConfig);

// var database = firebase.database();

// var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.74,-104.99&radius=10000&type=brewery&keyword=brewery&key=AIzaSyBgljKDqtkkeWptCTwsKeNTk3nZ1A3PJPk"
var queryURLbrewery = `https://cors-anywhere.herokuapp.com//https://api.brewerydb.com/v2/locations/?key=94780a63bf05dcb19f858d5285c41fbb`

jQuery.ajaxPrefilter(function(options) {

function brewLoc(){
var locations = [
    data.longitude ,  ""
]}

$("#btn").on("click", function (event) {
    event.preventDefault();
    console.log("we clicked it")
<<<<<<< HEAD
=======
    //Grabbing user input values
// var container = document.getElementById("search");
    $.ajax({
        URL: queryURLbrewery,
        method: "GET"
    }).then(function(response) {
brewLoc(response);
console.log(response)
=======
    }).then(function (response) {
    })

>>>>>>> 371392fb3a5a8e7aff6ad9db7efbb2d979e7f779


    $.ajax({
    URL: queryURLbrewery,
    method: "GET",
}).then(function (data) {
    // brewLoc(response);
    console.log(data.URL)
    console.log(data);
})

        
        
        
        var places = searchBox.getPlaces();
        var input = document.getElementById("search");
        var searchBox = new google.map.places.SearchBox(input);
        
        map.addListener("bounds_changed", function () {
            searchBox.setBounds(map.getBounds());
        });
        
        var markers = [];
        searchBox.addListener("places_changed", function () {
            var places = searchBox.getPlaces();
            
            if (places.length = 0)
            return;
            
            markers.forEach(function (m) { m.setMap(null); });
            markers = [];
            
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (p) {
                if (!p.geometry)
                return;
                
                markers.push(new google.maps.Marker({
                    map: map,
                    title: p.name,
                    position: p.geometry.location
                }));
                
                if (p.geometry.viewport)
                bounds.union(p.geometry.viewport);
                else
                bounds.extend(p.geometry.location);
            });
            map.fitBounds(bounds);
            
            
        });
    });
<<<<<<< HEAD
        
// window.onload = function() {
//     document.getElementById("#my_audio").play();
//  }
=======
});
>>>>>>> 371392fb3a5a8e7aff6ad9db7efbb2d979e7f779


var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  "left": activeItem.position.left + "px", 
  "width": activeWidth + "px"
});

$(".tabs").on("click","a",function(e){
  e.preventDefault();
  $('.tabs a').removeClass("active");
  $(this).addClass('active');
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    "left":itemPos.left + "px", 
    "width": activeWidth + "px"
  });
  var href = $(this).attr("data-href");
  setTimeout(function(){ 
      window.location.href = href;

  },500);
});



// $("#brew-type-loc").on("click", function(event){
//     event.preventDefault();
//     var brewLoc = ("http://api.brewerydb.com/v2/" + endpoint + "/?key=94780a63bf05dcb19f858d5285c41fbb");



//     $.ajax({
//         url: brewLoc,
//         method: "GET"
//     }).then(function(response){
//     })
<<<<<<< HEAD
//     console.log("Click"
=======
//     console.log("Click")})}

>>>>>>> 371392fb3a5a8e7aff6ad9db7efbb2d979e7f779
