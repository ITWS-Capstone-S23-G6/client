import React from 'react';
import NavBar from "./Navbar";
import '../css/results.css';
import { Directory } from './Directory/Directory'
import { Footer } from './Footer/Footer';


function Results() {
    return (
        // React.Fragment <> </>
        <div className="page"> 
            <div id="NavSpace">
                <NavBar />
            </div>
            <div className="container" id="OrgUsSection">
                <div className="row">
                    <Directory title={"Applicant"}/>
                    <div className="col-1"></div>
                    <div className="col-6">
                        <h1 id="OrgTitle2">Projects</h1>
                        <div id="OrgBox2">
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Results;