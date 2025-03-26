import React from 'react';
import { Box, Typography } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const FormDataHandling = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Робота з даними формами</BookHeader>

            <Paragraph>
                Один з найважливіших аспектів веб-розробки - це взаємодія користувача з веб-сторінкою через форми. JavaScript дозволяє не лише збирати дані, які користувач вводить у форми, але і виконувати обробку та валідацію цих даних. У цьому розділі ми розглянемо, як отримати дані з полів форми та обробити події, пов'язані з формою.
            </Paragraph>

            <SubHeader>Використання властивостей value, checked і selected</SubHeader>

            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                1. Зчитування текстових полів
            </Typography>
            <Paragraph>
                Для отримання тексту, який користувач ввів у текстове поле, використовується властивість <Code>value</Code>. Наприклад:
            </Paragraph>
            <CodeBlock>
                {`
const inputText = document.getElementById('text-input');
const textValue = inputText.value;
                `}
            </CodeBlock>

            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                2. Зчитування прапорцевих (чекбокс) полів
            </Typography>
            <Paragraph>
                Для чекбоксів та радіокнопок, властивість <Code>checked</Code> вказує, чи вони вибрані:
            </Paragraph>
            <CodeBlock>
                {`
const checkbox = document.getElementById('checkbox-input');
const isChecked = checkbox.checked;
                `}
            </CodeBlock>

            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                3. Зчитування значення вибраного варіанту (список)
            </Typography>
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

            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                1. Подія submit
            </Typography>
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

            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                2. Подія reset
            </Typography>
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

            <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                3. Подія change
            </Typography>
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
        </Box>
    );
};

export default FormDataHandling;