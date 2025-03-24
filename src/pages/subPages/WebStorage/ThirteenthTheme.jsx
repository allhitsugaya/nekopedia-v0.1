import IntroductionPage from "./Pages/IntroductionPage.jsx";
import JsonIntroductionPage from "./Pages/JsonIntroductionPage.jsx";
import JsonPracticePage from "./Pages/JsonPracticePage.jsx";
import LocalStoragePage from "./Pages/LocalStoragePage.jsx";
import SessionStoragePage from "./Pages/SessionStoragePage.jsx";
import CookiesPage from "./Pages/CookiesPage.jsx";
import {Paper} from "@mui/material";


const ThirteenthTheme = () => {
    return (
        <>
            <Paper>
            <IntroductionPage/>
            <JsonIntroductionPage/>
            <JsonPracticePage/>
            <LocalStoragePage/>
            <SessionStoragePage/>
            <CookiesPage/>
            </Paper>
        </>
    )
}

export default ThirteenthTheme;