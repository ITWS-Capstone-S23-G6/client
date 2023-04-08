import React from "react";
import "./CurrentProjects.css";

export function ProjectBox(props) {
    const name = props.name;
    const i = (parseInt(props.num) % 2) + 1;


    return (
        <div className={`ProjectsBox${i}`}>
            <div className="row">
                <div className="col-12">
                    <h1 className="ProjectsName">{name}</h1>
                    <h2 className="ProjectsSubtitle">Description</h2>
                </div>
            </div>
        </div>
    );
}
