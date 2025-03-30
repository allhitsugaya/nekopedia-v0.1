import React from 'react';
import {Box, Container, Typography} from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";

const BOMAndWindowPage = () => {
    return (
        <Container>
            <BookHeader>
                BOM та об'єкт window в браузері
            </BookHeader>

            <Paragraph>
                BOM (Браузерний Об'єктний Об'єкт) представляє собою об'єкт, який дає розробникам доступ до функціональності браузера, такої як керування вікнами, робота з URL, сповіщеннями і багато іншого. В цьому розділі ми детально розглянемо BOM, включаючи його основи та можливості.
            </Paragraph>

            <Chapter variant="h4" gutterBottom>
                Що таке BOM?
            </Chapter>
            <Paragraph>
                BOM, або Браузерний Об'єктний Об'єкт (Browser Object Model), - це частина JavaScript API, яка надає можливість взаємодії з браузером, оточенням, в якому виконується JavaScript код. BOM дозволяє робити різні речі, пов'язані з браузером, такі як керування вікнами і фреймами, зміну URL, роботу з попередженнями і багато іншого. Він є частиною об'єкта <code>window</code>, який представляє веб-сторінку в браузері.
            </Paragraph>

            <Chapter variant="h4" gutterBottom>
                Як BOM відрізняється від DOM?
            </Chapter>
            <Paragraph>
                Щоб краще зрозуміти BOM, важливо відзначити його відмінність від DOM (Об'єктний Об'єкт Документу). DOM відповідає за представлення структури HTML-документа і надає доступ до елементів цього документа. В той час як DOM забезпечує доступ до вмісту сторінки (таких як елементи, тексти, атрибути тощо), BOM надає доступ до браузерної функціональності. BOM дозволяє контролювати вікна браузера, отримувати доступ до історії переходів і багато іншого.
            </Paragraph>

            <Chapter variant="h4" gutterBottom>
                Об'єкт window в браузері
            </Chapter>
            <Paragraph>
                Об'єкт <Code>window</Code> - це головний об'єкт BOM, який представляє веб-сторінку. Він доступний безпосередньо і має глобальну видимість, тобто ви можете звертатися до нього з будь-якого місця вашого JavaScript коду.
            </Paragraph>
            <CodeBlock>
                {`// Приклад використання об'єкта window
window.alert("Це повідомлення від вікна браузера");`}
            </CodeBlock>

            <Chapter variant="h4" gutterBottom>
                Властивості та методи window
            </Chapter>
            <Paragraph>
                Об'єкт <code>window</code> має багато корисних властивостей та методів. Ось кілька прикладів:
            </Paragraph>

            <Chapter variant="h5" gutterBottom>
                Властивість window.location
            </Chapter>
            <Paragraph>
                Ця властивість дозволяє отримати поточну URL сторінки або змінити URL.
            </Paragraph>
            <CodeBlock>
                {`// Отримання поточного URL
const currentURL = window.location.href;

// Зміна URL
window.location.href = "https://www.example.com";`}
            </CodeBlock>

            <Chapter variant="h5" gutterBottom>
                Метод window.open()
            </Chapter>
            <Paragraph>
                Цей метод відкриває нове вікно браузера або нову вкладку з вказаним URL.
            </Paragraph>
            <CodeBlock>
                {`// Відкрити нове вікно з Google
window.open("https://www.google.com");`}
            </CodeBlock>

            <Chapter variant="h5" gutterBottom>
                Властивість window.innerWidth та window.innerHeight
            </Chapter>
            <Paragraph>
                Ці властивості повертають розмір вікна браузера у пікселях.
            </Paragraph>
            <CodeBlock>
                {`// Отримання ширини та висоти вікна
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;`}
            </CodeBlock>
        </Container>
    );
};

export default BOMAndWindowPage;
