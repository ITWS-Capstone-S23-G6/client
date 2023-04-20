import React, { useState } from 'react';
import Navbar from "./Navbar";
import '../css/resumeupload.css';
import { Amplify, Storage } from 'aws-amplify';
import axios from 'axios';
import { useMutation } from "@apollo/client";
import { ADD_PERSON_SKILLS } from '../queries/graphql';
import { Alert, AlertTitle } from '@mui/material';
import { Footer } from './Footer/Footer';

Amplify.configure({
    Auth: {
        identityPoolId: 'us-east-1:82d6c6ea-65ef-4e04-9e24-72d8df9cde3f', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'us-east-1', // REQUIRED - Amazon Cognito Region
    },
    Storage: {
        AWSS3: {
            bucket: 'tie-app-pdfs',
            region: 'us-east-2',
        },
    },
});

function ResumeUpload() {
    const [skillsList, setList] = useState([]);
    const [checked, setChecked] = useState([]);
    const [addPerson, { data, loading, error }] = useMutation(ADD_PERSON_SKILLS);

    const handleUpload = async (file) => {

        return new Promise(res => {
            Storage.put(file.name, file, {
                level: 'public',
                bucket: 'tie-app-pdfs',
                resumable: true,
                completeCallback: (event) => {
                    console.log(`Successfully uploaded ${event.key}`);
                    res("Promise finished.");
                },
                progressCallback: (progress) => {
                    console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
                },
                errorCallback: (err) => {
                    console.error('Unexpected error while uploading', err);
                    res("Promise error.");
                }
            });

        });

    };

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    const useSkills = async () => {

        const name = document.getElementById("ResumeUploadquery").value;
        const skillsArr = checked.map(skill => ({
            "onCreate": {
                "node": {
                    "name": skill
                }
            },
            "where": {
                "node": {
                    "name": skill
                }
            }
        }));

        await addPerson({
            errorPolicy: "all",
            variables: {
                "input": [
                    {
                        "name": name,
                        "type": "Applicant",
                        "skills": {
                            "connectOrCreate": skillsArr
                        }
                    }
                ]
            }
        });

        if (loading) console.log('Submitting...');
        if (error) {
            console.log('Error...');
            console.log(error);
        }
        if (data) {
            let info = data.createPeople.info;
            console.log(`Nodes Created: ${info.nodesCreated}, Relationship Created: ${info.relationshipsCreated}`);
        }
    };

    const handleAnalysis = async (event) => {
        event.preventDefault();

        // Get file
        const file = document.getElementById("ResumeUploadFile").files[0];
        console.log(file);
        // Call upload function
        const res = await handleUpload(file);
        console.log(res);


        const api = 'https://rnb60r24od.execute-api.us-east-2.amazonaws.com/staging';
        const data = {
            'S3Object': {
                'Bucket': 'tie-app-pdfs',
                'Name': 'public/' + file.name,
            }
        };

        console.log('Sending post request...');
        axios
            .post(api, data)
            .then((response) => {
                console.log('Response back:');
                console.log(response);
                console.log(response["data"]["statusCode"]);
                let b = response["data"]["body"]
                setList(JSON.parse(b));
                console.log(skillsList);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const checkedItems = checked.length
        ? checked.reduce((total, item) => {
            return total + ", " + item;
        })
        : "";

    var isChecked = (item) =>
        checked.includes(item) ? "checked-item" : "not-checked-item";

    return (
        // React.Fragment <> </>
        <div class="page">
            <div id="NavSpace">
                <Navbar />
            </div>

            <div class="container" id="OrgUsSection">
                <h1 id="ResumeUploadName">Resume Upload</h1>
                <p id="ResumeUploadBlurb">
                    Please fill the fields below with the correct information about the applicant and then drag or drop the applicant's
                    resume in the last field. Only PDFs and DOCX files are accepted.
                </p>
                <form id="ResumeUploadform">
                    <input type="search" id="ResumeUploadquery" name="Search" placeholder=" Applicant First Name"></input>
                    {/* <input type="search" id="ResumeUploadquery" name="Search" placeholder=" Applicant Last Name"></input> */}
                    <input type="file" id="ResumeUploadFile" name="filename"></input>
                    <button id="ResumeUploadButton" onClick={handleAnalysis}>Submit</button>
                    <div id="UploadAlert">
                        {
                            skillsList.length > 0 ?
                                <>
                                    <Alert severity="success">
                                        <AlertTitle><strong>Success!</strong></AlertTitle>
                                        Skills have been extracted from applicant's resume!
                                    </Alert>
                                </>
                                :
                                <></>
                        }
                    </div>
                </form>
                
            </div>
            <div id="SkillsContainer">
                
                <div id='SkillsTitle'>Upload Skills</div>
                <div variant="filled" id='SkillsList'>
                    {skillsList.map((item, index) => (
                        <div key={index}>
                            <input value={item} type="checkbox" onChange={handleCheck} />
                            <span className={isChecked(item)}>{item}</span>
                        </div>
                    ))}
                </div>

                <div id='UploadAlert'>
                    {
                        checkedItems !== ""  && !data ?
                            <>
                                <Alert severity="info">
                                    {`Items checked are: ${checkedItems}`}
                                </Alert>
                            </>
                            :
                            <></>
                    }
                </div>
                <div id='mutationResponse'>
                    {
                        data ?
                            <>
                                <Alert id="UploadAlert" severity="success">
                                    <AlertTitle><strong>Success!</strong></AlertTitle>
                                    Nodes Created: {data.createPeople.info.nodesCreated} <br></br>
                                    Relationships Created: {data.createPeople.info.relationshipsCreated}
                                </Alert>
                            </>
                            :
                            <></>
                    }

                </div>
                <button id="SkillsUploadButton" onClick={useSkills}>Submit</button>
                
            </div>

            <Footer />
        </div>
    );
}

export default ResumeUpload;