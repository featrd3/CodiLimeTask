import {TextWithImg} from "../components/TextWithImg"
import { ExpandableList } from "../components/ExpandableList"
import { TextAndQuote } from "../components/TextAndQuote"
import { SelectableSquares } from "../components/SelectableSquares"

export function Overview(){
    return(   
        <main>
            <section className = "Section_1">
                <TextWithImg 
                    textTitle_altColor = {"Duis aute irure "}
                    textTitle_afterAlt = {"dolor in reprehenderit"}  
                    textContent = {"Nam at lectus urna duis convallis. Id semper risus in hendrerit gravida rutrum quisque non tellus. Elit eget gravida cum sociis natoque. Ultrices neque ornare aenean euismod elementum nisi quis eleifend. Arcu felis bibendum ut tristique et egestas."}/>
            </section>
            <section className = "Section_2">
                <ExpandableList/>
            </section>
            <section>
                <TextAndQuote/>
            </section>
            <section>
                <SelectableSquares/>
            </section>
            <section>Section 7</section>
        </main>
    )
}