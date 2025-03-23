import IntroductionPage from "./Pages/IntroductionPage.jsx";
import TypeScriptBasicsPage from "./Pages/TypeScriptBasicsPage.jsx";
import AnyTypePage from "./Pages/AnyTypePage.jsx";
import FunctionsInTypeScriptPage from "./Pages/FunctionsInTypeScriptPage.jsx";
import OOPPage from "./Pages/OOPPage.jsx";
import './NineteenthTheme.css'

const NineteenthTheme = () => {
    return (
        <div className='theme'>
            <IntroductionPage className='theme-section'/>
            <hr/>
            <TypeScriptBasicsPage className='theme-section'/>
            <hr/>
            <AnyTypePage className='theme-section'/>
            <hr/>
            <FunctionsInTypeScriptPage className='theme-section'/>
            <hr/>
            <OOPPage className='theme-section'/>
        </div>
    )
}

export default NineteenthTheme;