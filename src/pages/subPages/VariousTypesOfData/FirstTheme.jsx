import DataTypesPage from "./Pages/DataTypesPage.jsx";
import VariableDeclarationPage from "./Pages/VariableDeclarationPage.jsx";
import DataTypesCategoriesPage from "./Pages/DataTypesCategoriesPage.jsx";
import EverythingIsAnObjectPage from "./Pages/EverythingIsAnObjectPage.jsx";
import UnaryOperatorsPage from "./Pages/UnaryOperatorsPage.jsx";
import TypeConversionPage from "./Pages/TypeConversionPage.jsx";
import ComparisonOperatorsPage from "./Pages/ComparisonOperatorsPage.jsx";
import TemplateStringsPage from "./Pages/TemplateStringsPage.jsx";
import './FirstTheme.css'

const FirstTheme = () => {
    return (
        <div className="theme">
            <DataTypesPage className="theme-section"/>
            <hr/>
            <VariableDeclarationPage className="theme-section"/>
            <hr/>
            <DataTypesCategoriesPage className="theme-section"/>
            <hr/>
            <EverythingIsAnObjectPage className="theme-section"/>
            <hr/>
            <UnaryOperatorsPage className="theme-section"/>
            <hr/>
            <TypeConversionPage className="theme-section"/>
            <hr/>
            <ComparisonOperatorsPage className="theme-section"/>
            <hr/>
            <TemplateStringsPage className="theme-section"/>
            <hr/>
        </div>
    )
}

export default FirstTheme;