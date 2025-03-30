import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";

const IntroductionPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Вступ</BookHeader>
            <Paragraph>
                В JavaScript, <Code>Array</Code> (масив) та <Code>Object</Code> (об'єкт) - це дві основні структури даних, які використовуються для зберігання та організації даних. В цій доповіді ми більш детально розглянемо роботу з об'єктами та масивами, включаючи створення об'єктів, використання методів для роботи з властивостями та додаванням/видаленням властивостей. Проте базово <Code>Object</Code> (об'єкт) та <Code>Array</Code> (масив) мають такий вигляд:
            </Paragraph>

            <SubHeader>Об'єкт</SubHeader>
            <CodeBlock>
          {`
// Об'єкт
const obj = { key1: 1, key2: 2, key3: 3 };
console.log(obj['key1']); // Доступ за ключем
obj.newKey = 'значення'; // Додавання ключа
          `}
            </CodeBlock>

            <SubHeader>Масив</SubHeader>
            <CodeBlock>
          {`
// Масив
const arr = [1, 2, 3];
console.log(arr[0]); // Доступ за індексом
arr.push(4); // Додавання елементу
console.log(arr.length); // Властивість "length"
          `}
            </CodeBlock>

            <SubHeader>Тип</SubHeader>
            <CodeBlock>
          {`
// Тип
console.log(typeof obj); // "object" - об'єкт вважається об'єктом
console.log(typeof arr); // "object" - масив також вважається об'єктом
          `}
            </CodeBlock>
        </Container>
    );
};

export default IntroductionPage;