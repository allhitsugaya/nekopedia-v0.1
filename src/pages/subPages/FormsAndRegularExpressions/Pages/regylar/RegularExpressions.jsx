import React from 'react';
import { Box } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const RegularExpressions = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Що таке регулярні вирази?</BookHeader>

            <Paragraph>
                Регулярні вирази - це шаблони, які використовуються для пошуку, визначення і вилучення текстових даних, які відповідають певним правилам. Вони дозволяють виразити складні умови для пошуку текстових відповідностей. Наприклад, ви можете використовувати регулярні вирази для пошуку адрес електронної пошти, номерів телефонів, URL-адрес або будь-якого іншого тексту.
            </Paragraph>

            <SubHeader>Створення регулярних виразів у JavaScript</SubHeader>
            <Paragraph>
                В JavaScript, ви можете створити регулярний вираз, використовуючи об'єкт <Code>RegExp</Code> або літеральний запис. Ось приклад створення простого регулярного виразу для пошуку слова "Hello" у тексті:
            </Paragraph>

            <CodeBlock>
                {`
// За допомогою літерального запису
const regex = /Hello/;

// Або за допомогою конструктора RegExp
const regex = new RegExp("Hello");
                `}
            </CodeBlock>

            <SubHeader>Використання регулярних виразів</SubHeader>
            <Paragraph>
                Після створення регулярного виразу, ви можете використовувати його для пошуку в тексті за допомогою методу <Code>.test()</Code>:
            </Paragraph>

            <CodeBlock>
                {`
const regex = /Hello/;
const text = "Hello, World!";
const result = regex.test(text);
console.log(result); // Виведе true, так як "Hello" знайдено у тексті.
                `}
            </CodeBlock>
        </Box>
    );
};

export default RegularExpressions;