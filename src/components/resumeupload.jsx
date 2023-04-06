import React from 'react';
import Navbar from "./Navbar";
import '../css/resumeupload.css';
// import Page from '../images/Resume.JPG' <img id="NavIcon" style={{'width':"100%", 'height':'auto'}} src={Page} alt="Logo Not Found" /> 
import { Amplify, Storage } from 'aws-amplify';

Amplify.configure({
    Auth: {
        identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab', //REQUIRED - Amazon Cognito Identity Pool ID
        region: 'us-east-2', // REQUIRED - Amazon Cognito Region
        // userPoolId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito User Pool ID
        // userPoolWebClientId: 'XX-XXXX-X_abcd1234', //OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
        AWSS3: {
            bucket: 'tie-app-pdfs',
            region: 'us-east-2',
        },
    },
});

function ResumeUpload() {

    const handleUpload = async (file) => {
        Storage.put(file.name, file, {
            level: 'public',
            bucket: 'tie-app-pdfs',
            resumable: true,
            completeCallback: (event) => {
                console.log(`Successfully uploaded ${event.key}`);
            },
            progressCallback: (progress) => {
                console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
            },
            errorCallback: (err) => {
                console.error('Unexpected error while uploading', err);
            }
        });
    };

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        console.log(file);
        handleUpload(file);
    }

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
                    <input type="search" id="ResumeUploadquery" name="Search" placeholder=" Applicant Last Name"></input>
                    <input type="file" id="ResumeUploadFile" name="filename" onChange={handleFileSelect}></input>
                    <button id="ResumeUploadButton">Search</button>
                </form>
            </div>
            <div class="footer">
                <a id="JGIconBoxFooter" class="navbar-brand" href="https://www.jahnelgroup.com/">
                    <img id="JGIconFooter" src="https://www.jahnelgroup.com/assets/logos/jg-logo-bars.svg" alt="Jahnel Group Home"></img>
                </a>    
                <h2 class="FooterText">Copyright © 2023 | All rights reserved.</h2>
            </div>
        </div>
    );
}

export default ResumeUpload;