import React from 'react';
import NavBar from "./Navbar";
import '../css/results.css';
import DataTable from 'react-data-table-component';
import MatchesImage from '../images/ResultsExample.JPG'

const columns = [
    {
        name: 'Applicant',
        selector: row => row.applicant,
        sortable: true,
    },
    {
        name: 'Project 1',
        selector: row => row.proj1,
        sortable: true,
    },
    {
        name: 'Evaluation Score 1',
        selector: row => row.evalscore1,
        sortable: true,
    },
    {
        name: 'Project 2',
        selector: row => row.proj2,
        sortable: true,
    },
    {
        name: 'Evaluation Score 2',
        selector: row => row.evalscore2,
        sortable: true,
    },
    {
        name: 'Project 3',
        selector: row => row.proj3,
        sortable: true,
    },
    {
        name: 'Evaluation Score 3',
        selector: row => row.evalscore3,
        sortable: true,
    },

];

const data = [
    {
        id: 1,
        applicant: 'Chris K.',
        proj1: 'Integra',
        evalscore1: 0.4,
        proj2: 'Nexa',
        evalscore2: 0.6,
        proj3: 'Aurora',
        evalscore3: 0.91,
    },
    {
        id: 2,
        applicant: 'Emily B.',
        proj1: 'N/A',
        evalscore1: 'N/A',
        proj2: 'Nexa',
        evalscore2: 0.31,
        proj3: 'Aurora',
        evalscore3: 0.7,
    },
    {
        id: 3,
        applicant: 'Matt T.',
        proj1: 'Integra',
        evalscore1: 0.1,
        proj2: 'Nexa',
        evalscore2: 0.44,
        proj3: 'Aurora',
        evalscore3: 0.82,
    },
    {
        id: 4,
        applicant: 'David L.',
        proj1: 'Integra',
        evalscore1: 0.7,
        proj2: 'N/A',
        evalscore2: 'N/A',
        proj3: 'Aurora',
        evalscore3: 0.7,
    },
    {
        id: 5,
        applicant: 'Rich P.',
        proj1: 'N/A',
        evalscore1: 'N/A',
        proj2: 'N/A',
        evalscore2: 'N/A',
        proj3: 'N/A',
        evalscore3: 'N/A',
    },
]

function Results() {
    return (
        // React.Fragment <> </>
        <div class="page"> 
            <div id="NavSpace">
                <NavBar />
            </div>
            <div class="container" id="OrgUsSection">
                <div class="row">
                    <div class="col-5">
                        <h1 id="OrgTitle">Applicants</h1>
                        <div id="OrgBox">
                            <div class="ApplicantsBox">
                                <div class="row">
                                    <div class="col-4">
                                        <span class="dot"></span>
                                    </div>
                                    <div class="col-8">
                                        <h1 class="ApplicantsName">First Name, Last Name</h1>
                                        <h2 class="ApplicantsSubtitle">Matching Score</h2>
                                        <h2 class="ApplicantsSubtitle">Skill 1, Skill 2, Skill 3</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="ApplicantsBox">
                                <div class="row">
                                    <div class="col-4">
                                        <span class="dot"></span>
                                    </div>
                                    <div class="col-8">
                                        <h1 class="ApplicantsName">First Name, Last Name</h1>
                                        <h2 class="ApplicantsSubtitle">Matching Score</h2>
                                        <h2 class="ApplicantsSubtitle">Skill 1, Skill 2, Skill 3</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="ApplicantsBox">
                                <div class="row">
                                    <div class="col-4">
                                        <span class="dot"></span>
                                    </div>
                                    <div class="col-8">
                                        <h1 class="ApplicantsName">First Name, Last Name</h1>
                                        <h2 class="ApplicantsSubtitle">Matching Score</h2>
                                        <h2 class="ApplicantsSubtitle">Skill 1, Skill 2, Skill 3</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="ApplicantsBox">
                                <div class="row">
                                    <div class="col-4">
                                        <span class="dot"></span>
                                    </div>
                                    <div class="col-8">
                                        <h1 class="ApplicantsName">First Name, Last Name</h1>
                                        <h2 class="ApplicantsSubtitle">Matching Score</h2>
                                        <h2 class="ApplicantsSubtitle">Skill 1, Skill 2, Skill 3</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="ApplicantsBox">
                                <div class="row">
                                    <div class="col-4">
                                        <span class="dot"></span>
                                    </div>
                                    <div class="col-8">
                                        <h1 class="ApplicantsName">First Name, Last Name</h1>
                                        <h2 class="ApplicantsSubtitle">Matching Score</h2>
                                        <h2 class="ApplicantsSubtitle">Skill 1, Skill 2, Skill 3</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="ApplicantsBox">
                                <div class="row">
                                    <div class="col-4">
                                        <span class="dot"></span>
                                    </div>
                                    <div class="col-8">
                                        <h1 class="ApplicantsName">First Name, Last Name</h1>
                                        <h2 class="ApplicantsSubtitle">Matching Score</h2>
                                        <h2 class="ApplicantsSubtitle">Skill 1, Skill 2, Skill 3</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-6">
                        <h1 id="OrgTitle2">Results</h1>
                        <div id="OrgBox2">
                            <div id="ResultsTable">
                                <form id="Resultsform"> 
                                    <input type="search" id="Resultsquery" name="Search" placeholder=" Search . . ."></input>
                                    <button id="SearchResultsButton">Search</button>
                                </form>
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    pagination
                                />
                            </div>
                        </div>
                        <h1 id="OrgTitle3">Current Projects</h1>
                        <div id="OrgBox2">
                            <img id="MatchesImage" src={MatchesImage} alt="Matches Image"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer" id="FooterOrg">
                <a id="JGIconBoxFooter" class="navbar-brand" href="https://www.jahnelgroup.com/">
                    <img id="JGIconFooter" src="https://www.jahnelgroup.com/assets/logos/jg-logo-bars.svg" alt="Jahnel Group Home"></img>
                </a>    
                <h2 class="FooterText">Copyright © 2023 | All rights reserved.</h2>
            </div>
        </div>
    );
}

export default Results;