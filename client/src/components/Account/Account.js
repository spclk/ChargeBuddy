import React, { useEffect, useContext } from "react";
import M from 'materialize-css/dist/js/materialize.min.js';
import AuthContext from '../../utils/authContext'

const Account = (props) => {
  useEffect(() => {
    M.AutoInit();
  })
  useEffect(() => {
  }, [])

  // Authorized users data from context
  const { authData } = useContext(AuthContext)
  
  const user = authData.user

  // redirecting if not a registered user
  const [redirect, setRedirect] = React.useState(false)
  useEffect(() => {
    if (authData.isLoggedIn !== true) {
      setRedirect(true)
    }
  }, [authData])

  return (
    user &&
    <div>
      <main>
        <div className="section container">
          <div className="row">
            <div className="col s12 m4">
              <span className="settings-title">
                <h5>Personal Information</h5>
              </span>
              <p className="lime-text text-darken-3">expand for more details</p>
            </div>

            <div className="col s12 m8">
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header">Name</div>
                  <div className="collapsible-body lime lighten-4">
                    <span>{user.first_name} {user.last_name}</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">Email</div>
                  <div className="collapsible-body lime lighten-4">
                    <span>{user.email}</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">Home Location</div>
                  <div className="collapsible-body lime lighten-4">
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
              <p className="lime-text text-darken-3">expand for more details</p>
            </div>

            <div className="col s12 m8">
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header">Vehicle</div>
                  <div className="collapsible-body lime lighten-4">
                    <span>{user.car.year} {user.car.make} {user.car.model}</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">Plug Type</div>
                  <div className="collapsible-body lime lighten-4">
                    <span>{user.car.evPort}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <div className="center-align">
        <h6>Now you're part of the ChargeBuddy community! </h6>
        <br/>
        <a href="/map" className="waves-effect waves-light btn-large lime darken-2">GO TO MAP</a>
      </div>
    </div>
  );
};

export default Account;
