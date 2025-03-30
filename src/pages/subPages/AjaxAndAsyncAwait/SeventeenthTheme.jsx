import IntroductionPage from './Pages/IntroductionPage.jsx';
import AjaxAndFetchPage from './Pages/AjaxAndFetchPage.jsx';
import HttpMethodsPage from "./Pages/HttpMethodsPage.jsx";
import AsyncAwaitPage from "./Pages/AsyncAwaitPage.jsx";
import {Paper} from "@mui/material";


const SeventeenthTheme = () => {
    return (
        <>
            <Paper>
            <IntroductionPage/>
            <AjaxAndFetchPage/>
            <HttpMethodsPage/>
            <AsyncAwaitPage/>
            </Paper>
        </>
    )
}

export default SeventeenthTheme;