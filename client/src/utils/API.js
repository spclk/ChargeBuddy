

import axios from "axios";


export default {
    getChargingStations: function () {
        return axios.get("https://developer.nrel.gov/api/alt-fuel-stations/v1.geojson?api_key=DEMO_KEY&fuel_type=E85,ELEC&state=CA&limit=100");
    }
}






