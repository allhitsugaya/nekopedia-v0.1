import React from 'react';
import {Container} from "@mui/material";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";

const ExecutionContextPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Контекст виклику в JavaScript</BookHeader>
            <Paragraph>
                Контекст виклику є ключовим поняттям в JavaScript, яке визначає, як функції отримують доступ до об'єкту, в якому вони були викликані. Розуміння цього поняття є важливим для ефективної роботи з об'єктами, методами та ключовими властивостями мови.
            </Paragraph>

            <SubHeader>Основні поняття</SubHeader>

            <SubHeader variant="h3">1. Глобальний контекст виклику</SubHeader>
            <Paragraph>
                Все, що визначено за межами будь-якої функції чи блока коду, належить глобальному контексту виклику. У глобальному контексті <Code>this</Code> посилається на глобальний об'єкт <Code>window</Code> в браузері або на глобальний об'єкт <Code>global</Code> в середовищі Node.js.
            </Paragraph>
            <CodeBlock>
          {`
console.log(this); // window (в браузері) або global (в Node.js)
          `}
            </CodeBlock>

            <SubHeader variant="h3">2. Контекст виклику функції</SubHeader>
            <Paragraph>
                Кожна функція в JavaScript має свій власний контекст виклику, який визначається тим, як вона була викликана.
            </Paragraph>
            <CodeBlock>
          {`
function greet() {
  console.log(this);
}

greet(); // window (в браузері) або global (в Node.js)
          `}
            </CodeBlock>

            <SubHeader variant="h3">3. Зміна контексту виклику</SubHeader>
            <Paragraph>
                Змінити контекст виклику можна за допомогою методів <Code>call()</Code>, <Code>apply()</Code>, або <Code>bind()</Code>.
            </Paragraph>
            <CodeBlock>
          {`
const person = {
  name: 'John',
  greet: function() {
    console.log(\`Hello, \${this.name}!\`);
  },
};

const newPerson = { name: 'Jane' };

person.greet.call(newPerson); // Hello, Jane!
person.greet.apply(newPerson); // Hello, Jane!

const greetJane = person.greet.bind(newPerson);
greetJane(); // Hello, Jane!
          `}
            </CodeBlock>

            <SubHeader variant="h3">4. Контекст виклику при обробці подій</SubHeader>
            <Paragraph>
                При обробці подій контекст виклику може змінюватись в залежності від того, як викликано функцію.
            </Paragraph>
            <CodeBlock>
          {`
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log(this); // button
});
          `}
            </CodeBlock>
        </Container>
    );
};

export default ExecutionContextPage;