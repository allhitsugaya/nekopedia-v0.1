import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";

const FormNameAttribute = () => {
    return (
        <Container className="page-container">
            <BookHeader>Пояснення ролі атрибуту name на полях форми</BookHeader>
            <Paragraph>
                В HTML форми використовуються для збору та відправки даних на сервер. Кожне поле форми повинно бути ідентифіковане, і атрибут <Code>name</Code> відіграє важливу роль у цьому контексті.
            </Paragraph>
            <Paragraph>
                Атрибут <Code>name</Code> вказує ім'я поля форми, яке буде використано як ключ для відправлення даних на сервер. Всі дані, введені користувачем в це поле, будуть відправлені під цим іменем у вигляді параметру.
            </Paragraph>

            <SubHeader>Приклад</SubHeader>
            <CodeBlock>
                    {`
<form action="submit.php" method="post">
    <label for="name">Ім'я:</label>
    <input type="text" id="name" name="user_name" required>

    <label for="email">Електронна пошта:</label>
    <input type="email" id="email" name="user_email" required>

    <button type="submit">Відправити</button>
</form>
                    `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі поля форми мають атрибути <Code>name</Code>. Поле "Ім'я" має <Code>name="user_name"</Code>, а поле "Електронна пошта" - <Code>name="user_email"</Code>. Коли користувач вводить своє ім'я та адресу електронної пошти і надсилає форму, дані будуть відправлені на сервер під відповідними ключами.
            </Paragraph>

            <SubHeader>Обробка на сервері</SubHeader>
            <Paragraph>
                На сервері, призначений для обробки цієї форми, може виглядати так:
            </Paragraph>
            <CodeBlock>
                    {`
$userName = $_POST['user_name'];
$userEmail = $_POST['user_email'];
                    `}
            </CodeBlock>
            <Paragraph>
                Тут <Code>$_POST['user_name']</Code> і <Code>$_POST['user_email']</Code> - це дані, які були введені відповідно в поля "Ім'я" і "Електронна пошта" форми.
            </Paragraph>

            <SubHeader>Роль атрибуту name</SubHeader>
            <Paragraph>
                Роль атрибуту <Code>name</Code> важлива, оскільки вона дозволяє ідентифікувати дані на сервері та прив'язувати їх до конкретних полів форми. Це дозволяє легко обробляти і аналізувати введені користувачем дані.
            </Paragraph>
        </Container>
    );
};

export default FormNameAttribute;