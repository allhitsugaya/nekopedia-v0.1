import FunctionalProgrammingIntroPage from "./Pages/FunctionalProgrammingIntroPage.jsx";
import FunctionsBasicsPage from "./Pages/FunctionsBasicsPage.jsx";
import FunctionVariantsPage from "./Pages/FunctionVariantsPage.jsx";
import FunctionParametersPage from "./Pages/FunctionParametersPage.jsx";
import FunctionParametersAdvancedPage from "./Pages/FunctionParametersAdvancedPage.jsx";
import FunctionScopeClosuresPage from "./Pages/FunctionScopeClosuresPage.jsx";
import './FourthTheme.css'

const FourthTheme = () => {
    return (
        <div className='theme'>
            <FunctionalProgrammingIntroPage className='theme-section'/>
            <hr/>
            <FunctionsBasicsPage className='theme-section'/>
            <hr/>
            <FunctionVariantsPage className='theme-section'/>
            <hr/>
            <FunctionParametersPage className='theme-section'/>
            <hr/>
            <FunctionParametersAdvancedPage className='theme-section'/>
            <hr/>
            <FunctionScopeClosuresPage className='theme-section'/>
        </div>
    )
}

export default FourthTheme;