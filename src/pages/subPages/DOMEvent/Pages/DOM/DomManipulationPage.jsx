import React from 'react';
import { Box, Typography } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import Code from '../../../../../features/Code/Code.jsx';

const DomManipulationPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Зміна властивостей та атрибутів</BookHeader>

            <Paragraph>
                Один з ключових аспектів роботи з DOM (Document Object Model) - це зміна властивостей та атрибутів DOM-елементів, які дозволяють нам динамічно змінювати вміст і стиль сторінки.
            </Paragraph>

            <SubHeader>Зміна тексту елемента</SubHeader>
            <Paragraph>
                Для зміни тексту елемента використовуємо властивість <Code>textContent</Code>. Наприклад, давайте змінимо текст кнопки:
            </Paragraph>

            <CodeBlock>
                {`
const button = document.getElementById("myButton");
button.textContent = "Новий текст кнопки";
                `}
            </CodeBlock>

            <SubHeader>Зміна стилів</SubHeader>
            <Paragraph>
                Зміна стилів елемента виконується з використанням властивості <Code>style</Code>. Для прикладу, змінимо колір та розмір шрифту тексту:
            </Paragraph>

            <CodeBlock>
                {`
const textElement = document.getElementById("myText");
textElement.style.color = "blue";
textElement.style.fontSize = "18px";
                `}
            </CodeBlock>

            <SubHeader>Зміна атрибутів</SubHeader>
            <Paragraph>
                Для зміни атрибутів, таких як <Code>src</Code> для зображень або <Code>href</Code> для посилань, використовуємо метод <Code>setAttribute</Code>. Розглянемо приклад зміни атрибута <Code>src</Code> для зображення:
            </Paragraph>

            <CodeBlock>
                {`
const image = document.getElementById("myImage");
image.setAttribute("src", "новий_шлях_до_зображення.jpg");
                `}
            </CodeBlock>

            <Box sx={{ mt: 4 }} className='conclusion'>
                <Typography variant="h5" component="h2" gutterBottom>
                    Заключення
                </Typography>
                <Paragraph>
                    Зміна властивостей та атрибутів в DOM дозволяє змінювати вміст та вигляд сторінки на льоту, що є
                    корисним при створенні динамічних веб-сторінок.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default DomManipulationPage;