import React from "react";
import Logo from "../logo";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <div className="logo">{<Logo />}</div>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">More</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="contact">
            <span className="phone">084-097-9054</span>
            <button className="btn btn-primary">Free Quote</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
