import React from 'react';
import NavBar from "./Navbar";
import '../css/home.css';
import BigLogo from '../images/LogoNB.png'

function Home() {

    return (
        // React.Fragment <> </>
        <div class="page"> 
            <div id="NavSpaceHome">
                <NavBar />
            </div>
            <div class="area" > 
                <div id="HomeBar">
                    <ul class="circlesLandingHome">
                        <li></li>  <li></li>
                        <li></li>  <li></li>
                        <li></li>  <li></li>
                        <li></li>  <li></li>
                        <li></li>  <li></li>
                        <li></li>  <li></li>
                        <li></li>  <li></li>
                        <li></li>  <li></li>
                        <li></li>  <li></li>
                        <li></li>  <li></li>
                    </ul>
                </div>
                <div id="HomeBar2"></div>
            </div >
            <h1 id="HomeTitle"> About</h1>
            <div class="container" id="AboutUsSection">
                <div class="row">
                    <div class="col-4">
                        <img id="BigTieLogo" src={BigLogo} alt="Tie Logo"></img>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-7">
                        <p id="AboutUsBlurb">
                            Tie allows users to scrape the skills and technologies from an applicant's resume and compare the resulting
                            technical knowledge to all past and current client requirements. <br></br> <br></br> The results of the comparison
                            evaluation will be presented to the user as a percentage match or a score. <br></br> <br></br> A graphical 
                            representation of the gathered data will give both clients and recruiters a digestible visualization.
                        </p>
                    </div>
                </div>
            </div>
            <div class="footer" id="homefooter">
                <a id="JGIconBoxFooter" class="navbar-brand" href="https://www.jahnelgroup.com/">
                    <img id="JGIconFooter" src="https://www.jahnelgroup.com/assets/logos/jg-logo-bars.svg" alt="Jahnel Group Home"></img>
                </a>    
                <h2 class="FooterText">Copyright © 2023 | All rights reserved.</h2>
            </div>
        </div>
    );
}


export default Home;