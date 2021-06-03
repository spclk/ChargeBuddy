import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-wrapper hide-on-small-only">
                <a href="/" className="brand-logo lime-text text-darken-2"><i className="large material-icons prefix">ev_station</i>ChargeBuddy</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/login"><i className="material-icons">person</i></a></li>
                    <li><a href="/login">login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;