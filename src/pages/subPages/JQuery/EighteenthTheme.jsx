import JQueryOverviewPage from "./Pages/JQueryOverviewPage.jsx";
import JQueryProblemsPage from "./Pages/JQueryProblemsPage.jsx";
import JQueryFeaturesPage from "./Pages/JQueryFeaturesPage.jsx";
import JQueryUsagePage from "./Pages/JQueryUsagePage.jsx";
import {Paper} from "@mui/material";
import './EighteenthTheme.css'

const EighteenthTheme = () => {
    return (
        <>
            <Paper>
                <JQueryOverviewPage className='theme-section'/>
                <hr/>
                <JQueryProblemsPage className='theme-section'/>
                <hr/>
                <JQueryFeaturesPage className='theme-section'/>
                <hr/>
                <JQueryUsagePage className='theme-section'/>
            </Paper>
        </>
    )
}

export default EighteenthTheme;