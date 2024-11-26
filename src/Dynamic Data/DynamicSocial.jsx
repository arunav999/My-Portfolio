import React from "react";

import loadSVG from "./Data Stored/social-Icon-SVG";

const DynamicSocial = () => {
  return (
    <ul className="my-link-list">
      {loadSVG.map((icon, index) => (
        <li key={index}>
          <a href={icon.href} className="my-link" target="blank">
            <span aria-label={icon.sName} role="img">
              <img src={icon.logo} alt={icon.sName} className="social-icon" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default DynamicSocial;
