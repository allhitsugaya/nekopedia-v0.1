import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import Conclusion from "../../../../../features/Conclusion/Conclusion.jsx";

const AjaxUsage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Використання AJAX для асинхронної відправки даних</BookHeader>
            <Paragraph>
                В сучасному веб-розробництві однією з найважливіших задач є обмін даними з сервером без перезавантаження сторінки. Для цього використовується технологія AJAX (Asynchronous JavaScript and XML), яка дозволяє взаємодіяти з сервером асинхронно та без блокування веб-сторінки. У цьому розділі ми розглянемо, як використовувати AJAX для відправки даних з клієнта на сервер та отримання відповіді від сервера.
            </Paragraph>

            <SubHeader>Основи AJAX</SubHeader>
            <Paragraph>
                AJAX базується на використанні об'єкта <Code>XMLHttpRequest</Code> (XHR) або сучасного API <Code>fetch</Code>. Вони дозволяють виконувати HTTP-запити до сервера, такі як GET та POST, і обробляти відповідь асинхронно.
            </Paragraph>

            <Chapter>Використання XMLHttpRequest</Chapter>
            <CodeBlock>
                    {`
// Створюємо новий об'єкт XMLHttpRequest
const xhr = new XMLHttpRequest();

// Налаштовуємо запит
xhr.open('GET', 'https://example.com/api/data', true);

// Додаємо обробник події, який виконається при отриманні відповіді
xhr.onload = function () {
    if (xhr.status === 200) {
        const response = xhr.responseText;
        console.log(response);
    }
};

// Відправляємо запит
xhr.send();
                    `}
            </CodeBlock>

            <Chapter>Використання fetch</Chapter>
            <CodeBlock>
                    {`
// Використовуючи метод fetch для відправки GET-запиту
fetch('https://example.com/api/data')
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Помилка: ' + error);
    });
                    `}
            </CodeBlock>

            <SubHeader>Відправка даних на сервер</SubHeader>
            <Paragraph>
                Для відправки даних на сервер, особливо при роботі з формами, ми можемо використовувати метод POST.
            </Paragraph>

            <Chapter>Використання XMLHttpRequest</Chapter>
            <CodeBlock>
                    {`
const xhr = new XMLHttpRequest();
const url = 'https://example.com/api/submit';

// Налаштовуємо запит
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json');

const formData = { username: 'john_doe', email: 'john@example.com' };
const jsonData = JSON.stringify(formData);

// Додаємо обробник події для відповіді
xhr.onload = function () {
    if (xhr.status === 200) {
        const response = xhr.responseText;
        console.log(response);
    }
};

// Відправляємо дані
xhr.send(jsonData);
                    `}
            </CodeBlock>

            <Chapter>Використання fetch</Chapter>
            <CodeBlock>
                    {`
const url = 'https://example.com/api/submit';
const formData = new FormData();
formData.append('username', 'john_doe');
formData.append('email', 'john@example.com');

// Використовуємо метод POST та передаємо об'єкт FormData
fetch(url, {
    method: 'POST',
    body: formData,
})
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Помилка: ' + error);
    });
                    `}
            </CodeBlock>

                <Conclusion>Висновок</Conclusion>
                <Paragraph>
                    Використання AJAX і технології відправки даних асинхронно дає можливість створювати більш
                    інтерактивні веб-сайти.
                </Paragraph>
        </Container>
    );
};

export default AjaxUsage;