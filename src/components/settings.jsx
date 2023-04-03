import React from 'react';
import Navbar from "./Navbar";
import '../css/settings.css';
import Skills1 from '../images/angularjs-logo.png'
import Skills2 from '../images/react-logo.png'
import Skills3 from '../images/nodejs-logo.png'
import Skills4 from '../images/graphql-logo.png'
import Skills5 from '../images/html5-logo.png'
import Skills6 from '../images/css3-logo.png'

function Settings() {
    return (
        // React.Fragment <> </>
        <div class="page"> 
            <div id="NavSpace">
                <Navbar />
            </div>
            <div class="container" id="OrgUsSection">
                <div class="row">
                    <div class="col-5">
                        <span class="dot" id="ProfileImage"></span>
                        <button id="ProfileButton">Change Profile</button>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-6">
                        <form id="Settingsform"> 
                            <input type="search" id="Settingsquery" name="Search" placeholder=" First Name, Last Name"></input>
                            <input type="search" id="Settingsquery" name="Search" placeholder=" Date of Birth"></input>
                            <input type="search" id="Settingsquery" name="Search" placeholder=" Job Position"></input>
                            <input type="search" id="SettingsqueryBio" name="Search" placeholder=" Bio"></input>
                            <button id="SettingsButton">Save</button>
                        </form>
                        <h1 id="OrgTitle2">Personal Skills</h1>
                        <div id="OrgBox2">
                            <div style={{width:"100%"}}> 
                                <div class="PSkillsBox1">
                                    <div class="row">
                                        <div class="col-8">
                                            <h1 class="PSkillsName">Skill 1</h1>
                                            <h2 class="PSkillsSubtitle">Description</h2>
                                        </div>
                                        <div class="col-4">
                                            <img class="PSkillsImage" src={Skills1}></img> 
                                        </div> 
                                    </div>
                                </div>
                                <div class="PSkillsBox2">
                                    <div class="row">
                                        <div class="col-8" id="PSkillsPadding">
                                            <h1 class="PSkillsName">Skill 2</h1>
                                            <h2 class="PSkillsSubtitle">Description</h2>
                                        </div>
                                        <div class="col-4">
                                            <img class="PSkillsImage" src={Skills2}></img>
                                        </div>
                                    </div>
                                </div>
                                <div class="PSkillsBox1">
                                    <div class="row">
                                        <div class="col-8">
                                            <h1 class="PSkillsName">Skill 3</h1>
                                            <h2 class="PSkillsSubtitle">Description</h2>
                                        </div>
                                        <div class="col-4">
                                            <img class="PSkillsImage" src={Skills3}></img> 
                                        </div>
                                    </div>
                                </div>
                                <div class="PSkillsBox2">
                                    <div class="row">
                                        <div class="col-8" id="PSkillsPadding">
                                            <h1 class="PSkillsName">Skill 4</h1>
                                            <h2 class="PSkillsSubtitle">Description</h2>
                                        </div>
                                        <div class="col-4">
                                            <img class="PSkillsImage" src={Skills4}></img>
                                        </div>
                                    </div>
                                </div>
                                <div class="PSkillsBox1">
                                    <div class="row">
                                        <div class="col-8">
                                            <h1 class="PSkillsName">Skill 5</h1>
                                            <h2 class="PSkillsSubtitle">Description</h2>
                                        </div>
                                        <div class="col-4">
                                            <img class="PSkillsImage" src={Skills5}></img> 
                                        </div>
                                    </div>
                                </div>
                                <div class="PSkillsBox2">
                                    <div class="row">
                                        <div class="col-8" id="PSkillsPadding">
                                            <h1 class="PSkillsName">Skill 6</h1>
                                            <h2 class="PSkillsSubtitle">Description</h2>
                                        </div>
                                        <div class="col-4">
                                            <img class="PSkillsImage" src={Skills6}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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