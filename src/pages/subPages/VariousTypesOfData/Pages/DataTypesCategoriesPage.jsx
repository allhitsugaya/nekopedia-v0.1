import React from 'react';
import {Typography, Box, List, ListItem, Container} from '@mui/material';
import Code from '../../../../features/Code/Code.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Chapter from "../../../../features/Chapter/Chapter.jsx";

const DataTypesCategoriesPage = () => {
    return (
        <Container>
            <Box sx={{ mb: 3 }}>
            <BookHeader
              >Основні категорії типів даних та їх призначення</BookHeader>
            <Paragraph>
                JavaScript має динамічну систему типів, що означає автоматичне визначення типів у процесі виконання програми.
                Це відрізняє його від мов зі статичною типізацією, де тип має бути вказаний явно.
            </Paragraph>
            <Paragraph>
                Розуміння типів даних допомагає коректно працювати з інформацією, уникати помилок та покращувати продуктивність коду.
            </Paragraph>

            <SubHeader  gutterBottom>Типи даних у JavaScript</SubHeader>
            <Paragraph>
                У JavaScript є дві основні категорії типів даних:
            </Paragraph>
            <List>
                <ListItem>
                   <Paragraph sx={{fontWeight:600}}> Примітивні типи:</Paragraph> <Code>number</Code>, <Code>string</Code>, <Code>boolean</Code>, <Code>null</Code>, <Code>undefined</Code>, <Code>BigInt</Code>, <Code>Symbol</Code>.
                </ListItem>
                <ListItem>
                  <Paragraph sx={{fontWeight:600}}> Об'єктні типи:</Paragraph>  <Code>object</Code>, <Code>array</Code>, <Code>function</Code>.
                </ListItem>
            </List>

                <Chapter  >Числа (number)</Chapter>
            <Paragraph>Представляють цілі та дробові числа.</Paragraph>
            <CodeBlock>{`const age = 30;
const price = 19.99;`}</CodeBlock>

                <Chapter  >BigInt</Chapter>
            <Paragraph>Для представлення дуже великих чисел.</Paragraph>
            <CodeBlock>{`const bigNumber = 1234567890123456789012345678901234567890n;`}</CodeBlock>

                <Chapter  >Рядки (string)</Chapter>
            <Paragraph>Використовуються для текстових даних.</Paragraph>
            <CodeBlock>{`const name = "John";`}</CodeBlock>

                <Chapter  >Булеві значення (boolean)</Chapter>
            <Paragraph>Мають два можливих значення: <Code>true</Code> або <Code>false</Code>.</Paragraph>
            <CodeBlock>{`const isLogged = true;
const hasPermission = false;`}</CodeBlock>

                <Chapter  >Null та Undefined</Chapter>
            <Paragraph>
                <Code>null</Code> означає відсутність значення, <Code>undefined</Code> — змінна існує, але значення не встановлене.
            </Paragraph>
            <CodeBlock>{`const emptyValue = null;
console.log(emptyValue); // null

let variable;
console.log(variable); // undefined`}</CodeBlock>
            <CodeBlock> ⚠️ null має тип "object" через помилку в дизайні JavaScript, яка залишилася для зворотної сумісності.</CodeBlock>

                <Chapter  >Symbol</Chapter>
            <Paragraph>Використовується для створення унікальних ідентифікаторів.</Paragraph>
            <CodeBlock>{`const uniqueID = Symbol('description');`}</CodeBlock>

                <Chapter  >Object (Об'єкт)</Chapter>
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
        </Container>
    );
};

export default DataTypesCategoriesPage;