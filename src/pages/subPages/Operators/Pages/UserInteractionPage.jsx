import React from 'react';
import {Container, Typography} from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";

const UserInteractionPage = () => {
    return (
        <Container>
            <BookHeader variant="h2" component="h2">Взаємодія з користувачем через примітивні функції</BookHeader>
            <Paragraph>
                Взаємодія з користувачем - важлива частина багатьох веб-додатків. JavaScript пропонує кілька примітивних функцій, які допомагають створити діалогове вікно з користувачем: <Code>alert</Code>, <Code>confirm</Code> та <Code>prompt</Code>. Давайте ми розглянемо, як використовувати ці функції та надати користувачеві можливість взаємодіяти з вашим додатком.
            </Paragraph>

            <SubHeader variant="h2" component="h2">Функція alert</SubHeader>
            <Paragraph>
                Функція <Code>alert</Code> використовується для відображення повідомлення у спливаючому вікні. Вона часто використовується для повідомлення користувача про певні події чи помилки.
            </Paragraph>
            <CodeBlock>
                {`
alert("Це приклад повідомлення з функцією alert.");
                `}
            </CodeBlock>

            <SubHeader variant="h2" component="h2">Функція confirm</SubHeader>
            <Paragraph>
                Функція <Code>confirm</Code> дозволяє створити підтверджувальне вікно з двома кнопками: "OK" та "Скасувати". Вона повертає <Code>true</Code>, якщо користувач натиснув "OK", та <Code>false</Code>, якщо "Скасувати".
            </Paragraph>
            <CodeBlock>
                {`
let result = confirm("Ви впевнені, що хочете видалити цей елемент?");
if (result) {
  // Код для видалення елемента
} else {
  // Код для скасування видалення
}
                `}
            </CodeBlock>

            <SubHeader variant="h2" component="h2">Функція prompt</SubHeader>
            <Paragraph>
                Функція <Code>prompt</Code> використовується для отримання введених користувачем даних. Вона виводить вікно з текстовим полем для введення та кнопками "OK" і "Скасувати". Функція повертає введені дані як рядок.
            </Paragraph>
            <CodeBlock>
                {`
let name = prompt("Будь ласка, введіть ваше ім'я:");
if (name !== null) {
  console.log(\`Вас звати \${name}\`);
} else {
  console.log("Ви скасували введення.");
}
                `}
            </CodeBlock>
        </Container>
    );
};

export default UserInteractionPage;