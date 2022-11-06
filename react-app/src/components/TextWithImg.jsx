import "../styles/textWithImg.css"
import img from '../images/imgSection_1.png';

export function TextWithImg({textTitle_altColor, textTitle_afterAlt, textContent}){
    return(  
        <div className="centerMargin width-limit TextWithImgContainer">
            <div className = "textWithImg_textContainer">
                <div className = "textWithImgHeader">
                    <span className = "textWithImgAltFont">{textTitle_altColor}</span>
                    {textTitle_afterAlt}
                </div>
                <div className = "textWithImgTextContent">
                    {textContent}
                </div>
                <div className = "textWithImgButton ">
                    <button className = "buttonStyling textWithImg_button">Discover now</button>
                </div>
            </div>
            <div className="textWithImg_imgContainer">
                <img className="textWithImg_img" src = {img} alt="Discover Now"/>
            </div>
            
        </div> 
        
    )
}