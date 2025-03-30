import React from 'react';
import {Container} from "@mui/material";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Conclusion from "../../../../../features/Conclusion/Conclusion.jsx";

const DomManipulationPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Зміна властивостей та атрибутів</BookHeader>
            <Paragraph>
                Один з ключових аспектів роботи з DOM (Document Object Model) - це зміна властивостей та атрибутів DOM-елементів, які дозволяють нам динамічно змінювати вміст і стиль сторінки.
            </Paragraph>

            <SubHeader>Зміна тексту елемента</SubHeader>
            <Paragraph>
                Для зміни тексту елемента використовуємо властивість <Code>textContent</Code>. Наприклад, давайте змінимо текст кнопки:
            </Paragraph>
            <CodeBlock>
          {`
const button = document.getElementById("myButton");
button.textContent = "Новий текст кнопки";
          `}
            </CodeBlock>

            <SubHeader>Зміна стилів</SubHeader>
            <Paragraph>
                Зміна стилів елемента виконується з використанням властивості <Code>style</Code>. Для прикладу, змінимо колір та розмір шрифту тексту:
            </Paragraph>
            <CodeBlock>
          {`
const textElement = document.getElementById("myText");
textElement.style.color = "blue";
textElement.style.fontSize = "18px";
          `}
            </CodeBlock>

            <SubHeader>Зміна атрибутів</SubHeader>
            <Paragraph>
                Для зміни атрибутів, таких як <Code>src</Code> для зображень або <Code>href</Code> для посилань, використовуємо метод <Code>setAttribute</Code>. Розглянемо приклад зміни атрибута <Code>src</Code> для зображення:
            </Paragraph>
            <CodeBlock>
          {`
const image = document.getElementById("myImage");
image.setAttribute("src", "новий_шлях_до_зображення.jpg");
          `}
      </CodeBlock>

                <Conclusion>Заключення</Conclusion>
                <Paragraph>
                    Зміна властивостей та атрибутів в DOM дозволяє змінювати вміст та вигляд сторінки на льоту, що є
                    корисним при створенні динамічних веб-сторінок.
                </Paragraph>
        </Container>
    );
};

export default DomManipulationPage;