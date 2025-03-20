import React from 'react';

const JsonIntroductionPage = () => {
    return (
        <div className="page-container">
            <h1>Введення до JSON (JavaScript Object Notation)</h1>
            <p>
                JSON (JavaScript Object Notation) - це легкий та легко читаний формат обміну даними. Він широко використовується для передачі даних між веб-серверами та клієнтськими додатками.
            </p>
            <p>
                Він представляє дані у вигляді тексту, що дозволяє легко обмінювати інформацію між різними мовами програмування. Та використовується для передачі даних в сучасних веб-додатках, включаючи обмін даними з сервером, збереження налаштувань, зчитування конфігураційних файлів і багато інших завдань.
            </p>

            <h2>Використання JSON в JavaScript</h2>
            <h3>Парсинг JSON</h3>
            <p>
                У JavaScript існує функція <code>JSON.parse()</code>, яка дозволяє перетворювати JSON-рядок у об'єкт JavaScript. Приклад:
            </p>
            <pre>
        <code>
          {`
const jsonStr = '{"name": "John", "age": 30, "isStudent": false}';
const jsonObj = JSON.parse(jsonStr);
          `}
        </code>
      </pre>

            <h3>Серіалізація в JSON</h3>
            <p>
                Для перетворення об'єкту JavaScript у JSON-рядок використовується метод <code>JSON.stringify()</code>. Приклад:
            </p>
            <pre>
        <code>
          {`
const obj = { name: 'John', age: 30, isStudent: false };
const jsonStr = JSON.stringify(obj);
          `}
        </code>
      </pre>

            <h2>Валідація JSON</h2>
            <h3>Перевірка валідності JSON</h3>
            <p>
                Щоб переконатися, що JSON є валідним, використовують функцію <code>JSON.parse()</code> і обробку винятків. Якщо JSON неправильний, це викличе виняток, і його можна обробити.
            </p>
            <pre>
        <code>
          {`
try {
  const jsonStr = '{"name": "John", "age": 30, "isStudent": false';
  const jsonObj = JSON.parse(jsonStr);
} catch (error) {
  console.error('Неправильний JSON:', error);
}
          `}
        </code>
      </pre>

            <h2>Застосування JSON в практиці</h2>
            <ul>
                <li>
                    <strong>Збереження конфігурацій:</strong> JSON використовується для збереження конфігураційних налаштувань додатків, наприклад, параметрів вигляду або поведінки.
                </li>
                <li>
                    <strong>Обмін даними з сервером:</strong> JSON є популярним форматом для обміну даними між клієнтськими додатками та серверами, наприклад, при використанні API.
                </li>
                <li>
                    <strong>Локальне сховище:</strong> JSON дозволяє зберігати дані локально на клієнтському боці, використовуючи <code>LocalStorage</code> або <code>SessionStorage</code>.
                </li>
            </ul>
        </div>
    );
};

export default JsonIntroductionPage;