import IntroductionPage from "./Pages/IntroductionPage.jsx";
import BasicsOfDOM from "./Pages/BasicsOfDOM.jsx";
import DOMElementsManipulation from "./Pages/DOM/DOMElementsManipulation.jsx";
import DomManipulationPage from "./Pages/DOM/DomManipulationPage.jsx";
import SecondDomManipulationPage from "./Pages/DOM/SecondDomManipulationPage.jsx";
import EventHandlingPage from "./Pages/Event/EventHandlingPage.jsx";
import EventObjectExample from "./Pages/Event/EventObjectExample.jsx";
import SecondEventHandlingPage from "./Pages/Event/SecondEventHandlingPage.jsx";
import CommonEventErrorsPage from "./Pages/Event/CommonEventErrorsPage.jsx";
import DomContentLoadedAndWindowOnloadPage from "./Pages/DOMWindow/DomContentLoadedAndWindowOnloadPage.jsx";
import UsingDomContentLoadedAndWindowOnloadPage from "./Pages/DOMWindow/UsingDomContentLoadedAndWindowOnloadPage.jsx";
import {Paper} from "@mui/material";
import './NinthTheme.css'


const NinthTheme = () => {
    return (
        <>
            <Paper>
                    <IntroductionPage className='theme-section'/>
                    <hr/>
                    <BasicsOfDOM className='theme-section'/>
                    <hr/>
                    <DOMElementsManipulation className='theme-section'/>
                    <hr/>
                    <DomManipulationPage className='theme-section'/>
                    <hr/>
                    <SecondDomManipulationPage className='theme-section'/>
                    <hr/>
                    <EventHandlingPage className='theme-section'/>
                    <hr/>
                    <EventObjectExample className='theme-section'/>
                    <hr/>
                    <SecondEventHandlingPage className='theme-section'/>
                    <hr/>
                    <CommonEventErrorsPage className='theme-section'/>
                    <hr/>
                    <DomContentLoadedAndWindowOnloadPage className='theme-section'/>
                    <hr/>
                    <UsingDomContentLoadedAndWindowOnloadPage className='theme-section'/>
            </Paper>
        </>
    )
}

export default NinthTheme;