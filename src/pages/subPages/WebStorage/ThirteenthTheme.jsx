import IntroductionPage from "./Pages/IntroductionPage.jsx";
import JsonIntroductionPage from "./Pages/JsonIntroductionPage.jsx";
import JsonPracticePage from "./Pages/JsonPracticePage.jsx";
import LocalStoragePage from "./Pages/LocalStoragePage.jsx";
import SessionStoragePage from "./Pages/SessionStoragePage.jsx";
import CookiesPage from "./Pages/CookiesPage.jsx";
import {Paper} from "@mui/material";
import './ThirteenthTheme.css'

const ThirteenthTheme = () => {
    return (
        <>
            <Paper>
                <IntroductionPage className="theme-section"/>
                <hr/>
                <JsonIntroductionPage className="theme-section"/>
                <hr/>
                <JsonPracticePage className="theme-section"/>
                <hr/>
                <LocalStoragePage className="theme-section"/>
                <hr/>
                <SessionStoragePage className="theme-section"/>
                <hr/>
                <CookiesPage className="theme-section"/>
            </Paper>
        </>
    )
}

export default ThirteenthTheme;