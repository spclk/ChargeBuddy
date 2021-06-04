import React, { useRef, useEffect, useState } from "react";
import API from '../../utils/API';
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import "./style.css"
import ReactMapGL, {GeolocateControl, Marker, Popup} from 'react-map-gl'
import StationInfo from "../StationInfo/StationInfo";
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl'; // eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default; // eslint-disable-line import/no-webpack-loader-syntax

const accessToken = "pk.eyJ1Ijoid2NsYXJrY2l0byIsImEiOiJja3AzNWlyNTEwMzN2MnBvNjJzOWFsdDE3In0.pj6UqUFZUmo1LF4hLeXaQA";

const geolocateControlStyle= {
  right: 10,
  top: 10
};

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(null);
    const [lat, setLat] = useState(null);
    const [zoom, setZoom] = useState(15);
    const [status, setStatus] = useState(null);
    const [viewport, setViewport] = useState({
      width: "100%",
      height: 600,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 12
    });
    const [markers, setMarkers] = useState([]);
    const [popupInfo, setPopupInfo] = useState(null);
    
    // The user must first allow the browser to use location services
    // const getLocation = () => {
    //     if (!navigator.geolocation) {
    //       setStatus('Geolocation is not supported by your browser');
    //     } else {
    //       setStatus('Locating...');
    //       navigator.geolocation.getCurrentPosition((position) => {
    //         setStatus("Located!");
    //         setLat(position.coords.latitude);
    //         setLng(position.coords.longitude);
    //         // Once the user allows for location services then the map will zoom in on their location
    //         map.current.flyTo({
    //             center: [position.coords.longitude, position.coords.latitude],
    //             essential: true
    //         })
    //       }, () => {
    //         setStatus('Unable to retrieve your location');
    //       });
    //     }
    //   }

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/streets-v11',
  //     center: [lng, lat],
  //     zoom: zoom
  //   });
  // }, [lng, lat]);

  // useEffect(() => {
  //   if (!map.current) return; // wait for map to initialize
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });

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
            //console.log(geojson[0].features);
              // add markers to map
              for (var i = 0; i < geojson.length; i++){
                  geojson[i].features.forEach(function (marker) {
                      // make a marker for each feature and add it to the map
                      console.log(marker.geometry.coordinates);
                      // console.log(`
                      // Station Name: ${marker.properties.name}
                      // ${marker.properties.address}
                      // ${marker.properties.city}, ${marker.properties.state} ${marker.properties.zip}
                      // Port Types: ${marker.properties.portTypes}
                      // `);
                      newMarkers.push(marker.geometry.coordinates);
                      newStationInfo.push({
                          name: marker.properties.name,
                          address: marker.properties.address,
                          city: marker.properties.city,
                          state: marker.properties.state,
                          zip: marker.properties.zip,
                          portTypes: marker.properties.portTypes
                      })
                  });
              }
              setMarkers(newMarkers);
              // setPopupInfo(newStationInfo);
              console.log(newStationInfo)
        })
    }, []);

    return (
        <div>
            {/* <div className="sidebar">
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} | Status: {status}
            </div> */}
            {/* <button onClick={getLocation} className="waves-effect waves-light btn"><i className="material-icons left">location_searching</i> Get Location</button> */}
            {/* <div ref={mapContainer} className="map-container" /> */}
            <ReactMapGL mapboxApiAccessToken={accessToken} {...viewport} width="100vw" height="100vh" onViewportChange={setViewport}>
              <GeolocateControl
                fitBoundsOptions={{maxZoom: 12}}
                style={geolocateControlStyle}
                positionOptions={{enableHighAccuracy: true}}
                trackUserLocation={true}
                auto
              />
              {markers.map((marker) => (
                <Marker latitude={marker[1]} longitude={marker[0]} key={marker[0] + marker[1]}>
                  <img src="/images/chargeIcon.png" className="marker" onClick={setPopupInfo}/>
                </ Marker>
              ))}
              {popupInfo && <Popup
                    tipSize={5}
                    latitude={popupInfo.latitude}
                    longitude={popupInfo.longitude}
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