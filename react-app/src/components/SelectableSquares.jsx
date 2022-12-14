import "../styles/selectableSquares.css"
import { SelectablSquare } from "./SelectableSquare"
import wheel from '../icons/wheel.svg';
import scissors from '../icons/scissors.svg';
import android from '../icons/android.svg';
import circle from '../icons/circle.svg';

export function SelectableSquares(){

    return( 
        <div className = "centerMargin width-limit SelectableSquaresContainer">
            <h2 className = "SelectableSquares_title">
                Massa tempor nec feugiat nisl pretium fusce
            </h2>
            <div className = "SelectableSquares_upperText">
                Pellentesque <b>habitant</b> morbi tristique senectus et netus et malesuada. <b>Ipsum faucibus vitae</b> aliquet nec ullamcorper sit amet risus nullam.<br/> 
Dictum varius duis at consectetur <b>lorem donec</b> massa sapien. Massa tempor nec feugiat nisl pretium fusce. 
            </div>
            <div className = "SelectableSquares_lowerText">
                Elit scelerisque mauris pellentesque?    
            </div>
            <div className = "squaresContainer">
                <SelectablSquare icon = {wheel} redirectAddress = {"https://codilime.com/services/golang-development/"}/>
                <SelectablSquare icon = {scissors} redirectAddress = {"https://codilime.com/services/c-and-cpp-development/"}/>
                <SelectablSquare icon = {android} redirectAddress = {"https://www.android.com/"}/>
                <SelectablSquare icon = {circle} redirectAddress = {"https://codilime.com/services/rust-development/"}/>
            </div>
        </div>  
    )
}