import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-wrapper hide-on-small-only">
                <a href="/" className="brand-logo lime-text text-darken-2"> <img src="./images/navicon.svg" alt="" className = "navicon"  /> <span className= "charge">Charge</span><span className= "buddy">Buddy</span></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/login"><i className="material-icons">person</i></a></li>
                    <li><a href="/login">login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;