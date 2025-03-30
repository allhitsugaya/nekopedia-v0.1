import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../features/Code/Code.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Chapter from "../../../../features/Chapter/Chapter.jsx";

const AsyncAwaitPage = () => {
    return (
        <Container   className="page-container">
            <BookHeader>async...await</BookHeader>

            <Paragraph>
                <Code>async...await</Code> є синтаксичним цукром над <Code>Promise</Code>, що робить код асинхронного JavaScript більш зрозумілим та зручним для написання. Ключове слово <Code>async</Code> вказує, що функція повертає <Code>Promise</Code>, а <Code>await</Code> використовується для очікування виконання <Code>Promise</Code> та отримання його результату.
            </Paragraph>

            <SubHeader>async Функції:</SubHeader>
            <Paragraph>
                Ключове слово <Code>async</Code> використовується для визначення функції, яка повертає обіцянку (<Code>Promise</Code>). Функція, яка має <Code>async</Code> перед своєю декларацією, автоматично повертає <Code>Promise</Code>.
            </Paragraph>
            <CodeBlock>
{`async function fetchData() {
    return 'Data fetched!';
}`}
            </CodeBlock>

            <SubHeader>await Оператор:</SubHeader>
            <Paragraph>
                Оператор <Code>await</Code> працює тільки в межах <Code>async</Code> функцій. Він призупиняє виконання функції до тих пір, поки передана обіцянка не буде виконана або відхилена, та повертає його результат.
            </Paragraph>
            <Paragraph>
                Ось приклад з промісом, який виконується за 1 секунду:
            </Paragraph>
            <CodeBlock>
{`async function testPromise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });

  let result = await promise; // чекатиме, поки проміс не виконається (*)

  alert(result); // "готово!"
}

testPromise();`}
            </CodeBlock>

            <Paragraph>
                Виконання функції “призупиняється” у рядку (*) і відновлюється, коли проміс виконається, а результатом стає <Code>result</Code>. Отже, код вище показує “готово!” через одну секунду.
            </Paragraph>
            <Paragraph>
                Підкреслимо: <Code>await</Code> буквально призупиняє виконання функції до тих пір, поки проміс не виконається, а потім відновлює її з результатом проміса. Це не вимагає жодних ресурсів ЦП, тому що рушій JavaScript може тим часом робити інші завдання: виконувати інші скрипти, обробляти події тощо.
            </Paragraph>
            <Paragraph>
                Це просто більш елегантний синтаксис отримання результату проміса, ніж <Code>promise.then</Code>. Зокрема, так це легше читати й писати.
            </Paragraph>

            <SubHeader>Використання</SubHeader>
            <Chapter>1. Використання в Контексті Функцій:</Chapter>
            <Paragraph>
                Використання <Code>async</Code> та <Code>await</Code> зроблює асинхронний код схожим на синхронний, що полегшує його розуміння та обслуговування.
            </Paragraph>
            <CodeBlock>
{`async function fetchData() {
    try {
        let result1 = await fetch('https://example.com/data1');
        let result2 = await fetch('https://example.com/data2');
        console.log(result1, result2);
    } catch (error) {
        console.error('Error:', error);
    }
}`}
            </CodeBlock>

            <Chapter>2. Використання в Контексті Обіцянок:</Chapter>
            <Paragraph>
                <Code>async</Code> та <Code>await</Code> можна використовувати в контексті обіцянок для кращого керування асинхронним кодом.
            </Paragraph>
            <CodeBlock>
{`const fetchData = async () => {
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched!');
        }, 1000);
    });

    console.log(result);
};

fetchData();`}
            </CodeBlock>

            <Chapter>Не можна використовувати await у звичайних функціях:</Chapter>
            <Paragraph>
                Якщо ми спробуємо використати <Code>await</Code> у не-асинхронній функції, виникне синтаксична помилка:
            </Paragraph>
            <CodeBlock>
{`function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}`}
            </CodeBlock>
        </Container>
    );
};

export default AsyncAwaitPage;