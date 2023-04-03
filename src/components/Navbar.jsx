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
    <nav class="navbar ">
      <div id="Nav">
        <Link to="/home" id="LogoHome" class="navbar-brand">
          <img id="HomePageIcon" src={NavIcon} alt="Nav Bar Logo Not Found" />
        </Link>
        <div id="NavTextsLinks">
          <Link to="/" class="Nav">
            <h3 class="NavText">Logout</h3>
            <img id="NavIcon" src={LogoutIcon} alt="Logo Not Found" />
          </Link>
          <Link to="/settings" class="IndivNav">
            <h3 class="NavText">Settings</h3>
            <img id="NavIcon" src={SettingsIcon}  alt="Logo Not Found" />
          </Link>
          <Link to="/results" class="IndivNav">
            <h3 class="NavText">Results</h3>
            <img id="NavIcon" src={ResultsIcon} style={{'padding-top':"0.4%"}} alt="Logo Not Found" />
          </Link>
          <Link to="/resumeupload" class="IndivNav">
            <h3 class="NavText">Resume Upload</h3>
            <img id="NavIcon" src={ResumeIcon} alt="Logo Not Found" />
          </Link>
          <Link to="/organization" class="IndivNav">
            <h3 class="NavText" style={{'padding-right':"0%"}}>Organization</h3>
            <img id="NavIcon" src={OrgIcon} alt="Logo Not Found" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;