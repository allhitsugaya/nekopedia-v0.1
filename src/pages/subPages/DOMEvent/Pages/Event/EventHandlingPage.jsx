import React from 'react';
import { Box } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import Code from '../../../../../features/Code/Code.jsx';

const EventHandlingPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Реєстрація та видалення обробників Подій</BookHeader>

            <Paragraph>
                Робота з подіями в Document Object Model (DOM) є дуже важливою частиною розробки веб-додатків, оскільки події дозволяють створювати інтерактивні та реактивні додатки. В цій частині ми розглянемо наступні аспекти роботи з подіями:
            </Paragraph>

            <SubHeader>Реєстрація Обробників Подій</SubHeader>
            <Paragraph>
                Для реєстрації обробників подій використовується метод <Code>addEventListener()</Code>. Цей метод призначений для прослуховування різних типів подій, таких як <Code>"click"</Code>, <Code>"keydown"</Code>, <Code>"submit"</Code> та інші. Наприклад, для реєстрації обробника події кліка на кнопці ми можемо використати такий код:
            </Paragraph>

            <CodeBlock>
                {`
const myButton = document.getElementById('my-button');
myButton.addEventListener('click', function(event) {
    // Ваш код обробки події тут
});
                `}
            </CodeBlock>

            <SubHeader>Видалення Обробників Подій</SubHeader>
            <Paragraph>
                Інколи може бути необхідно видалити обробник події, наприклад, для очищення ресурсів або після того, як він більше не потрібний. Для цього використовується метод <Code>removeEventListener()</Code>. Ось приклад видалення обробника події:
            </Paragraph>

            <CodeBlock>
                {`
const myButton = document.getElementById('my-button');
function handleClick(event) {
    // Ваш код обробки події тут
}
myButton.addEventListener('click', handleClick);

// Для видалення обробника:
myButton.removeEventListener('click', handleClick);
                `}
            </CodeBlock>

            <Paragraph>
                Проте дуже важливо мати одне посилання на функцію. Бо такий код обробник не видалить:
            </Paragraph>

            <CodeBlock>
                {`
const myButton = document.getElementById('my-button');

myButton.addEventListener('click', function handleClick(event) {
    console.log('click')
});

// Для видалення обробника:
myButton.removeEventListener('click', function handleClick(event) {
    console.log('click')
});
                `}
            </CodeBlock>
        </Box>
    );
};

export default EventHandlingPage;