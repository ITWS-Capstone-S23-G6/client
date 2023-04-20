import React from 'react';
import NavBar from "./Navbar";
import '../css/organization.css';

import { Directory } from './Directory/Directory';
import { CommonSkills } from './CommonSkills/CommonSkills';
import { CurrentProjects } from './CurrentProjects/CurrentProjects';
import { Footer } from './Footer/Footer';



function Organization() {

    return (
        // React.Fragment <> </>
        <div className="page">
            <div id="NavSpace">
                <NavBar />
            </div>
            <div className="container" id="OrgUsSection">
                <div className="row">
                    <div className="col-5"><Directory title={"Directory"} /></div>
                    <div className="col-5">
                        <CommonSkills />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'></div>
                    <div className='col-6'><CurrentProjects /></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Organization;