import React from "react";
import { useHistory } from "react-router-dom";
import "./footer.css";

const Footer = (props) => {
  const history = useHistory();
  const handleClickLanding = () => {
    history.push("/");
  };
  const handleMapClick = () => {
    history.push("/map");
  };
  const handleCarClick = () => {
   props.user ? history.push("/account") : history.push("/login")
  };
  return (
    <footer className="page-footer card-content valign center">
      <div className="nav-content container" >
        <ul className="tabs tabs-transparent">
          <li className="tab " onClick={handleClickLanding}>
            <a href="./home">
              <i className="material-icons ">
                home               
                <p className="footerFont">HOME</p>
              </i>
            </a>
          </li>

          <li className="tab" onClick={handleMapClick}>
            <a href="/map">
              <i className="material-icons">
                my_location <p className="footerFont">MAP</p>
              </i>
            </a>
          </li>
          <li className="tab" onClick={handleCarClick}>
            <a href={props.user ? "/account" : "/login"}>
              <i className="material-icons">
                directions_car <p className="footerFont">ACCOUNT</p>
              </i>
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="footer-copyright">
        <div className="container">© 2021 ChargeBuddy</div>
      </div> */}
    </footer>
  );
};

export default Footer;
