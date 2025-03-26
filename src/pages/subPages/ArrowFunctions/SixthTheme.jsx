import IntroductionPage from "./Pages/IntroductionPage.jsx";
import ArrowFunctionsPage from "./Pages/ArrowFunctionsPage.jsx";
import ExecutionContextPage from "./Pages/ExecutionContextPage.jsx";
import WorkingWithContextPage from "./Pages/WorkingWithContextPage.jsx";
import {Paper} from "@mui/material";
import './SixthTheme.css'


const SixthTheme = () => {
    return (
        <>
            <Paper>
                <IntroductionPage className='theme-section'/>
                <hr/>
                <ArrowFunctionsPage className='theme-section'/>
                <hr/>
                <ExecutionContextPage className='theme-section'/>
                <hr/>
                <WorkingWithContextPage className='theme-section'/>
            </Paper>
        </>
    )
}

export default SixthTheme;