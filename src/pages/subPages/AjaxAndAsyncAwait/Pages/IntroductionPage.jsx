import React from 'react';
import {Container, Typography} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../features/Code/Code.jsx";

const IntroductionPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Вступ</BookHeader>

            <Paragraph>
                <Code>Ajax (Asynchronous JavaScript and XML)</Code> - це метод взаємодії з сервером без перезавантаження сторінки, що дозволяє асинхронно відправляти та отримувати дані. Це забезпечує більш ефективну та динамічну взаємодію користувача з веб-сайтом.
            </Paragraph>

            <Paragraph>
                <Code>async...await</Code> є синтаксичним цукром над <Code>Promise</Code>, що робить код асинхронного JavaScript більш зрозумілим та зручним для написання. Ключове слово <Code>async</Code> вказує, що функція повертає <Code>Promise</Code>, а <Code>await</Code> використовується для очікування виконання <Code>Promise</Code> та отримання його результату.
            </Paragraph>

            <Paragraph>
                Ці технології разом створюють потужний механізм для взаємодії з сервером та обробки асинхронного коду в браузері. Вони роблять веб-розробку більш ефективною, динамічною та легко зрозумілою для програмістів.
            </Paragraph>
        </Container>
    );
};

export default IntroductionPage;