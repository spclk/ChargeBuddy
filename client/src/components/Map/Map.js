// Import dependencies and components
import React, { useEffect, useState } from "react";
import API from '../../utils/API';
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./style.css"
import ReactMapGL, { GeolocateControl, Marker, Popup } from 'react-map-gl'
import StationInfo from "../StationInfo/StationInfo";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line import/no-webpack-loader-syntax

const accessToken = "pk.eyJ1Ijoid2NsYXJrY2l0byIsImEiOiJja3AzNWlyNTEwMzN2MnBvNjJzOWFsdDE3In0.pj6UqUFZUmo1LF4hLeXaQA";

const geolocateControlStyle = {
  right: 10,
  top: 10
};

export default function Map() {
  // Set state
  const [viewport, setViewport] = useState({
    width: "100%",
    height: 600,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 12
  });
  const [markers, setMarkers] = useState([]);
  const [popupInfo, setPopupInfo] = useState(null);

  // Extract data from API to create markers for charging stations
  useEffect(() => {
    API.getChargingStations().then(res => {
      console.log("full response", res.data);

      let features = res.data.features;
      // Create empty array to store geoJSON
      let geojson = [];
      // Create empty array to store charging station coordinates
      let newMarkers = [];
      // Create empty array to store station info
      let newStationInfo = [];
      for (let i = 0; i < features.length; i++) {
        //extracting data from API
        let lng = features[i].geometry.coordinates[0];
        let lat = features[i].geometry.coordinates[1];
        let portType = features[i].properties.ev_connector_types;
        let name = features[i].properties.station_name;
        let city = features[i].properties.city;
        let state = features[i].properties.state;
        let address = features[i].properties.street_address;
        let zip = features[i].properties.zip;
        // Push API data into geoJSON array
        geojson.push({
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': [lng, lat]
              },
              'properties': {
                'name': name,
                'address': address,
                'city': city,
                'state': state,
                'zip': zip,
                'portTypes': portType
              }
            },]
        });
      };
      // Push data into state array
      for (var i = 0; i < geojson.length; i++) {
        geojson[i].features.forEach(function (marker) {
          newMarkers.push({
            coordinates: marker.geometry.coordinates,
            name: marker.properties.name,
            address: marker.properties.address,
            city: marker.properties.city,
            state: marker.properties.state,
            zip: marker.properties.zip,
            portTypes: marker.properties.portTypes
          });
        });
      }
      setMarkers(newMarkers);
    })
  }, []);

  return (
    <div>
      <div className="sidebar">
        Welcome to the Map Page! We will locate charging stations in your area.
            </div>
      <ReactMapGL mapboxApiAccessToken={accessToken} {...viewport} width="100vw" height="100vh" onViewportChange={setViewport}>
        <GeolocateControl
          fitBoundsOptions={{ maxZoom: 12 }}
          style={geolocateControlStyle}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        />
        {markers.map((marker) => (
          <Marker latitude={marker.coordinates[1]} longitude={marker.coordinates[0]} key={marker.coordinates[0] + marker.coordinates[1]} onClick={e => { e.preventDefault(); setPopupInfo(marker) }}>
            <img src="/images/chargeIcon.png" className="marker" />
          </ Marker>
        ))}
        {popupInfo && <Popup
          tipSize={5}
          latitude={popupInfo.coordinates[1]}
          longitude={popupInfo.coordinates[0]}
          closeOnClick={false}
          onClose={setPopupInfo}
          anchor="top" >
          <StationInfo info={popupInfo} />
        </Popup>}
      </ReactMapGL>
      {/* <Login/> */}
    </div>
  );
}