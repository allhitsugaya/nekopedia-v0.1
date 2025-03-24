import CodeQualityIntroduction from "./Pages/CodeQualityIntroduction.jsx";
import CleanCodePrinciples from "./Pages/Practise/CleanCodePrinciples.jsx";
import NamingConventions from "./Pages/Practise/NamingConventions.jsx";
import CommentingPage from "./Pages/Practise/CommentingPage.jsx";
import CodeFormattingPage from "./Pages/Practise/CodeFormattingPage.jsx";
import EfficiencyAndOptimizationPage from "./Pages/Practise/EfficiencyAndOptimizationPage.jsx";
import {Paper} from "@mui/material";


const TwelfthTheme = () => {
    return (
        <>
            <Paper>
            <CodeQualityIntroduction/>
            <CleanCodePrinciples/>
            <NamingConventions/>
            <CommentingPage/>
            <CodeFormattingPage/>
            <EfficiencyAndOptimizationPage/>
            </Paper>
        </>
    )
}

export default TwelfthTheme;