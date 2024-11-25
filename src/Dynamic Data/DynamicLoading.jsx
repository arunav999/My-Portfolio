import React from "react";

import skillsData from "./Data Stored/data";

const DynamicLoading = () => {
  return (
    <div className="skills">
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="bar" key={index}>
            <div className="info">
              <img
                src={skill.imgSrc}
                alt={skill.altText}
                className={skill.filter ? "filter" : ""}
              />
              <span>{skill.$name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicLoading;
