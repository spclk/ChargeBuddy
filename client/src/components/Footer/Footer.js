import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer card-content valign center">
      <div className="nav-content">
        <ul className="tabs tabs-transparent">
          <li className="tab">
            <a href="#test1">Test 1</a>
          </li>
          <li className="tab">
            <a href="#test2">Test 2</a>
          </li>
          <li className="tab">
            <a href="#test1">Test 3</a>
          </li>
          <li className="tab">
            <a href="#test4">Test 4</a>
          </li>
        </ul>
      </div>
      <div className="footer-copyright">
        <div className="container">© 2014 Copyright Text</div>
      </div>
    </footer>
  );
};

export default Footer;
