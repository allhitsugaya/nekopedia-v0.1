import React from 'react';
import { Box, Typography, Paper, List, ListItem } from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";

const HigherOrderFunctionsPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Функції вищого порядку в JavaScript</BookHeader>

            <Paragraph>
                Функції вищого порядку - це потужний інструмент в JavaScript, який дозволяє працювати з функціями як зі звичайними даними. Ці функції можуть приймати інші функції як аргументи, повертати функції як результати і використовувати їх для створення більш складних алгоритмів.
            </Paragraph>

            <SubHeader>Що таке функції вищого порядку?</SubHeader>
            <Paragraph>
                Функції вищого порядку (higher-order functions) - це функції, які:
            </Paragraph>
            <List sx={{ mb: 3 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    Приймають інші функції як аргументи
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    Повертають функції як результат
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    Дозволяють маніпулювати поведінкою інших функцій
                </ListItem>
            </List>

            <SubHeader>Переваги функцій вищого порядку</SubHeader>
            <Paragraph>
                Основні переваги використання функцій вищого порядку:
            </Paragraph>
            <List sx={{ mb: 3 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Абстракція:</Typography> Приховують деталі реалізації, роблячи код більш зрозумілим
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Повторне використання:</Typography> Дозволяють уникнути дублювання коду
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Композиція:</Typography> Дозволяють комбінувати прості функції у складніші
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Декларативність:</Typography> Роблять код більш читабельним
                </ListItem>
            </List>

            <SubHeader>Приклади функцій вищого порядку</SubHeader>
            <Paragraph>
                Ось приклад простої функції вищого порядку, яка приймає функцію як аргумент:
            </Paragraph>
            <CodeBlock>
                {`function greet(name, formatter) {
  return formatter(name);
}

function upperCaseName(name) {
  return name.toUpperCase();
}

console.log(greet('John', upperCaseName)); // "JOHN"`}
            </CodeBlock>

            <SubHeader>Функції вищого порядку для роботи з масивами</SubHeader>
            <Paragraph>
                JavaScript має вбудовані функції вищого порядку для роботи з масивами:
            </Paragraph>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    1. Метод map()
                </Typography>
                <Paragraph>
                    Створює новий масив, трансформуючи кожен елемент:
                </Paragraph>
                <CodeBlock>
                    {`const numbers = [1, 2, 3];
const squares = numbers.map(x => x * x);
console.log(squares); // [1, 4, 9]`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    2. Метод filter()
                </Typography>
                <Paragraph>
                    Фільтрує елементи масиву за певною умовою:
                </Paragraph>
                <CodeBlock>
                    {`const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(x => x % 2 === 0);
console.log(evens); // [2, 4]`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    3. Метод reduce()
                </Typography>
                <Paragraph>
                    Зводить масив до одного значення:
                </Paragraph>
                <CodeBlock>
                    {`const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, x) => acc + x, 0);
console.log(sum); // 10`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    4. Метод sort()
                </Typography>
                <Paragraph>
                    Сортує масив за допомогою функції порівняння:
                </Paragraph>
                <CodeBlock>
                    {`const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 }
];

users.sort((a, b) => a.age - b.age);
console.log(users); // Сортовано за віком`}
                </CodeBlock>
            </Box>

            <SubHeader>Створення власних функцій вищого порядку</SubHeader>
            <Paragraph>
                Ви можете створювати свої власні функції вищого порядку:
            </Paragraph>
            <CodeBlock>
                {`function createMultiplier(multiplier) {
  return function(x) {
    return x * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15`}
            </CodeBlock>

            <Paper sx={{ p: 3, mt: 3, backgroundColor: 'background.paper' }} className='conclusion'>
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Функції вищого порядку є потужним інструментом у JavaScript, який дозволяє:
                </Paragraph>
                <List>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        Писати більш абстрактний та універсальний код
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        Ефективно працювати з масивами та колекціями даних
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        Реалізовувати патерни функціонального програмування
                    </ListItem>
                </List>
                <Paragraph>
                    Використання функцій вищого порядку є основою сучасного JavaScript та таких бібліотек як React, Redux та Lodash.
                </Paragraph>
            </Paper>
        </Box>
    );
};

export default HigherOrderFunctionsPage;