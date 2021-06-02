import React from 'react';
import "./Container.css";
import { Component } from 'react';
import API from '../../utils/API';
import { Link } from "react-router-dom";



class Container extends Component {

    componentDidMount() {
        this.getChargingStations();

    }

    getChargingStations = () => {
        API.getChargingStations().then(res => {
            console.log("full response", res.data);

            let features = res.data.features;
            for (let i = 0; i < features.length; i++) {
                console.log(features[i]);
                //extracting coordinates from API
                let coordinates0 = features[i].geometry.coordinates[0];
                console.log(coordinates0);
                //extracting charging port connector types from API
                let evPorts = features[i].properties.ev_connector_types;
                console.log(evPorts)
                //extracting city from API
                let city = features[i].properties.city;
                console.log(city)
                //extracting state from API
                let state = features[i].properties.state;
                console.log(state)
                //extracting street address from API
                let address = features[i].properties.street_address;
                console.log(address)
            }
        })
    }

    render() {
        return (
            <div>
                {/* <Link to="/home"><h5>hello</h5></Link> */}

            </div>
        )
    }

}

export default Container