import React from 'react';
import {
    Layout,
    MainPage,
    Content,
    ContactsPage,
    AboutPage,
    NineteenthTheme,
    EighteenthTheme,
    SeventeenthTheme,
    SixteenthTheme,
    FifteenthTheme,
    FourteenthTheme,
    ThirteenthTheme,
    TwelfthTheme,
    EleventhTheme,
    TenthTheme,
    NinthTheme,
    EightTheme,
    SeventhTheme,
    SixthTheme,
    FifthTheme,
    FourthTheme,
    ThirdTheme,
    SecondTheme,
    FirstTheme
} from './index.js'


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