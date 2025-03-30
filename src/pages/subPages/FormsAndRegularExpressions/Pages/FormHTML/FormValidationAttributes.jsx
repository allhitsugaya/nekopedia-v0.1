import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import Conclusion from "../../../../../features/Conclusion/Conclusion.jsx";

const FormValidationAttributes = () => {
    return (
        <Container className="page-container">
            <BookHeader>Використання атрибутів required, pattern та інших для валідації введених даних в формах HTML</BookHeader>
            <Paragraph>
                У формах HTML існує кілька атрибутів, які дозволяють валідувати дані, які вводять користувачі. Ці атрибути полегшують роботу і покращують користувацький досвід, дозволяючи перевіряти введені дані ще до їх відправлення на сервер. Ось кілька атрибутів та приклади їх використання:
            </Paragraph>

            <SubHeader>1. required</SubHeader>
            <Paragraph>
                Цей атрибут вказує, що поле обов'язкове для заповнення. Якщо воно залишене порожнім, форма не буде відправлена.
            </Paragraph>
            <CodeBlock>
                    {`
<input type="text" required>
                    `}
            </CodeBlock>

            <SubHeader>2. pattern</SubHeader>
            <Paragraph>
                Цей атрибут визначає шаблон, якому повинні відповідати введені дані. Наприклад, для перевірки правильності введення електронної пошти:
            </Paragraph>
            <CodeBlock>
                    {`
<input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}" required>
                    `}
            </CodeBlock>


            <SubHeader>3. min та max</SubHeader>
            <Paragraph>
                Встановлення мінімального і максимального допустимого значення для числових полів.
            </Paragraph>
            <CodeBlock>
                    {`
<input type="number" min="0" max="100">
                    `}
            </CodeBlock>


            <SubHeader>4. minlength та maxlength</SubHeader>
            <Paragraph>
                Встановлення мінімальної та максимальної кількості символів для текстових полів.
            </Paragraph>
            <CodeBlock>
                    {`
<input type="text" minlength="3" maxlength="20">
                    `}
            </CodeBlock>

            <SubHeader>5. pattern з виразами</SubHeader>
            <Paragraph>
                Ви можете використовувати регулярні вирази для визначення прийнятних значень.
            </Paragraph>
            <CodeBlock>
                    {`
<input type="text" pattern="[0-9]{5}" title="П'ять цифр">
                    `}
            </CodeBlock>

                <Conclusion>Висновок</Conclusion>
                <Paragraph>
                    Ці атрибути спільно допомагають забезпечити, що користувачі вводять валідні дані. У разі
                    невідповідності, браузер відобразить повідомлення про помилку і не дозволить надсилати форму. Це
                    покращує користувацький досвід і допомагає уникнути некоректних або небезпечних даних, що
                    потрапляють на сервер.
                </Paragraph>

        </Container>
    );
};

export default FormValidationAttributes;