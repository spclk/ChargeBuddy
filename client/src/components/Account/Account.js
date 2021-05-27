import React from "react";

const Account = () => {
  return (
    <div>
      <main>
        <div className="section container">
          <div className="row">
            <div className="col s12 m4">
              <span className="settings-title">
                <h5>Personal Information</h5>
              </span>
              <p>your info</p>
            </div>

            <div className="col s12 m8">
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header">Name</div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">Email</div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">Home Location</div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
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
              <p>vehicle info</p>
            </div>

            <div className="col s12 m8">
              <ul className="collapsible">
                <li>
                  <div className="collapsible-header">Vehicle</div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">Plug Type</div>
                  <div className="collapsible-body">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header">Charging</div>
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
      <a className="waves-effect waves-light btn-large">GO TO MAP</a>
      </div>
      <h1>My car information</h1>
    </div>
  );
};

export default Account;
