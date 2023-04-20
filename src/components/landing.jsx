import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../css/landing.css';
import LandingIcon from '../images/TinyLogoNB.png'


function Landing() {
    return (
        <div class="page">
            <nav class="navbar" id="LandingNav">
                <Link to="/" class="navbar-brand">
                    <img id="LandingPageIcon" src={LandingIcon} alt="Home Page Logo Not Found" />
                </Link>
                <a id="JGIconBox" class="navbar-brand" href="https://www.jahnelgroup.com/">
                    <img id="JGIcon" src="https://www.jahnelgroup.com/assets/logos/jg-logo-bars.svg" alt="Jahnel Group Home"></img>
                </a>                
            </nav>
            <div class="container">
                <div class="col-4">
                    <h1 id="LandingTitle">Tie</h1>
                    <a href="https://tie.auth.us-east-1.amazoncognito.com/login?response_type=code&client_id=2pp0bkoi3sk5dqskb2lmnmq0ib&response_type=code&scope=email+openid+phone&redirect_uri=https://main.d3opyt7nbkxwun.amplifyapp.com/home"> 
                        <button id="LoginButton">
                            <h2 id="LoginButtonText">Login</h2>
                        </button>
                    </a>  
                </div>
                <div class="col-1"></div>
                <div class="col-7">
                    <div class="area" > 
                        {/* <D3Background /> */}
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
            {/* <D3Background /> */}
        </div>
    );
}

export default Landing;