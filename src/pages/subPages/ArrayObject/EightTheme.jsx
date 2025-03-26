import IntroductionPage from "./Pages/IntroductionPage.jsx";
import ArrayAndObjectPage from "./Pages/ArrayAndObjectPage.jsx";
import ObjectMethodsPage from "./Pages/Object/ObjectMethodsPage.jsx";
import DestructuringAndObjectIterationPage from "./Pages/Object/DestructuringAndObjectIterationPage.jsx";
import ArraysPage from "./Pages/Arrey/ArraysPage.jsx";
import ArrayMethodsPage from "./Pages/Arrey/ArrayMethodsPage.jsx";
import ArrayCopyAndSavePage from "./Pages/Arrey/ArrayCopyAndSavePage.jsx";
import ArrayOfObjectsPage from "./Pages/Arrey/ArrayOfObjectsPage.jsx";
import ArraysVsObjectsPage from "./Pages/ArraysVsObjectsPage.jsx";
import {Paper} from "@mui/material";
import "./EightTheme.css"



const EightTheme = () => {
    return (
        <>
            <Paper>
                <IntroductionPage className='theme-section'/>
                <hr/>
                <ArrayAndObjectPage className='theme-section'/>
                <hr/>
                <ObjectMethodsPage className='theme-section'/>
                <hr/>
                <DestructuringAndObjectIterationPage className='theme-section'/>
                <hr/>
                <ArraysPage className='theme-section'/>
                <hr/>
                <ArrayMethodsPage className='theme-section'/>
                <hr/>
                <ArrayCopyAndSavePage className='theme-section'/>
                <hr/>
                <ArrayOfObjectsPage className='theme-section'/>
                <hr/>
                <ArraysVsObjectsPage className='theme-section'/>
            </Paper>
        </>
    )
}

export default EightTheme;