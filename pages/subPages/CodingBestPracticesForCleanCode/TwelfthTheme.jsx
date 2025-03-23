import CodeQualityIntroduction from "./Pages/CodeQualityIntroduction.jsx";
import CleanCodePrinciples from "./Pages/Practise/CleanCodePrinciples.jsx";
import NamingConventions from "./Pages/Practise/NamingConventions.jsx";
import CommentingPage from "./Pages/Practise/CommentingPage.jsx";
import CodeFormattingPage from "./Pages/Practise/CodeFormattingPage.jsx";
import EfficiencyAndOptimizationPage from "./Pages/Practise/EfficiencyAndOptimizationPage.jsx";


const TwelfthTheme = () => {
    return (
        <>
            <CodeQualityIntroduction/>
            <CleanCodePrinciples/>
            <NamingConventions/>
            <CommentingPage/>
            <CodeFormattingPage/>
            <EfficiencyAndOptimizationPage/>
        </>
    )
}

export default TwelfthTheme;