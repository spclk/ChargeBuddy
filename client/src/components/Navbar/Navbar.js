import React from "react";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">Charge Buddy</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">My Garage</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;