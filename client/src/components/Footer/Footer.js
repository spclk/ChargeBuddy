import React from "react";
import Home from "../Home/Home";
import Account from "../Account/Account";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";

const Footer = (props) => {
  let history = useHistory();
  const handleClickHome = () => {
    history.push("/home");
  };
  const handleMapClick = () => {
    history.push("/map");
  };
  const handleCarClick = () => {
    history.push("/mycar");
  };
  return (
    <footer className="page-footer card-content valign center ">
      <div className="nav-content container">
        <ul className="tabs tabs-transparent">
          <li className="tab " onClick={handleClickHome}>
            <a href="">
              <i className="material-icons darken">
                home <p className="footerFont">HOME</p>
              </i>
              <p>Home</p>
            </a>
          </li>

          {/* <li className="tab">
            <a href="./charger">
              <i className="material-icons">battery_charging_full <p className= "footerFont">CHARGER</p></i>
            </a>
          </li> */}
          <li className="tab" onClick={handleMapClick}>
            <a href="/map">
              <i className="material-icons">
                my_location <p className="footerFont">MAP</p>
              </i>
            </a>
          </li>
          <li className="tab" onClick={handleCarClick}>
            <a href="/mycar">
              <i className="material-icons">
                directions_car <p className="footerFont">MY CAR</p>
              </i>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2021 Copyright Text</div>
      </div>
    </footer>
  );
};

export default Footer;
