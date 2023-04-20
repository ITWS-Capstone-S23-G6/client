import React from 'react';
import NavBar from "./Navbar";
import '../css/results.css';
import { Applicants } from "./Applicants/Applicants"
import { Footer } from './Footer/Footer';
import { Projects } from './Projects/Projects'


function Results() {
    return (
        // React.Fragment <> </>
        <div className="page"> 
            <div id="NavSpace">
                <NavBar />
            </div>
            <div className="container" id="OrgUsSection">
                <div className="row">
                    <Applicants />
                    <div className="col-1"></div>
                    <div className="col-6">
                        <Projects />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Results;