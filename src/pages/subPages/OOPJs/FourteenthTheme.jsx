import OOPPage from "./Pages/OOPPage.jsx";
import OOPConceptsPage from "./Pages/OOPConceptsPage.jsx";
import PolymorphismAbstractionPage from "./Pages/PolymorphismAbstractionPage.jsx";
import GettersSettersPage from "./Pages/GettersSettersPage.jsx";
import PrototypesPage from "./Pages/PrototypesPage.jsx";
import {Paper} from "@mui/material";
import './FourteenthTheme.css'

const FourteenthTheme = () => {
    return (
        <>
            <Paper>
                <OOPPage className='theme-section'/>
                <hr/>
                <OOPConceptsPage className='theme-section'/>
                <hr/>
                <PolymorphismAbstractionPage className='theme-section'/>
                <hr/>
                <GettersSettersPage className='theme-section'/>
                <hr/>
                <PrototypesPage className='theme-section'/>
            </Paper>
        </>
    )
}

export default FourteenthTheme;