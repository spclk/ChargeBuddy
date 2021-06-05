import React from "react";
import "./StationInfo.css";

function StationInfo(props) {
    const { info } = props;
    const name = `${info.name}`;
    const stationAddy = `${info.address}`;
    const stationStreet = `${info.city}, ${info.state} ${info.zip}`;
    const ports = `Ports: ${info.portTypes}`;
    const format = (num) => num.toLocaleString("en-us", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
    });
    const price = Math.floor((Math.random() * 10 + 5));
    const formatPrice = `Full Recharge: $${format(price)}`;

    return (
        <div>
            <h5 className="name">{name}</h5>
            <p className="station">{stationAddy}</p>
            <p className="station">{stationStreet}</p>
            <p className="station">{ports}</p>
            <p className="station">{formatPrice}</p>
        </div>
    )
}

export default StationInfo;