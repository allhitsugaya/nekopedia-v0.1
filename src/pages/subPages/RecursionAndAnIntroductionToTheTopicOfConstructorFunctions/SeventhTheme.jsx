import IntroductionPage from "./Pages/IntroductionPage.jsx";
import RecursionPage from "./Pages/RecursionPage.jsx";
import ConstructorFunctionPage from "./Pages/ConstructorFunctionPage.jsx";
import CustomMethodsPage from "./Pages/CustomMethodsPage.jsx";
import {Paper} from "@mui/material";
import './SeventhTheme.css'


const SeventhTheme = () => {
    return (
        <>
            <Paper>
                <IntroductionPage className='theme-section'/>
                <hr/>
                <RecursionPage className='theme-section'/>
                <hr/>
                <ConstructorFunctionPage className='theme-section'/>
                <hr/>
                <CustomMethodsPage className='theme-section'/>
            </Paper>
        </>
    )
}

export default SeventhTheme;