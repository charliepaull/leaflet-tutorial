// let's create a map of the center of London w/ pretty Mapbox Street tiles

// First we’ll initialize the map and set its view to our chosen geographical coordinates and a zoom level:
let myMap = L.map("mapid").setView([51.505, -0.09], 13)

// Note: setView also returns a map object - most Leaflet methods act like this when an explicit value is NOT returned

// access key but hidden in config.js for GitHub
let mykey = config.mapboxKey

// Add a tile layer to add to our map
// Using a Mapbox tile layer here
// have an access token as well
// will have to adjust pixels later (want to use 256x256, not 512^2)
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: mykey
}).addTo(mymap);