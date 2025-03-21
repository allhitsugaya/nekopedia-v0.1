import IntroductionPage from "./Pages/IntroductionPage.jsx";
import JsonIntroductionPage from "./Pages/JsonIntroductionPage.jsx";
import JsonPracticePage from "./Pages/JsonPracticePage.jsx";
import LocalStoragePage from "./Pages/LocalStoragePage.jsx";
import SessionStoragePage from "./Pages/SessionStoragePage.jsx";
import CookiesPage from "./Pages/CookiesPage.jsx";
import './ThirteenthTheme.css'

const ThirteenthTheme = () => {
    return (
        <>
            <IntroductionPage/>
            <JsonIntroductionPage/>
            <JsonPracticePage/>
            <LocalStoragePage/>
            <SessionStoragePage/>
            <CookiesPage/>
        </>
    )
}

export default ThirteenthTheme;