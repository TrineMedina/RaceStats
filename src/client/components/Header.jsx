import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <header>
        <nav>
          <ul>
            <li>
              <a href="linktosomewhere">Home</a>
            </li>
            <li>
              <a href="linktosomewhere">About</a>
            </li>
            <li>
              <a href="linktosomewhere">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
//to set up a logo with link to home:
//<li><a href="linktohome"><img src="img/..."
// alt="image name click for home"><a/>
