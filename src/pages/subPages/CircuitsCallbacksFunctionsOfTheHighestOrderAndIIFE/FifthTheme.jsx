import AdvancedFunctionsIntroPage from "./Pages/AdvancedFunctionsIntroPage.jsx";
import CallbackFunctionsPage from "./Pages/CallbackFunctionsPage.jsx";
import HigherOrderFunctionsPage from "./Pages/HigherOrderFunctionsPage.jsx";
import IIFEPage from "./Pages/IIFEPage.jsx";
import PureFunctionsPage from "./Pages/PureFunctionsPage.jsx";
import CurryingPage from "./Pages/CurryingPage.jsx";
import {Paper} from "@mui/material";


const FifthTheme = () => {
    return (
        <>
            <Paper>
            <AdvancedFunctionsIntroPage/>
            <CallbackFunctionsPage/>
            <HigherOrderFunctionsPage/>
            <IIFEPage/>
            <PureFunctionsPage/>
            <CurryingPage/>
            </Paper>
        </>
    )
}

export default FifthTheme;