import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../../features/Code/Code.jsx";

const DestructuringAndObjectIterationPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Деструктуризація та перебір властивостей об'єкта</BookHeader>

            <SubHeader >Деструктуризація</SubHeader >
            <Paragraph>
                Деструктуризація - це спосіб отримання окремих властивостей об'єкта та присвоєння їх змінним. Вона полегшує роботу з об'єктами:
            </Paragraph>
            <CodeBlock>
          {`
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

const { firstName, lastName } = person;

console.log(firstName); // John
console.log(lastName); // Doe
          `}
            </CodeBlock>
            <Paragraph>
                Деструктуризація дозволяє швидко отримувати доступ до властивостей об'єкта та спрощує код. Цей метод дозволяє нам безпечно перевіряти наявність властивостей в об'єктах.
            </Paragraph>

            <SubHeader >Перебір властивостей об'єкта</SubHeader >
            <Paragraph>
                JavaScript надає різні способи перебору властивостей об'єкта. Один із найпоширеніших способів - використання циклу <Code>for...in</Code>:
            </Paragraph>
            <CodeBlock>
          {`
const person = { firstName: 'John', lastName: 'Doe' };

for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}
          `}
            </CodeBlock>

            <Paragraph>
                Цей цикл дозволяє перебирати всі ключі об'єкта та отримувати доступ до відповідних значень.
            </Paragraph>
        </Container>
    );
};

export default DestructuringAndObjectIterationPage;