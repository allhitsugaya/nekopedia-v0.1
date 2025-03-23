import IntroductionPage from './Pages/IntroductionPage';
import AjaxAndFetchPage from './Pages/AjaxAndFetchPage';
import HttpMethodsPage from "./Pages/HttpMethodsPage.jsx";
import AsyncAwaitPage from "./Pages/AsyncAwaitPage.jsx";
import './SeventeenthTheme.css'

const SeventeenthTheme = () => {
    return (
        <div className='theme'>
            <IntroductionPage className='theme-section'/>
            <hr/>
            <AjaxAndFetchPage className='theme-section'/>
            <hr/>
            <HttpMethodsPage className='theme-section'/>
            <hr/>
            <AsyncAwaitPage className='theme-section'/>
        </div>
    )
}

export default SeventeenthTheme;