import React from 'react';
import {Container} from "@mui/material";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../features/Chapter/Chapter.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";

const BasicsOfDOM = () => {
    return (
        <Container>
            <BookHeader>Основи DOM</BookHeader>

            <SubHeader>Що таке DOM (Document Object Model)?</SubHeader>
            <Paragraph>
                DOM, або Document Object Model (Модель Об'єктів Документу), - це інтерфейс програмування, який представляє структуру і контент веб-сторінки як деревоподібну колекцію об'єктів. Ця модель дозволяє розробникам легко отримувати доступ до структури та вмісту веб-сторінок, а також змінювати їх з використанням скриптів.
            </Paragraph>

            <SubHeader>Роль DOM у веб-розробці</SubHeader>
            <Paragraph>
                DOM є фундаментальною частиною веб-розробки, оскільки він дозволяє JavaScript взаємодіяти з веб-сторінкою. Він визначає, як браузер представляє HTML-документи, і це робить їх доступними для програмного змінення. Будь-які зміни, які ви бачите на сторінці після завантаження, зазвичай викликані JavaScript, який змінює DOM.
            </Paragraph>

            <SubHeader>Представлення HTML-сторінки в об'єктному дереві</SubHeader>
            <Paragraph>
                HTML-сторінка представлена у вигляді дерева об'єктів DOM, де кожен елемент сторінки, такий як <Code>&lt;body&gt;</Code>, <Code>&lt;p&gt;</Code>, <Code>&lt;a&gt;</Code>, є об'єктом DOM. Ці об'єкти вкладені один в одного в ієрархічному порядку від кореня документа до листя.
            </Paragraph>

            <CodeBlock>
          {`
          <!DOCTYPE html>
          <html>
            <head>
              <title>Приклад DOM</title>
            </head>
            <body>
              <h1>Вітаємо в світі DOM!</h1>
              <p>Це приклад сторінки.</p>
              <a href="#">Посилання</a>
            </body>
          </html>
          `}
      </CodeBlock>

            <SubHeader>Ієрархічна природа DOM та взаємозв'язки</SubHeader>
            <Paragraph>
                DOM має ієрархічну природу, що означає, що об'єкти розташовані в дереві відповідно до їх вкладеності в HTML-сторінці. Наприклад, <Code>&lt;p&gt;</Code> є дочірнім елементом <Code>&lt;body&gt;</Code>. Це розташування вказує на ієрархічні відносини.
            </Paragraph>

            <Chapter>Зміна елементів DOM за допомогою JavaScript</Chapter>
            <Paragraph>
                Ви можете отримати доступ до елементів і їх властивостей, використовуючи JavaScript. Наприклад, ви можете знайти та змінити текст <Code>&lt;h1&gt;</Code> так:
            </Paragraph>

            <CodeBlock>
          {`
          const title = document.querySelector("h1");
          title.textContent = "Новий заголовок!";
          `}
      </CodeBlock>

            <Paragraph>
                DOM також підтримує події, такі як кліки та наведення, які дозволяють реагувати на взаємодію користувача зі сторінкою.
            </Paragraph>

            <Paragraph>
                Це базові концепції, які стосуються DOM у веб-розробці та допомагають розуміти, як ви можете взаємодіяти з веб-сторінкою за допомогою JavaScript.
            </Paragraph>
        </Container>
    );
}

export default BasicsOfDOM;
