import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";

const DOMElementsManipulation = () => {
    return (
        <Container>
            <BookHeader>Робота з DOM-елементами</BookHeader>
            <Paragraph>
                Тут ви дізнаєтеся, як ефективно вибирати DOM-елементи за їх ідентифікаторами, класами, тегами або за допомогою селекторів. Ми також розглянемо, що таке HTMLCollection та як ефективно працювати з ним.
            </Paragraph>

            <Paragraph>
                Цей розділ допоможе вам зрозуміти, як змінювати властивості та атрибути DOM-елементів, щоб створювати динамічні веб-сторінки. Ви дізнаєтеся, як додавати, видаляти та модифікувати DOM-елементи за допомогою JavaScript.
            </Paragraph>

            <SubHeader>Вибір DOM-елементів</SubHeader>
            <Paragraph>
                Робота з DOM-елементами є важливою частиною розвитку веб-сторінок, оскільки це дозволяє нам додавати функціональність та змінювати зовнішній вигляд сторінок. Розглянемо основні методи вибору DOM-елементів.
            </Paragraph>

            <Chapter>Вибір за ідентифікатором</Chapter>
            <Paragraph>
                Щоб вибрати елемент за його ідентифікатором, використовуємо метод <Code>getElementById</Code>:
            </Paragraph>
            <CodeBlock>
          {`
const element = document.getElementById("myElementId");
          `}
      </CodeBlock>

            <Chapter>Вибір за класом</Chapter>
            <Paragraph>
                Для вибору елементів за класом використовуємо метод <Code>getElementsByClassName</Code>:
            </Paragraph>
            <CodeBlock>
          {`
const elements = document.getElementsByClassName("myClassName");
          `}
      </CodeBlock>

            <Chapter>Вибір за тегом</Chapter>
            <Paragraph>
                Для вибору всіх елементів певного тегу використовуємо метод <Code>getElementsByTagName</Code>:
            </Paragraph>
            <CodeBlock>
          {`
const elements = document.getElementsByTagName("div");
          `}
      </CodeBlock>

            <Chapter>Вибір за селектором</Chapter>
            <Paragraph>
                Для вибору елементів за CSS-селекторами в JavaScript можна використовувати <Code>querySelector</Code> та <Code>querySelectorAll</Code>. <Code>querySelector</Code> повертає перший елемент, що відповідає заданому CSS-селектору, тоді як <Code>querySelectorAll</Code> повертає NodeList, який містить усі елементи, що відповідають цьому селектору.
            </Paragraph>
            <CodeBlock>
          {`
const element = document.querySelector(".myClass");
const elementById = document.querySelector("#myElementId");
          `}
      </CodeBlock>

          <Paragraph>Або <Code>querySelectorAll</Code>, щоб отримати всі збіги:</Paragraph>
            <CodeBlock>
          {`
const elements = document.querySelectorAll(".myClass");
          `}
      </CodeBlock>

            <SubHeader>Робота з HTMLCollection</SubHeader>
            <Paragraph>
                <Code>HTMLCollection</Code> - це тип об'єкта в JavaScript, який представляє собою колекцію елементів, що належать до одного типу на веб-сторінці. В основному, <Code>HTMLCollection</Code> використовується для представлення колекції дочірніх елементів певного батьківського елемента. Важливо відзначити, що <Code>HTMLCollection</Code> є живим об'єктом, тобто він автоматично оновлюється, коли сторінка змінюється.
            </Paragraph>

            <CodeBlock>
          {`
const paragraphs = document.getElementsByTagName("p");
const paragraphCount = paragraphs.length;
const firstParagraph = paragraphs[0];
firstParagraph.textContent = "Це новий текст для першого абзацу";
firstParagraph.classList.add("highlight");
          `}
      </CodeBlock>
        </Container>
    );
}

export default DOMElementsManipulation;
