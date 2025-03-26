import AdvancedFunctionsIntroPage from "./Pages/AdvancedFunctionsIntroPage.jsx";
import CallbackFunctionsPage from "./Pages/CallbackFunctionsPage.jsx";
import HigherOrderFunctionsPage from "./Pages/HigherOrderFunctionsPage.jsx";
import IIFEPage from "./Pages/IIFEPage.jsx";
import PureFunctionsPage from "./Pages/PureFunctionsPage.jsx";
import CurryingPage from "./Pages/CurryingPage.jsx";
import {Paper} from "@mui/material";
import './FifthTheme.css'


const FifthTheme = () => {
    return (
        <>
            <Paper>
                <AdvancedFunctionsIntroPage className='theme-section'/>
                <hr/>
                <CallbackFunctionsPage className='theme-section'/>
                <hr/>
                <HigherOrderFunctionsPage className='theme-section'/>
                <hr/>
                <IIFEPage className='theme-section'/>
                <hr/>
                <PureFunctionsPage className='theme-section'/>
                <hr/>
                <CurryingPage className='theme-section'/>
            </Paper>
        </>
    )
}

export default FifthTheme;