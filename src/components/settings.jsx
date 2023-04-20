import React from 'react';
import Navbar from "./Navbar";
import '../css/settings.css';
import { Alert } from '@mui/material';

function Settings() {
    return (
        // React.Fragment <> </>
        <div class="page">
            <div id="NavSpace">
                <Navbar />
            </div>
            <div class="container" id="OrgUsSection">
                <div class="row">
                    <Alert id="infobox" severity='info'>
                        Users may add new skills to the graph database.
                    </Alert>
                </div>
                <div class="row">
                    <form id="Settingsform">
                        <input type="search" id="Settingsquery" name="SkillName" placeholder="Skill Name"></input>
                        <input type="search" id="Settingsquery" name="SkillCategory" placeholder="Category"></input>
                        <input type="search" id="Settingsquery" name="SkillParent" placeholder="Parent Skill 1, Parent Skill 2, ..."></input>
                        <input type="search" id="Settingsquery" name="SkillChildren" placeholder="Child Skill 1, Child Skill 2, ..."></input>
                        <button id="SettingsButton">Upload</button>
                    </form>
                </div>
            </div>
            <div class="footer" id="FooterSettings">
                <a id="JGIconBoxFooter" class="navbar-brand" href="https://www.jahnelgroup.com/">
                    <img id="JGIconFooter" src="https://www.jahnelgroup.com/assets/logos/jg-logo-bars.svg" alt="Jahnel Group Home"></img>
                </a>
                <h2 class="FooterText">Copyright © 2023 | All rights reserved.</h2>
            </div>
        </div>
    );
}

export default Settings;