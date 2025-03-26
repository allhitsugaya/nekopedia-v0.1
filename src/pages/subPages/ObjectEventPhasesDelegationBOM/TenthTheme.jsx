import IntroductionPage from "./Pages/IntroductionPage.jsx";
import EventBubblingPage from "./Pages/Bubbling/EventBubblingPage.jsx";
import SecondEventBubblingPage from "./Pages/Bubbling/SecondEventBubblingPage.jsx";
import EventBubblingExamplePage from "./Pages/Bubbling/EventBubblingExamplePage.jsx";
import EventDelegationPage from "./Pages/Deligation/EventDelegationPage.jsx";
import EventDelegationExamples from "./Pages/Deligation/EventDelegationExamples.jsx";
import BOMAndWindowPage from "./Pages/BOM/BOMAndWindowPage.jsx";
import URLAndLocationPage from "./Pages/BOM/URLAndLocationPage.jsx";
import NavigatorObjectPage from "./Pages/BOM/NavigatorObjectPage.jsx";
import HistoryObjectPage from "./Pages/BOM/HistoryObjectPage.jsx";
import ScreenObjectPage from "./Pages/BOM/ScreenObjectPage.jsx";
import {Paper} from "@mui/material";
import './TenthTheme.css'

const TenthTheme = () => {
    return (
        <>
            <Paper>
                    <IntroductionPage className='theme-section'/>
                    <hr/>
                    <EventBubblingPage className='theme-section'/>
                    <hr/>
                    <SecondEventBubblingPage className='theme-section'/>
                    <hr/>
                    <EventBubblingExamplePage className='theme-section'/>
                    <hr/>
                    <EventDelegationPage className='theme-section'/>
                    <hr/>
                    <EventDelegationExamples className='theme-section'/>
                    <hr/>
                    <BOMAndWindowPage className='theme-section'/>
                    <hr/>
                    <URLAndLocationPage className='theme-section'/>
                    <hr/>
                    <NavigatorObjectPage className='theme-section'/>
                    <hr/>
                    <HistoryObjectPage className='theme-section'/>
                    <hr/>
                    <ScreenObjectPage className='theme-section'/>
            </Paper>
        </>
    )
}

export default TenthTheme;