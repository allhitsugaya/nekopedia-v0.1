import React from 'react';
import { Typography, Container} from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const JsonPracticePage = () => {
    return (
        <Container className="page-container">
            <Typography variant="h2" gutterBottom>Завдання для практики JSON</Typography>

            <Paragraph>
                Створіть об'єкт JSON, що представляє інформацію про книгу (назва, автор, рік видання).
                Використайте <Code>JSON.stringify()</Code>, щоб перетворити об'єкт у JSON-рядок та виведіть його.
                Використайте <Code>JSON.parse()</Code>, щоб розпарсити JSON-рядок та вивести дані про книгу.
            </Paragraph>

            <CodeBlock>
                {`// Створіть об'єкт JSON, що представляє інформацію про "Кобзар"
const kobzar = {
    title: "Кобзар",
    author: "Тарас Шевченко",
    year: 1840
};

// Використайте JSON.stringify(), щоб перетворити об'єкт у JSON-рядок
const jsonKobzar = JSON.stringify(kobzar); 

// Виведіть JSON-рядок
console.log("JSON-рядок про 'Кобзар':");
console.log(typeof jsonKobzar, jsonKobzar); // string {"title":"Кобзар","author":"Тарас Шевченко","year":1840}

// Використайте JSON.parse(), щоб розпарсувати JSON-рядок
const parsedKobzar = JSON.parse(jsonKobzar);

// Виведіть дані про "Кобзар" після розпарсування
console.log("Дані про 'Кобзар' після розпарсування:");
console.log("Назва книги: " + parsedKobzar.title);
console.log("Автор книги: " + parsedKobzar.author);
console.log("Рік видання: " + parsedKobzar.year);`}
            </CodeBlock>

            <Paragraph>
                Цей код створює об'єкт <Code>kobzar</Code>, перетворює його в JSON-рядок за допомогою <Code>JSON.stringify()</Code>, а потім розпарсовує JSON-рядок за допомогою <Code>JSON.parse()</Code>, виводячи дані про книгу.
            </Paragraph>
        </Container>
    );
};

export default JsonPracticePage;