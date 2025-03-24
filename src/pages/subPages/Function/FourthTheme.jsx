import FunctionalProgrammingIntroPage from "./Pages/FunctionalProgrammingIntroPage.jsx";
import FunctionsBasicsPage from "./Pages/FunctionsBasicsPage.jsx";
import FunctionVariantsPage from "./Pages/FunctionVariantsPage.jsx";
import FunctionParametersPage from "./Pages/FunctionParametersPage.jsx";
import FunctionParametersAdvancedPage from "./Pages/FunctionParametersAdvancedPage.jsx";
import FunctionScopeClosuresPage from "./Pages/FunctionScopeClosuresPage.jsx";
import {Paper} from "@mui/material";


const FourthTheme = () => {
    return (
        <>
            <Paper>
            <FunctionalProgrammingIntroPage/>
            <FunctionsBasicsPage/>
            <FunctionVariantsPage/>
            <FunctionParametersPage/>
            <FunctionParametersAdvancedPage/>
            <FunctionScopeClosuresPage/>
            </Paper>
        </>
    )
}

export default FourthTheme;