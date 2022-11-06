import "../styles/subscribe.css"

export function Subscribe(){
    return(   
        <div className = "SubscribeContainer">
            <div className="centerMargin width-limit">
                <div className = "SubscribeUpperText">Subscribe to our newsletter</div>
                <div className = "SubscribeInputContainer">
                    <div className = "SubscribeEmailContainer">
                        <input className = "SubscribeEmailInput" type="email" name="name" id="email" defaultValue="Company e-mail address" required/>
                    </div>
                    <div className = "SubscribeEmailButton">
                        <button className="buttonStyling subscribeButton">Subscribe</button>
                    </div>
                </div>
                    <div className = "SubscribeBottomText">Chupa chups gummi bears shortbread candy </div>
                </div>
        </div>
    )
}