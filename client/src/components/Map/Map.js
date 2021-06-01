import React, { useRef, useEffect, useState } from "react";
// import dotenv from "dotenv";
import API from '../../utils/API';
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
    
    // The user must first allow the browser to use location services
    const getLocation = () => {
        if (!navigator.geolocation) {
          setStatus('Geolocation is not supported by your browser');
        } else {
          setStatus('Locating...');
          navigator.geolocation.getCurrentPosition((position) => {
            setStatus("Located!");
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            // Once the user allows for location services then the map will zoom in on their location
            map.current.flyTo({
                center: [position.coords.longitude, position.coords.latitude],
                essential: true
            })
          }, () => {
            setStatus('Unable to retrieve your location');
          });
        }
      }

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

    // Extract data from API to create markers for charging stations
    useEffect(() => {
        API.getChargingStations().then(res => {
            console.log("full response", res.data);

            let features = res.data.features;
            // Create empty array to store geoJSON
            let geojson = [];
            for (let i = 0; i < features.length; i++) {
                // console.log(features[i]);
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
            //console.log(geojson[0].features);
            // add markers to map
            for (var i = 0; i < geojson.length; i++){
                geojson[i].features.forEach(function (marker) {
                    // create a HTML element for each feature
                    var el = document.createElement('div');
                    el.className = 'marker';
         
                    // make a marker for each feature and add it to the map
                    new mapboxgl.Marker(el)
                        .setLngLat(marker.geometry.coordinates)
                        .setPopup(
                            new mapboxgl.Popup({ offset: 25 }) // add popups
                                .setHTML(
                                    '<h3>' +
                                    marker.properties.title +
                                    '</h3><p>' +
                                    marker.properties.description +
                                    '</p>'
                                )
                        )
                        .addTo(this.map);
                });
            }
        })
    });

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