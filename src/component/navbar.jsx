import React from "react";

export default function navbar() {
  return (
    <div>
      <div className="navbar-container flex">
        <div className="portfolio-name flex">
          <div className="porfolio-icon"></div>
          <h1>Pratik Jadhav</h1>
          <p>/</p>
          <p>React Developer</p>
        </div>

        <div className="navbar-menu">
          <ul className="flex">
            <li>About Me</li>
            <li>Resume</li>
            <li>Project</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
