import React from 'react';
import { Box, Typography } from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const ObjectMethodsPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Object та способи роботи з ним</BookHeader>

            <Paragraph>
                Об'єкти є одним із найважливіших концепцій в мові програмування JavaScript. Вони відіграють центральну роль у майже кожному аспекті розробки цією мовою. Якщо ви хочете зрозуміти інші аспекти JavaScript, то розуміння об'єктів є обов'язковим кроком.
            </Paragraph>

            <Paragraph>
                Об'єкти є складними структурами даних, що можуть містити різноманітні типи інформації. Вони дозволяють організовувати дані в логічні групи, представляючи об'єкти реального світу, або ж створюючи абстракції для зберігання та роботи з інформацією.
            </Paragraph>

            <SubHeader>1. Вступ до роботи з об'єктами</SubHeader>
            <Paragraph>
                В JavaScript об'єкти представляють собою зберігання даних у форматі пар ключ-значення. Об'єкти можуть містити властивості, які можуть бути простими значеннями, функціями або навіть іншими об'єктами. Проте ключ значення завжди буде строкою.
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Створення об'єкта
            </Typography>
            <Paragraph>
                У JavaScript об'єкти можна створювати за допомогою літеральної нотації:
            </Paragraph>
            <CodeBlock>
                {`const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};`}
            </CodeBlock>
            <Paragraph>
                Ми вже створили об'єкт <Code>person</Code>, який містить властивості <Code>firstName</Code>, <Code>lastName</Code> та <Code>age</Code>.
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Доступ до властивостей
            </Typography>
            <Paragraph>
                Доступ до властивостей об'єкта можливий за допомогою крапки або квадратних дужок:
            </Paragraph>
            <CodeBlock>
                {`console.log(person.firstName); // John
console.log(person['lastName']); // Doe`}
            </CodeBlock>
            <Paragraph>
                Це дозволяє нам читати значення властивостей об'єкта.
            </Paragraph>

            <SubHeader>2. Методи для роботи з об'єктами</SubHeader>
            <Paragraph>
                JavaScript надає нам ряд корисних методів для роботи з об'єктами. Розглянемо деякі з них.
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Object.keys(), Object.values(), Object.entries()
            </Typography>
            <Paragraph>
                Методи <Code>Object.keys()</Code>, <Code>Object.values()</Code> та <Code>Object.entries()</Code> дозволяють отримати масив ключів, масив значень та масив пар ключ-значення відповідно. Давайте розглянемо приклад:
            </Paragraph>
            <CodeBlock>
                {`const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

const keys = Object.keys(person); // Повертає масив ключів ['firstName', 'lastName', 'age']
const values = Object.values(person); // Повертає масив значень ['John', 'Doe', 30]
const entries = Object.entries(person); // Повертає масив пар ключ-значення [['firstName', 'John'], ['lastName', 'Doe'], ['age', 30]]`}
            </CodeBlock>
            <Paragraph>
                Ці методи надають корисний спосіб ітеруватися по властивостях об'єкта та працювати з ними.
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Object.assign()
            </Typography>
            <Paragraph>
                Метод <Code>Object.assign()</Code> використовується для копіювання властивостей з одного або декількох об'єктів в цільовий об'єкт. Це корисно при об'єднанні даних:
            </Paragraph>
            <CodeBlock>
                {`const defaults = { theme: 'light', fontSize: 14 };
const userSettings = { fontSize: 16 };

const mergedSettings = Object.assign({}, defaults, userSettings);

console.log(mergedSettings); // { theme: 'light', fontSize: 16 }`}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                hasOwnProperty()
            </Typography>
            <Paragraph>
                Метод <Code>hasOwnProperty()</Code> використовується для перевірки наявності властивості в об'єкті. Він повертає <Code>true</Code>, якщо властивість існує, і <Code>false</Code> в іншому випадку:
            </Paragraph>
            <CodeBlock>
                {`const person = { name: 'John' };
console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age')); // false`}
            </CodeBlock>
        </Box>
    );
};

export default ObjectMethodsPage;