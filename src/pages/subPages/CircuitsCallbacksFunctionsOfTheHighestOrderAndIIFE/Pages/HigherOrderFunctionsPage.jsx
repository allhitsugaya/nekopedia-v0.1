import React from 'react';
import {Box, Container, List, ListItem} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Code from "../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";

const HigherOrderFunctionsPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Функція вищого порядку</BookHeader>
            <Paragraph>
                Функції вищого порядку - це потужний інструмент в мові програмування JavaScript, який дозволяє працювати з функціями як зі звичайними даними. Ці функції можуть приймати інші функції як аргументи, повертати функції як результати і використовувати їх для створення більш складних алгоритмів. У цій доповіді ми розглянемо основні концепції функцій вищого порядку та їх використання для обробки масивів у JavaScript.
            </Paragraph>

            <SubHeader>Що таке функції вищого порядку?</SubHeader>
            <Paragraph>
                Функції вищого порядку (higher-order functions) - це функції, які приймають одну або декілька інших функцій як аргументи і/або повертають функції як результат своєї роботи. Функції вищого порядку є потужним інструментом в функціональному програмуванні і в JavaScript загалом, оскільки вони дозволяють створювати більш абстрактний та зрозумілий код.
            </Paragraph>
            <Paragraph>
                Основні характеристики функцій вищого порядку:
            </Paragraph>
            <Box sx={{ml:2}}>
                <List sx={{
                    pl: 2,
                    listStyleType: 'disc',
                    '& .MuiListItem-root': {
                        display: 'list-item',
                        py: 0.5,
                        pl: 1,
                        ml: 2,
                        fontSize: 14,
                    }
                }}>
                <ListItem>
                    <Code>Прийом функцій як аргументів:</Code> Функція вищого порядку може приймати інші функції як параметри. Це дозволяє передавати логіку обробки даних в якості аргументу.
                </ListItem>
                <ListItem>
                    <Code>Повернення функцій:</Code> Функція вищого порядку може повертати іншу функцію як результат своєї роботи. Це дозволяє створювати інші функції "на льоту" залежно від умов або потреби.
                </ListItem>
                <ListItem>
                    <Code>Маніпуляція функціями:</Code> Функції вищого порядку можуть виконувати різні операції з функціями, такі як композиція, каррінг, фільтрація, мапування тощо.
                </ListItem>
                <ListItem>
                    <Code>Абстракція:</Code> Вони дозволяють абстрагуватися від конкретних операцій та дій, що роблять функції більш універсальними та повторно використовуваними.
                </ListItem>
                <ListItem>
                    <Code>Підвищення зрозумілості коду:</Code> Використання функцій вищого порядку може покращити зрозумілість та читабельність коду, оскільки вони дозволяють виразити логіку більш декларативним способом.
                </ListItem>
                </List>
            </Box>

            <SubHeader>Використання функцій вищого порядку для обробки масивів</SubHeader>
            <Paragraph>
                Одним із найпоширеніших використань функцій вищого порядку у JavaScript є їх застосування до обробки масивів. Декілька основних методів масивів, які використовують функції вищого порядку:
            </Paragraph>

            <SubHeader variant="h3">1. map()</SubHeader>
            <Paragraph>
                Цей метод створює новий масив, застосовуючи задану функцію до кожного елемента початкового масиву. Наприклад, для подвоєння значень масиву можна використовувати такий код:
            </Paragraph>
           <CodeBlock>
          {`
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (number) {
  return number * 2;
});
// doubled стає [2, 4, 6, 8, 10]
          `}
           </CodeBlock>

            <SubHeader variant="h3">2. filter()</SubHeader>
            <Paragraph>
                Цей метод створює новий масив, включаючи тільки ті елементи, для яких задана функція повертає <Code>true</Code>. Наприклад, для відфільтровування парних чисел з масиву:
            </Paragraph>
           <CodeBlock>
          {`
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(function (number) {
  return number % 2 === 0;
});
// evens стає [2, 4]
          `}
           </CodeBlock>

            <SubHeader variant="h3">3. reduce()</SubHeader>
            <Paragraph>
                Цей метод застосовує задану функцію до всіх елементів масиву та акумулює результати в одне значення. Наприклад, для обчислення суми елементів масиву:
            </Paragraph>
           <CodeBlock>
          {`
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// sum буде рівним 15
          `}
           </CodeBlock>

            <SubHeader variant="h3">4. forEach()</SubHeader>
            <Paragraph>
                Цей метод виконує задану функцію для кожного елемента масиву, але не створює нового масиву. Він використовується для виконання певних дій для кожного елемента масиву.
            </Paragraph>
           <CodeBlock>
          {`
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});
// Виведе числа в консоль
          `}
           </CodeBlock>

                <Conclusion>Заключення</Conclusion>
                <Paragraph>
                    Функції вищого порядку роблять обробку даних більш зручною, читабельною та ефективною, дозволяючи
                    виконувати операції над масивами без необхідності писати довгий та складний код. Вони є потужним
                    інструментом для роботи з даними в JavaScript і допомагають підвищити продуктивність та якість коду.
                </Paragraph>
        </Container>
    );
};

export default HigherOrderFunctionsPage;