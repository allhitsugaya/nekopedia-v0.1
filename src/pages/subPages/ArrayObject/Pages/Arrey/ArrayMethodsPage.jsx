import React from 'react';
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import {Container} from "@mui/material";

const ArrayMethodsPage = () => {
    return (
        <Container>
            <BookHeader>Основні методи та методи перебору масиву</BookHeader>

            <SubHeader >Основні методи масивів</SubHeader >
            <Paragraph>JavaScript надає багато вбудованих методів для роботи з масивами. Ми розглянемо методи, такі як join, concat, slice, splice, і багато інших. Ці методи допомагають вирішувати різноманітні завдання з масивами.</Paragraph>

            <Chapter >Об'єднання масивів</Chapter >
            <CodeBlock>
        {`const moreFruits = ['grape', 'blueberry'];
const allFruits = fruits.concat(moreFruits); // ['apple', 'orange', 'cherry', 'grape', 'blueberry']`}
            </CodeBlock>

            <Chapter >Видалення підмасиву</Chapter >
            <CodeBlock>
        {`const someFruits = allFruits.slice(1, 2); // ['orange', 'cherry']`}
            </CodeBlock>

            <Chapter >Видалення елементів і вставка нових</Chapter >
            <CodeBlock>
        {`const removedFruits = allFruits.splice(1, 2, 'pear', 'watermelon');
// removedFruits = ['orange', 'cherry'], allFruits стане ['apple', 'pear', 'watermelon', 'grape', 'blueberry']`}
            </CodeBlock>

            <SubHeader >Методи перебору масиву</SubHeader >
            <Paragraph>Ми дослідимо методи для перебору масивів, такі як forEach, map, filter, та for. Ці методи дозволяють виконувати операції над кожним елементом масиву та створювати нові масиви або обчислювати значення.</Paragraph>

            <Chapter >1. Цикл for:</Chapter >
            <Paragraph>Це найбільш базовий метод перебору масиву. Ви використовуєте індекси для доступу до елементів масиву.</Paragraph>
            <CodeBlock>
        {`const fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`}
            </CodeBlock>

            <Chapter >2. Цикл for...of:</Chapter >
            <Paragraph>Цей цикл спрощує перебір масиву, оскільки ви просто вказуєте змінну для кожного елемента масиву.</Paragraph>
            <CodeBlock>
        {`const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}`}
            </CodeBlock>

            <Chapter >3. Метод forEach:</Chapter >
            <Paragraph>Метод forEach є методом масиву, який приймає функцію зворотнього виклику та застосовує її до кожного елемента масиву.</Paragraph>
            <CodeBlock>
        {`const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit) => {
  console.log(fruit);
})`}
            </CodeBlock>

            <Chapter >4. Метод map:</Chapter >
            <Paragraph>Метод map також приймає функцію зворотнього виклику та створює новий масив, в якому кожен елемент є результатом функції.</Paragraph>
            <CodeBlock>
        {`const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);
console.log(doubled); // Виведе [2, 4, 6]`}
            </CodeBlock>

            <Paragraph>Різниця між цими методами полягає в зручності та призначенні. for та for...of дають вам більше контролю, але вимагають більше коду. forEach та map дозволяють спростити код та роблять його більш декларативним. Вибір методу залежить від ваших потреб і вподобань.</Paragraph>
        </Container>
    );
}

export default ArrayMethodsPage;
