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


const TenthTheme = () => {
    return (
        <>
            <Paper>
            <IntroductionPage/>
            <EventBubblingPage/>
            <SecondEventBubblingPage/>
            <EventBubblingExamplePage/>
            <EventDelegationPage/>
            <EventDelegationExamples/>
            <BOMAndWindowPage/>
            <URLAndLocationPage/>
            <NavigatorObjectPage/>
            <HistoryObjectPage/>
            <ScreenObjectPage/>
            </Paper>
        </>
    )
}

export default TenthTheme;