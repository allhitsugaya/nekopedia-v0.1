import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";

const AdvancedFunctionsIntroPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Вступ</BookHeader>
            <Paragraph>
                На цьому занятті ми глибоко дослідимо концепції, які визначають особливості функцій в JavaScript.
            </Paragraph>
            <Paragraph>
                Починаючи з концепції замикання, ми розглянемо, як функції можуть зберігати свій контекст виклику та використовувати замкнуті змінні. Далі розглянемо функції-коллбеки та функції вищого порядку, які дозволяють нам працювати з функціями як з об'єктами першого класу.
            </Paragraph>
            <Paragraph>
                Закріпимо отримані знання, вивчивши функції, що самовизиваються (IIFE), та їх роль у визначенні простору імен.
            </Paragraph>
            <Paragraph>
                У кінці заняття ми вивчимо концепцію рекурсії та її застосування в JavaScript. Рекурсивні функції можуть бути потужним інструментом для обробки завдань, які вимагають повторюваної логіки.
            </Paragraph>
        </Container>
    );
};

export default AdvancedFunctionsIntroPage;