import React from 'react';
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../features/Code/Code.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";

const TypeConversionPage = () => {
    return (
        <div className="page-container">
            <BookHeader>Явне та неявне перетворення</BookHeader>
            <Paragraph>
                JavaScript - це динамічно типізована мова програмування, де змінні можуть змінювати свій тип даних під час виконання програми. Однією з важливих концепцій в JavaScript є перетворення типів даних, а саме <strong>явне (explicit)</strong> та <strong>неявне (implicit)</strong> перетворення.
            </Paragraph>

            <h2>Явне перетворення (Explicit Type Conversion)</h2>
            <Paragraph>
                Явне перетворення типів даних в JavaScript відбувається за допомогою різних функцій та методів, які дозволяють змінювати тип даних змінних на конкретний тип. Один з найпоширеніших способів - використовувати конструктори типів даних, такі як <code>Number()</code>, <code>String()</code>, <code>Boolean()</code>, тощо. Приклади:
            </Paragraph>
            <pre>
        <Code>
          {`
let numStr = "42";
let num = Number(numStr); // явне перетворення рядка в число

let boolStr = "true";
let bool = Boolean(boolStr); // явне перетворення рядка в булевий тип
          `}
        </Code>
      </pre>
            <Paragraph>
                Можна навіть створити таблицю перетворень:
            </Paragraph>
            <pre>
        <Code>
          {`
// Приклади явного перетворення:
Number("123") // 123
String(123)   // "123"
Boolean(1)    // true
          `}
        </Code>
      </pre>

            <h2>Неявне перетворення (Implicit Type Conversion)</h2>
            <Paragraph>
                Неявне перетворення відбувається автоматично в певних випадках, коли JavaScript намагається виконати операції над різними типами даних. Наприклад, коли ви додаєте рядок до числа, JavaScript автоматично перетворює число у рядок та об'єднує їх:
            </Paragraph>
            <pre>
        <Code>
          {`
let num = 42;
let str = "The answer is " + num; // неявне перетворення числа в рядок
          `}
        </Code>
      </pre>

            <h3>Оператори та неявне перетворення</h3>
            <Paragraph>
                Неявне перетворення також стосується використання операторів. Наприклад, коли ви використовуєте оператор порівняння <code>==</code>, JavaScript автоматично перетворює типи, щоб зробити порівняння:
            </Paragraph>
            <pre>
        <Code>
          {`
let num = 42;
let str = "42";
if (num == str) {
  // неявне перетворення рядка у число для порівняння
  console.log("Equal");
}
          `}
        </Code>
      </pre>

            <h3>Захист від неочікуваного неявного перетворення</h3>
            <Paragraph>
                Неявне перетворення може спричинити неочікувану поведінку програми. Щоб запобігти цьому, рекомендується використовувати строге порівняння <code>===</code>, яке порівнює значення і типи даних без неявного перетворення.
            </Paragraph>
            <pre>
        <Code>
          {`
let num = 42;
let str = "42";
if (num === str) {
  console.log("Equal"); // Не виконається, оскільки типи різні
}
          `}
        </Code>
      </pre>

            <h2>Висновок</h2>
            <Paragraph>
                Розуміння явного та неявного перетворення типів даних є важливим для написання надійного та передбачуваного коду. Використання явного перетворення допомагає уникнути неочікуваних помилок, а строге порівняння <code>===</code> запобігає проблемам, пов'язаним із неявним перетворенням.
            </Paragraph>
        </div>
    );
};

export default TypeConversionPage;