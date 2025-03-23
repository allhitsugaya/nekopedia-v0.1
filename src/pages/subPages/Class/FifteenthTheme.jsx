import ClassesPage from "./Pages/ClassesPage.jsx";
import ClassesIntroductionPage from "./Pages/ClassesIntroductionPage.jsx";
import ClassCreationPage from "./Pages/ClassCreationPage.jsx";
import InheritancePage from "./Pages/InheritancePage.jsx";
import PropertyProtectionPage from "./Pages/PropertyProtectionPage.jsx";
import StaticMethodsPropertiesPage from "./Pages/StaticMethodsPropertiesPage.jsx";
import './FifteenthTheme.css'

const FifteenthTheme = () => {
    return (
        <div className='theme'>
            <ClassesPage className='theme-section'/>
            <hr/>
            <ClassesIntroductionPage className='theme-section'/>
            <hr/>
            <ClassCreationPage className='theme-section'/>
            <hr/>
            <InheritancePage className='theme-section'/>
            <hr/>
            <PropertyProtectionPage className='theme-section'/>
            <hr/>
            <StaticMethodsPropertiesPage className='theme-section'/>
        </div>
    )
}

export default FifteenthTheme;