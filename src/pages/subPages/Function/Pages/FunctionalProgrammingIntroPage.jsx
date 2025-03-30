import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";

const FunctionalProgrammingIntroPage = () => {
    return (
        <Container>
            <BookHeader>Вступ</BookHeader>
            <Paragraph>
                Зануримося в захопливий світ функціонального програмування в JavaScript. Спочатку ми ознайомимося з основами роботи з функціями, які є одними з ключових будівельних блоків мови. Ми розглянемо різні способи створення функцій та їхні варіанти, включаючи анонімні та іменовані функції.
            </Paragraph>
            <Paragraph>
                Далі ми детально розглянемо параметри функцій та можливість задавати значення за промовчанням для параметрів. Ми вивчимо, як передавати параметри в функції та як працює область видимості змінних в функціях. Також ви дізнаєтеся про псевдо-масив <code>arguments</code> та як використовувати його для роботи з параметрами функцій.
            </Paragraph>
            <Paragraph>
                Особливу увагу приділимо поверненню значень з функцій та відмінностям між звичайними функціями та стрілочними функціями. Ми також розглянемо концепції замикання, функцій-коллбеків, функцій вищого порядку та функцій, що самовизиваються (IIFE). У кінці теми ви дізнаєтеся про рекурсію та її застосування в JavaScript.
            </Paragraph>
        </Container>
    );
};

export default FunctionalProgrammingIntroPage;