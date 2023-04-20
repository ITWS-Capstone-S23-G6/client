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
        <div className={``}
            style={{
                padding: '2rem',
                backgroundColor: 'rgba(166, 162, 162, 0.3)',
                gap: '1rem',
                marginBottom: '1rem',
                borderRadius: '2rem',
            }}>

            {/* Item */}
            <div className="row">
                <div className="col-8" id="SkillsPadding">
                    <h1 className="SkillsName">{name}</h1>
                    <h2 className="SkillsSubtitle">{category}</h2>
                </div>
                <div className="col-4">
                    <img 
                        className="" 
                        src={imgSrc}
                        style={{
                            width: '100%',
                            height: 'auto'
                        }}
                    >
                    </img>
                </div>
            </div>
        </div>
    )
}
