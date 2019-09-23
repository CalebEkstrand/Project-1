// var queryURLgoogle = `https://maps.googleapis.com/maps/api/js?key=yBJAJ69BYp6PCX2ZGwMh4_fJGVxRF6lW68&callback=initMap`
// // var queryURLbrewery = `http://api.brewerydb.com/v2/${endpoint}/?key=94780a63bf05dcb19f858d5285c41fbb`

var breweryTypeLoc = `/brewery/:breweryId/locations`;
var beerByBrewery = `/beer/:beerId/breweries`;
var locality = `/locations`;
var endpoint = "brewery/:breweryId/locations";
var map, infoWindow;
 function createMap(){
     var options = {
         center: {lat: 39.74, lng: 104.99},
         zoom: 8
     };
     map = new google.maps.Map(document.getElementById("map"), options);
    //  $("#map").append(map)
     console.log(map)
    //  createMap()
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
     function handleLocationError (content, position) {
         infoWindow.setPosition(position);
         infoWindow.setContent(content);
         infoWindow.open(map);
     };
 

// $("#brew-type-loc").on("click", function(event){
//     event.preventDefault();
//     var brewLoc = ("http://api.brewerydb.com/v2/" + endpoint + "/?key=94780a63bf05dcb19f858d5285c41fbb");
    
    

//     $.ajax({
//         url: brewLoc,
//         method: "GET"
//     }).then(function(response){
//     })
//     console.log("Click")
//   }
// );