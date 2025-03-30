import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Code from "../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";

const ArrowFunctionsPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Стрілкові функції</BookHeader>
            <Paragraph>
                Стрілкові функції — це сучасний та ефективний інструмент у світі JavaScript, ідеальний для простих функцій, що використовуються для обробки подій, маніпулювання масивами, фільтрації даних та інших операцій. Вони роблять код більш зрозумілим і компактним, забезпечуючи читачам можливість легше розуміти та утримувати код у порядку. Проте, важливо ретельно ознайомитися із їхніми відмінностями в порівнянні зі звичайними функціями.
            </Paragraph>
            <Paragraph>
                Але не менш важливим є розуміння контексту виклику. Це поняття визначає, як функції отримують доступ до об'єкту, в якому вони були викликані. Знання цього концепту є вирішальним для зміни поведінки функцій та їхнього використання в різних контекстах.
            </Paragraph>
            <Paragraph>
                Розглядаючи ці аспекти, ми зможемо вдосконалити наші навички в програмуванні та забезпечити більш чистий та продуктивний код у JavaScript.
            </Paragraph>
            <Paragraph>
                У сучасному JavaScript стрілкові функції стали необхідним інструментом для розробників. Вони дозволяють писати більш зрозуміливий та компактний код. У цій доповіді ми розглянемо синтаксис стрілкових функцій та порівняємо їх із звичайними функціями, виявляючи відмінності та вигоди, які вони пропонують.
            </Paragraph>

            <SubHeader>Синтаксис стрілкових функцій</SubHeader>
            <Paragraph>
                Стрілкові функції в JavaScript визначаються коротким та зрозумілим способом, що робить їх чудовим вибором для простих функцій.
            </Paragraph>
            <Paragraph>
                Ось загальний синтаксис стрілкових функцій:
            </Paragraph>
            <CodeBlock>
          {`
const functionName = (parameters) => res;
          `}
            </CodeBlock>
            <Paragraph>
                <Code>functionName:</Code> Ім'я функції (опціонально).<br />
                <Code>parameters:</Code> Параметри функції, що приймаються у вигляді аргументів.<br />
                <Code>res:</Code> Вираз, який обчислюється та повертається функцією.
            </Paragraph>
            <Paragraph>
                Ось кілька прикладів:
            </Paragraph>
            <CodeBlock>
          {`
// Стрілкова функція без параметрів
const sayHello = () => {
  console.log('Hello!');
};

// Стрілкова функція з одним параметром
const double = (x) => {
  return x * 2;
};

// Стрілкова функція з одним параметром (скорочена форма)
const double = x => x * 2;

// Стрілкова функція з багатьма параметрами
const add = (a, b) => a + b;
          `}
            </CodeBlock>

            <SubHeader>Відмінності від звичайних функцій</SubHeader>
            <Paragraph>
                Хоча стрілкові функції є коротшими та більш зрозумілими, ніж звичайні функції, вони мають деякі відмінності:
            </Paragraph>
            <SubHeader variant="h3">1. Відсутність this</SubHeader>
            <Paragraph>
                У звичайних функціях <Code>this</Code> вказує на об'єкт, в якому вони були викликані. У стрілкових функціях <Code>this</Code> відсутній та береться з контексту, в якому функція була створена.
            </Paragraph>
            <CodeBlock>
          {`
function RegularFunction() {
  this.value = 42;
  setTimeout(function () {
    console.log(this.value); // undefined
  }, 1000);
}

const arrowFunction = () => {
  this.value = 42;
  setTimeout(() => {
    console.log(this.value); // 42
  }, 1000);
};

new RegularFunction();
arrowFunction();
          `}
            </CodeBlock>
            <SubHeader variant="h3">2. Неможливість використовувати arguments</SubHeader>
            <Paragraph>
                У стрілкових функціях неможливо використовувати об'єкт <Code>arguments</Code>. Цей об'єкт містить всі передані параметри функції, і його використання може бути корисним в деяких сценаріях.
            </Paragraph>
            <SubHeader variant="h3">3. Неможливість бути конструктором</SubHeader>
            <Paragraph>
                Стрілкові функції не можуть бути використані як конструктори для створення нових об'єктів. Вони завжди є анонімними та не мають прототипу, тому не підходять для створення класів.
            </Paragraph>

                <Conclusion>Висновок</Conclusion>
                <Paragraph>
                    Стрілкові функції - потужний та зручний інструмент в сучасному JavaScript, особливо для простих
                    функцій, які використовуються для обробки подій, масивів, фільтрації та інших операцій. Вони роблять
                    код більш зрозумілим та компактним. Однак важливо пам'ятати їхні відмінності від звичайних функцій,
                    такі як відсутність <Code>this</Code> та неможливість використовувати <Code>arguments</Code>. З
                    правильним розумінням та використанням стрілкових функцій ви зможете писати більш ефективний та
                    зрозумілий код у своїх проектах.
                </Paragraph>
        </Container>
    );
};

export default ArrowFunctionsPage;