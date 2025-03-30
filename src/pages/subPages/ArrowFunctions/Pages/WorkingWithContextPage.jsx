import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";

const WorkingWithContextPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Робота з Контекстом виклику</BookHeader>

            <SubHeader>1. Використання this у методах об'єктів</SubHeader>
            <Paragraph>
                У методах об'єктів <Code>this</Code> посилається на сам об'єкт, в якому метод був викликаний.
            </Paragraph>
            <CodeBlock>
          {`
const car = {
  brand: 'Toyota',
  model: 'Camry',
  start: function() {
    console.log(\`Starting \${this.brand} \${this.model}\`);
  },
};

car.start(); // Starting Toyota Camry
          `}
            </CodeBlock>

            <SubHeader>2. Використання this в конструкторах</SubHeader>
            <Paragraph>
                Контекст виклику може бути важливим при створенні об'єктів за допомогою конструктора. У конструкторах <Code>this</Code> посилається на новий об'єкт, який створюється.
            </Paragraph>
            <CodeBlock>
          {`
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(\`Hello, my name is \${this.name}, and I am \${this.age} years old.\`);
  };
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.sayHello(); // Hello, my name is Alice, and I am 25 years old.
person2.sayHello(); // Hello, my name is Bob, and I am 30 years old.
          `}
            </CodeBlock>

            <SubHeader>3. Використання bind для збереження контексту</SubHeader>
            <Paragraph>
                Метод <Code>bind</Code> дозволяє зафіксувати контекст виклику функції, щоб він не змінювався при передачі функції як колбека або виклику в іншому контексті.
            </Paragraph>
            <CodeBlock>
          {`
const user = {
  name: 'John',
  logName: function() {
    console.log(this.name);
  },
};

const button = document.getElementById('myButton');
button.addEventListener('click', user.logName.bind(user));
          `}
            </CodeBlock>

            <Conclusion >Заключення</Conclusion>
                <Paragraph>
                    Розуміння контексту виклику є ключовим для ефективного використання JavaScript. Вивчення його різних
                    аспектів, таких як глобальний контекст, контекст функцій та методи зміни контексту, допомагає
                    розробникам використовувати цю особливість мови для досягнення кращої читабельності та ефективності
                    свого коду.
                </Paragraph>
        </Container>
    );
};

export default WorkingWithContextPage;