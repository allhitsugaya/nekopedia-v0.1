import IntroductionPage from "./Pages/IntroductionPage.jsx";
import RecursionPage from "./Pages/RecursionPage.jsx";
import ConstructorFunctionPage from "./Pages/ConstructorFunctionPage.jsx";
import CustomMethodsPage from "./Pages/CustomMethodsPage.jsx";
import {Paper} from "@mui/material";



const SeventhTheme = () => {
    return (
        <>
            <Paper>
            <IntroductionPage/>
            <RecursionPage/>
            <ConstructorFunctionPage/>
            <CustomMethodsPage/>
            </Paper>
        </>
    )
}

export default SeventhTheme;