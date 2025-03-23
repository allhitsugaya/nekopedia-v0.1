import OOPPage from "./Pages/OOPPage.jsx";
import OOPConceptsPage from "./Pages/OOPConceptsPage.jsx";
import PolymorphismAbstractionPage from "./Pages/PolymorphismAbstractionPage.jsx";
import GettersSettersPage from "./Pages/GettersSettersPage.jsx";
import PrototypesPage from "./Pages/PrototypesPage.jsx";
import './FourteenthTheme.css'

const FourteenthTheme = () => {
    return (
        <div className='theme'>
            <OOPPage className='theme-section'/>
            <hr/>
            <OOPConceptsPage className='theme-section'/>
            <hr/>
            <PolymorphismAbstractionPage className='theme-section'/>
            <hr/>
            <GettersSettersPage className='theme-section'/>
            <hr/>
            <PrototypesPage className='theme-section'/>
        </div>
    )
}

export default FourteenthTheme;