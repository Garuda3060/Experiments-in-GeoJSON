$(function () {
    // Instantiate MapBox map
    var map = L.mapbox.map('map', 'miskotte.hf27oe0n');
    map.setView([10.1, 125.6], 7);
    // Gather GeoJSON points from CouchDB/Cloudant using JSONP
    $.getJSON("https://cartography.cloudant.com/maps/_design/coordinates/_view/getPoints?callback=?", function (result) {
        var points = result.rows;
        var geoJSON =[];
        for (var i in points) {
            geoJSON[ "locations"] = geoJSON.push(points[i].value);
        }
        // Plot GeoJSON points
        L.mapbox.featureLayer(geoJSON).addTo(map);
    });
});
