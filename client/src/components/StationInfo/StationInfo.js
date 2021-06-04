import React, {useContext} from "react";
import AuthContext from '../../utils/authContext';
import "./StationInfo.css";

function StationInfo(props) {
    const {info} = props;
    const name = `${info.name}`;
    const stationAddy = `${info.address}`;
    const stationStreet = `${info.city}, ${info.state} ${info.zip}`;
    const ports = `Ports: ${info.portTypes}`;

    
    // const {authData} = useContext(AuthContext)

    return (
        <div>
            
            {/* {authData.isLoggedIn ?
            <h5>user is logged in</h5>
            : <h5>user is not logged in</h5>
            } */}

            <h5 className="name">{name}</h5>
            <p className="station">{stationAddy}</p>
            <p className="station">{stationStreet}</p>
            <p className="station">{ports}</p>
            
        </div>
    )
}

export default StationInfo;