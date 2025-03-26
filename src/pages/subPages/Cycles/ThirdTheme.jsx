import LoopsIntroductionPage from "./Pages/LoopsIntroductionPage.jsx";
import LoopsPage from "./Pages/LoopsPage.jsx";
import WhileDoWhilePage from "./Pages/WhileDoWhilePage.jsx";
import ForLoopsPage from "./Pages/ForLoopsPage.jsx";
import BreakContinuePage from "./Pages/BreakContinuePage.jsx";
import NestedInfiniteLoopsPage from "./Pages/NestedInfiniteLoopsPage.jsx";
import {Paper} from "@mui/material";
import "./ThirdTheme.css"


const ThirdTheme = () => {
    return (
        <>
            <Paper>
                <LoopsIntroductionPage className='theme-section'/>
                <hr/>
                <LoopsPage className='theme-section'/>
                <hr/>
                <WhileDoWhilePage className='theme-section'/>
                <hr/>
                <ForLoopsPage className='theme-section'/>
                <hr/>
                <BreakContinuePage className='theme-section'/>
                <hr/>
                <NestedInfiniteLoopsPage className='theme-section'/>
            </Paper>
        </>
    )
}

export default ThirdTheme;