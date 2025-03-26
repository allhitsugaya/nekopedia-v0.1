import React from 'react';
import { Box } from "@mui/material";
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const TimersPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>setInterval, setTimeout та clearTimeout</BookHeader>

            <Paragraph>
                Тепер нам зрозуміло, що синхронний код виконується послідовно, кожна операція чекає завершення попередньої. А ось найпростіші способи створення асинхронності включають використання <Code>setInterval</Code> та <Code>setTimeout</Code>.
            </Paragraph>

            <SubHeader>setInterval</SubHeader>
            <Paragraph>
                <Code>setInterval</Code> дозволяє виконувати функцію через певний інтервал часу. Це корисно для періодичних завдань, таких як оновлення часових годинників або відправлення запитів на сервер. Приклад:
            </Paragraph>
            <CodeBlock>
                {`setInterval(function() {
    console.log("Цей код виконується кожні 1000 мілісекунд");
}, 1000);`}
            </CodeBlock>
            <Paragraph>
                <Code>setInterval</Code> є вбудованим методом JavaScript, який використовується для періодичного виклику функції через зазначений проміжок часу.
            </Paragraph>
            <Paragraph>
                Синтаксис: <Code>setInterval(callback, delay)</Code>, де <Code>callback</Code> - функція, яку потрібно викликати, а <Code>delay</Code> - інтервал в мілісекундах. Важливо зауважити, що виклик <Code>setInterval</Code> поверне ідентифікатор таймера, який можна використовувати для відміни запланованого виклику за допомогою <Code>clearInterval</Code>. Приклад:
            </Paragraph>
            <CodeBlock>
                {`let intervalId = setInterval(function() {
    console.log("Цей код виконується кожні 1000 мілісекунд");
}, 1000);

// Для зупинки інтервалу:
// clearInterval(intervalId);`}
            </CodeBlock>

            <SubHeader>setTimeout</SubHeader>
            <Paragraph>
                Затримка виклику функції можна також досягти за допомогою <Code>setTimeout</Code>. Наприклад:
            </Paragraph>
            <CodeBlock>
                {`setTimeout(function() {
    console.log("Цей код виконується після затримки 2000 мілісекунд");
}, 2000);`}
            </CodeBlock>
            <Paragraph>
                <Code>setTimeout</Code> також використовується для виклику функції, але тільки один раз після затримки.
            </Paragraph>
            <Paragraph>
                Синтаксис: <Code>setTimeout(callback, delay)</Code>, де <Code>callback</Code> - функція для виклику, а <Code>delay</Code> - затримка в мілісекундах. Виклик <Code>setTimeout</Code> також буде повертати ідентифікатор. Хоча взагалі ідентифікатори не завжди зберігають. Приклад:
            </Paragraph>
            <CodeBlock>
                {`setTimeout(function() {
    console.log("Цей код виконується після затримки 2000 мілісекунд");
}, 2000);`}
            </CodeBlock>

            <SubHeader>clearTimeout</SubHeader>
            <Paragraph>
                Однак, асинхронність також може створювати проблеми, такі як непередбачувана поведінка чи конфлікти викликів. Для управління асинхронним кодом та його відміна часто використовується <Code>clearTimeout</Code>. Це дозволяє уникнути неочікуваних результатів та підтримувати контроль над асинхронними операціями в JavaScript. Наприклад:
            </Paragraph>
            <CodeBlock>
                {`let myTimeout = setTimeout(function() {
    console.log("Цей код виконується через 3000 мілісекунд");
}, 3000);

// Відміна виклику setTimeout
clearTimeout(myTimeout);`}
            </CodeBlock>
            <Paragraph>
                <Code>clearTimeout</Code> використовується для відміни запланованого виклику функції, який був створений за допомогою <Code>setTimeout</Code>. Ви можете використовувати його, коли хочете скасувати подальше виконання коду, який був запланований для виклику після певного періода затримки.
            </Paragraph>
            <Paragraph>
                Основний принцип роботи <Code>clearTimeout</Code> полягає в передачі ідентифікатора таймера, який ви хочете скасувати. Коли ви викликаєте <Code>clearTimeout</Code>, він скасовує виклик функції, який був запланований за допомогою <Code>setTimeout</Code>, і вже не викликає його. Приклад використання:
            </Paragraph>
            <CodeBlock>
                {`let myTimeout = setTimeout(function() {
    console.log("Цей код виконується через 3000 мілісекунд");
}, 3000);

// Скасування виклику setTimeout
clearTimeout(myTimeout);`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі <Code>myTimeout</Code> - це ідентифікатор таймера, який повертається функцією <Code>setTimeout</Code>. Якщо ви викличете <Code>clearTimeout(myTimeout)</Code>, виклик <Code>console.log</Code> не відбудеться, і подальше виконання коду буде продовжено без затримки.
            </Paragraph>
            <Paragraph>
                Використовуйте <Code>clearTimeout</Code>, коли вам потрібно скасувати виклик функції, який був запланований для виконання пізніше, і це може бути корисно в різних ситуаціях, наприклад, коли користувач взаємодіє з елементом або в інших сценаріях веб-розробки.
            </Paragraph>

            <Box className='conclusion'>
                <SubHeader>Заключення</SubHeader>
                <Paragraph>
                    Використання <Code>setInterval</Code>, <Code>setTimeout</Code> та <Code>clearTimeout</Code> дозволяє
                    керувати асинхронними операціями в JavaScript. Ці методи є важливими для створення відзивчивих та
                    ефективних додатків, де потрібно контролювати час виконання операцій та уникнути непередбачуваних
                    результатів.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default TimersPage;