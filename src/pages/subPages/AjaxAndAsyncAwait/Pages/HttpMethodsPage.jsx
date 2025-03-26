import React from 'react';
import { Box, Typography } from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const HttpMethodsPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Методи роботи з API (GET, POST, PUT, DELETE)</BookHeader>

            <Paragraph>
                У цьому розділі ми розглянемо, як відправляти <Code>GET</Code>, <Code>POST</Code>, <Code>PUT</Code>, <Code>DELETE</Code> запити, передавати параметри запиту, а також обробляти отриману відповідь від сервера.
            </Paragraph>

            <Paragraph>
                <Code>GET</Code>, <Code>POST</Code>, <Code>PUT</Code>, <Code>DELETE</Code> - це чотири основних методи HTTP-запитів, які використовуються для взаємодії між клієнтом і сервером у веб-розробці.
            </Paragraph>

            <Paragraph>
                Ці методи HTTP є частиною стандарту REST і використовуються для забезпечення повноцінної реалізації CRUD-операцій (створення, читання, оновлення, видалення) у веб-розробці.
            </Paragraph>

            <SubHeader>GET-запит</SubHeader>
            <Paragraph>
                Використовується для отримання даних з сервера. Параметри запиту передаються у URL (як рядок запиту), наприклад, <Code>https://example.com/api/data?param1=value1&param2=value2</Code>. Ідеально підходить для запитів, які не змінюють стан сервера і призначені лише для отримання інформації.
            </Paragraph>
            <CodeBlock>
                {`// Приклад використання GET-запиту за допомогою Fetch API
const userId = 123;
const apiUrl = \`https://api.example.com/user?id=\${userId}\`;

fetch(apiUrl)
    .then(response => response.json())
    .then(user => console.log(user))
    .catch(error => console.error('Помилка:', error));`}
            </CodeBlock>

            <SubHeader>POST-запит</SubHeader>
            <Paragraph>
                Використовується для надсилання даних на сервер для обробки або збереження. Параметри передаються у тілі запиту, тому вони не видно у URL, що робить його придатним для надсилання великої кількості чутливих даних. Використовується там, де потрібно змінити стан сервера.
            </Paragraph>
            <CodeBlock>
                {`// Приклад використання POST-запиту за допомогою Fetch API
const userData = { name: 'Alice', age: 30 };

fetch('https://api.example.com/save', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
})
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error('Помилка:', error));`}
            </CodeBlock>

            <SubHeader>PUT-запит</SubHeader>
            <Paragraph>
                Використовується для оновлення чи створення ресурсу на сервері за вказаним URL. Якщо ресурс існує, він оновлюється; якщо відсутній - створюється новий. Запит має містити повний опис ресурсу.
            </Paragraph>
            <CodeBlock>
                {`// Приклад використання PUT-запиту за допомогою Fetch API
const updatedUserData = { name: 'Alice', age: 31 };

fetch('https://api.example.com/user/123', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUserData)
})
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error('Помилка:', error));`}
            </CodeBlock>

            <SubHeader>DELETE-запит</SubHeader>
            <Paragraph>
                Використовується для видалення ресурсу на сервері за вказаним URL. Запит не має тіла, оскільки весь інформаційний вміст передається у URL.
            </Paragraph>
            <CodeBlock>
                {`// Приклад використання DELETE-запиту за допомогою Fetch API
fetch('https://api.example.com/user/123', {
    method: 'DELETE'
})
    .then(response => {
        if (response.ok) {
            console.log('Ресурс успішно видалено');
        } else {
            console.error('Помилка видалення ресурсу');
        }
    })
    .catch(error => console.error('Помилка:', error));`}
            </CodeBlock>

            <Box className='conclusion'>
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Вищенаведені приклади демонструють основні аспекти відправлення запитів на сервер та обробки отриманої відповіді від сервера в JavaScript. Важливо пам'ятати, що обробка помилок також є важливою частиною розробки, тому її не слід ігнорувати. Здатність передавати дані між клієнтом і сервером дозволяє створювати динамічні та інтерактивні веб-додатки.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default HttpMethodsPage;