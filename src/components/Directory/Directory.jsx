import React from "react";
import { useQuery } from "@apollo/client";
import { GET_PEOPLE } from "../../queries/graphql";
import './Directory.css'
import { DirectoryBox } from "./DirectoryBox";
import { ApplicantBox } from "../ApplicantBox/ApplicantBox";



export function Directory(props) {

    // Fetch data from the server endpoint using predefined query schema
    const skill_limit = 4

    const { loading, error, data } =  useQuery( GET_PEOPLE, { 
        errorPolicy: "all",
        variables: {
            "person_options": {
                "sort": [
                    {
                        "type": "ASC",
                    }
                ]
            },
            // "skill_options": {
            //     "limit": skill_limit,
            // }
        }
    })

    if (error) {
        console.log("ERROR: Directiory")
        console.log(error)
        return <p>ERROR!</p>
    }

    if (loading) {
        console.log("Loading Directory...")
        return <p>LOADING...</p>
    }

    if (data) {
        console.log("Directory Loaded")
        // console.log(data)
        // custom sort people by skills count
        let all_people = [...data.people].sort((a, b) => b.skills.length - a.skills.length)

        return (
            <div className='col-5'>
                <h1 id="OrgTitle">{props.title}</h1>
                <div id="OrgBox">
                    {all_people.map((person, i) => {
                            if (props.title !== "Applicant")
                                return <DirectoryBox key={i} name={person.name} type={person.type} skills={person.skills}/>
                            else
                                return <ApplicantBox key={i} name={person.name} type={person.type} skills={person.skills}/>
                        }
                    )}
                </div>
            </div>
        )
    }
}