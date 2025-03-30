import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";

const FormAttributes = () => {
    return (
        <Container className="page-container">
            <BookHeader>Особливості атрибутів action і method форм в HTML</BookHeader>
            <Paragraph>
                У HTML-формах існують різні атрибути, які визначають, як саме дані форми будуть оброблятися та надсилатися на сервер. Два з найважливіших атрибутів - <Code>action</Code> і <Code>method</Code>.
            </Paragraph>

            <SubHeader>action - куди відправити дані</SubHeader>
            <Paragraph>
                Атрибут <Code>action</Code> визначає URL-адресу, на яку будуть відправлені дані після натискання на кнопку "Відправити". Цей URL може бути абсолютним або відносним відносно поточної сторінки. Зазвичай вказується адреса серверного скрипту, який обробляє дані форми.
            </Paragraph>
            <CodeBlock>
                    {`
<form action="https://example.com/submit.php" method="post">
    <!-- Елементи форми -->
</form>
                    `}
            </CodeBlock>

            <SubHeader>method - Як відправити дані</SubHeader>
            <Paragraph>
                Атрибут <Code>method</Code> вказує метод, який буде використовуватися для відправки даних на сервер. Два основні методи - <Code>GET</Code> і <Code>POST</Code>.
            </Paragraph>
            <Chapter>GET</Chapter>
            <Paragraph>
                <Code>GET</Code> - використовується для отримання даних з сервера. Дані передаються у URL-запиті. Це підходить для запиту даних або пошуку, але не рекомендується для надсилання чутливої інформації, так як дані видимі у URL.
            </Paragraph>
            <CodeBlock>
                    {`
<form action="search.php" method="get">
    <!-- Елементи форми -->
    <button type="submit">Пошук</button>
</form>
                    `}
            </CodeBlock>

            <Chapter>POST</Chapter>
            <Paragraph>
                <Code>POST</Code> - використовується для надсилання даних на сервер у вигляді тіла запиту. Це рекомендований метод для надсилання чутливої інформації, так як дані не відображаються у URL.
            </Paragraph>
            <CodeBlock>
                    {`
<form action="login.php" method="post">
    <!-- Елементи форми -->
    <button type="submit">Увійти</button>
</form>
                    `}
            </CodeBlock>


            <SubHeader>Приклад</SubHeader>
            <CodeBlock>
                    {`
<form action="submit.php" method="post">
    <label for="name">Ім'я:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Електронна пошта:</label>
    <input type="email" id="email" name="email" required>

    <button type="submit">Відправити</button>
</form>
                    `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі форма має атрибут <Code>action</Code>, який вказує, куди надсилати дані, і атрибут <Code>method</Code>, який вказує метод надсилання даних (в даному випадку - <Code>POST</Code>). Коли користувач натискає кнопку "Відправити", дані форми будуть надіслані на сервер за вказаною адресою з використанням методу <Code>POST</Code>.
            </Paragraph>
            <Paragraph>
                Правильне використання атрибутів <Code>action</Code> і <Code>method</Code> допомагає забезпечити правильну обробку та надсилання даних форми на сервер.
            </Paragraph>
        </Container>
    );
};

export default FormAttributes;