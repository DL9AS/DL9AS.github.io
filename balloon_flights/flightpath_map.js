/*
 * flightpath map generation
 */

var map_array = [];
var polyline_array = [];

function generate_map_with_polyline(map_name, path_variable, balloon_icon_size)
{
    // initialise leaflet map
    map_array.push (L.map(map_name, {fullscreenControl: true}).setView([52, 13], 10));

    // add openstreetmap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map_array[map_array.length - 1]);

    // add polyline from pathvariable
    polyline_array.push (L.polyline(path_variable, {color: 'red'}).addTo(map_array[map_array.length - 1]));

    // zoom the map to the polyline
    map_array[map_array.length - 1].fitBounds(polyline_array[polyline_array.length - 1].getBounds());

    // add high altitude balloon with radiosonde logo at end of the path
    var high_altitude_balloon_with_radiosonde_logo = L.icon({iconUrl: 'high_altitude_balloon_with_radiosonde_logo.png', iconSize:     [355*balloon_icon_size, 495*balloon_icon_size],  iconAnchor:   [(355*balloon_icon_size)/2, (495*balloon_icon_size)-2],});
    L.marker([path_variable[path_variable.length - 1][0], path_variable[path_variable.length - 1][1]], {icon: high_altitude_balloon_with_radiosonde_logo}).addTo(map_array[map_array.length - 1]);
}

function generate_map_without_polyline(map_name)
{
    // initialise leaflet map for
    map_array.push (L.map(map_name).setView([52.5, 13.4], 8));

    // add openstreetmap layer 
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map_array[map_array.length - 1]);
}