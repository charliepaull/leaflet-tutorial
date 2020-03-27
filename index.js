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
}).addTo(myMap);

// add a marker to the map (can make this a user's current location but will just be at specific coordinates for the moment)
let marker = L.marker([51.5, -0.09]).addTo(myMap);

// adding a circle is the exact same but allows for a 2nd argument to specify the radius in meters
// can also specify color, opacity, and fill color
// let circle = L.circle(coords (coords are in an arr[]), circle attr.)
// DONT FORGET .addTo(name of map)
let circle = L.circle([51.508, -0.11], {
    color: "blue",
    fillColor: "#3399FF",
    opacity: 0.35,
    radius: 500
}).addTo(myMap)

// to add a polygon, just add the coordinates wanted (to as many sides as needed)
// polygon coords is an array of arrs [[]]
let polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(myMap)

// working with popups
// used to attach some information to a particular object
marker.bindPopup("<b>This is</b><br>your current location").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

// Can also use popups as layers (when you need something more than attaching a popup to an object):
// a popup that isn't attached to an object - just a general spot, or maybe where someone clicks on the map

// use openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one which is good for usability.
// let popup = L.popup()
//     .setLatLng([51.5, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(myMap);


// Dealing with Events
// every event in Leaflet (such as a user click), the corresponding object sends an event where you can add a function to it so that something happens - allows for a reaction to a user interaction

// first argument: listener function - an event object

// ex of an alert showing up if clicked anywhere on map, will show coordinates of clicked spot
// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// myMap.on('click', onMapClick);

// makes this a popup instead of an alert
let popup = L.popup();

function onMapClick(event) {
    popup
        .setLatLng(event.latlng)
        .setContent("You clicked the map at " + event.latlng.toString())
        .openOn(myMap);
}

myMap.on('click', onMapClick);