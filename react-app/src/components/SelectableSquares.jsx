import "../styles/selectableSquares.css"
import { SelectablSquare } from "./SelectableSquare"
import wheel from '../icons/wheel.svg';
import scissors from '../icons/scissors.svg';
import android from '../icons/android.svg';
import circle from '../icons/circle.svg';

export function SelectableSquares(){

    return( 
        <div className = "centerMargin width-limit SelectableSquaresContainer">
            <div className = "SelectableSquares_title">
                Massa tempor nec feugiat nisl pretium fusce
            </div>
            <div className = "SelectableSquares_upperText">
                Pellentesque <b>habitant</b> morbi tristique senectus et netus et malesuada. <b>Ipsum faucibus vitae</b> aliquet nec ullamcorper sit amet risus nullam.<br/> 
Dictum varius duis at consectetur <b>lorem donec</b> massa sapien. Massa tempor nec feugiat nisl pretium fusce. 
            </div>
            <div className = "SelectableSquares_lowerText">
                Elit scelerisque mauris pellentesque?    
            </div>
            <div className = "squaresContainer">
                <SelectablSquare icon = {wheel}/>
                <SelectablSquare icon = {scissors}/>
                <SelectablSquare icon = {android}/>
                <SelectablSquare icon = {circle}/>
            </div>
        </div>  
    )
}