import React from 'react';
import { Box, Typography } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const AjaxUsage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Використання AJAX для асинхронної відправки даних</BookHeader>

            <Paragraph>
                В сучасному веб-розробництві однією з найважливіших задач є обмін даними з сервером без перезавантаження сторінки. Для цього використовується технологія AJAX (Asynchronous JavaScript and XML), яка дозволяє взаємодіяти з сервером асинхронно та без блокування веб-сторінки. У цьому розділі ми розглянемо, як використовувати AJAX для відправки даних з клієнта на сервер та отримання відповіді від сервера.
            </Paragraph>

            <SubHeader>Основи AJAX</SubHeader>
            <Paragraph>
                AJAX базується на використанні об'єкта <Code>XMLHttpRequest</Code> (XHR) або сучасного API <Code>fetch</Code>. Вони дозволяють виконувати HTTP-запити до сервера, такі як GET та POST, і обробляти відповідь асинхронно.
            </Paragraph>

            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                Використання XMLHttpRequest
            </Typography>
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

            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                Використання fetch
            </Typography>
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

            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                Використання XMLHttpRequest
            </Typography>
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

            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                Використання fetch
            </Typography>
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

            <Box sx={{ mt: 4, p: 3, backgroundColor: 'background.paper', borderRadius: 1, borderLeft: '4px solid', borderColor: 'primary.main' }}>
                <Typography variant="h6" component="h3" gutterBottom>
                    Висновок
                </Typography>
                <Paragraph>
                    Використання AJAX і технології відправки даних асинхронно дає можливість створювати більш
                    інтерактивні веб-сайти.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default AjaxUsage;