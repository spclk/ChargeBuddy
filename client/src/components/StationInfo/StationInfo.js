import React, { useContext } from "react";
import AuthContext from '../../utils/authContext'

function StationInfo(props) {
    const { info } = props;
    const name = `${info.name}`;
    const station = `
        ${info.address}
        ${info.city}, ${info.state} ${info.zip}
        Available Port Types: ${info.portTypes}
    `



    const { authData } = useContext(AuthContext)

    return (
        <div>

            {authData.isLoggedIn ?
                <h5>user is logged in</h5>
                : <h5>user is not logged in</h5>
            }

            <h5>{name}</h5>
            {station}

        </div>
    )
}

export default StationInfo;