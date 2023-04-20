
import React, { useState }from "react";
import { useQuery } from "@apollo/client";
import { GET_PEOPLE } from "../../queries/graphql";
import './Applicants.css'
import { ApplicantCard } from "./ApplicantCard";

import { ApplicantDataContext } from "./ApplicantDataContext";
import { ApplicantResultModal } from "../MatchResult/ApplicantResultModal/ApplicantResultModal";


export function Applicants() {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [resultData, setResultData] = useState(null);

    const toggleModal = (data) => {
        setResultData(data);
        setIsModalVisible(true);
    };

    // Fetch data from the server endpoint using predefined query schema
    const skill_limit = 4

    const { loading, error, data } = useQuery(GET_PEOPLE, {
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
        console.log("ERROR: Applicants")
        console.log(error)
        return <p>ERROR!</p>
    }

    if (loading) {
        console.log("Loading Applicants...")
        return <p>LOADING...</p>
    }

    if (data) {
        console.log("Applicants Loaded")
        // console.log(data)
        // custom sort people by skills count
        let all_people = [...data.people].sort((a, b) => b.skills.length - a.skills.length)

        return (
        <ApplicantDataContext.Provider value={{ resultData, setResultData, isModalVisible, setIsModalVisible }}>
            <div>
                <h1 id="OrgTitle">Applicants</h1>
                <div id="OrgBox">
                    {all_people.map((person, i) => {
                        if (person.type === 'Applicant')
                            return <ApplicantCard key={i} name={person.name} type={person.type} skills={person.skills} />
                    })}
                </div>
            </div>
        </ ApplicantDataContext.Provider>
        )
    }
}