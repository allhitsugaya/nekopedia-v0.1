import React from 'react';
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../features/Code/Code.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import {Box, Container, Typography} from '@mui/material';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";
import Chapter from "../../../../features/Chapter/Chapter.jsx";

const TypeConversionPage = () => {
    return (
        <Container>
            <Box sx={{ mb: 3 }}>
            <BookHeader>Явне та неявне перетворення</BookHeader>
            <Paragraph>
                JavaScript - це динамічно типізована мова програмування, де змінні можуть змінювати свій тип даних під час виконання програми. Однією з важливих концепцій в JavaScript є перетворення типів даних, а саме <strong>явне (explicit)</strong> та <strong>неявне (implicit)</strong> перетворення.
            </Paragraph>

            <SubHeader >
                Явне перетворення (Explicit Type Conversion)
            </SubHeader>
            <Paragraph>
                Явне перетворення типів даних в JavaScript відбувається за допомогою різних функцій та методів, які дозволяють змінювати тип даних змінних на конкретний тип. Один з найпоширеніших способів - використовувати конструктори типів даних, такі як <Code>Number()</Code>, <Code>String()</Code>, <Code>Boolean()</Code>, тощо. Приклади:
            </Paragraph>
            <CodeBlock>
                {`
let numStr = "42";
let num = Number(numStr); // явне перетворення рядка в число

let boolStr = "true";
let bool = Boolean(boolStr); // явне перетворення рядка в булевий тип
                `}
            </CodeBlock>

            <Paragraph>
                Можна навіть створити таблицю перетворень:
            </Paragraph>
            <CodeBlock>
                {`
// Приклади явного перетворення:
Number("123") // 123
String(123)   // "123"
Boolean(1)    // true
                `}
            </CodeBlock>

            <SubHeader >
                Неявне перетворення (Implicit Type Conversion)
            </SubHeader>
            <Paragraph>
                Неявне перетворення відбувається автоматично в певних випадках, коли JavaScript намагається виконати операції над різними типами даних. Наприклад, коли ви додаєте рядок до числа, JavaScript автоматично перетворює число у рядок та об'єднує їх:
            </Paragraph>
            <CodeBlock>
                {`
let num = 42;
let str = "The answer is " + num; // неявне перетворення числа в рядок
                `}
            </CodeBlock>

            <Chapter  >
                Оператори та неявне перетворення
            </Chapter>
            <Paragraph>
                Неявне перетворення також стосується використання операторів. Наприклад, коли ви використовуєте оператор порівняння <Code>==</Code>, JavaScript автоматично перетворює типи, щоб зробити порівняння:
            </Paragraph>
            <CodeBlock>
                {`
let num = 42;
let str = "42";
if (num == str) {
  // неявне перетворення рядка у число для порівняння
  console.log("Equal");
}
                `}
            </CodeBlock>

            <Chapter  >
                Захист від неочікуваного неявного перетворення
            </Chapter>
            <Paragraph>
                Неявне перетворення може спричинити неочікувану поведінку програми. Щоб запобігти цьому, рекомендується використовувати строге порівняння <Code>===</Code>, яке порівнює значення і типи даних без неявного перетворення.
            </Paragraph>
            <CodeBlock>
                {`
let num = 42;
let str = "42";
if (num === str) {
  console.log("Equal"); // Не виконається, оскільки типи різні
}
                `}
            </CodeBlock>

            <Conclusion >
                Висновок
            </Conclusion>
            <Paragraph>
                Розуміння явного та неявного перетворення типів даних є важливим для написання надійного та передбачуваного коду. Використання явного перетворення допомагає уникнути неочікуваних помилок, а строге порівняння <Code>===</Code> запобігає проблемам, пов'язаним із неявним перетворенням.
            </Paragraph>
        </Box>
        </Container>
    );
};

export default TypeConversionPage;
