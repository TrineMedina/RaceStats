import React from "react";
import "./header.css";
import logo from "../assets/logo-no-background.svg";

const Header = () => {
  return (
    <div className="header">
      <header>
        <nav>
          <ul>
            <li>
              <a href="linktosomewhere">
                <img
                  src={logo}
                  // alt="Race Stats. Click for home"
                ></img>
              </a>
            </li>
            <li>
              <a href="linktosomewhere">About</a>
            </li>
            <li>
              <a href="linktosomewhere">GitHub</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
