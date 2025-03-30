import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../../features/Code/Code.jsx";

const FormDataHandling = () => {
    return (
        <Container className="page-container">
            <BookHeader>Робота з даними формами</BookHeader>
            <Paragraph>
                Один з найважливіших аспектів веб-розробки - це взаємодія користувача з веб-сторінкою через форми. JavaScript дозволяє не лише збирати дані, які користувач вводить у форми, але і виконувати обробку та валідацію цих даних. У цьому розділі ми розглянемо, як отримати дані з полів форми та обробити події, пов'язані з формою.
            </Paragraph>

            <SubHeader>Використання властивостей value, checked і selected</SubHeader>
            <Chapter>1. Зчитування текстових полів</Chapter>
            <Paragraph>
                Для отримання тексту, який користувач ввів у текстове поле, використовується властивість <Code>value</Code>. Наприклад:
            </Paragraph>
            <CodeBlock>
                    {`
const inputText = document.getElementById('text-input');
const textValue = inputText.value;
                    `}
            </CodeBlock>

            <Chapter>2. Зчитування прапорцевих (чекбокс) полів</Chapter>
            <Paragraph>
                Для чекбоксів та радіокнопок, властивість <Code>checked</Code> вказує, чи вони вибрані:
            </Paragraph>
            <CodeBlock>
                    {`
const checkbox = document.getElementById('checkbox-input');
const isChecked = checkbox.checked;
                    `}
            </CodeBlock>

            <Chapter>3. Зчитування значення вибраного варіанту (список)</Chapter>
            <Paragraph>
                Для вибору зі списку використовується властивість <Code>selected</Code>. Для відповідного елементу <Code>select</Code> вказується <Code>selected</Code>.
            </Paragraph>
            <CodeBlock>
                    {`
const selectElement = document.getElementById('select-input');
const selectedOption = selectElement.options[selectElement.selectedIndex].value;
                    `}
            </CodeBlock>

            <SubHeader>Обробка подій форми</SubHeader>
            <Chapter>1. Подія submit</Chapter>
            <Paragraph>
                Вона спрацьовує при надсиланні форми. Ви можете додати обробник подій для перевірки та обробки даних перед надсиланням.
            </Paragraph>
            <CodeBlock>
                    {`
const form = document.getElementById('my-form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Зупинити автоматичну відправку форми
    // Отримання та обробка даних з форми
});
                    `}
            </CodeBlock>

            <Chapter>2. Подія reset</Chapter>
            <Paragraph>
                Ця подія відбувається, коли користувач натискає кнопку скидання форми (якщо вона є). Ви можете додати обробник подій для виконання певних дій при скиданні форми.
            </Paragraph>
            <CodeBlock>
                    {`
const form = document.getElementById('my-form');
form.addEventListener('reset', function () {
    // Виконання дій при скиданні форми
});
                    `}
            </CodeBlock>

            <Chapter>3. Подія change</Chapter>
            <Paragraph>
                Вона спрацьовує при зміні значення поля форми. Це корисно для негайної валідації даних або показу додаткових полів залежно від вибору.
            </Paragraph>
            <CodeBlock>
                    {`
const inputText = document.getElementById('text-input');
inputText.addEventListener('change', function () {
    // Виконати дії після зміни текстового поля
});
                    `}
            </CodeBlock>
        </Container>
    );
};

export default FormDataHandling;