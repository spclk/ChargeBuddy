import React, { useEffect } from "react";
import { Redirect } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

const Account = (props) => {
  useEffect(() => {
    M.AutoInit();
  })
  useEffect(() => {
    console.log(props);
    // console.log(user);
  }, [])
  const user = props.user
  return (
    !!user ?
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
                      <span>{user.car[0].year} {user.car[0].make} {user.car[0].model}</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">Plug Type</div>
                    <div className="collapsible-body">
                      <span>{user.car[0].evPort}</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">Charging History</div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
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
          <a href="/map" className="waves-effect waves-light btn-large blue-grey lighten-1">GO TO MAP</a>
        </div>
      </div>
      : <Redirect to="/login" />
  );
};

export default Account;
