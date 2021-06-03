import React, { useEffect, useContext } from "react";
// import { Redirect } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import AuthContext from '../../utils/authContext'


const Account = (props) => {
  useEffect(() => {
    M.AutoInit();
  })
  useEffect(() => {
    console.log(props);
    // console.log(user);
  }, [])

  const {authData} = useContext(AuthContext)
  console.log(authData)

  
  const user = authData.user
  
  // redirecting if not a registered user
  const [redirect, setRedirect] = React.useState(false)
    useEffect(() => {
      if(authData.isLoggedIn!==true) {
        setRedirect(true)
      }
    },[authData])
    console.log(redirect)
    
  return (
    // !redirect ?
      <div>
        <main>
          <div className="section container">
            <div className="row">
              <div className="col s12 m4">
                <span className="settings-title">
                  <h5>Personal Information</h5>
                </span>
                <p>expand for more details</p>
              </div>

              <div className="col s12 m8">
                <ul className="collapsible">
                  <li>
                    <div className="collapsible-header">Name</div>
                    <div className="collapsible-body">
                      <span>{user.first_name} {user.last_name}</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">Email</div>
                    <div className="collapsible-body">
                      <span>{user.email}</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">Home Location</div>
                    <div className="collapsible-body">
                      <span>{user.zip_code}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col s12 m4">
                <span className="settings-title">
                  <h5>Vehicle Information</h5>
                </span>
                <p>expand for more details</p>
              </div>

              <div className="col s12 m8">
                <ul className="collapsible">
                  <li>
                    <div className="collapsible-header">Vehicle</div>
                    <div className="collapsible-body">
                      <span>{user.car.year} {user.car.make} {user.car.model}</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">Plug Type</div>
                    <div className="collapsible-body">
                      <span>{user.car.evPort}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <div className="center-align">
          <p>Now that you're part of the ChargeBuddy community, </p>
          <p>start adding prices and tips on the Map page</p>
          <a href="/map" className="waves-effect waves-light btn-large lime darken-2">GO TO MAP</a>
        </div>
      </div>
      // : <Redirect to="/login" />
  );
};

export default Account;
