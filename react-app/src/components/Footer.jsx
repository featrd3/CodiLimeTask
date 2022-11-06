import "../styles/footer.css"
import FB from '../icons/FB.svg';
import twitter from '../icons/twitter.svg';
import linkedIN from '../icons/linkedIN.svg';
import m from '../icons/m.svg';
import github from '../icons/github.svg';

export function Footer(){
    return(   
        <footer>
            <div className="centerMargin width-limit">
                <div className="footerPCcontainer">
                    <ul className="ulFooter"><span className="footerColTitle">Products</span>
                        <li className="">Tiramisu chocolate</li>
                        <li className="">Pastry tart</li>
                        <li className="">Pllipop brownie</li>
                    </ul>
                    <ul className="ulFooter"><span className="footerColTitle">Collaboration</span>
                        <li className="">Tiramisu chocolate</li>
                        <li className="">Pastry tart</li>
                        <li className="">Pllipop brownie</li>
                    </ul>
                </div>
                <div className="socialMediaContainer">
                    <ul className = "ulFooter socialMediaList">
                        <li><img src = {FB} alt="FB"/></li>
                        <li><img src = {twitter} alt="Twitter"/></li>
                        <li><img src = {linkedIN} alt="in"/></li>
                        <li><img src = {m} alt="M"/></li>
                        <li><img src = {github} alt="github"/></li>                       
                    </ul>
                </div>
                <div className="footerLine"/>
                <div>
                    <ul className = "legals">
                        <li>© 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved.</li>
                        <li>Legal</li>
                        <li>Privacy policy</li>
                        <li>Proud to be Open Source   </li>         
                    </ul>
                </div>
            </div>
        </footer>
    )
}