import FunctionalProgrammingIntroPage from "./Pages/FunctionalProgrammingIntroPage.jsx";
import FunctionsBasicsPage from "./Pages/FunctionsBasicsPage.jsx";
import FunctionVariantsPage from "./Pages/FunctionVariantsPage.jsx";
import FunctionParametersPage from "./Pages/FunctionParametersPage.jsx";
import FunctionParametersAdvancedPage from "./Pages/FunctionParametersAdvancedPage.jsx";
import FunctionScopeClosuresPage from "./Pages/FunctionScopeClosuresPage.jsx";
import './FourthTheme.css'

const FourthTheme = () => {
    return (
        <>
            <FunctionalProgrammingIntroPage/>
            <FunctionsBasicsPage/>
            <FunctionVariantsPage/>
            <FunctionParametersPage/>
            <FunctionParametersAdvancedPage/>
            <FunctionScopeClosuresPage/>
        </>
    )
}

export default FourthTheme;