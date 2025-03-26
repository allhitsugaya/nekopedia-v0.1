import React from 'react';
import { Box } from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const DestructuringAndObjectIterationPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Деструктуризація та перебір властивостей об'єкта</BookHeader>

            <SubHeader>Деструктуризація</SubHeader>
            <Paragraph>
                Деструктуризація - це спосіб отримання окремих властивостей об'єкта та присвоєння їх змінним. Вона полегшує роботу з об'єктами:
            </Paragraph>
            <CodeBlock>
                {`const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

const { firstName, lastName } = person;

console.log(firstName); // John
console.log(lastName); // Doe`}
            </CodeBlock>
            <Paragraph>
                Деструктуризація дозволяє швидко отримувати доступ до властивостей об'єкта та спрощує код. Цей метод дозволяє нам безпечно перевіряти наявність властивостей в об'єктах.
            </Paragraph>

            <SubHeader>Перебір властивостей об'єкта</SubHeader>
            <Paragraph>
                JavaScript надає різні способи перебору властивостей об'єкта. Один із найпоширеніших способів - використання циклу <Code>for...in</Code>:
            </Paragraph>
            <CodeBlock>
                {`const person = { firstName: 'John', lastName: 'Doe' };

for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}`}
            </CodeBlock>
            <Paragraph>
                Цей цикл дозволяє перебирати всі ключі об'єкта та отримувати доступ до відповідних значень.
            </Paragraph>

            <SubHeader>Додаткові методи перебору</SubHeader>
            <Paragraph>
                Крім <Code>for...in</Code>, існують інші способи роботи з властивостями об'єкта:
            </Paragraph>
            <CodeBlock>
                {`// Використання Object.keys()
const keys = Object.keys(person); // ['firstName', 'lastName']

// Використання Object.values()
const values = Object.values(person); // ['John', 'Doe']

// Використання Object.entries()
const entries = Object.entries(person); // [['firstName', 'John'], ['lastName', 'Doe']]`}
            </CodeBlock>
            <Paragraph>
                Ці методи надають більш гнучкі способи роботи з об'єктами та їх властивостями.
            </Paragraph>
        </Box>
    );
};

export default DestructuringAndObjectIterationPage;