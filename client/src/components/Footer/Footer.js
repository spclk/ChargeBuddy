import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer card-content valign center ">
      <div className="nav-content container">
        <ul className="tabs tabs-transparent">
          <li className="tab ">
            <a href="#test1">
              <i className="material-icons darken">home <p className= "footerFont">HOME</p></i>
              <p>Home</p>
            </a>
          </li>
          <li className="tab">
            <a href="#test2">
              <i className="material-icons">battery_charging_full <p className= "footerFont">CHARGER</p></i>
            </a>
          </li>
          <li className="tab">
            <a href="#test3">
              <i className="material-icons">my_location <p className= "footerFont">MAP</p></i>
            </a>
          </li>
          <li className="tab">
            <a href="#test4">
              <i className="material-icons">directions_car <p className= "footerFont">MY CAR</p></i>
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
