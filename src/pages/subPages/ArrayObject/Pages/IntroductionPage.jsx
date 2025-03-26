import React from 'react';
import { Box, Typography } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const ArraysAndObjectsPage = () => {
    return (
        <Box>
            <Typography variant="h4" component="h1" gutterBottom>
                Масиви та об'єкти в JavaScript
            </Typography>

            <Paragraph>
                Масиви та об'єкти - це фундаментальні структури даних у JavaScript, які використовуються для організації та зберігання даних. Вони мають різні призначення та методи роботи. У цьому розділі ми детально розглянемо їхні особливості, схожості та відмінності.
            </Paragraph>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Основні відмінності
                </Typography>
                <CodeBlock>
                    {`// Об'єкт - колекція пар ключ-значення
const user = {
  name: 'John',
  age: 30,
  isAdmin: true
};

// Масив - впорядкована колекція значень
const numbers = [1, 2, 3, 4, 5];`}
                </CodeBlock>
                <Paragraph>
                    Головна відмінність: об'єкти використовуються для зберігання іменованих властивостей, тоді як масиви - для впорядкованих списків значень.
                </Paragraph>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Спільні риси
                </Typography>
                <CodeBlock>
                    {`// І масиви, і об'єкти:
// 1. Можуть містити різні типи даних
const mixedArray = [1, 'text', true, {name: 'John'}];
const mixedObject = {
  number: 42,
  text: 'Hello',
  isActive: false,
  data: [1, 2, 3]
};

// 2. Можуть бути вкладеними
const nested = {
  users: [
    {id: 1, name: 'Alice'},
    {id: 2, name: 'Bob'}
  ],
  settings: {
    theme: 'dark',
    notifications: true
  }
};`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Основні методи роботи
                </Typography>
                <Paragraph>
                    Масиви та об'єкти мають різні набори методів для роботи з даними:
                </Paragraph>
                <CodeBlock>
                    {`// Методи масивів
const fruits = ['apple', 'banana'];
fruits.push('orange'); // Додавання
fruits.pop();          // Видалення
fruits.map(fruit => fruit.toUpperCase()); // Трансформація

// Робота з об'єктами
const person = {name: 'John'};
person.age = 30;       // Додавання властивості
delete person.name;    // Видалення властивості
Object.keys(person);   // Отримання ключів`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Перетворення між масивами та об'єктами
                </Typography>
                <CodeBlock>
                    {`// Масив в об'єкт
const arr = [['a', 1], ['b', 2]];
const obj = Object.fromEntries(arr); // {a: 1, b: 2}

// Об'єкт в масив
const obj = {a: 1, b: 2};
const entries = Object.entries(obj); // [['a', 1], ['b', 2]]
const keys = Object.keys(obj);      // ['a', 'b']
const values = Object.values(obj);  // [1, 2]`}
                </CodeBlock>
            </Box>

            <Box component="section" sx={{ backgroundColor: 'background.paper', p: 3, borderRadius: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                    Висновок
                </Typography>
                <Paragraph>
                    Масиви та об'єкти - це потужні інструменти JavaScript для роботи з даними. Вибір між ними залежить від конкретної задачі: масиви ідеальні для впорядкованих колекцій, тоді як об'єкти - для структурованих даних з іменованими властивостями. Розуміння їхніх особливостей дозволяє ефективно вирішувати більшість задач з обробки даних.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default ArraysAndObjectsPage;