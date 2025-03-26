import React from 'react';
import { Box } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import Code from '../../../../../features/Code/Code.jsx';

const SecondDomManipulationPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Додавання, видалення та модифікація DOM-елементів</BookHeader>

            <Paragraph>
                Додавання, видалення та модифікація DOM-елементів є критичними аспектами роботи з Document Object Model (DOM) веб-сторінки. DOM дає можливість JavaScript взаємодіяти з веб-сторінкою, змінювати її вміст і структуру, щоб створювати динамічні та інтерактивні веб-додатки.
            </Paragraph>

            <SubHeader>Додавання елементів до DOM</SubHeader>
            <Paragraph>
                Один із основних способів взаємодії з DOM - це додавання нових елементів до сторінки. Ви можете створити новий елемент за допомогою <Code>document.createElement()</Code>, встановити його атрибути і вміст, і вставити в DOM за допомогою методів, таких як <Code>appendChild()</Code> або <Code>insertBefore()</Code>.
            </Paragraph>

            <CodeBlock>
                {`
// Створення нового елемента div
const newDiv = document.createElement('div');
newDiv.textContent = 'Новий елемент';

// Вставка в DOM
const parentElement = document.getElementById('container');
parentElement.appendChild(newDiv);
                `}
            </CodeBlock>

            <SubHeader>Видалення елементів з DOM</SubHeader>
            <Paragraph>
                Для видалення елемента з DOM використовується метод <Code>removeChild()</Code>. Вам потрібно вказати батьківський елемент і елемент, який ви хочете видалити. Наприклад:
            </Paragraph>

            <CodeBlock>
                {`
const elementToRemove = document.getElementById('element-to-remove');
const parentElement = elementToRemove.parentNode;
parentElement.removeChild(elementToRemove);
                `}
            </CodeBlock>

            <SubHeader>Зміна властивостей та атрибутів</SubHeader>
            <Paragraph>
                Властивості та атрибути DOM-елементів можна легко змінювати за допомогою JavaScript. Наприклад, ви можете змінювати текстовий контент елемента, міняти стилі, встановлювати атрибути тощо.
            </Paragraph>

            <CodeBlock>
                {`
const elementToModify = document.getElementById('element-to-modify');
elementToModify.textContent = 'Новий текст';
elementToModify.style.color = 'red';
elementToModify.setAttribute('data-custom', 'значення');
                `}
            </CodeBlock>

            <SubHeader>Модифікація класів</SubHeader>
            <Paragraph>
                Ви також можете додавати та видаляти класи у DOM-елементів, щоб змінювати їх стилі. Методи <Code>classList.add()</Code>, <Code>classList.remove()</Code> та <Code>classList.toggle()</Code> допомагають вам керувати класами.
            </Paragraph>

            <CodeBlock>
                {`
const element = document.getElementById('my-element');
element.classList.add('highlighted');
element.classList.remove('hidden');
                `}
            </CodeBlock>
        </Box>
    );
};

export default SecondDomManipulationPage;