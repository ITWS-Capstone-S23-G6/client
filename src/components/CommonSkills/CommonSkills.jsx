import React from "react";
import { useQuery } from "@apollo/client";
import { SKILL } from "../../queries/graphql";
import "./CommonSkills.css";
import { SkillBox } from "./SkillBox";

export function CommonSkills() {


    const { loading, error, data } =  useQuery( SKILL, { 
        errorPolicy: "all",

    })

    if (error) {
        console.log("ERROR: CommonSkills")
        console.log(error)
        return <p>ERROR!</p>
    }

    if (loading) {
        console.log("Loading CommonSkills...")
        return <p>LOADING...</p>
    }

    if (data) {
        const skills = data.skills

        return (
            <>
                <h1 id="OrgTitle2">Common Skills</h1>
                <div id="OrgBox2">
                    <div style={{width:"100%"}}> 
                    {
                        skills.filter(skill => skill.category !== null).map( (skill, i) => (
                            <SkillBox key={i} name={skill.name} category={skill.category} i={i}/>
                        ))
                    }
                    </div>
                </div>
            </>
        )
    }
}