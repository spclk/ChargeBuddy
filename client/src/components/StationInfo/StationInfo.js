<<<<<<< HEAD
import React, { useContext } from "react";
import AuthContext from '../../utils/authContext'
=======
import React, {useContext} from "react";
import AuthContext from '../../utils/authContext';
import "./StationInfo.css";
>>>>>>> 1d4336172dc37366d68b11c807a56dd5b23b3b0e

function StationInfo(props) {
    const { info } = props;
    const name = `${info.name}`;
    const stationAddy = `${info.address}`;
    const stationStreet = `${info.city}, ${info.state} ${info.zip}`;
    const ports = `Ports: ${info.portTypes}`;

<<<<<<< HEAD


    const { authData } = useContext(AuthContext)

    return (
        <div>

            {authData.isLoggedIn ?
                <h5>user is logged in</h5>
                : <h5>user is not logged in</h5>
            }

            <h5>{name}</h5>
            {station}

=======
    
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
            
>>>>>>> 1d4336172dc37366d68b11c807a56dd5b23b3b0e
        </div>
    )
}

export default StationInfo;