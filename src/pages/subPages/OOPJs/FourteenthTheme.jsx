import OOPPage from "./Pages/OOPPage.jsx";
import OOPConceptsPage from "./Pages/OOPConceptsPage.jsx";
import PolymorphismAbstractionPage from "./Pages/PolymorphismAbstractionPage.jsx";
import GettersSettersPage from "./Pages/GettersSettersPage.jsx";
import PrototypesPage from "./Pages/PrototypesPage.jsx";
import {Paper} from "@mui/material";


const FourteenthTheme = () => {
    return (
        <>
            <Paper>
            <OOPPage/>
            <OOPConceptsPage/>
            <PolymorphismAbstractionPage/>
            <GettersSettersPage/>
            <PrototypesPage/>
            </Paper>
        </>
    )
}

export default FourteenthTheme;