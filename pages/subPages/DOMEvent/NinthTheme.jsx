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
import './NinthTheme.css'

const NinthTheme = () => {
    return (
        <>
            <IntroductionPage/>
            <BasicsOfDOM/>
            <DOMElementsManipulation/>
            <DomManipulationPage/>
            <SecondDomManipulationPage/>
            <EventHandlingPage/>
            <EventObjectExample/>
            <SecondEventHandlingPage/>
            <CommonEventErrorsPage/>
            <DomContentLoadedAndWindowOnloadPage/>
            <UsingDomContentLoadedAndWindowOnloadPage/>
        </>
    )
}

export default NinthTheme;