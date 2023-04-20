import React from 'react';
import NavBar from "./Navbar";
import '../css/results.css';
import { Applicants } from "./Applicants/Applicants"
import { Footer } from './Footer/Footer';
import { Projects } from './Projects/Projects'
import { Grid } from '@mui/material';


function Results() {
    return (
        // React.Fragment <> </>
        <div className="" style={{ backgroundColor: '#0f1521'}}> 
            <NavBar />
            <div style={{ 
                display: 'flex',
                padding: '2rem'
            }}>
                <Applicants/>
            </div>

            <div style={{ 
                display: 'flex',
                padding: '2rem'
            }}>
                <Projects />
            </div>
            <Footer />
        </div>
    );
}

export default Results;
