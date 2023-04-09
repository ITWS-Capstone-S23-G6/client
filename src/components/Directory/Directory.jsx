import React from "react";
import { useQuery } from "@apollo/client";
import { PERSON } from "../../queries/graphql";
import './Directory.css'
import { DirectoryBox } from "./DirectoryBox";



export function Directory() {

    // Fetch data from the server endpoint using predefined query schema
    const skill_limit = 4

    const { loading, error, data } =  useQuery( PERSON, { 
        errorPolicy: "all",
        variables: {
            "options": {
                "limit": skill_limit,
                "sort": {
                "name": 'ASC'
                }
            }
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
        const all_person = data.people

        return (
            <div className='col-5'>
                <h1 id="OrgTitle">Directory</h1>
                <div id="OrgBox">
                    {all_person.map( (person, i) => (
                        <DirectoryBox key={i} name={person.name} skills={person.hasSkills}/>
                    ))}
                </div>
            </div>
        )
    }
}