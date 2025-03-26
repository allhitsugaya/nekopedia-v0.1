import EventLoopPromisesPage from "./Pages/EventLoopPromisesPage.jsx";
import AsynchronyIntroductionPage from "./Pages/AsynchronyIntroductionPage.jsx";
import TimersPage from "./Pages/TimersPage.jsx";
import EventLoopPage from "./Pages/EventLoopPage.jsx";
import CallbackHellPage from "./Pages/CallbackHellPage.jsx";
import PromisePage from "./Pages/PromisePage.jsx";
import {Paper} from "@mui/material";
import './SixteenthTheme.css'


const SixteenthTheme = () => {
    return (
        <>
            <Paper>
                <EventLoopPromisesPage className='theme-section'/>
                <hr/>
                <AsynchronyIntroductionPage className='theme-section'/>
                <hr/>
                <TimersPage className='theme-section'/>
                <hr/>
                <EventLoopPage className='theme-section'/>
                <hr/>
                <CallbackHellPage className='theme-section'/>
                <hr/>
                <PromisePage className='theme-section'/>
            </Paper>
        </>
    )
}

export default SixteenthTheme;