import "../styles/navbar.css"

export function Navbar(){
    return(   
        <header className="centerMargin width-limit">
            <nav>
                <ul className="centerMargin navbarUl">
                    <li className="navbarLi active">Overview</li>
                    <li className="navbarLi">About</li>
                    <li className="navbarLi">Resources</li>
                    <li className="navbarLi">Network</li>
                    <li className="navbarLi">Cloud</li>
                    <li className="navbarLi">Download</li>
                    <li className="navbarLi">Contact</li>
                </ul>
                <div className="centerMargin contactUsButtonContainer">
                    <button className="buttonStyling">Contact Us</button> 
                </div>
            </nav>
            <h1 className = "logo">Future one</h1>
        </header>
    )
}