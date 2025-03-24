import LoopsIntroductionPage from "./Pages/LoopsIntroductionPage.jsx";
import LoopsPage from "./Pages/LoopsPage.jsx";
import WhileDoWhilePage from "./Pages/WhileDoWhilePage.jsx";
import ForLoopsPage from "./Pages/ForLoopsPage.jsx";
import BreakContinuePage from "./Pages/BreakContinuePage.jsx";
import NestedInfiniteLoopsPage from "./Pages/NestedInfiniteLoopsPage.jsx";
import {Paper} from "@mui/material";


const ThirdTheme = () => {
    return (
        <>
            <Paper>
            <LoopsIntroductionPage/>
            <LoopsPage/>
            <WhileDoWhilePage/>
            <ForLoopsPage/>
            <BreakContinuePage/>
            <NestedInfiniteLoopsPage/>
            </Paper>
        </>
    )
}

export default ThirdTheme;