import React from 'react';
import { Box, Paper } from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';

const IntroductionPage = () => {
    return (
        <Box component={Paper} sx={{ padding: 3, elevation: 3 }}>
            <BookHeader>Вступ</BookHeader>

            <Box component="section" mb={3}>
                <Paragraph>
                    <strong>Ajax (Asynchronous JavaScript and XML)</strong> - це метод взаємодії з сервером без перезавантаження сторінки, що дозволяє асинхронно відправляти та отримувати дані. Це забезпечує більш ефективну та динамічну взаємодію користувача з веб-сайтом.
                </Paragraph>
            </Box>

            <Box component="section" mb={3}>
                <Paragraph>
                    <strong>async...await</strong> є синтаксичним цукром над <Code>Promise</Code>, що робить код асинхронного JavaScript більш зрозумілим та зручним для написання. Ключове слово <Code>async</Code> вказує, що функція повертає <Code>Promise</Code>, а <Code>await</Code> використовується для очікування виконання <Code>Promise</Code> та отримання його результату.
                </Paragraph>
            </Box>

            <Box component="section">
                <Paragraph>
                    Ці технології разом створюють потужний механізм для взаємодії з сервером та обробки асинхронного коду в браузері. Вони роблять веб-розробку більш ефективною, динамічною та легко зрозумілою для програмістів.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default IntroductionPage;