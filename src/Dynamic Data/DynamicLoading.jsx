import React from "react";

import skillsData, { myEducationData } from "./Data Stored/data";

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

const DynamicLoadingEducation = () => {
  return (
    <div className="edu-container">
      {myEducationData.map((edu, index) => (
        <div className="edu-box" key={index}>
          <div className="edu-img">
            <img src={edu.logo} alt={edu.logoAlt} />
          </div>
          <div className="edu-content">
            <h3>{edu.instituteName}</h3>
            <p>{edu.stream}</p>
            <h4>
              {edu.year} | {edu.status}
            </h4>
            <p>{edu.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicLoading;
export { DynamicLoadingEducation };
