import React from 'react';
import { Box } from "@mui/material";
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';

const EventLoopPromisesPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Вступ до Event Loop та Promise</BookHeader>

            <Paragraph>
                У цій темі ми розглядаємо, як працює Event Loop — механізм, який дозволяє обробляти асинхронний код. Ми вивчаємо роль веб-подій, таймерів, та функцій зворотного виклику у створенні неочікуваних сценаріїв та забезпеченні гладкої роботи програм.
            </Paragraph>

            <Paragraph>
                Вивчаємо Promise, який є об'єктом, що представляє результат асинхронної операції. Використовуючи <Code>Promise</Code>, можна краще обробляти асинхронний код та здійснювати послідовні або паралельні операції.
            </Paragraph>

            <Paragraph>
                А за допомогою прикладів, ми глибше зрозуміємо, як JavaScript управляє виконанням коду та як забезпечує відзивчивість додатків.
            </Paragraph>
        </Box>
    );
};

export default EventLoopPromisesPage;