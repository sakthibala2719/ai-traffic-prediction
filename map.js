// Chennai Coordinates
var map = L.map('map').setView([13.0827, 80.2707], 12);
// OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
// Main Marker
var marker = L.marker([13.0827,80.2707]).addTo(map);
marker.bindPopup("<b>Chennai</b><br>AI Traffic Prediction System").openPopup();
// Circle showing traffic area
L.circle([13.0827,80.2707],{
    color:'red',
    fillColor:'#f03',
    fillOpacity:0.3,
    radius:2000
}).addTo(map);