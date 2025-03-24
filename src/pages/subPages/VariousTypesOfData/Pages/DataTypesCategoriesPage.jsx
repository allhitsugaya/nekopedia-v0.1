import React from 'react';
import { Typography, Box, List, ListItem } from '@mui/material';
import Code from '../../../../features/Code/Code.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";

const DataTypesCategoriesPage = () => {
    return (
        <Box className="page-container" sx={{ p: 3 }}>
            <Typography variant="h2" gutterBottom>Основні категорії типів даних та їх призначення</Typography>
            <Paragraph>
                JavaScript має динамічну систему типів, що означає автоматичне визначення типів у процесі виконання програми.
                Це відрізняє його від мов зі статичною типізацією, де тип має бути вказаний явно.
            </Paragraph>
            <Paragraph>
                Розуміння типів даних допомагає коректно працювати з інформацією, уникати помилок та покращувати продуктивність коду.
            </Paragraph>

            <Typography variant="h2" gutterBottom>Типи даних у JavaScript</Typography>
            <Paragraph>
                У JavaScript є дві основні категорії типів даних:
            </Paragraph>
            <List>
                <ListItem>
                    <strong>Примітивні типи:</strong> <code>number</code>, <code>string</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>BigInt</code>, <code>Symbol</code>.
                </ListItem>
                <ListItem>
                    <strong>Об'єктні типи:</strong> <code>object</code>, <code>array</code>, <code>function</code>.
                </ListItem>
            </List>

            <Typography variant="h3" gutterBottom>Числа (number)</Typography>
            <Paragraph>Представляють цілі та дробові числа.</Paragraph>
            <Code>{`const age = 30;
const price = 19.99;`}</Code>

            <Typography variant="h3" gutterBottom>BigInt</Typography>
            <Paragraph>Для представлення дуже великих чисел.</Paragraph>
            <CodeBlock>{`const bigNumber = 1234567890123456789012345678901234567890n;`}</CodeBlock>

            <Typography variant="h3" gutterBottom>Рядки (string)</Typography>
            <Paragraph>Використовуються для текстових даних.</Paragraph>
            <CodeBlock>{`const name = "John";`}</CodeBlock>

            <Typography variant="h3" gutterBottom>Булеві значення (boolean)</Typography>
            <Paragraph>Мають два можливих значення: <code>true</code> або <code>false</code>.</Paragraph>
            <CodeBlock>{`const isLogged = true;
const hasPermission = false;`}</CodeBlock>

            <Typography variant="h3" gutterBottom>Null та Undefined</Typography>
            <Paragraph>
                <code>null</code> означає відсутність значення, <code>undefined</code> — змінна існує, але значення не встановлене.
            </Paragraph>
            <CodeBlock>{`const emptyValue = null;
console.log(emptyValue); // null

let variable;
console.log(variable); // undefined`}</CodeBlock>
            <CodeBlock> ⚠️ null має тип "object" через помилку в дизайні JavaScript, яка залишилася для зворотної сумісності.</CodeBlock>

            <Typography variant="h3" gutterBottom>Symbol</Typography>
            <Paragraph>Використовується для створення унікальних ідентифікаторів.</Paragraph>
            <CodeBlock>{`const uniqueID = Symbol('description');`}</CodeBlock>

            <Typography variant="h3" gutterBottom>Object (Об'єкт)</Typography>
            <Paragraph>Об'єкти містять пари ключ-значення та можуть включати методи.</Paragraph>
            <CodeBlock>{`let person = {
  name: 'Alice',
  age: 30,
  sayHello: function() {
    console.log('Hello, ' + this.name);
  }
};`}</CodeBlock>
       <CodeBlock>
           ⚠️ У JavaScript функції є об'єктами першого класу, тобто їх можна передавати як аргументи, зберігати у змінних і повертати з інших функцій.
       </CodeBlock>
        </Box>
    );
};

export default DataTypesCategoriesPage;