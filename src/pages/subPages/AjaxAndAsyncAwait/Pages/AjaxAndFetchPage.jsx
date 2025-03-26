import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const AjaxAndFetchPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Ajax та fetch</BookHeader>

            <Paragraph>
                <strong>Ajax</strong>, що розшифровується як <strong>Asynchronous JavaScript and XML</strong> (Асинхронний JavaScript і XML), є потужним інструментом у веб-розробці, який дозволяє взаємодіяти з сервером без необхідності оновлення сторінки.
            </Paragraph>

            <SubHeader>Що таке Ajax - Asynchronous JavaScript and XML</SubHeader>
            <Paragraph>
                <strong>Ajax</strong> - це техніка асинхронного обміну даними між клієнтом та сервером без необхідності перезавантаження сторінки. Ця технологія дозволяє вам виконувати запити до сервера, отримувати та відправляти дані, а потім динамічно оновлювати частини сторінки.
            </Paragraph>

            <SubHeader>Роль Ajax у веб-розробці</SubHeader>
            <Paragraph>
                <strong>Ajax</strong> грає ключову роль у створенні динамічних та інтерактивних веб-застосунків. За допомогою Ajax, ви можете асинхронно завантажувати дані, взаємодіяти з сервером, оновлювати інформацію на сторінці та створювати більш плавні та швидкі веб-додатки.
            </Paragraph>

            <SubHeader>Історія розвитку Ajax</SubHeader>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Зародження концепції:
            </Typography>
            <Paragraph>
                Концепція Ajax була представлена в 1999 році Джессі Джеймсом Гарреттом, який використав термін "Ajax" для опису ряду технологій, які дозволяють браузеру асинхронно обмінюватися даними з сервером. Перші імплементації включали в себе використання <Code>XMLHttpRequest</Code> об'єкта в JavaScript.
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Застосування в різних етапах веб-розвитку:
            </Typography>
            <List>
                <ListItem>
                    <strong>Початковий етап (1999-2005):</strong> Ajax знаходив своє застосування в інтерактивних елементах веб-сайтів, але техніка була відносно складною та неодноразово вимагала великої кількості коду.
                </ListItem>
                <ListItem>
                    <strong>Розвиток і бібліотеки (2005-2010):</strong> З'явлення бібліотек, таких як jQuery та Prototype, значно спростило використання Ajax, роблячи його більш доступним розробникам.
                </ListItem>
                <ListItem>
                    <strong>Подальший розвиток (після 2010):</strong> З'явлення сучасних фреймворків, таких як React, Angular та Vue.js, робить використання Ajax швидшим, зручнішим та більш інтегрованим у загальний процес веб-розробки.
                </ListItem>
            </List>

            <SubHeader>1. Використання об'єкта XMLHttpRequest для взаємодії з сервером</SubHeader>
            <Paragraph>
                Об'єкт <Code>XMLHttpRequest</Code> дозволяє асинхронно взаємодіяти з сервером. Основні етапи використання <Code>XMLHttpRequest</Code> включають створення об'єкта, визначення типу запиту (GET, POST і т.д.), вказання адреси сервера та обробку відповіді.
            </Paragraph>
            <Paragraph>
                Приведемо приклад використання <Code>XMLHttpRequest</Code> для відправки GET-запиту:
            </Paragraph>
            <CodeBlock>
                {`// Створення об'єкта XMLHttpRequest
const xhr = new XMLHttpRequest();

// Налаштування параметрів запиту
xhr.open('GET', 'https://api.example.com/data', true);

// Визначення функції зворотного виклику для обробки відповіді
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};

// Відправлення запиту
xhr.send();`}
            </CodeBlock>

            <SubHeader>2. Синтаксис та основні методи XMLHttpRequest</SubHeader>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                2.1 Створення об'єкта XMLHttpRequest
            </Typography>
            <Paragraph>
                Для створення об'єкта <Code>XMLHttpRequest</Code>, використовується конструктор:
            </Paragraph>
            <CodeBlock>
                {`const xhr = new XMLHttpRequest();`}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                2.2 Відкриття запиту
            </Typography>
            <Paragraph>
                Метод <Code>open()</Code> використовується для налаштування параметрів запиту, таких як тип (GET, POST і т.д.) та адреса сервера:
            </Paragraph>
            <CodeBlock>
                {`xhr.open('GET', 'https://api.example.com/data', true);`}
            </CodeBlock>
            <Paragraph>
                Останній параметр <Code>true</Code> вказує, що запит є асинхронним.
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                2.3 Визначення функції зворотного виклику
            </Typography>
            <Paragraph>
                Метод <Code>onreadystatechange</Code> встановлює функцію зворотного виклику, яка буде викликана при зміні стану запиту:
            </Paragraph>
            <CodeBlock>
                {`xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText);
    }
};`}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                2.4 Відправлення запиту
            </Typography>
            <Paragraph>
                Метод <Code>send()</Code> використовується для відправлення запиту на сервер:
            </Paragraph>
            <CodeBlock>
                {`xhr.send();`}
            </CodeBlock>
            <Paragraph>
                Це починає процес відправки запиту до сервера. Коли відповідь готова, викликається функція зворотного виклику.
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                2.5 Обробка відповіді
            </Typography>
            <Paragraph>
                Функція зворотного виклику перевіряє стан та статус запиту. Якщо стан - 4 (завершено), а статус - 200 (OK), то виводиться вміст відповіді:
            </Paragraph>
            <CodeBlock>
                {`if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
}`}
            </CodeBlock>

            <SubHeader>3. Що таке fetch та як з ним працювати</SubHeader>
            <Paragraph>
                <strong>Fetch API</strong> - це інтерфейс, який надає вам можливість контролювати різні параметри запиту, такі як метод, заголовки, тіло, режим, перенаправлення тощо. Він надає зручний і простий спосіб взаємодії з сервером та отримання або відправлення даних. Основні особливості <Code>fetch</Code> включають проміс-підтримку та вбудовані методи для обробки HTTP-відповідей. Приклад відправки запиту:
            </Paragraph>
            <CodeBlock>
                {`fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Помилка:', error));`}
            </CodeBlock>
            <Paragraph>
                З <Code>fetch</Code> можна працювати із звичайними HTTP-запитами, а також використовувати його в контексті сучасних фреймворків та бібліотек для взаємодії з сервером у веб-розробці.
            </Paragraph>
        </Box>
    );
};

export default AjaxAndFetchPage;