// import Map from './component/Map'
import ReactMapGL from 'react-map-gl'
import React, {useRef, useState,useEffect } from 'react'
import './App.css';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hbGlha2VtcCIsImEiOiJja3N4MXRobTEweHBxMm9sZ2ZkYmd2b3cwIn0.3NZvnQPL23BpszenaZXN4A';

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });
  return (
    <div >
      <div ref={mapContainer} className="map-container" />
      {/* <ReactMapGL
      mapboxApiAccessToken={
        'pk.eyJ1IjoiYW1hbGlha2VtcCIsImEiOiJja3N4MXRobTEweHBxMm9sZ2ZkYmd2b3cwIn0.3NZvnQPL23BpszenaZXN4A'}
      {...viewport} onViewportChange={(newView)=> setViewport(newView)}>
      
      </ReactMapGL> */}
    </div>
  );
}

export default App;
