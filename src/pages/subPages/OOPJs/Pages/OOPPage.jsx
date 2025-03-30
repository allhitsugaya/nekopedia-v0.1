import React from 'react';
import {Box, Container, Typography} from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";

const OOPPage = () => {
    return (
        <Container>
            <BookHeader variant="h3" gutterBottom>
                Вступ
            </BookHeader>
            <Paragraph>
                На початковому етапі цього заняття ми обговоримо основні принципи Об'єктно-орієнтованого програмування, такі як інкапсуляція, поліморфізм та абстракція. Ці концепції допоможуть вам створювати більш структуровані та підтримувані програми, а також робити код більш зрозумілим для інших розробників.
            </Paragraph>

            <SubHeader variant="h4" gutterBottom>
                Гетери та Сетери
            </SubHeader>
            <Paragraph>
                Важливою частиною буде обговорення Геттерів та Сетерів, які дозволяють нам керувати доступом до властивостей об'єктів і забезпечують контроль над читанням та записом даних. Ми розглянемо, як створювати ці функції та де вони особливо корисні в розробці.
            </Paragraph>

            <SubHeader variant="h4" gutterBottom>
                Прототипи
            </SubHeader>
            <Paragraph>
                Ну і дуже дуже важлива частина заняття, це Прототипи. В JavaScript прототипи відіграють ключову роль у спадкуванні та розділі властивостей та методів між об'єктами. Ми докладно розглянемо, як працюють прототипи, як створювати спадкування та розширення функціональності через прототипи.
            </Paragraph>
        </Container>
    );
};

export default OOPPage;
