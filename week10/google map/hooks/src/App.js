// import Map from './component/Map'
import ReactMapGL from 'react-map-gl'
import React, { useState } from 'react'
import './App.css';

function App() {
  let [viewport , setViewport] =  useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom:8
  })

  return (
    <div >
      <ReactMapGL
      mapboxApiAccessToken={'pk.eyJ1IjoiYW1hbGlha2VtcCIsImEiOiJja3N4MXRobTEweHBxMm9sZ2ZkYmd2b3cwIn0.3NZvnQPL23BpszenaZXN4A'}
      {...viewport} onViewportChange={(newView)=> setViewport(newView)}>
      
      </ReactMapGL>
    </div>
  );
}

export default App;
