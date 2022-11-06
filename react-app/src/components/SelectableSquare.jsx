import arrow from '../icons/arrowRight.svg';

export function SelectablSquare({icon, redirectAddress}){

    return(
        <div className="square">
            <img className="squareIcon" src = {icon} alt="icon" />
            <div className="squareViewDetails"><a className = "square_link" href={redirectAddress}>View details</a> <img className="squareArrow" src = {arrow} alt="icon" /> </div>
        </div>
    )
}