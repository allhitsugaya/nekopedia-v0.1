import IntroductionPage from "./Pages/IntroductionPage.jsx";
import ArrowFunctionsPage from "./Pages/ArrowFunctionsPage.jsx";
import ExecutionContextPage from "./Pages/ExecutionContextPage.jsx";
import WorkingWithContextPage from "./Pages/WorkingWithContextPage.jsx";
import {Paper} from "@mui/material";


const SixthTheme = () => {
    return (
        <>
            <Paper>
            <IntroductionPage/>
            <ArrowFunctionsPage/>
            <ExecutionContextPage/>
            <WorkingWithContextPage/>
            </Paper>
        </>
    )
}

export default SixthTheme;