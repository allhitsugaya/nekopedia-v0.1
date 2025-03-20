import React from 'react';

const DestructuringAndObjectIterationPage = () => {
    return (
        <div className="page-container">
            <h1>Деструктуризація та перебір властивостей об'єкта</h1>

            <h2>Деструктуризація</h2>
            <p>
                Деструктуризація - це спосіб отримання окремих властивостей об'єкта та присвоєння їх змінним. Вона полегшує роботу з об'єктами:
            </p>
            <pre>
        <code>
          {`
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

const { firstName, lastName } = person;

console.log(firstName); // John
console.log(lastName); // Doe
          `}
        </code>
      </pre>
            <p>
                Деструктуризація дозволяє швидко отримувати доступ до властивостей об'єкта та спрощує код. Цей метод дозволяє нам безпечно перевіряти наявність властивостей в об'єктах.
            </p>

            <h2>Перебір властивостей об'єкта</h2>
            <p>
                JavaScript надає різні способи перебору властивостей об'єкта. Один із найпоширеніших способів - використання циклу <code>for...in</code>:
            </p>
            <pre>
        <code>
          {`
const person = { firstName: 'John', lastName: 'Doe' };

for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}
          `}
        </code>
      </pre>
            <p>
                Цей цикл дозволяє перебирати всі ключі об'єкта та отримувати доступ до відповідних значень.
            </p>
        </div>
    );
};

export default DestructuringAndObjectIterationPage;