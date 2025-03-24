import JQueryOverviewPage from "./Pages/JQueryOverviewPage.jsx";
import JQueryProblemsPage from "./Pages/JQueryProblemsPage.jsx";
import JQueryFeaturesPage from "./Pages/JQueryFeaturesPage.jsx";
import JQueryUsagePage from "./Pages/JQueryUsagePage.jsx";
import {Paper} from "@mui/material";


const EighteenthTheme = () => {
    return (
        <>
            <Paper>
            <JQueryOverviewPage/>
            <JQueryProblemsPage/>
            <JQueryFeaturesPage/>
            <JQueryUsagePage/>
            </Paper>
        </>
    )
}

export default EighteenthTheme;