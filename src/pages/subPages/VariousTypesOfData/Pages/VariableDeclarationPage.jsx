import React from 'react';
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../features/Code/Code.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";

const VariableDeclarationPage = () => {
    return (
        <>
            <BookHeader>Оголошення змінних. Різниця між "var", "let" та "const"</BookHeader>
            <Paragraph>
                Оголошення змінних є однією з фундаментальних концепцій у JavaScript. Вони дозволяють зберігати та керувати даними у програмах. Зараз ми розглянемо, як оголошувати змінні та яка різниця між ключовими словами <Code>var</Code>, <Code>let</Code> та <Code>const</Code>.
            </Paragraph>

            <SubHeader>Оголошення змінних</SubHeader>
            <Paragraph>
                Оголошення змінних - це процес створення іменованих контейнерів для зберігання даних. У JavaScript є три способи оголошення змінних: <Code>var</Code>, <Code>let</Code> та <Code>const</Code>.
            </Paragraph>

            <h3>var</h3>
            <Paragraph>
                Ключове слово <Code>var</Code> було першим способом оголошення змінних у JavaScript. Змінні, оголошені за допомогою <Code>var</Code>, мають глобальний або функціональний обсяг видимості (залежно від того, де вони були оголошені). Ось приклад:
            </Paragraph>
            <CodeBlock>
        <Code>
          {`
var name = "John";
console.log(name); // Виведе "John"
          `}
        </Code>
      </CodeBlock>
            <Paragraph>
                Однак змінні, оголошені за допомогою <Code>var</Code>, мають проблему з областю видимості, що може призводити до небажаних ефектів, коли змінна доступна поза своєю функцією.
            </Paragraph>

            <h3>let</h3>
            <Paragraph>
                Ключове слово <Code>let</Code> було введене у стандарті ECMAScript 6 (ES6) і стало покращенням у порівнянні з <Code>var</Code>. Змінні, оголошені за допомогою <Code>let</Code>, мають блоковий обсяг видимості, що означає, що вони доступні лише у блоку коду, в якому були оголошені. Ось приклад:
            </Paragraph>
            <pre>
        <Code>
          {`
let age = 30;
if (true) {
  let age = 25; // Локальна змінна у блоку
  console.log(age); // Виведе 25
}
console.log(age); // Виведе 30 (змінна зовнішнього блоку)
          `}
        </Code>
      </pre>
            <Paragraph>
                Використання <Code>let</Code> дозволяє уникнути конфліктів імен змінних та поліпшити структуру коду.
            </Paragraph>

            <h3>const</h3>
            <Paragraph>
                Ключове слово <Code>const</Code> також введене у стандарті ES6 і використовується для оголошення змінних, значення яких не можна змінювати після їхньої ініціалізації. <Code>const</Code> також має блоковий обсяг видимості, але він вимагає обов'язкового присвоєння значення при оголошенні. Ось приклад:
            </Paragraph>
            <pre>
        <Code>
          {`
const pi = 3.14159;
// pi = 3.14; // Помилка! Не можна змінити значення константи
          `}
        </Code>
      </pre>
            <Paragraph>
                Використання <Code>const</Code> рекомендується для оголошення змінних, які не повинні змінюватися після ініціалізації, наприклад, констант або фіксованих значень.
            </Paragraph>

            <SubHeader>Важливість розуміння та використання типів даних</SubHeader>
            <Paragraph>
                Розуміння різниці між <Code>var</Code>, <Code>let</Code> та <Code>const</Code> дуже важливе для написання якісного та надійного коду. Неправильне використання може призводити до некоректної роботи програми або складних для відлагодження помилок.
            </Paragraph>
            <Paragraph>
                Крім того, розуміння та правильне використання типів даних в JavaScript є фундаментом для роботи з мовою. Це допомагає уникати непередбачуваних проблем і забезпечує більшу стабільність та читабельність вашого коду.
            </Paragraph>
        </>
    );
};

export default VariableDeclarationPage;