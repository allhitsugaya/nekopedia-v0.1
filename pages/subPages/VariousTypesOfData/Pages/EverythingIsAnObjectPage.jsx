import React from 'react';

const EverythingIsAnObjectPage = () => {
    return (
        <div className="page-container">
            <h1>Все в JavaScript є об'єктом 🤯</h1>
            <p>
                Вираз "все в JavaScript є об'єктом" вказує на те, що в JavaScript більшість значень, з якими ви працюєте, насправді представлені як об'єкти або можуть бути перетворені в об'єкти за необхідності. Це пов'язано з тим, що JavaScript є об'єктно-орієнтованою мовою програмування, де об'єкти використовуються для представлення даних і функцій.
            </p>

            <h2>Приклади</h2>

            <h3>Примітивні типи даних</h3>
            <p>
                Навіть числа, рядки і булеві значення можуть бути перетворені в об'єкти за допомогою обгорток (wrapper objects), таких як <code>Number</code>, <code>String</code> та <code>Boolean</code>. Це дозволяє вам викликати методи на примітивних типах, якщо потрібно.
            </p>
            <pre>
        <code>
          {`
let num = 42;
let str = "Hello";

console.log(num.toString()); // Результат: "42"
console.log(str.length); // Результат: 5
          `}
        </code>
      </pre>

            <h3>Функції теж є об'єктами</h3>
            <p>
                Функції можуть мати властивості і бути передані як аргументи.
            </p>
            <pre>
        <code>
          {`
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet.author = "John";

console.log(greet.author); // Результат: "John"
          `}
        </code>
      </pre>

            <h3>Масиви і об'єкти</h3>
            <p>
                Ці структури даних є об'єктами. Масиви мають числові індекси, а об'єкти - ключі і значення.
            </p>
            <pre>
        <code>
          {`
let myArray = [1, 2, 3];
let myObject = { name: "John", age: 30 };

console.log(myArray[0]); // Результат: 1
console.log(myObject.name); // Результат: "John"
          `}
        </code>
      </pre>

            <h2>Важливість розуміння</h2>
            <p>
                Ця особливість робить JavaScript гнучкою мовою, але вона також вимагає ретельного розуміння, оскільки деякі операції можуть бути неочевидними через автоматичне перетворення типів. Важливо знати, коли і як правильно використовувати різні типи та об'єкти в JavaScript, щоб побудувати ефективний та надійний код.
            </p>
        </div>
    );
};

export default EverythingIsAnObjectPage;