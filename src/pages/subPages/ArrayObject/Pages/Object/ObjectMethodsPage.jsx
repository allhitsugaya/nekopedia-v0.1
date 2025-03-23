import React from 'react';

const ObjectMethodsPage = () => {
    return (
        <div className="page-container">
            <h1>Object та способи роботи з ним</h1>
            <p>
                Об'єкти є одним із найважливіших концепцій в мові програмування JavaScript. Вони відіграють центральну роль у майже кожному аспекті розробки цією мовою. Якщо ви хочете зрозуміти інші аспекти JavaScript, то розуміння об'єктів є обов'язковим кроком.
            </p>
            <p>
                Об'єкти є складними структурами даних, що можуть містити різноманітні типи інформації. Вони дозволяють організовувати дані в логічні групи, представляючи об'єкти реального світу, або ж створюючи абстракції для зберігання та роботи з інформацією.
            </p>

            <h2>1. Вступ до роботи з об'єктами</h2>
            <p>
                В JavaScript об'єкти представляють собою зберігання даних у форматі пар ключ-значення. Об'єкти можуть містити властивості, які можуть бути простими значеннями, функціями або навіть іншими об'єктами. Проте ключ значення завжди буде строкою.
            </p>

            <h3>Створення об'єкта</h3>
            <p>
                У JavaScript об'єкти можна створювати за допомогою літеральної нотації:
            </p>
            <pre>
        <code>
          {`
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};
          `}
        </code>
      </pre>
            <p>
                Ми вже створили об'єкт <code>person</code>, який містить властивості <code>firstName</code>, <code>lastName</code> та <code>age</code>.
            </p>

            <h3>Доступ до властивостей</h3>
            <p>
                Доступ до властивостей об'єкта можливий за допомогою крапки або квадратних дужок:
            </p>
            <pre>
        <code>
          {`
console.log(person.firstName); // John
console.log(person['lastName']); // Doe
          `}
        </code>
      </pre>
            <p>
                Це дозволяє нам читати значення властивостей об'єкта.
            </p>

            <h2>2. Методи для роботи з об'єктами</h2>
            <p>
                JavaScript надає нам ряд корисних методів для роботи з об'єктами. Розглянемо деякі з них.
            </p>

            <h3>Object.keys(), Object.values(), Object.entries()</h3>
            <p>
                Методи <code>Object.keys()</code>, <code>Object.values()</code> та <code>Object.entries()</code> дозволяють отримати масив ключів, масив значень та масив пар ключ-значення відповідно. Давайте розглянемо приклад:
            </p>
            <pre>
        <code>
          {`
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

const keys = Object.keys(person); // Повертає масив ключів ['firstName', 'lastName', 'age']
const values = Object.values(person); // Повертає масив значень ['John', 'Doe', 30]
const entries = Object.entries(person); // Повертає масив пар ключ-значення [['firstName', 'John'], ['lastName', 'Doe'], ['age', 30]]
          `}
        </code>
      </pre>
            <p>
                Ці методи надають корисний спосіб ітеруватися по властивостях об'єкта та працювати з ними.
            </p>

            <h3>Object.assign()</h3>
            <p>
                Метод <code>Object.assign()</code> використовується для копіювання властивостей з одного або декількох об'єктів в цільовий об'єкт. Це корисно при об'єднанні даних:
            </p>
            <pre>
        <code>
          {`
const defaults = { theme: 'light', fontSize: 14 };
const userSettings = { fontSize: 16 };

const mergedSettings = Object.assign({}, defaults, userSettings);

console.log(mergedSettings); // { theme: 'light', fontSize: 16 }
          `}
        </code>
      </pre>

            <h3>hasOwnProperty()</h3>
            <p>
                Метод <code>hasOwnProperty()</code> використовується для перевірки наявності властивості в об'єкті. Він повертає <code>true</code>, якщо властивість існує, і <code>false</code> в іншому випадку:
            </p>
            <pre>
        <code>
          {`
const person = { name: 'John' };
console.log(person.hasOwnProperty('name')); // true
console.log(person.hasOwnProperty('age')); // false
          `}
        </code>
      </pre>
        </div>
    );
};

export default ObjectMethodsPage;