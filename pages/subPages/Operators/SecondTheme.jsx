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
        <>
            <ControlFlowPage/>
            <HoistingPage/>
            <UserInteractionPage/>
            <AssignmentOperatorsPage/>
            <ArithmeticOperatorsPage/>
            <OperatorPrecedencePage/>
            <BinaryLogicalOperatorsPage/>
            <ConditionalOperatorsPage/>
            <SwitchCasePage/>
        </>
    )
}

export default SecondTheme;