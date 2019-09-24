// var queryURLgoogle = `https://maps.googleapis.com/maps/api/js?key=yBJAJ69BYp6PCX2ZGwMh4_fJGVxRF6lW68&callback=initMap`
// // var queryURLbrewery = `http://api.brewerydb.com/v2/${endpoint}/?key=94780a63bf05dcb19f858d5285c41fbb`
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
var locality = `/locations`;
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

$("#btn").on("click", function (event) {
    event.preventDefault();
    console.log("we clicked it")
    //Grabbing user input values
    valueTrain = $("#name-input").val().trim();
    valueDestination = $("#destination-input").val().trim();
    valueFirst = $("#first-input").val().trim();
    valueFrequency = $("#frequency-input").val().trim();




    var places = searchBox.getPlaces();
    var input = document.getElementById("search");
    var searchBox = new google.map.places.searchBox(input);

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

    //  createMap()


// $("#brew-type-loc").on("click", function(event){
//     event.preventDefault();
//     var brewLoc = ("http://api.brewerydb.com/v2/" + endpoint + "/?key=94780a63bf05dcb19f858d5285c41fbb");



//     $.ajax({
//         url: brewLoc,
//         method: "GET"
//     }).then(function(response){
//     })
//     console.log("Click")})}
