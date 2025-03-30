import React from 'react';
import {Box, Container, List, ListItem} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";

const DomContentLoadedAndWindowOnloadPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>DOMContentLoaded та window.onload</BookHeader>
            <Paragraph>
                У цьому розділі ми дослідимо два важливих методи подій - <Code>DOMContentLoaded</Code> та <Code>window.onload</Code> в контексті JavaScript. Ці методи дозволяють вам керувати тим, як ваш код взаємодіє з DOM (Document Object Model), коли сторінка завантажується.
            </Paragraph>

            <SubHeader>DOMContentLoaded: Подія для Завантаження DOM</SubHeader>
            <Paragraph>
                <Code>DOMContentLoaded</Code> - це подія, яка спрацьовує, коли весь DOM документа був побудований і готовий для взаємодії з JavaScript. Це стає можливим після завершення завантаження HTML-структури та побудови DOM-дерева, але до завершення завантаження зовнішніх ресурсів, таких як стилі, зображення і скрипти.
            </Paragraph>
            <Paragraph>
                Використання події <Code>DOMContentLoaded</Code> допомагає уникнути ситуацій, коли ваш JavaScript код намагається взаємодіяти з DOM, який ще не був повністю побудований. Ось приклад використання цієї події:
            </Paragraph>
            <CodeBlock>
          {`
document.addEventListener('DOMContentLoaded', function() {
  // Код, який виконується після завантаження DOM
  const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    alert('Клікнули на кнопці!');
  });
});
          `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми слухаємо подію <Code>DOMContentLoaded</Code> на об'єкті <Code>document</Code>, і коли ця подія спрацьовує, ми додаємо обробник події для кнопки з <Code>id</Code> <Code>myButton</Code>. Це гарантує, що код виконається тільки після повного завантаження DOM.
            </Paragraph>

            <SubHeader>window.onload: Загальна Подія Завантаження Сторінки</SubHeader>
            <Paragraph>
                <Code>window.onload</Code> - це подія, яка спрацьовує, коли весь контент сторінки, включаючи DOM, стилі, зображення та інші ресурси, був повністю завантажений. Ця подія гарантує, що весь контент доступний для взаємодії, але вона викликається тільки один раз, коли сторінка завантажена.
            </Paragraph>
            <CodeBlock>
          {`
window.onload = function() {
  // Код, який виконується після завантаження сторінки
  const image = document.getElementById('myImage');
  image.src = 'new-image.jpg';
};
          `}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі ми використовуємо <Code>window.onload</Code> для зміни джерела зображення після завантаження сторінки. Це гарантує, що зображення буде змінено тільки після того, як всі ресурси сторінки завантажені.
            </Paragraph>

            <SubHeader>Порівняння DOMContentLoaded та window.onload</SubHeader>
            <Paragraph>
                Обидві події - <Code>DOMContentLoaded</Code> та <Code>window.onload</Code> - використовуються для керування тим, коли ваш JavaScript код виконується після завантаження сторінки. Однак вони мають певні відмінності:
            </Paragraph>

            <Box sx={{ml:2}}>
                <List sx={{
                    pl: 2,
                    listStyleType: 'disc',
                    '& .MuiListItem-root': {
                        display: 'list-item',
                        py: 0.5,
                        pl: 1,
                        ml: 2,
                        fontSize: 14
                    }
                }}>
                <ListItem>
                    <Code>DOMContentLoaded відбувається раніше:</Code> <Code>DOMContentLoaded</Code> спрацьовує, коли DOM готовий, навіть якщо деякі зовнішні ресурси, такі як зображення, ще не завантажені. Це дозволяє починати взаємодію з DOM раніше, ніж завантажаться всі зовнішні ресурси.
                </ListItem>
                <ListItem>
                    <Code>window.onload відбувається пізніше:</Code> <Code>window.onload</Code> чекає на завершення завантаження всіх ресурсів, включаючи зображення, стилі та інші. Тобто це остання подія, яка спрацьовує при завантаженні сторінки.
                </ListItem>
                <ListItem>
                    <Code>window.onload не може бути декілька разів:</Code> Ви можете призначити тільки один обробник для <Code>window.onload</Code>, і він виконається лише раз при завантаженні сторінки. У випадку <Code>DOMContentLoaded</Code>, ви можете додавати багато обробників, які будуть виконані після завершення побудови DOM.
                </ListItem>
                <ListItem>
                    <Code>Використання за потреби:</Code> Використовуйте <Code>DOMContentLoaded</Code>, якщо вам потрібно реагувати на готовність DOM, а <Code>window.onload</Code>, якщо потрібно чекати на завершення завантаження всіх ресурсів, які впливають на розмір сторінки, такі як зображення.
                </ListItem>
                </List>
            </Box>
        </Container>
    );
};

export default DomContentLoadedAndWindowOnloadPage;