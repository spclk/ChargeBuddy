import React from "react";

function StationInfo(props) {
    const {info} = props;
    const name = `${info.longitude}, ${props.latitude}`;

    return (
        <div>
            {name}
        </div>
    )
}

export default StationInfo;