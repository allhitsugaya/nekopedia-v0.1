import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";

const StringMethodsWithRegex = () => {
    return (
        <Container className="page-container">
            <BookHeader>Використання методів рядків з регулярними виразами</BookHeader>

            <SubHeader>1. Метод match</SubHeader>
            <Paragraph>
                Метод <Code>match</Code> дозволяє знаходити всі відповідності регулярному виразу в рядку. Він повертає масив, що містить всі відповідності.
            </Paragraph>
            <CodeBlock>
                    {`
const text = "Hello, World! Hello, Universe!";
const regex = /Hello/g;
const matches = text.match(regex);
console.log(matches); // Виведе ["Hello", "Hello"]
                    `}
            </CodeBlock>

            <SubHeader>2. Метод test</SubHeader>
            <Paragraph>
                Метод <Code>test</Code> перевіряє, чи відповідає рядок регулярному виразу. Він повертає <Code>true</Code>, якщо є відповідність, і <Code>false</Code>, якщо немає.
            </Paragraph>
            <CodeBlock>
                    {`
const regex = /Hello/;
const text = "Hello, World!";
const result = regex.test(text);
console.log(result); // Виведе true
                    `}
            </CodeBlock>

            <SubHeader>3. Метод search</SubHeader>
            <Paragraph>
                Метод <Code>search</Code> шукає позицію першої відповідності регулярному виразу в рядку. Він повертає індекс першої відповідності або <Code>-1</Code>, якщо відповідності не знайдено.
            </Paragraph>
            <CodeBlock>
                    {`
const regex = /World/;
const text = "Hello, World!";
const position = text.search(regex);
console.log(position); // Виведе 7
                    `}
            </CodeBlock>

            <SubHeader>4. Метод replace</SubHeader>
            <Paragraph>
                Метод <Code>replace</Code> дозволяє замінювати всі відповідності регулярного виразу у рядку на новий текст.
            </Paragraph>
            <CodeBlock>
                    {`
const text = "Hello, World! Hello, Universe!";
const regex = /Hello/g;
const newText = text.replace(regex, "Hi");
console.log(newText); // Виведе "Hi, World! Hi, Universe!"
                    `}
            </CodeBlock>
        </Container>
    );
};

export default StringMethodsWithRegex;