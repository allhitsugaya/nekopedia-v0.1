import React from 'react';
import {Box, Container, List, ListItem} from "@mui/material";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";

const FormEvents = () => {
    return (
        <Container className="page-container">
            <BookHeader>Події елементів форми</BookHeader>
            <Paragraph>
                JavaScript дозволяє створювати інтерактивні форми, які реагують на події, такі як натискання кнопки, введення тексту або відправка даних. Один з найпоширеніших способів використання подій на елементах форми - це валідація даних, які користувач вводить. Наприклад, ми можемо перевіряти, чи правильно користувач ввів свою адресу електронної пошти.
            </Paragraph>

            <SubHeader>Типи подій форми</SubHeader>

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
                        fontWeight: 800
                    }
                }}>
                <ListItem>
                    <Code>click:</Code> Спрацьовує при натисканні на елемент.
                </ListItem>
                <ListItem>
                    <Code>submit:</Code> Спрацьовує при відправці форми. Це дозволяє валідувати введені дані перед їх відправкою.
                </ListItem>
                <ListItem>
                    <Code>input:</Code> Спрацьовує при введенні даних в текстове поле або інший елемент.
                </ListItem>
                <ListItem>
                    <Code>change:</Code> Спрацьовує при зміні значення елемента, такого як <Code>&lt;select&gt;</Code>.
                </ListItem>
                <ListItem>
                    <Code>focus:</Code> Спрацьовує при фокусуванні на елементі, наприклад, коли користувач клікає на текстовому полі.
                </ListItem>
                </List>
            </Box>

            <SubHeader>Приклад №1</SubHeader>
            <Paragraph>
                Для навішування обробників подій на елементи форми ми використовуємо <Code>addEventListener</Code>. Ось приклад додавання обробника події до значення яке вводить користувач:
            </Paragraph>
            <CodeBlock>
                    {`
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="#" id="my-form">
    <label for="email">
        <span>email: </span>
        <input type="text" name="email" id="email">
    </label>
    <span id="message"></span>
</form>
<script>
    const emailInput = document.getElementById('email');
    const messageSpan = document.getElementById('message');

    emailInput.addEventListener('input', function (event) {
        const email = event.target.value;
        if (email.includes('@')) {
            messageSpan.innerText = ''
        } else {
            messageSpan.innerText = 'Email повинен мати символ "@"'
        }
    });
</script>
</body>
</html>
                    `}
            </CodeBlock>
            <Paragraph>
                Отже, цей код дозволяє валідувати введену адресу електронної пошти на наявність символу '@' і надавати відповідне повідомлення користувачу. Давайте подивимося детально на кроки:
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
                        fontSize: 14
                    }
                }}>
                <ListItem>
                    HTML-форма містить одне текстове поле для введення адреси електронної пошти (email) і мітку до нього.
                </ListItem>
                <ListItem>
                    У веб-сторінці є також <Code>&lt;span&gt;</Code> з ідентифікатором <Code>message</Code>, який поки що є порожнім.
                </ListItem>
                <ListItem>
                    Вставлений JavaScript код визначає змінні <Code>emailInput</Code> та <Code>messageSpan</Code>, які посилаються на текстове поле та <Code>&lt;span&gt;</Code> відповідно.
                </ListItem>
                <ListItem>
                    Відбувається реєстрація обробника події <Code>input</Code> для текстового поля з ідентифікатором <Code>email</Code>. Це означає, що коли користувач вводить текст в поле, буде викликана функція-обробник, що визначена всередині слухача.
                </ListItem>
                <ListItem>
                    В обробнику події отримується значення введеного тексту (email) за допомогою <Code>event.target.value</Code>.
                </ListItem>
                <ListItem>
                    Перевіряється, чи містить введений текст символ '@'. Якщо так, то <Code>&lt;span id="message"&gt;</Code> очищається, і повідомлення про помилку (якщо воно вже було відображене) прибирається.
                </ListItem>
                <ListItem>
                    Якщо в тексті немає символу '@', то в <Code>&lt;span&gt;</Code> із ідентифікатором <Code>message</Code> встановлюється текст "Email повинен мати символ '@'".
                </ListItem>
                </List>
            </Box>

            <SubHeader>Приклад №2</SubHeader>
            <Paragraph>
                Цей код демонструє, як додавати обробники подій до текстового поля та форми для відслідковування подій вводу та відправки форми, а також виведення повідомлень в консоль для відстеження цих подій.
            </Paragraph>
            <CodeBlock>
                    {`
// Отримуємо посилання на текстове поле за ідентифікатором
const myInput = document.getElementById('myInput');

// Додаємо обробник події для введення даних
myInput.addEventListener('input', function() {
    console.log('Користувач ввів дані:', myInput.value);
});

// Отримуємо посилання на форму за ідентифікатором
const myForm = document.getElementById('myForm');

// Додаємо обробник події для відправки форми
myForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну відправку форми
    console.log('Дані відправлено:', myInput.value);
});
                    `}
            </CodeBlock>
            <Paragraph>
                Цей код виконує наступні дії:
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
                        fontSize: 14
                    }
                }}>
                <ListItem>
                    Пошук елемента за ідентифікатором "myInput" у структурі DOM (Document Object Model) і отримання посилання на цей елемент.
                </ListItem>
                <ListItem>
                    Додавання обробника події для текстового поля "myInput" для події <Code>input</Code>. Обробник буде виконуватися, коли користувач буде вводити дані у текстове поле. В обробнику відбувається виведення в консоль повідомлення "Користувач ввів дані:" разом зі значенням, яке ввів користувач у поле <Code>myInput</Code>.
                </ListItem>
                <ListItem>
                    Пошук форми за ідентифікатором "myForm" у структурі DOM і отримання посилання на цей елемент.
                </ListItem>
                <ListItem>
                    Додавання обробника події для форми "myForm" для події <Code>submit</Code>. Обробник буде виконуватися, коли користувач намагається відправити форму, наприклад, натискаючи кнопку "Submit". В обробнику події виконується така дія:
                    <Box sx={{ml:2}}>
                        <List sx={{
                            pl: 2,
                            listStyleType: 'circle',
                            '& .MuiListItem-root': {
                                display: 'list-item',
                                py: 0.5,
                                pl: 1,
                                ml: 2,
                                fontSize: 14
                            }
                        }}>
                        <ListItem>
                            <Code>event.preventDefault();</Code> зупиняє стандартну відправку форми, тобто перехоплює стандартну поведінку браузера при натисканні на кнопку "Submit", щоб заборонити перезавантаження сторінки або відправку даних на сервер.
                        </ListItem>
                        <ListItem>
                            <Code>console.log('Дані відправлено:', myInput.value);</Code> виводить в консоль повідомлення "Дані відправлено:", разом із значенням, яке користувач ввів у текстове поле.
                        </ListItem>
                        </List>
                    </Box>
                </ListItem>
                </List>
            </Box>
        </Container>
    );
};

export default FormEvents;