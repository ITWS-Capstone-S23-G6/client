import React from "react";
import { useQuery } from "@apollo/client";
import { PROJECT } from "../../queries/graphql";
import { ProjectBox } from "./ProjectBox";
import './CurrentProjects.css'

export function CurrentProjects() {
    const { loading, error, data } =  useQuery( PROJECT, { 
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
            <>
                <h1 id="OrgTitle3">Current Projects</h1>
                <div id="OrgBox2">
                    <div style={{width:"100%"}}> 
                    {
                        projects.map((project, i) => (
                            <ProjectBox key={i} name={project.name} num={i}/>
                        ))
                    }
                    </div>
                </div>
            </>
        )
    }
}

