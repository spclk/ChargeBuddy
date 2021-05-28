import React from 'react';
import "./Container.css";
import { Component } from 'react';
import API from '../../utils/API';
import {Link} from "react-router-dom";



class Container extends Component {

    // componentDidMount() {
    //     this.getChargingStations();

    // }

    // getChargingStations = () => {
    //     API.getChargingStations().then(res => {
    //         console.log("full response", res.data);

    //         let features = res.data.features;
    //         for (let i = 0; i < features.length; i++) {
    //             console.log(features[i]);
    //             //extracting data from API
    //             let lng = features[i].geometry.coordinates[0];
    //             let lat = features[i].geometry.coordinates[1];
    //             let portType = features[i].properties.ev_connector_types;
    //             let name = features[i].properties.station_name;
    //             let city = features[i].properties.city;
    //             let state = features[i].properties.state;
    //             let address = features[i].properties.street_address;
    //             let zip = features[i].properties.zip;
    //             console.log(`Longitude: ${lng}, Latitude: ${lat}`);
    //             console.log(`Type(s) of charging ports: ${portType}`);
    //             console.log(
    //                 `
    //                 ${name}
    //                 ${address}
    //                 ${city}, ${state} ${zip}
    //                 `
    //             )
    //             console.log(`-----------------------`);
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                {/* <Link to="/home"><h5>hello</h5></Link> */}
                
            </div>
        )
    }

}

export default Container