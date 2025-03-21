import EventLoopPromisesPage from "./Pages/EventLoopPromisesPage.jsx";
import AsynchronyIntroductionPage from "./Pages/AsynchronyIntroductionPage.jsx";
import TimersPage from "./Pages/TimersPage.jsx";
import EventLoopPage from "./Pages/EventLoopPage.jsx";
import CallbackHellPage from "./Pages/CallbackHellPage.jsx";
import PromisePage from "./Pages/PromisePage.jsx";
import './SixteenthTheme.css'

const SixteenthTheme = () => {
    return (
        <>
            <EventLoopPromisesPage/>
            <AsynchronyIntroductionPage/>
            <TimersPage/>
            <EventLoopPage/>
            <CallbackHellPage/>
            <PromisePage/>
        </>
    )
}

export default SixteenthTheme;