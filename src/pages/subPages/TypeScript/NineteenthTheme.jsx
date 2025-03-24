import IntroductionPage from "./Pages/IntroductionPage.jsx";
import TypeScriptBasicsPage from "./Pages/TypeScriptBasicsPage.jsx";
import AnyTypePage from "./Pages/AnyTypePage.jsx";
import FunctionsInTypeScriptPage from "./Pages/FunctionsInTypeScriptPage.jsx";
import OOPPage from "./Pages/OOPPage.jsx";
import {Paper} from "@mui/material";


const NineteenthTheme = () => {
    return (
        <>
            <Paper>
            <IntroductionPage/>
            <TypeScriptBasicsPage/>
            <AnyTypePage/>
            <FunctionsInTypeScriptPage/>
            <OOPPage/>
            </Paper>
        </>
    )
}

export default NineteenthTheme;