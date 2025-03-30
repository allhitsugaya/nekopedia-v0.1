import React from 'react';
import {Box, Container, Typography} from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import Code from "../../../../../features/Code/Code.jsx";

const HistoryObjectPage = () => {
    return (
        <Container>
            <BookHeader variant="h3" >
                Робота з об'єктом history
            </BookHeader>

            <Paragraph>
                Об'єкт <Code>history</Code> дозволяє вам взаємодіяти з історією переходів користувача в браузері. Ви можете використовувати об'єкт <Code>history</Code> для навігації назад та вперед в історії браузера, а також для отримання інформації про кількість записів в історії та поточний стан. У цьому розділі ми розглянемо основи роботи з об'єктом <Code>history</Code> та надамо приклади його використання.
            </Paragraph>

            <Chapter variant="h4" >
                Отримання довжини історії
            </Chapter>
            <Paragraph>
                Властивість <Code>length</Code> об'єкта <Code>history</Code> містить кількість записів в історії браузера. Ви можете отримати це значення, щоб дізнатися, скільки сторінок було відвідано користувачем.
            </Paragraph>
            <CodeBlock>
                {`const historyLength = history.length;
console.log(\`Кількість записів в історії: \${historyLength}\`);`}
            </CodeBlock>

            <Chapter variant="h4" >
                Перехід назад та вперед
            </Chapter>
            <Paragraph>
                Об'єкт <Code>history</Code> надає методи <Code>back()</Code> та <Code>forward()</Code>, які дозволяють вам навігувати назад та вперед по історії браузера.
            </Paragraph>
            <CodeBlock>
                {`// Перехід на попередню сторінку (назад)
history.back();

// Перехід на наступну сторінку (вперед)
history.forward();`}
            </CodeBlock>

            <Chapter variant="h4" >
                Перехід за вказану кількість кроків
            </Chapter>
            <Paragraph>
                Ви також можете використовувати метод <Code>go()</Code> для переходу на певну сторінку в історії, вказавши кількість кроків, на які треба перейти назад (від'їхати назад) або вперед (продовжити вперед).
            </Paragraph>
            <CodeBlock>
                {`// Перехід на 2 сторінки вперед
history.go(2);

// Перехід на 1 сторінку назад
history.go(-1);`}
            </CodeBlock>

            <Chapter variant="h4" >
                Приклади використання об'єкта history
            </Chapter>
            <Paragraph>
                Давайте розглянемо кілька прикладів використання об'єкта <Code>history</Code>.
            </Paragraph>

            <Chapter variant="h5" >
                Навігація назад та вперед
            </Chapter>
            <CodeBlock>
                {`// Початковий URL
console.log("Початковий URL:", window.location.href);

// Перехід на іншу сторінку
window.location.href = "https://www.example.com/page2";

// Затримка в 2 секунди
setTimeout(function () {
    // Перехід на попередню сторінку (назад)
    history.back();

    // Затримка в 2 секунди
    setTimeout(function () {
        // Перехід на наступну сторінку (вперед)
        history.forward();
    }, 2000);
}, 2000);`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми спершу переходимо на сторінку <Code>"https://www.example.com/page2"</Code>, а потім назад та вперед за допомогою методів <Code>back()</Code> та <Code>forward()</Code>.
            </Paragraph>

            <Chapter variant="h5" >
                Перехід до конкретного запису в історії
            </Chapter>
            <CodeBlock>
                {`// Перехід до другого запису в історії
history.go(2);`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми використовуємо метод <Code>go(2)</Code>, щоб перейти на другий запис в історії браузера. Це призведе до переходу на сторінку, яка розташована два кроки вперед в історії.
            </Paragraph>
        </Container>
    );
};

export default HistoryObjectPage;
