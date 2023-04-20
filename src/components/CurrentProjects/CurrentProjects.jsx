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
            <>
                <h1 id="OrgTitle3">Projects</h1>
                <div id="OrgBox2">
                    <div style={{width:"100%"}}> 
                    {
                        projects.map((project, i) => (
                            <ProjectBox key={i} name={project.name} num={i} skills={project.useSkills}/>
                        ))
                    }
                    </div>
                </div>
            </>
        )
    }
}


