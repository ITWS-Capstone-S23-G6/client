import React from "react";
import './Directory.css'

export function DirectoryBox(props) {

  const name = props.name
  const skills = props.skills
  const type = props.type

  return (

    <div className="DirectoryBox">
      <div className="row">
        <div className="col-4">
          <span className="dot"></span>
        </div>
        {
          
          name && skills ? 

          <div className="col-8">
            <h2 className="DirectoryName">{type}: {name}</h2>
            <h3 className="DirectorySubtitle">Skill Count: {skills.length}</h3>
            <h3 className="DirectorySubtitle">
              Top Skills: 
              {
              skills.slice(0,3).map( (skill) => (
                ` ${skill.name}`
              ))
              }
            </h3>
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
