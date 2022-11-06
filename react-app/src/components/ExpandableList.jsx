import ExpandableListJSON from './ExpandableListEntries.json'
import { ExpandableListElement } from './ExpandableListElement'
import "../styles/ExpandableList.css"

export function ExpandableList(){

    return(   
        <div className = "centerMargin width-limit ExpandableListContainer">
            <div className = "centerMargin listTitle">Lacinia quis vel eros tempor orci.</div>
            { ExpandableListJSON.listOfEntries.map(element =>{
                return(
                    <div key={element.id} >
                        <ExpandableListElement 
                        id={element.id} 
                        title={element.title}
                        desc={element.desc}/>
                    </div>
                )
            }) }
        </div>
        
        
    )
}