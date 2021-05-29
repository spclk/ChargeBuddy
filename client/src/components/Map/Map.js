import React, { useRef, useEffect, useState } from "react";
// import dotenv from "dotenv";
import "./style.css"
// import Mapbox
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken = "pk.eyJ1Ijoid2NsYXJrY2l0byIsImEiOiJja3AzNWlyNTEwMzN2MnBvNjJzOWFsdDE3In0.pj6UqUFZUmo1LF4hLeXaQA";

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [zoom, setZoom] = useState(15);
  const [status, setStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus("Located!");
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        map.current.flyTo({
          center: [position.coords.longitude, position.coords.latitude],
          essential: true
        })
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  }, [lng, lat]);

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // useEffect(() => {
  //     if (!map.current) return; // wait for map to initialize
  //     map.current.on('move', () => {
  //         setLng(lng);
  //         setLat(lat);
  //         setZoom(map.current.getZoom().toFixed(2));
  //     });
  // }, [lng, lat]);

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} | Status: {status}
      </div>
      <button onClick={getLocation} className="waves-effect waves-light btn"><i className="material-icons left">location_searching</i> Get Location</button>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}