import ControlFlowPage from "./Pages/ControlFlowPage.jsx";
import HoistingPage from "./Pages/HoistingPage.jsx";
import UserInteractionPage from "./Pages/UserInteractionPage.jsx";
import AssignmentOperatorsPage from "./Pages/AssignmentOperatorsPage.jsx";
import ArithmeticOperatorsPage from "./Pages/ArithmeticOperatorsPage.jsx";
import OperatorPrecedencePage from "./Pages/OperatorPrecedencePage.jsx";
import BinaryLogicalOperatorsPage from "./Pages/BinaryLogicalOperatorsPage.jsx";
import ConditionalOperatorsPage from "./Pages/ConditionalOperatorsPage.jsx";
import SwitchCasePage from "./Pages/SwitchCasePage.jsx";
import './SecondTheme.css'


const SecondTheme = () => {
    return (
        <div className='theme'>
            <ControlFlowPage className='theme-section'/>
            <hr/>
            <HoistingPage className='theme-section'/>
            <hr/>
            <UserInteractionPage className='theme-section'/>
            <hr/>
            <AssignmentOperatorsPage className='theme-section'/>
            <hr/>
            <ArithmeticOperatorsPage className='theme-section'/>
            <hr/>
            <OperatorPrecedencePage className='theme-section'/>
            <hr/>
            <BinaryLogicalOperatorsPage className='theme-section'/>
            <hr/>
            <ConditionalOperatorsPage className='theme-section'/>
            <hr/>
            <SwitchCasePage className='theme-section'/>
        </div>
    )
}

export default SecondTheme;