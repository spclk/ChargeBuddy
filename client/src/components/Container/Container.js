import React from 'react';
import "./style.css";
import { Component } from 'react';
import API from '../../utils/API';



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
                let coordinates0 = features[i].geometry.coordinates[0];
                console.log(coordinates0)
            }
        })
    }

    render() {
        return (
            <div>
                <h1>hello</h1>
            </div>
        )
    }

}

export default Container