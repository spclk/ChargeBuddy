import React, {useContext} from "react";
import AuthContext from '../../utils/authContext'

function StationInfo(props) {
    const {info} = props;
    const name = `${info.longitude}, ${props.latitude}`;

    
    const {authData} = useContext(AuthContext)

    return (
        <div>

        {authData.isLoggedIn ?
        <h5>user is logged in</h5>
        : <h5>user is not logged in</h5>
        }


            {name}
        </div>
    )
}

export default StationInfo;