// var queryURLgoogle = `https://maps.googleapis.com/maps/api/js?key=yBJAJ69BYp6PCX2ZGwMh4_fJGVxRF6lW68&callback=initMap`
// // var queryURLbrewery = `http://api.brewerydb.com/v2/${endpoint}/?key=94780a63bf05dcb19f858d5285c41fbb`

var breweryTypeLoc = `/brewery/:breweryId/locations`;
var beerByBrewery = `/beer/:beerId/breweries`;
var locality = `/locations`;
var endpoint = "brewery/:breweryId/locations";
var map = function initMap(){
    map = new google.maps.Map(document.getElementById('map'))

    }
initMap();

$("#brew-type-loc").on("click", function(event){
    event.preventDefault();
    var brewLoc = ("http://api.brewerydb.com/v2/" + endpoint + "/?key=94780a63bf05dcb19f858d5285c41fbb");
    
    console.log(map)

    $.ajax({
        url: brewLoc,
        method: "GET"
    }).then(function(response){
        console.log("Click")
    })
  }
);