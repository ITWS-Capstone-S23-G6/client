import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../../queries/graphql";
import { ProjectCard } from "./ProjectCard";
import "./Projects.css";

import { ProjectDataContext } from "./ProjectDataContext";
import { ProjectResultModal } from "../MatchResult/ProjectResultModal/ProjectResultModal";

export function Projects() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [resultData, setResultData] = useState(null);

  const toggleModal = (data) => {
    setResultData(data);
    setIsModalVisible(true);
  };

  const { loading, error, data } = useQuery(GET_PROJECT, {
    errorPolicy: "all",
  });

  if (error) {
    console.log("ERROR: Projects");
    console.log(error);
    return <p>ERROR!</p>;
  }

  if (loading) {
    console.log("Loading Projects...");
    return <p>LOADING...</p>;
  }

  if (data) {
    console.log("Projects Loaded");
    const projects = data.projects;

    return (
      <ProjectDataContext.Provider
        value={{ resultData, setResultData, isModalVisible, setIsModalVisible }}
      >
        <div>
          <h1 id="OrgTitle3">Projects</h1>
          <div id="OrgBox2">
            <div style={{ width: "100%" }}>
              {projects.map((project, i) => (
                <ProjectCard
                  key={i}
                  num={i}
                  projectName={project.name}
                  skills={project.useSkills}
                  toggleModal={(result) => toggleModal(result)}
                />
              ))}
            </div>
          </div>
          {isModalVisible && resultData && (
            <div className="project-modal-container">
              <ProjectResultModal />
            </div>
          )}
        </div>
      </ProjectDataContext.Provider>
    );
  }
}
