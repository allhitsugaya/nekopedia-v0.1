import React from 'react';
import Layout from '../index.jsx';
import MainPage from '../../pages/mainpage.jsx';
import ContactsPage from '../Info/Contact/Contact.jsx';
import AboutPage from '../Info/AboutUs/AboutUs.jsx';
import Content from '../Content/Content.jsx';
import NineteenthTheme from "../../pages/subPages/TypeScript/NineteenthTheme.jsx";
import EighteenthTheme from "../../pages/subPages/JQuery/EighteenthTheme.jsx";
import SeventeenthTheme from "../../pages/subPages/AjaxAndAsyncAwait/SeventeenthTheme.jsx";
import SixteenthTheme from "../../pages/subPages/IntroductionToAsynchronyEventLoopAndPromise/SixteenthTheme.jsx";
import FifteenthTheme from "../../pages/subPages/Class/FifteenthTheme.jsx";
import FourteenthTheme from "../../pages/subPages/OOPJs/FourteenthTheme.jsx";
import ThirteenthTheme from "../../pages/subPages/WebStorage/ThirteenthTheme.jsx";
import TwelfthTheme from "../../pages/subPages/CodingBestPracticesForCleanCode/TwelfthTheme.jsx";
import EleventhTheme from "../../pages/subPages/FormsAndRegularExpressions/EleventhTheme.jsx";
import TenthTheme from "../../pages/subPages/ObjectEventPhasesDelegationBOM/TenthTheme.jsx";
import NinthTheme from "../../pages/subPages/DOMEvent/NinthTheme.jsx";
import EightTheme from "../../pages/subPages/ArrayObject/EightTheme.jsx";
import SeventhTheme from "../../pages/subPages/RecursionAndAnIntroductionToTheTopicOfConstructorFunctions/SeventhTheme.jsx";
import SixthTheme from "../../pages/subPages/ArrowFunctions/SixthTheme.jsx";
import FifthTheme from "../../pages/subPages/CircuitsCallbacksFunctionsOfTheHighestOrderAndIIFE/FifthTheme.jsx";
import FourthTheme from "../../pages/subPages/Function/FourthTheme.jsx";
import ThirdTheme from "../../pages/subPages/Cycles/ThirdTheme.jsx";
import SecondTheme from "../../pages/subPages/Operators/SecondTheme.jsx";
import FirstTheme from "../../pages/subPages/VariousTypesOfData/FirstTheme.jsx";


const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <MainPage />,
            },
            {
                path: 'learn-more',
                element: <Content />,
            },
            {
                path: 'contact',
                element: <ContactsPage />,
            },
            {
                path: 'about',
                element: <AboutPage />,
            },
            {
                path: 'typescript',
                element: <NineteenthTheme />,
            },
            {
                path: 'jquery',
                element:  <EighteenthTheme/>
            },
            {
                path: 'ajax',
                element: <SeventeenthTheme/>
            },
            {
                path: 'promise',
                element: <SixteenthTheme/>
            },
            {
                path: 'class',
                element: <FifteenthTheme/>
            },
            {
                path:'oop-js',
                element: <FourteenthTheme/>
            },
            {
                path:'web-storage',
                element: <ThirteenthTheme/>
            },
            {
                path:'best-practice',
                element: <TwelfthTheme/>
            },
            {
                path:'forms',
                element: <EleventhTheme/>
            },
            {
                path:'obj-events',
                element: <TenthTheme/>
            },
            {
                path:'dom-events',
                element: <NinthTheme/>
            },
            {
                path:'array',
                element: <EightTheme/>
            },
            {
                path:'arrow-fn',
                element: <SixthTheme/>
            },
            {
                path:'circuits-callbacks-fn',
                element: <FifthTheme/>
            },
            {
                path:'circuits-callbacks-fn',
                element: <SeventhTheme/>
            },
            {
                path: 'introducing-fn',
                element: <FourthTheme/>
            },
            {
                path: 'cycles',
                element: <ThirdTheme/>
            },
            {
                path: 'operators',
                element: <SecondTheme/>
            },
            {
                path: 'variables',
                element: <FirstTheme/>
            }
        ],
    },
];

export default routes;