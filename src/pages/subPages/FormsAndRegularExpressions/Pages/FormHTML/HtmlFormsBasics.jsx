import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const HtmlFormsBasics = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Основи форм в HTML та їх базові атрибути</BookHeader>

            <Paragraph>
                Веб-форми - це незамінний інструмент для збору інформації в інтернеті. Вони дозволяють користувачам вводити дані та взаємодіяти з веб-сайтами. HTML надає ряд елементів для створення форм, які складаються з різних полів для введення даних, кнопок і інших елементів.
            </Paragraph>

            <SubHeader>Основні функції веб-форм</SubHeader>
            <Paragraph>
                Основні функції веб-форм включають в себе:
            </Paragraph>

            <List sx={{ mb: 2 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Збір інформації:</Typography> Веб-форми дозволяють користувачам вводити дані, такі як ім'я, пароль, адресу електронної пошти тощо. Ці дані потім можна використовувати для подальшої обробки, наприклад, для створення облікових записів, оформлення замовлень та інших завдань.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Взаємодія з користувачем:</Typography> Форми дозволяють взаємодіяти з відвідувачами сайту. Кнопки, радіокнопки, перемикачі та інші елементи вводу допомагають користувачам обирати опції, здійснювати пошук і виконувати інші дії.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Збір інформації для аналітики:</Typography> Веб-форми дозволяють власникам веб-сайтів збирати і аналізувати дані про користувачів. Наприклад, форми для підписки на розсилку можуть надавати цінну інформацію про інтереси аудиторії.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Здійснення оплати та пожертв:</Typography> Форми можуть використовуватися для здійснення оплати за товари та послуги або для прийому пожертв. Це важлива функція для бізнесу та некомерційних організацій.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Авторизація і аутентифікація:</Typography> Веб-форми часто використовуються для авторизації користувачів. Це дозволяє контролювати доступ до обмежених ресурсів і забезпечувати безпеку даних.
                </ListItem>
            </List>

            <SubHeader>Приклади</SubHeader>
            <CodeBlock>
                {`
<form action="submit.php" method="post">
    <label for="name">Ім'я:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Електронна пошта:</label>
    <input type="email" id="email" name="email" required>

    <label for="password">Пароль:</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Зареєструватися</button>
</form>
                `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми маємо просту форму реєстрації. Користувачі можуть ввести своє ім'я, адресу електронної пошти та пароль. Кнопка "Зареєструватися" відправляє ці дані на сервер для подальшої обробки.
            </Paragraph>
        </Box>
    );
};

export default HtmlFormsBasics;