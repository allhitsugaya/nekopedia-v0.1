import React from 'react';
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../features/Code/Code.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";

const EverythingIsAnObjectPage = () => {
    return (
        <div className="page-container">
            <BookHeader>Все в JavaScript є об'єктом 🤯</BookHeader>
            <Paragraph>
                Вираз "все в JavaScript є об'єктом" вказує на те, що в JavaScript більшість значень, з якими ви працюєте, насправді представлені як об'єкти або можуть бути перетворені в об'єкти за необхідності. Це пов'язано з тим, що JavaScript є об'єктно-орієнтованою мовою програмування, де об'єкти використовуються для представлення даних і функцій.
            </Paragraph>

            <h2>Приклади</h2>

            <h3>Примітивні типи даних</h3>
            <Paragraph>
                Навіть числа, рядки і булеві значення можуть бути перетворені в об'єкти за допомогою обгорток (wrapper objects), таких як <code>Number</code>, <code>String</code> та <code>Boolean</code>. Це дозволяє вам викликати методи на примітивних типах, якщо потрібно.
            </Paragraph>
            <pre>
        <Code>
          {`
let num = 42;
let str = "Hello";

console.log(num.toString()); // Результат: "42"
console.log(str.length); // Результат: 5
          `}
        </Code>
      </pre>

            <h3>Функції теж є об'єктами</h3>
            <Paragraph>
                Функції можуть мати властивості і бути передані як аргументи.
            </Paragraph>
            <pre>
        <Code>
          {`
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet.author = "John";

console.log(greet.author); // Результат: "John"
          `}
        </Code>
      </pre>

            <h3>Масиви і об'єкти</h3>
            <Paragraph>
                Ці структури даних є об'єктами. Масиви мають числові індекси, а об'єкти - ключі і значення.
            </Paragraph>
            <pre>
        <Code>
          {`
let myArray = [1, 2, 3];
let myObject = { name: "John", age: 30 };

console.log(myArray[0]); // Результат: 1
console.log(myObject.name); // Результат: "John"
          `}
        </Code>
      </pre>

            <h2>Важливість розуміння</h2>
            <Paragraph>
                Ця особливість робить JavaScript гнучкою мовою, але вона також вимагає ретельного розуміння, оскільки деякі операції можуть бути неочевидними через автоматичне перетворення типів. Важливо знати, коли і як правильно використовувати різні типи та об'єкти в JavaScript, щоб побудувати ефективний та надійний код.
            </Paragraph>
        </div>
    );
};

export default EverythingIsAnObjectPage;