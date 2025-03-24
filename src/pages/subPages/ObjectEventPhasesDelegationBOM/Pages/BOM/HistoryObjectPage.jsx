import React from 'react';
import { Box, Typography } from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const HistoryObjectPage = () => {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Робота з об'єктом history
            </Typography>

            <Paragraph>
                Об'єкт <code>history</code> дозволяє вам взаємодіяти з історією переходів користувача в браузері. Ви можете використовувати об'єкт <code>history</code> для навігації назад та вперед в історії браузера, а також для отримання інформації про кількість записів в історії та поточний стан. У цьому розділі ми розглянемо основи роботи з об'єктом <code>history</code> та надамо приклади його використання.
            </Paragraph>

            <Typography variant="h4" gutterBottom>
                Отримання довжини історії
            </Typography>
            <Paragraph>
                Властивість <code>length</code> об'єкта <code>history</code> містить кількість записів в історії браузера. Ви можете отримати це значення, щоб дізнатися, скільки сторінок було відвідано користувачем.
            </Paragraph>
            <CodeBlock>
                {`const historyLength = history.length;
console.log(\`Кількість записів в історії: \${historyLength}\`);`}
            </CodeBlock>

            <Typography variant="h4" gutterBottom>
                Перехід назад та вперед
            </Typography>
            <Paragraph>
                Об'єкт <code>history</code> надає методи <code>back()</code> та <code>forward()</code>, які дозволяють вам навігувати назад та вперед по історії браузера.
            </Paragraph>
            <CodeBlock>
                {`// Перехід на попередню сторінку (назад)
history.back();

// Перехід на наступну сторінку (вперед)
history.forward();`}
            </CodeBlock>

            <Typography variant="h4" gutterBottom>
                Перехід за вказану кількість кроків
            </Typography>
            <Paragraph>
                Ви також можете використовувати метод <code>go()</code> для переходу на певну сторінку в історії, вказавши кількість кроків, на які треба перейти назад (від'їхати назад) або вперед (продовжити вперед).
            </Paragraph>
            <CodeBlock>
                {`// Перехід на 2 сторінки вперед
history.go(2);

// Перехід на 1 сторінку назад
history.go(-1);`}
            </CodeBlock>

            <Typography variant="h4" gutterBottom>
                Приклади використання об'єкта history
            </Typography>
            <Paragraph>
                Давайте розглянемо кілька прикладів використання об'єкта <code>history</code>.
            </Paragraph>

            <Typography variant="h5" gutterBottom>
                Навігація назад та вперед
            </Typography>
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
                У цьому прикладі ми спершу переходимо на сторінку <code>"https://www.example.com/page2"</code>, а потім назад та вперед за допомогою методів <code>back()</code> та <code>forward()</code>.
            </Paragraph>

            <Typography variant="h5" gutterBottom>
                Перехід до конкретного запису в історії
            </Typography>
            <CodeBlock>
                {`// Перехід до другого запису в історії
history.go(2);`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми використовуємо метод <code>go(2)</code>, щоб перейти на другий запис в історії браузера. Це призведе до переходу на сторінку, яка розташована два кроки вперед в історії.
            </Paragraph>
        </Box>
    );
};

export default HistoryObjectPage;
