import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../css/Navbar.css';
import NavIcon from '../images/TinyLogoNB.png'
import OrgIcon from '../images/organization.png'
import ResumeIcon from '../images/resume.png'
import ResultsIcon from '../images/results.png'
import SettingsIcon from '../images/settings.png'
import LogoutIcon from '../images/logout.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div id="Nav">
        <Link to="/home" id="LogoHome" className="navbar-brand">
          <img id="HomePageIcon" src={NavIcon} alt="Nav Bar Logo Not Found" />
        </Link>
        <div id="NavTextsLinks">
          <a className="Nav" href="https://tie.auth.us-east-1.amazoncognito.com/logout?client_id=2pp0bkoi3sk5dqskb2lmnmq0ib&logout_uri=https://main.d3opyt7nbkxwun.amplifyapp.com"> 
            <h3 className="NavText">Logout</h3>
            <img id="NavIcon" src={LogoutIcon} alt="Logo Not Found" />
          </a>

          <Link to="/settings" className="IndivNav">
            <h3 className="NavText">Settings</h3>
            <img id="NavIcon" src={SettingsIcon}  alt="Logo Not Found" />
          </Link>
          <Link to="/results" className="IndivNav">
            <h3 className="NavText">Results</h3>
            <img id="NavIcon" src={ResultsIcon} style={{'paddingTop':"0.4%"}} alt="Logo Not Found" />
          </Link>
          <Link to="/resumeupload" className="IndivNav">
            <h3 className="NavText">Resume Upload</h3>
            <img id="NavIcon" src={ResumeIcon} alt="Logo Not Found" />
          </Link>
          <Link to="/organization" className="IndivNav">
            <h3 className="NavText" style={{'paddingRight':"0%"}}>Organization</h3>
            <img id="NavIcon" src={OrgIcon} alt="Logo Not Found" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;