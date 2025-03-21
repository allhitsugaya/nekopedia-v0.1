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
        <>
            <DataTypesPage/>
            <VariableDeclarationPage/>
            <DataTypesCategoriesPage/>
            <EverythingIsAnObjectPage/>
            <UnaryOperatorsPage/>
            <TypeConversionPage/>
            <ComparisonOperatorsPage/>
            <TemplateStringsPage/>
        </>
    )
}

export default FirstTheme;