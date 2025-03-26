import React from 'react';
import { Box, Typography } from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const ArrayMethodsPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Основні методи та методи перебору масиву</BookHeader>

            <SubHeader>Основні методи масивів</SubHeader>
            <Paragraph>
                JavaScript надає багато вбудованих методів для роботи з масивами. Ми розглянемо методи, такі як <Code>join</Code>, <Code>concat</Code>, <Code>slice</Code>, <Code>splice</Code>, і багато інших. Ці методи допомагають вирішувати різноманітні завдання з масивами.
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Об'єднання масивів
            </Typography>
            <CodeBlock>
                {`const moreFruits = ['grape', 'blueberry'];
const allFruits = fruits.concat(moreFruits); // ['apple', 'orange', 'cherry', 'grape', 'blueberry']`}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Видалення підмасиву
            </Typography>
            <CodeBlock>
                {`const someFruits = allFruits.slice(1, 2); // ['orange', 'cherry']`}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Видалення елементів і вставка нових
            </Typography>
            <CodeBlock>
                {`const removedFruits = allFruits.splice(1, 2, 'pear', 'watermelon');
// removedFruits = ['orange', 'cherry'], allFruits стане ['apple', 'pear', 'watermelon', 'grape', 'blueberry']`}
            </CodeBlock>

            <SubHeader>Методи перебору масиву</SubHeader>
            <Paragraph>
                Ми дослідимо методи для перебору масивів, такі як <Code>forEach</Code>, <Code>map</Code>, <Code>filter</Code>, та <Code>for</Code>. Ці методи дозволяють виконувати операції над кожним елементом масиву та створювати нові масиви або обчислювати значення.
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                1. Цикл for
            </Typography>
            <Paragraph>
                Це найбільш базовий метод перебору масиву. Ви використовуєте індекси для доступу до елементів масиву.
            </Paragraph>
            <CodeBlock>
                {`const fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                2. Цикл for...of
            </Typography>
            <Paragraph>
                Цей цикл спрощує перебір масиву, оскільки ви просто вказуєте змінну для кожного елемента масиву.
            </Paragraph>
            <CodeBlock>
                {`const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}`}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                3. Метод forEach
            </Typography>
            <Paragraph>
                Метод <Code>forEach</Code> є методом масиву, який приймає функцію зворотнього виклику та застосовує її до кожного елемента масиву.
            </Paragraph>
            <CodeBlock>
                {`const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit) => {
  console.log(fruit);
})`}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                4. Метод map
            </Typography>
            <Paragraph>
                Метод <Code>map</Code> також приймає функцію зворотнього виклику та створює новий масив, в якому кожен елемент є результатом функції.
            </Paragraph>
            <CodeBlock>
                {`const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);
console.log(doubled); // Виведе [2, 4, 6]`}
            </CodeBlock>

            <Box className='conclusion'>
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Різниця між цими методами полягає в зручності та призначенні. <Code>for</Code> та <Code>for...of</Code> дають вам більше контролю, але вимагають більше коду. <Code>forEach</Code> та <Code>map</Code> дозволяють спростити код та роблять його більш декларативним. Вибір методу залежить від ваших потреб і вподобань.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default ArrayMethodsPage;