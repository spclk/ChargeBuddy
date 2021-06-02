import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="grey darken-3">
            <div className="nav-wrapper">
                <a href="/landing" className="brand-logo"><i className="large material-icons">ev_station</i>ChargeBuddy</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/login"><i className="material-icons">person</i></a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;