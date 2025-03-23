import JQueryOverviewPage from "./Pages/JQueryOverviewPage.jsx";
import JQueryProblemsPage from "./Pages/JQueryProblemsPage.jsx";
import JQueryFeaturesPage from "./Pages/JQueryFeaturesPage.jsx";
import JQueryUsagePage from "./Pages/JQueryUsagePage.jsx";
import './EighteenthTheme.css'

const EighteenthTheme = () => {
    return (
        <div className='theme'>
            <JQueryOverviewPage className='theme-section'/>
            <hr/>
            <JQueryProblemsPage className='theme-section'/>
            <hr/>
            <JQueryFeaturesPage className='theme-section'/>
            <hr/>
            <JQueryUsagePage className='theme-section'/>

        </div>
    )
}

export default EighteenthTheme;