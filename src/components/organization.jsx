import React from 'react';
import NavBar from "./Navbar";
import '../css/organization.css';
import Skills1 from '../images/angularjs-logo.png'
import Skills2 from '../images/react-logo.png'
import Skills3 from '../images/nodejs-logo.png'
import Skills4 from '../images/graphql-logo.png'
import Skills5 from '../images/html5-logo.png'
import Skills6 from '../images/css3-logo.png'


function Organization() {
    return (
        // React.Fragment <> </>
        <div class="page"> 
            <div id="NavSpace">
                <NavBar />
            </div>
            <div class="container" id="OrgUsSection">
                <div class="row">
                    <div class="col-5">
                        <h1 id="OrgTitle">Directory</h1>
                        <div id="OrgBox">
                            <div class="DirectoryBox">
                                <div class="row">
                                    <div class="col-4">
                                        <span class="dot"></span>
                                    </div>
                                    <div class="col-8">
                                        <h1 class="DirectoryName">First Name, Last Name</h1>
                                        <h2 class="DirectorySubtitle">Job Title</h2>
                                        <h2 class="DirectorySubtitle">Skill 1, Skill 2, Skill 3</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="DirectoryBox">
                                <div class="row">
                                    <div class="col-4">
                                        <span class="dot"></span>
                                    </div>
                                    <div class="col-8">
                                        <h1 class="DirectoryName">First Name, Last Name</h1>
                                        <h2 class="DirectorySubtitle">Job Title</h2>
                                        <h2 class="DirectorySubtitle">Skill 1, Skill 2, Skill 3</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="DirectoryBox">
                                <div class="row">
                                    <div class="col-4">
                                        <span class="dot"></span>
                                    </div>
                                    <div class="col-8">
                                        <h1 class="DirectoryName">First Name, Last Name</h1>
                                        <h2 class="DirectorySubtitle">Job Title</h2>
                                        <h2 class="DirectorySubtitle">Skill 1, Skill 2, Skill 3</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="DirectoryBox">
                                <div class="row">
                                    <div class="col-4">
                                        <span class="dot"></span>
                                    </div>
                                    <div class="col-8">
                                        <h1 class="DirectoryName">First Name, Last Name</h1>
                                        <h2 class="DirectorySubtitle">Job Title</h2>
                                        <h2 class="DirectorySubtitle">Skill 1, Skill 2, Skill 3</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="DirectoryBox">
                                <div class="row">
                                    <div class="col-4">
                                        <span class="dot"></span>
                                    </div>
                                    <div class="col-8">
                                        <h1 class="DirectoryName">First Name, Last Name</h1>
                                        <h2 class="DirectorySubtitle">Job Title</h2>
                                        <h2 class="DirectorySubtitle">Skill 1, Skill 2, Skill 3</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="DirectoryBox">
                                <div class="row">
                                    <div class="col-4">
                                        <span class="dot"></span>
                                    </div>
                                    <div class="col-8">
                                        <h1 class="DirectoryName">First Name, Last Name</h1>
                                        <h2 class="DirectorySubtitle">Job Title</h2>
                                        <h2 class="DirectorySubtitle">Skill 1, Skill 2, Skill 3</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-1"></div>
                    <div class="col-6">
                        <h1 id="OrgTitle2">Common Skills</h1>
                        <div id="OrgBox2">
                            <div style={{width:"100%"}}> 
                                <div class="SkillsBox1">
                                    <div class="row">
                                        <div class="col-8">
                                            <h1 class="SkillsName">Skill 1</h1>
                                            <h2 class="SkillsSubtitle">Description</h2>
                                        </div>
                                        <div class="col-4">
                                            <img class="SkillsImage" src={Skills1}></img> 
                                        </div> 
                                    </div>
                                </div>
                                <div class="SkillsBox2">
                                    <div class="row">
                                        <div class="col-8" id="SkillsPadding">
                                            <h1 class="SkillsName">Skill 2</h1>
                                            <h2 class="SkillsSubtitle">Description</h2>
                                        </div>
                                        <div class="col-4">
                                            <img class="SkillsImage" src={Skills2}></img>
                                        </div>
                                    </div>
                                </div>
                                <div class="SkillsBox1">
                                    <div class="row">
                                        <div class="col-8">
                                            <h1 class="SkillsName">Skill 3</h1>
                                            <h2 class="SkillsSubtitle">Description</h2>
                                        </div>
                                        <div class="col-4">
                                            <img class="SkillsImage" src={Skills3}></img> 
                                        </div>
                                    </div>
                                </div>
                                <div class="SkillsBox2">
                                    <div class="row">
                                        <div class="col-8" id="SkillsPadding">
                                            <h1 class="SkillsName">Skill 4</h1>
                                            <h2 class="SkillsSubtitle">Description</h2>
                                        </div>
                                        <div class="col-4">
                                            <img class="SkillsImage" src={Skills4}></img>
                                        </div>
                                    </div>
                                </div>
                                <div class="SkillsBox1">
                                    <div class="row">
                                        <div class="col-8">
                                            <h1 class="SkillsName">Skill 5</h1>
                                            <h2 class="SkillsSubtitle">Description</h2>
                                        </div>
                                        <div class="col-4">
                                            <img class="SkillsImage" src={Skills5}></img> 
                                        </div>
                                    </div>
                                </div>
                                <div class="SkillsBox2">
                                    <div class="row">
                                        <div class="col-8" id="SkillsPadding">
                                            <h1 class="SkillsName">Skill 6</h1>
                                            <h2 class="SkillsSubtitle">Description</h2>
                                        </div>
                                        <div class="col-4">
                                            <img class="SkillsImage" src={Skills6}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 id="OrgTitle3">Current Projects</h1>
                        <div id="OrgBox2">
                            <div style={{width:"100%"}}> 
                                <div class="ProjectsBox1">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1 class="ProjectsName">Project Name 1</h1>
                                            <h2 class="ProjectsSubtitle">Description</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="ProjectsBox2">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1 class="ProjectsName">Project Name 2</h1>
                                            <h2 class="ProjectsSubtitle">Description</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="ProjectsBox1">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1 class="ProjectsName">Project Name 3</h1>
                                            <h2 class="ProjectsSubtitle">Description</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="ProjectsBox2">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1 class="ProjectsName">Project Name 4</h1>
                                            <h2 class="ProjectsSubtitle">Description</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="ProjectsBox1">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1 class="ProjectsName">Project Name 5</h1>
                                            <h2 class="ProjectsSubtitle">Description</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="ProjectsBox2">
                                    <div class="row">
                                        <div class="col-12">
                                            <h1 class="ProjectsName">Project Name 6</h1>
                                            <h2 class="ProjectsSubtitle">Description</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer" id="FooterOrg">
                <a id="JGIconBoxFooter" class="navbar-brand" href="https://www.jahnelgroup.com/">
                    <img id="JGIconFooter" src="https://www.jahnelgroup.com/assets/logos/jg-logo-bars.svg" alt="Jahnel Group Home"></img>
                </a>    
                <h2 class="FooterText">Copyright © 2023 | All rights reserved.</h2>
            </div>
        </div>
    );
}

export default Organization;