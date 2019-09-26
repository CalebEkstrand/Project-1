var queryURLgoogle = `https://maps.googleapis.com/maps/api/js?key=yBJAJ69BYp6PCX2ZGwMh4_fJGVxRF6lW68&callback=initMap`;

// var locality = `/locations`;

// var queryURLgoogle = `https://maps.googleapis.com/maps/api/js?key=yBJAJ69BYp6PCX2ZGwMh4_fJGVxRF6lW68&callback=initMap`
// var queryURLbrewery = `http://api.brewerydb.com/v2/locations/?key=94780a63bf05dcb19f858d5285c41fbb`
// console.log(queryURLbrewery)
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



function initAutocomplete() {
    var map = new google.maps.Map(document.getElementById('mapDiv'), {
        center: { lat: 39.7392, lng: -104.9903 },
        zoom: 13,
        mapTypeId: 'roadmap'
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                icon: icon,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

// var queryURL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.74,-104.99&radius=10000&type=brewery&keyword=brewery&key=AIzaSyBgljKDqtkkeWptCTwsKeNTk3nZ1A3PJPk"
var queryURLbrewery = `https://cors-anywhere.herokuapp.com/https://api.brewerydb.com/v2/locations/?key=94780a63bf05dcb19f858d5285c41fbb`

// jQuery.ajaxPrefilter(function(options) {
var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=39.74,-104.99&radius=10000&type=brewery&keyword=brewery&key=AIzaSyBgljKDqtkkeWptCTwsKeNTk3nZ1A3PJPk"


$("#btn").on("click", function (event) {

    event.preventDefault();
    console.log("we clicked it")

    var brewerySearch = $("#search").val().trim();
    var queryURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=yBJAJ69BYp6PCX2ZGwMh4_fJGVxRF6lW68&callback=initMap&q=${brewerySearch}` //add url for google api here, you can use a template literal to include your brewerySearch in the URL 
    console.log(brewerySearch)

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {
    //    var data = response.data;
    //    for (var i = 0; i < data.length; i++){

    //       };


    //    })


    //    var map = new google.maps.Map(document.getElementById('map'), {
    //     center: {lat: -33.8688, lng: 151.2195},
    //     zoom: 13,
    //     mapTypeId: 'roadmap'
    //   });

    //    var input = document.getElementById("search");
    // var searchBox = new google.map.places.SearchBox(input);
    // var places = searchBox.getPlaces();

    // map.addListener("bounds_changed", function () {
    //     searchBox.setBounds(map.getBounds());
    // });

    // var markers = [];
    // searchBox.addListener("places_changed", function () {
    //     var places = searchBox.getPlaces();

    //     if (places.length = 0)
    //         return;

    //     markers.forEach(function (m) { m.setMap(null); });
    //     markers = [];

    //     var bounds = new google.maps.LatLngBounds();
    //     places.forEach(function (p) {
    //         if (!p.geometry)
    //             return;

    //         markers.push(new google.maps.Marker({
    //             map: map,
    //             title: p.name,
    //             position: p.geometry.location
    //         }));

    //         if (p.geometry.viewport)
    //             bounds.union(p.geometry.viewport);
    //         else
    //             bounds.extend(p.geometry.location);
    //     });
    //     map.fitBounds(bounds);


    // });


    function initAutocomplete() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: -33.8688, lng: 151.2195 },
            zoom: 13,
            mapTypeId: 'roadmap'
        });

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
        map.addListener('bounds_changed', function () {
            searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            // Clear out the old markers.
            markers.forEach(function (marker) {
                marker.setMap(null);
            });
            markers = [];

            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                if (!place.geometry) {
                    console.log("Returned place contains no geometry");
                    return;
                }
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                // Create a marker for each place.
                markers.push(new google.maps.Marker({
                    map: map,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                }));

                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
    }
});

$("#beer-search-btn").on("click", function () {
    console.log("clicked beer search");
    var beerSearch = $("#beer-search").val().trim();
    console.log(beerSearch);
    // var brewMapQueryUrl = `http://cors-anywhere.herokuapp.com/http://beermapping.com/webservice/loccity/1e85b90225089a51575fe3432c04261e/${beerSearch}`


    var queryURLbrewery = `https://cors-anywhere.herokuapp.com/http://api.brewerydb.com/v2/locations/?key=94780a63bf05dcb19f858d5285c41fbb&locality=${beerSearch}`
    $.ajax({
        url: queryURLbrewery,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var data = response.data;
        for (var i = 0; i < data.length; i++) {

            $("#beer-table").append($("<tr>").append(
                $("<td>").text(data[i].name),
                $("<td>").text(data[i].streetAddress),
                $("<td>").text(data[i].locationTypeDisplay),
            )) //push pin instead of table, another click event, recenter map setCenter(latLng), google method to recenter map to new lat lon
        }
    })
    $("tbody").empty();
})




var tabs = $('.tabs');
var selector = $('.tabs').find('a').length;
var selector = $(".tabs").find(".selector");
var activeItem = tabs.find('.active');
var activeWidth = activeItem.innerWidth();
$(".selector").css({
    "left": activeItem.position.left + "px",
    "width": activeWidth + "px"
});

$(".tabs").on("click", "a", function (e) {
    e.preventDefault();
    $('.tabs a').removeClass("active");
    $(this).addClass('active');
    var activeWidth = $(this).innerWidth();
    var itemPos = $(this).position();
    $(".selector").css({
        "left": itemPos.left + "px",
        "width": activeWidth + "px"
    });
    var href = $(this).attr("data-href");
    setTimeout(function () {
        window.location.href = href;

    }, 500);
});


// createMap()

// $("#brew-type-loc").on("click", function(event){
//     event.preventDefault();
//     var brewLoc = ("http://api.brewerydb.com/v2/" + endpoint + "/?key=94780a63bf05dcb19f858d5285c41fbb");



