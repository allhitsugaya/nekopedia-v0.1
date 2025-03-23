import FormsAndRegexIntroduction from "./Pages/FormsAndRegexIntroduction.jsx";
import HtmlFormsBasics from "./Pages/FormHTML/HtmlFormsBasics.jsx";
import FormAttributes from "./Pages/FormHTML/FormAttributes.jsx";
import FormNameAttribute from "./Pages/FormHTML/FormNameAttribute.jsx";
import FormValidationAttributes from "./Pages/FormHTML/FormValidationAttributes.jsx";
import FormEvents from "./Pages/FormWork/FormEvents.jsx";
import FormDataHandling from "./Pages/FormWork/FormDataHandling.jsx";
import SecondFormDataHandling from "./Pages/FormWork/SecondFormDataHandling.jsx";
import AjaxUsage from "./Pages/FormWork/AjaxUsage.jsx";
import RegularExpressions from "./Pages/regylar/RegularExpressions.jsx";
import StringMethodsWithRegex from "./Pages/regylar/StringMethodsWithRegex.jsx";
import RegexOptionsAndExamples from "./Pages/regylar/RegexOptionsAndExamples.jsx";
import './EleventhTheme.css'

const EleventhTheme = () => {
    return (
        <div className='theme'>
            <FormsAndRegexIntroduction className='theme-section'/>
            <hr/>
            <HtmlFormsBasics className='theme-section'/>
            <hr/>
            <FormAttributes className='theme-section'/>
            <hr/>
            <FormNameAttribute className='theme-section'/>
            <hr/>
            <FormValidationAttributes className='theme-section'/>
            <hr/>
            <FormEvents className='theme-section'/>
            <hr/>
            <FormDataHandling className='theme-section'/>
            <hr/>
            <SecondFormDataHandling className='theme-section'/>
            <hr/>
            <AjaxUsage className='theme-section'/>
            <hr/>
            <RegularExpressions className='theme-section'/>
            <hr/>
            <StringMethodsWithRegex className='theme-section'/>
            <hr/>
            <RegexOptionsAndExamples className='theme-section'/>
        </div>
    )
}

export default EleventhTheme;