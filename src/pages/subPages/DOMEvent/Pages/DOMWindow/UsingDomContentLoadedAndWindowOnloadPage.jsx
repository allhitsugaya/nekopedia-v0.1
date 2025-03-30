import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";

const UsingDomContentLoadedAndWindowOnloadPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Використання DOMContentLoaded та window.onload</BookHeader>

            <SubHeader>1. Завантаження Скриптів</SubHeader>
            <Paragraph>
                Використовуйте <Code>DOMContentLoaded</Code>, коли вам потрібно впевнитися, що ваш JavaScript код не спрацює до завершення побудови DOM. Це важливо, наприклад, коли ви взаємодієте з елементами DOM, які повинні бути доступні.
            </Paragraph>
            <CodeBlock>
          {`
document.addEventListener('DOMContentLoaded', function() {
  // Ваш код тут
});
          `}
            </CodeBlock>

            <SubHeader>2. Завантаження Ресурсів</SubHeader>
            <Paragraph>
                Використовуйте <Code>window.onload</Code>, якщо ваш код повинен виконатися тільки після завантаження всіх ресурсів, таких як зображення, стилі і файли скриптів.
            </Paragraph>
            <CodeBlock>
          {`
window.onload = function() {
  // Ваш код тут
};
          `}
            </CodeBlock>

            <SubHeader>3. Оптимізація завантаження сторінки</SubHeader>
            <Paragraph>
                Використовуйте обидві події, коли потрібно оптимізувати завантаження сторінки. Використовуйте <Code>DOMContentLoaded</Code> для початкового взаємодії з DOM та <Code>window.onload</Code> для виконання інших операцій, які чекають на завершення завантаження ресурсів.
            </Paragraph>

            <SubHeader>Висновок</SubHeader>
            <Paragraph>
                <Code>DOMContentLoaded</Code> та <Code>window.onload</Code> - це дві важливі події в JavaScript, які дозволяють вам керувати тим, коли ваш код взаємодіє з DOM сторінки. <Code>DOMContentLoaded</Code> спрацьовує, коли DOM готовий для взаємодії, навіть якщо ще завантажуються зовнішні ресурси, тоді як <Code>window.onload</Code> спрацьовує після завантаження всіх ресурсів сторінки. Використання цих подій допомагає створити ефективний та відзивчивий користувацький інтерфейс та оптимізувати завантаження сторінки.
            </Paragraph>

            <SubHeader>Приклад використання обох подій</SubHeader>
            <Paragraph>
                Ось приклад, де ми використовуємо обидві події для оптимізації завантаження сторінки:
            </Paragraph>
            <CodeBlock>
          {`
document.addEventListener('DOMContentLoaded', function() {
  // Виконати код після завантаження DOM
  const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    alert('Клікнули на кнопці!');
  });
});

window.onload = function() {
  // Виконати код після завантаження всіх ресурсів
  const image = document.getElementById('myImage');
  image.src = 'new-image.jpg';
};
          `}
            </CodeBlock>
            <Paragraph>
                В цьому прикладі код, який відповідає за клік на кнопці, виконується після завантаження DOM завдяки <Code>DOMContentLoaded</Code>, а зміна джерела зображення відбувається тільки після завантаження всіх ресурсів, завдяки <Code>window.onload</Code>.
            </Paragraph>
        </Container>
    );
};

export default UsingDomContentLoadedAndWindowOnloadPage;