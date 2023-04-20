import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../../queries/graphql";
import { ProjectBox } from "./ProjectBox";
import './CurrentProjects.css'

export function CurrentProjects() {
    const { loading, error, data } =  useQuery( GET_PROJECT, { 
        errorPolicy: "all",
        
    })

    if (error) {
        console.log("ERROR: CommonSkills")
        console.log(error)
        return <p>ERROR!</p>
    }

    if (loading) {
        console.log("Loading CurrentProjects...")
        return <p>LOADING...</p>
    }

    if (data) {
        const projects = data.projects

        return (
            <div>
                <h1 id="OrgTitle2">Projects</h1>
                <div id="OrgBox">
                    <div style={{
                        width:"100%",
                        display: 'grid',
                        gap: '1rem',
                        gridTemplateColumns: '1fr 1fr',
                        padding: '1rem 0'
                    }}> 
                    {
                        projects.map((project, i) => (
                            <ProjectBox key={i} name={project.name} num={i} skills={project.useSkills}/>
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    }
}


