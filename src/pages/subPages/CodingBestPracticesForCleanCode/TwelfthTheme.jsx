import CodeQualityIntroduction from "./Pages/CodeQualityIntroduction.jsx";
import CleanCodePrinciples from "./Pages/Practise/CleanCodePrinciples.jsx";
import NamingConventions from "./Pages/Practise/NamingConventions.jsx";
import CommentingPage from "./Pages/Practise/CommentingPage.jsx";
import CodeFormattingPage from "./Pages/Practise/CodeFormattingPage.jsx";
import EfficiencyAndOptimizationPage from "./Pages/Practise/EfficiencyAndOptimizationPage.jsx";
import './TwelfthTheme.css'

const TwelfthTheme = () => {
    return (
        <div className='theme'>
            <CodeQualityIntroduction className='theme-section'/>
            <hr/>
            <CleanCodePrinciples className='theme-section'/>
            <hr/>
            <NamingConventions className='theme-section'/>
            <hr/>
            <CommentingPage className='theme-section'/>
            <hr/>
            <CodeFormattingPage className='theme-section'/>
            <hr/>
            <EfficiencyAndOptimizationPage className='theme-section'/>
        </div>
    )
}

export default TwelfthTheme;