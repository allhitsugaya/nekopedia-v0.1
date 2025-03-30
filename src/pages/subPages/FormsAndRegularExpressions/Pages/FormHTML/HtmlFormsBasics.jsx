import React from 'react';
import {Box, Container, List, ListItem} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../../features/Code/Code.jsx";

const HtmlFormsBasics = () => {
    return (
        <Container className="page-container">
            <BookHeader>Основи форм в HTML та їх базові атрибути</BookHeader>
            <Paragraph>
                Веб-форми - це незамінний інструмент для збору інформації в інтернеті. Вони дозволяють користувачам вводити дані та взаємодіяти з веб-сайтами. HTML надає ряд елементів для створення форм, які складаються з різних полів для введення даних, кнопок і інших елементів.
            </Paragraph>

            <SubHeader>Основні функції веб-форм</SubHeader>
            <Paragraph>
                Основні функції веб-форм включають в себе:
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
                    <Code>Збір інформації:</Code> Веб-форми дозволяють користувачам вводити дані, такі як ім'я, пароль, адресу електронної пошти тощо. Ці дані потім можна використовувати для подальшої обробки, наприклад, для створення облікових записів, оформлення замовлень та інших завдань.
                </ListItem>
                <ListItem>
                    <Code>Взаємодія з користувачем:</Code> Форми дозволяють взаємодіяти з відвідувачами сайту. Кнопки, радіокнопки, перемикачі та інші елементи вводу допомагають користувачам обирати опції, здійснювати пошук і виконувати інші дії.
                </ListItem>
                <ListItem>
                    <Code>Збір інформації для аналітики:</Code> Веб-форми дозволяють власникам веб-сайтів збирати і аналізувати дані про користувачів. Наприклад, форми для підписки на розсилку можуть надавати цінну інформацію про інтереси аудиторії.
                </ListItem>
                <ListItem>
                    <Code>Здійснення оплати та пожертв:</Code> Форми можуть використовуватися для здійснення оплати за товари та послуги або для прийому пожертв. Це важлива функція для бізнесу та некомерційних організацій.
                </ListItem>
                <ListItem>
                    <Code>Авторизація і аутентифікація:</Code> Веб-форми часто використовуються для авторизації користувачів. Це дозволяє контролювати доступ до обмежених ресурсів і забезпечувати безпеку даних.
                </ListItem>
                </List>
            </Box>

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
        </Container>
    );
};

export default HtmlFormsBasics;