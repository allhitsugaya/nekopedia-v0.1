import React from 'react';
import {Box, Container, List, ListItem} from "@mui/material";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../features/Chapter/Chapter.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";

const ArraysVsObjectsPage = () => {
    return (
        <Container>
            <BookHeader>Схожості та Різниці між Масивами та Об'єктами</BookHeader>

            <Paragraph>
                Масиви (Array) та об'єкти (Object) - це дві основні структури даних в JavaScript, і вони мають свої схожості та різниці.
            </Paragraph>

            <SubHeader >Схожості:</SubHeader >
            <Box sx={{ml:2}}>
                <List sx={{
                    pl: 2,
                    listStyleType: 'disc',
                    '& .MuiListItem-root': {
                        display: 'list-item',
                        py: 0.5,
                        pl: 1,
                        ml: 2,
                        fontSize: 14
                    }
                }}>
                <ListItem><Code>Зберігання даних:</Code> Обидві структури призначені для зберігання даних. Вони можуть містити значення різних типів, такі як числа, рядки, булеві значення та інші.</ListItem>
                <ListItem><Code>Доступ за ключем або індексом:</Code> В обох випадках ви можете отримувати доступ до елементів за ключем або індексом.</ListItem>
                <ListItem><Code>Ітерація:</Code> Масиви та об'єкти піддаються ітерації, тобто ви можете перебирати їх елементи за допомогою циклів, таких як for або методів, таких як forEach.</ListItem>
                </List>
            </Box>

            <SubHeader >Різниці:</SubHeader >
            <Box sx={{ml:2}}>
                <List sx={{
                    pl: 2,
                    listStyleType: 'disc',
                    '& .MuiListItem-root': {
                        display: 'list-item',
                        py: 0.5,
                        pl: 1,
                        ml: 2,
                        fontSize: 14
                    }
                }}>
                <ListItem><Code>Внутрішнє уявлення:</Code> Масиви внутрішньо реалізовані як об'єкти, але з додатковими функціями та методами, які дозволяють працювати з ними як із послідовною колекцією значень.</ListItem>
                <ListItem><Code>Індексація:</Code> Масиви використовують числові індекси для доступу до елементів та зберігають їх в порядку, визначеному цими індексами. Об'єкти використовують ключі (рядки) та не гарантують жодного певного порядку для їхніх властивостей.</ListItem>
                <ListItem><Code>Методи та властивості:</Code> Масиви мають власні методи та властивості для роботи зі списками даних, такі як push, pop, shift, unshift, splice, length та інші. Об'єкти не мають таких методів. Ви зазвичай використовуєте звичайні операції додавання, зміни та видалення властивостей.</ListItem>
                </List>
            </Box>

            <SubHeader >Приклади:</SubHeader >
            <Chapter >Масив</Chapter >
            <CodeBlock>
        {`// Масив
const arr = [1, 2, 3];
console.log(arr[0]); // Доступ за індексом
arr.push(4); // Додавання елементу
console.log(arr.length); // Властивість "length"`}
      </CodeBlock>

            <Chapter >Об'єкт</Chapter >
            <CodeBlock>
        {`// Об'єкт
const obj = { key1: 1, key2: 2, key3: 3 };
console.log(obj['key1']); // Доступ за ключем
obj.newKey = 'значення'; // Додавання ключа`}
      </CodeBlock>

            <SubHeader >Робота з typeof в масивах та об'єктах:</SubHeader >
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
        </Container>
    );
}

export default ArraysVsObjectsPage;
