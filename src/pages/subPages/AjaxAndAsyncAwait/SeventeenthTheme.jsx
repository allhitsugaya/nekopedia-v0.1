import IntroductionPage from './Pages/IntroductionPage.jsx';
import AjaxAndFetchPage from './Pages/AjaxAndFetchPage.jsx';
import HttpMethodsPage from "./Pages/HttpMethodsPage.jsx";
import AsyncAwaitPage from "./Pages/AsyncAwaitPage.jsx";
import {Paper} from "@mui/material";
import './SeventeenthTheme.css'

const SeventeenthTheme = () => {
    return (
        <>
            <Paper>
                <IntroductionPage className='theme-section'/>
                <hr/>
                <AjaxAndFetchPage className='theme-section'/>
                <hr/>
                <HttpMethodsPage className='theme-section'/>
                <hr/>
                <AsyncAwaitPage className='theme-section'/>
            </Paper>
        </>
    )
}

export default SeventeenthTheme;