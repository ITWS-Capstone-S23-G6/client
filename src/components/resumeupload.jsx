import React from 'react';
import Navbar from "./Navbar";
import '../css/resumeupload.css';
// import Page from '../images/Resume.JPG' <img id="NavIcon" style={{'width':"100%", 'height':'auto'}} src={Page} alt="Logo Not Found" /> 

function ResumeUpload() {
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
                    <input type="file" id="ResumeUploadFile" name="filename"></input>
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