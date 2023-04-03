import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../css/landing.css';
import LandingIcon from '../images/TinyLogoNB.png'


function Landing() {
    return (
        <div class="page">
            <nav class="navbar" id="LandingNav">
                <Link to="/home" class="navbar-brand">
                    <img id="LandingPageIcon" src={LandingIcon} alt="Home Page Logo Not Found" />
                </Link>
                <a id="JGIconBox" class="navbar-brand" href="https://www.jahnelgroup.com/">
                    <img id="JGIcon" src="https://www.jahnelgroup.com/assets/logos/jg-logo-bars.svg" alt="Jahnel Group Home"></img>
                </a>                
            </nav>
            <div class="container">
                <div class="col-4">
                    <h1 id="LandingTitle">Tie</h1>
                    <a href="http://localhost:3000/home">
                        <button id="LoginButton">
                            <h2 id="LoginButtonText">Login</h2>
                        </button>
                    </a>  
                </div>
                <div class="col-1"></div>
                <div class="col-7">
                    <div class="area" > 
                        <ul class="circlesLanding">
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
                    </div >
                </div>
            </div>
        </div>
    );
}

export default Landing;