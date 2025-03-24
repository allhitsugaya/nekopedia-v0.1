import React from 'react';
import {Paper, Typography} from "@mui/material";

const IntroductionPage = () => {
    return (
        <Paper className="page-container">
            <Typography>Вступ</Typography>

            <Typography>
                <strong>Ajax (Asynchronous JavaScript and XML)</strong> - це метод взаємодії з сервером без перезавантаження сторінки, що дозволяє асинхронно відправляти та отримувати дані. Це забезпечує більш ефективну та динамічну взаємодію користувача з веб-сайтом.
            </Typography>

            <Typography>
                <strong>async...await</strong> є синтаксичним цукром над <code>Promise</code>, що робить код асинхронного JavaScript більш зрозумілим та зручним для написання. Ключове слово <code>async</code> вказує, що функція повертає <code>Promise</code>, а <code>await</code> використовується для очікування виконання <code>Promise</code> та отримання його результату.
            </Typography>

            <Typography>
                Ці технології разом створюють потужний механізм для взаємодії з сервером та обробки асинхронного коду в браузері. Вони роблять веб-розробку більш ефективною, динамічною та легко зрозумілою для програмістів.
            </Typography>
        </Paper>
    );
};

export default IntroductionPage;