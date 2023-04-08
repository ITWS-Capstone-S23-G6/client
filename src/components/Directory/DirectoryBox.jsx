import React from "react";
import './Directory.css'

export function DirectoryBox(props) {

  const name = props.name
  const skills = props.skills

  return (

    <div className="DirectoryBox">
      <div className="row">
        <div className="col-4">
          <span className="dot"></span>
        </div>
        {
          
          name && skills ? 

          <div className="col-8">
            <h1 className="DirectoryName">{name}</h1>
            <h2 className="DirectorySubtitle">Job Title</h2>
            <h2 className="DirectorySubtitle">
              Skills: 
              {skills.map( (skill) => (
                ` ${skill.name}`
              ))}
            </h2>
          </div>
          :
          <div className="col-8">
            SKILL ERROR
          </div>
        }
      </div>
    </div>

  );
}
