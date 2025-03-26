import React from 'react';
import { Box, Typography, Paper, List, ListItem } from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";

const PureFunctionsPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Чисті функції в JavaScript</BookHeader>

            <Paragraph>
                Чисті функції є фундаментальною концепцією функціонального програмування, яка спрощує розробку, тестування та підтримку коду завдяки своїй передбачуваності та відсутності побічних ефектів.
            </Paragraph>

            <SubHeader>Ознаки чистих функцій</SubHeader>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    1. Детермінованість
                </Typography>
                <Paragraph>
                    Чиста функція завжди повертає однаковий результат для однакових вхідних даних:
                </Paragraph>
                <CodeBlock>
                    {`function square(x) {
  return x * x;
}

console.log(square(5)); // 25 (завжди)`}
                </CodeBlock>
                <Paragraph>
                    На відміну від нечистої функції:
                </Paragraph>
                <CodeBlock>
                    {`function randomSquare(x) {
  return x * x * Math.random(); // Різний результат кожного разу
}`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    2. Відсутність побічних ефектів
                </Typography>
                <Paragraph>
                    Чисті функції не змінюють зовнішній стан:
                </Paragraph>
                <CodeBlock>
                    {`// Чиста функція
function sum(a, b) {
  return a + b;
}

// Нечиста функція (змінює зовнішню змінну)
let total = 0;
function addToTotal(amount) {
  total += amount; // Побічний ефект
  return total;
}`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    3. Незалежність від зовнішнього стану
                </Typography>
                <Paragraph>
                    Чисті функції не покладаються на зовнішні змінні:
                </Paragraph>
                <CodeBlock>
                    {`// Нечиста функція (залежить від зовнішньої змінної)
let taxRate = 0.2;
function calculateTax(amount) {
  return amount * taxRate;
}

// Чиста функція
function calculatePureTax(amount, rate) {
  return amount * rate;
}`}
                </CodeBlock>
            </Box>

            <SubHeader>Переваги чистих функцій</SubHeader>
            <List sx={{ mb: 3 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Легкість тестування:</Typography> Не потрібні складні налаштування середовища
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Передбачуваність:</Typography> Менше несподіваних помилок
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Можливість кешування:</Typography> Мемоізація результатів
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Паралельне виконання:</Typography> Без ризику конфліктів
                </ListItem>
            </List>

            <SubHeader>Приклади використання</SubHeader>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    1. Обробка даних
                </Typography>
                <CodeBlock>
                    {`// Чиста функція для фільтрації
function filterByLength(words, minLength) {
  return words.filter(word => word.length >= minLength);
}`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    2. Математичні операції
                </Typography>
                <CodeBlock>
                    {`// Чиста функція для факторіалу
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}`}
                </CodeBlock>
            </Box>

            <Paper sx={{ p: 3, mt: 3, backgroundColor: 'background.paper' }} className='conclusion'>
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Використання чистих функцій є важливою практикою сучасного JavaScript. Вони допомагають:
                </Paragraph>
                <List>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        Покращити читабельність та підтримку коду
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        Зробити код більш передбачуваним і менш схильним до помилок
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        Спростити тестування та рефакторинг
                    </ListItem>
                </List>
                <Paragraph>
                    Хоча не завжди можна використовувати чисті функції для всіх задач (наприклад, для роботи з DOM або мережевими запитами), їх слід застосовувати там, де це можливо.
                </Paragraph>
            </Paper>
        </Box>
    );
};

export default PureFunctionsPage;