import ClassesPage from "./Pages/ClassesPage.jsx";
import ClassesIntroductionPage from "./Pages/ClassesIntroductionPage.jsx";
import ClassCreationPage from "./Pages/ClassCreationPage.jsx";
import InheritancePage from "./Pages/InheritancePage.jsx";
import PropertyProtectionPage from "./Pages/PropertyProtectionPage.jsx";
import StaticMethodsPropertiesPage from "./Pages/StaticMethodsPropertiesPage.jsx";
import {Paper} from "@mui/material";


const FifteenthTheme = () => {
    return (
        <>
            <Paper>
            <ClassesPage/>
            <ClassesIntroductionPage/>
            <ClassCreationPage/>
            <InheritancePage/>
            <PropertyProtectionPage/>
            <StaticMethodsPropertiesPage/>
            </Paper>
        </>
    )
}

export default FifteenthTheme;