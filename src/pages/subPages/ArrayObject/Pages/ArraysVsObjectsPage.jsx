import React from 'react';
import { Box, Typography, List, ListItem } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const ArraysVsObjectsPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Схожості та Різниці між Масивами та Об'єктами</BookHeader>

            <Paragraph>
                Масиви (<Code>Array</Code>) та об'єкти (<Code>Object</Code>) - це дві основні структури даних в JavaScript, і вони мають свої схожості та різниці.
            </Paragraph>

            <SubHeader>Схожості:</SubHeader>
            <List>
                <ListItem>
                    <Typography component="span" fontWeight="bold">Зберігання даних:</Typography> Обидві структури призначені для зберігання даних. Вони можуть містити значення різних типів, такі як числа, рядки, булеві значення та інші.
                </ListItem>
                <ListItem>
                    <Typography component="span" fontWeight="bold">Доступ за ключем або індексом:</Typography> В обох випадках ви можете отримувати доступ до елементів за ключем або індексом.
                </ListItem>
                <ListItem>
                    <Typography component="span" fontWeight="bold">Ітерація:</Typography> Масиви та об'єкти піддаються ітерації, тобто ви можете перебирати їх елементи за допомогою циклів, таких як <Code>for</Code> або методів, таких як <Code>forEach</Code>.
                </ListItem>
            </List>

            <SubHeader>Різниці:</SubHeader>
            <List>
                <ListItem>
                    <Typography component="span" fontWeight="bold">Внутрішнє уявлення:</Typography> Масиви внутрішньо реалізовані як об'єкти, але з додатковими функціями та методами, які дозволяють працювати з ними як із послідовною колекцією значень.
                </ListItem>
                <ListItem>
                    <Typography component="span" fontWeight="bold">Індексація:</Typography> Масиви використовують числові індекси для доступу до елементів та зберігають їх в порядку, визначеному цими індексами. Об'єкти використовують ключі (рядки) та не гарантують жодного певного порядку для їхніх властивостей.
                </ListItem>
                <ListItem>
                    <Typography component="span" fontWeight="bold">Методи та властивості:</Typography> Масиви мають власні методи та властивості для роботи зі списками даних, такі як <Code>push</Code>, <Code>pop</Code>, <Code>shift</Code>, <Code>unshift</Code>, <Code>splice</Code>, <Code>length</Code> та інші. Об'єкти не мають таких методів. Ви зазвичай використовуєте звичайні операції додавання, зміни та видалення властивостей.
                </ListItem>
            </List>

            <SubHeader>Приклади:</SubHeader>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Масив
            </Typography>
            <CodeBlock>
                {`// Масив
const arr = [1, 2, 3];
console.log(arr[0]); // Доступ за індексом
arr.push(4); // Додавання елементу
console.log(arr.length); // Властивість "length"`}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Об'єкт
            </Typography>
            <CodeBlock>
                {`// Об'єкт
const obj = { key1: 1, key2: 2, key3: 3 };
console.log(obj['key1']); // Доступ за ключем
obj.newKey = 'значення'; // Додавання ключа`}
            </CodeBlock>

            <SubHeader>Робота з typeof в масивах та об'єктах:</SubHeader>
            <CodeBlock>
                {`const arr = [1, 2, 3];
const obj = { key1: 1, key2: 2, key3: 3 };

console.log(typeof arr); // "object" - масив вважається об'єктом
console.log(typeof obj); // "object" - об'єкт також вважається об'єктом`}
            </CodeBlock>
            <Paragraph>
                Інструкція <Code>typeof</Code> виведе "object" для як масивів, так і об'єктів, оскільки вони є об'єктами в JavaScript. Щоб розрізнити масиви та об'єкти, ви можете скористатися іншими методами, такими як <Code>Array.isArray()</Code>:
            </Paragraph>
            <CodeBlock>
                {`console.log(Array.isArray(arr)); // true - перевіряємо, чи це масив
console.log(Array.isArray(obj)); // false - об'єкт не є масивом`}
            </CodeBlock>
            <Paragraph>
                Цей спосіб допомагає вам точно визначити, чи об'єкт є масивом чи ні.
            </Paragraph>
        </Box>
    );
};

export default ArraysVsObjectsPage;