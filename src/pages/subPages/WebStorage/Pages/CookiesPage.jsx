import React from 'react';
import { Container, Box} from '@mui/material';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";

const CookiesPage = () => {

    return (
        <Container className="page-container">
            <SubHeader variant="h2" gutterBottom>Cookies</SubHeader>
            <Paragraph>
                Cookies - це невеликі фрагменти даних, які веб-сервери відправляють на браузер користувача, а браузер зберігає їх і повертає знову при кожному запиті до сервера.
            </Paragraph>
            <Paragraph>
                В JavaScript використовується <Code>document.cookie</Code> для роботи з кукі. Це важливий аспект веб-розробки, і в цьому розділі ми розглянемо основи використання cookies в JavaScript.
            </Paragraph>

            <SubHeader variant="h2" gutterBottom>Cookie: Призначення та Застосування</SubHeader>
            <Paragraph>
                Основне призначення cookies - це збереження інформації між запитами користувача на веб-сайт. Вони дозволяють серверам зберігати стан та інші дані для кожного користувача окремо. Це корисно для реалізації таких функцій, як автентифікація, збереження налаштувань, облікові записи користувачів та багато інших.
            </Paragraph>

            <SubHeader variant="h2" gutterBottom>Переваги та Недоліки в порівнянні з WebStorage</SubHeader>
            <Paragraph>
                Основною перевагою cookies є те, що вони є стійкими до перезавантаження сторінки або закриття браузера. Вони можуть мати встановлений термін дії, і будуть зберігати дані, навіть якщо користувач закриє браузер і відкриє його знову. Це дозволяє зберігати стан аутентифікації, рекламні дані та іншу інформацію.
            </Paragraph>
            <Paragraph>
                Однак є деякі недоліки. Зокрема, дані в cookies обмежені за розміром - браузери дозволяють зберігати обмежену кількість даних (зазвичай до 4 КБ). Крім того, cookies є не найбільш безпечним способом зберігання даних, оскільки їх можна легко підробити або підсилити. Для більш чутливих даних часто використовуються інші методи, такі як WebStorage або звернення до сервера.
            </Paragraph>

            <SubHeader variant="h2" gutterBottom>Приклади встановлення та читання cookies</SubHeader>
            <Paragraph>
                Встановлення кукі в JavaScript здійснюється за допомогою властивості <Code>document.cookie</Code>. Наприклад, для збереження ім'я користувача в куках:
            </Paragraph>
            <CodeBlock>
                {`document.cookie = "username=John; favoriteColor=blue";`}
            </CodeBlock>
            <Paragraph>
                Читання cookies може здійснюватися так:
            </Paragraph>
            <CodeBlock>
                {`const cookies = document.cookie;
console.log(cookies); // "username=John; favoriteColor=blue"`}
            </CodeBlock>
            <Paragraph>
                Щоб витягнути певне значення з cookies, вам знадобиться додатковий код:
            </Paragraph>
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
            <Paragraph>
                Cookies можуть бути використані для збереження будь-яких видів даних, від простих рядків до складних об'єктів.
            </Paragraph>

                <Conclusion variant="h2" gutterBottom>Заключення</Conclusion>
                <Paragraph>
                    Cookies є корисним механізмом для збереження інформації на боці клієнта. Вони дозволяють зберігати
                    дані між сесіями користувача та використовувати їх для різних завдань, таких як автентифікація та
                    налаштування. Однак важливо бути обережними, оскільки cookies можуть бути підроблені або підсилити,
                    і не підходять для збереження конфіденційних даних.
                </Paragraph>
        </Container>
    );
};

export default CookiesPage;