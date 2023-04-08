import React from "react"
import "./CommonSkills.css"

export function SkillBox(props) {

    const name = props.name
    const category = props.category
    const i =  props.i % 2 + 1
    
    let imgSrc = ""
    if (name.toLowerCase() === "c#") {
        imgSrc = "/skill_img/c-sharp-logo.png"
    } else {
        imgSrc = `/skill_img/${name.toLowerCase().split(" ").join("-")}-logo.png`
    }

    return (
        <div className={`SkillsBox${i}`}>
            <div className="row">
            <div className="col-8" id="SkillsPadding">
                <h1 className="SkillsName">{name}</h1>
                <h2 className="SkillsSubtitle">{category}</h2>
            </div>
            <div className="col-4">
                <img className="SkillsImage" src={imgSrc}></img>
            </div>
            </div>
        </div>
    )
}
