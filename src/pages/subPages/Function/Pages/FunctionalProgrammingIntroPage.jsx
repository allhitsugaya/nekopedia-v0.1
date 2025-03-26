import React from 'react';
import { Box } from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';


const FunctionalProgrammingIntroPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Вступ до функціонального програмування</BookHeader>

            <Paragraph>
                Зануримося в захопливий світ функціонального програмування в JavaScript. Спочатку ми ознайомимося з основами роботи з функціями, які є одними з ключових будівельних блоків мови.
            </Paragraph>

            <SubHeader>Основні концепції</SubHeader>
            <Paragraph>
                Ми розглянемо різні способи створення функцій та їхні варіанти, включаючи:
            </Paragraph>
            <ul>
                <li>Анонімні функції</li>
                <li>Іменовані функції</li>
                <li>Функціональні вирази</li>
                <li>Стрілочні функції</li>
            </ul>

            <SubHeader>Робота з параметрами</SubHeader>
            <Paragraph>
                Детально розглянемо параметри функцій та можливість задавати значення за промовчанням:
            </Paragraph>
            <Paragraph>
                Вивчимо, як передавати параметри в функції та як працює область видимості змінних. Також дізнаєтеся про псевдо-масив <Code>arguments</Code> та його використання для роботи з параметрами.
            </Paragraph>

            <SubHeader>Повернення значень</SubHeader>
            <Paragraph>
                Особливу увагу приділимо поверненню значень з функцій та відмінностям між:
            </Paragraph>
            <ul>
                <li>Звичайними функціями</li>
                <li>Стрілочними функціями</li>
            </ul>

            <SubHeader>Поглиблені концепції</SubHeader>
            <Paragraph>
                Розглянемо ключові концепції функціонального програмування:
            </Paragraph>
            <ul>
                <li>Замикання (closures)</li>
                <li>Функції-коллбеки</li>
                <li>Функції вищого порядку</li>
                <li>Самовизиваючі функції (IIFE)</li>
                <li>Рекурсія та її застосування</li>
            </ul>

            <SubHeader>Чому це важливо?</SubHeader>
            <Paragraph>
                Функціональне програмування надає потужні інструменти для створення чистого, передбачуваного та підтримуваного коду. Воно допомагає уникнути багатьох проблем, пов'язаних зі станом та мутаціями даних, що особливо актуально в сучасному JavaScript.
            </Paragraph>
        </Box>
    );
};

export default FunctionalProgrammingIntroPage;