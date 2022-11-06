import "../styles/textAndQuote.css"
import inVisionLogo from '../icons/inVision.svg';
import quote1 from '../icons/quote1.svg';
import quote2 from '../icons/quote2.svg';

export function TextAndQuote(){

    return(   
       <div className = "centerMargin width-limit textAndQuoteContainer">
            <div className = "textAndQuoteContainer_text">Bibendum at varius vel pharetra vel turpis nunc eget lorem.</div>
            <div className = "textAndQuoteContainer_quoteContainer">
                <div className = "textAndQuoteContainer_quotesAndQuote">
                    <div className = "quoteOpenContainer">
                        <img className="textWithImg_quoteClose" src = {quote2} alt="quoteOpen"/>
                    </div>
                    <div className = "textAndQuoteContainer_quote">
                        Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum faucibus. Tristique risus nec feugiat in fermentum. Elit duis tristique sollicitudin nibh sit amet commodo nulla.
                    </div>
                    <div className = "quoteCloseContainer">
                        <img className="textWithImg_quoteClose" src = {quote1} alt="quoteClose"/>
                    </div>
                </div>
                <div className = "textAndQuoteContainer_Author">
                    Faucibus Vitae, Office Assistant 
                </div>
                <div className = "logoContainer">
                    <img className="textWithImg_img" src = {inVisionLogo} alt="inVision"/>
                </div>
            </div>
       </div>
    )
}