
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbGlha2VtcCIsImEiOiJja3N4MXRobTEweHBxMm9sZ2ZkYmd2b3cwIn0.3NZvnQPL23BpszenaZXN4A';
var map = new mapboxgl.Map({
container: 'YOUR_CONTAINER_ELEMENT_ID',
style: 'mapbox://styles/mapbox/streets-v11'
});

import React from 'react'

function Map() {
    return (
        <div>
            
        </div>
    )
}

export default Map
