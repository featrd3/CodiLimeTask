import { useState } from "react"
import minusIcon from '../icons/minus.svg';

export function ExpandableListElement({id,title,desc}){

    var [elementActive,setElementActive] = useState (false)

    return( 
        <div className = "ELSingleElement">
            <div>{id}.</div>
            <div className = "elementTitleIconContainer">
                <div className = "elementTitle">{title}</div>
                <div className = "elementIcon">
                    <img className="baseIcon" src = {minusIcon} alt="minus" />
                    <img className="baseIcon" src = {minusIcon} alt="minus" 
                    onClick={()=>setElementActive(!elementActive)} 
                    style = {{transform: (elementActive) ? "rotate(0deg)" : "rotate(90deg)"}}/>
                </div>
            </div>
            <div className={(elementActive)?"elementDescActive":"elementDesc"}>{desc}</div>
            <div className="expandableListLine"/>
        </div>
    )
}