import React from 'react';
import { Typography, Container, Box} from '@mui/material';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const CookiesPage = () => {

    return (
        <Container className="page-container">
            <Typography variant="h2" gutterBottom>Cookies</Typography>
            <Typography>
                Cookies - це невеликі фрагменти даних, які веб-сервери відправляють на браузер користувача, а браузер зберігає їх і повертає знову при кожному запиті до сервера.
            </Typography>
            <Typography>
                В JavaScript використовується <Code>document.cookie</Code> для роботи з кукі. Це важливий аспект веб-розробки, і в цьому розділі ми розглянемо основи використання cookies в JavaScript.
            </Typography>

            <Typography variant="h2" gutterBottom>Cookie: Призначення та Застосування</Typography>
            <Typography >
                Основне призначення cookies - це збереження інформації між запитами користувача на веб-сайт. Вони дозволяють серверам зберігати стан та інші дані для кожного користувача окремо. Це корисно для реалізації таких функцій, як автентифікація, збереження налаштувань, облікові записи користувачів та багато інших.
            </Typography>

            <Typography variant="h2" gutterBottom>Переваги та Недоліки в порівнянні з WebStorage</Typography>
            <Typography>
                Основною перевагою cookies є те, що вони є стійкими до перезавантаження сторінки або закриття браузера. Вони можуть мати встановлений термін дії, і будуть зберігати дані, навіть якщо користувач закриє браузер і відкриє його знову. Це дозволяє зберігати стан аутентифікації, рекламні дані та іншу інформацію.
            </Typography>
            <Typography>
                Однак є деякі недоліки. Зокрема, дані в cookies обмежені за розміром - браузери дозволяють зберігати обмежену кількість даних (зазвичай до 4 КБ). Крім того, cookies є не найбільш безпечним способом зберігання даних, оскільки їх можна легко підробити або підсилити. Для більш чутливих даних часто використовуються інші методи, такі як WebStorage або звернення до сервера.
            </Typography>

            <Typography variant="h2" gutterBottom>Приклади встановлення та читання cookies</Typography>
            <Typography>
                Встановлення кукі в JavaScript здійснюється за допомогою властивості <Code>document.cookie</Code>. Наприклад, для збереження ім'я користувача в куках:
            </Typography>
            <CodeBlock>
                {`document.cookie = "username=John; favoriteColor=blue";`}
            </CodeBlock>
            <Typography>
                Читання cookies може здійснюватися так:
            </Typography>
            <CodeBlock>
                {`const cookies = document.cookie;
console.log(cookies); // "username=John; favoriteColor=blue"`}
            </CodeBlock>
            <Typography>
                Щоб витягнути певне значення з cookies, вам знадобиться додатковий код:
            </Typography>
            <CodeBlock>
                {`function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}

const username = getCookie("username");
console.log(username); // "John"`}
            </CodeBlock>
            <Typography>
                Cookies можуть бути використані для збереження будь-яких видів даних, від простих рядків до складних об'єктів.
            </Typography>

            <Box className='conclusion'>
                <Typography variant="h2" gutterBottom>Заключення</Typography>
                <Typography>
                    Cookies є корисним механізмом для збереження інформації на боці клієнта. Вони дозволяють зберігати
                    дані між сесіями користувача та використовувати їх для різних завдань, таких як автентифікація та
                    налаштування. Однак важливо бути обережними, оскільки cookies можуть бути підроблені або підсилити,
                    і не підходять для збереження конфіденційних даних.
                </Typography>
            </Box>
        </Container>
    );
};

export default CookiesPage;