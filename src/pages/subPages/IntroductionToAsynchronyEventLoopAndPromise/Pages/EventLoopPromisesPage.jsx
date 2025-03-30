import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../features/Code/Code.jsx";

const EventLoopPromisesPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Вступ</BookHeader>
            <Paragraph>
                У цій темі ми розглядаємо, як працює <Code>Event Loop</Code> — механізм, який дозволяє обробляти асинхронний код. Ми вивчаємо роль веб-подій, таймерів, та функцій зворотного виклику у створенні неочікуваних сценаріїв та забезпеченні гладкої роботи програм.
            </Paragraph>
            <Paragraph>
                Вивчаємо <Code>Promise</Code>, який є об'єктом, що представляє результат асинхронної операції. Використовуючи <Code>Promise</Code>, можна краще обробляти асинхронний код та здійснювати послідовні або паралельні операції.
            </Paragraph>
            <Paragraph>
                А за допомогою прикладів, ми глибше зрозуміємо, як JavaScript управляє виконанням коду та як забезпечує відзивчивість додатків.
            </Paragraph>
        </Container>
    );
};

export default EventLoopPromisesPage;