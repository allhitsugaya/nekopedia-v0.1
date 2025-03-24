import React from 'react';

const JsonPracticePage = () => {
    return (
        <div className="page-container">
            <h1>Завдання для практики JSON</h1>
            <p>
                Створіть об'єкт JSON, що представляє інформацію про книгу (назва, автор, рік видання).
                Використайте <code>JSON.stringify()</code>, щоб перетворити об'єкт у JSON-рядок та виведіть його.
                Використайте <code>JSON.parse()</code>, щоб розпарсити JSON-рядок та вивести дані про книгу.
            </p>
            <pre>
        <code>
          {`
// Створіть об'єкт JSON, що представляє інформацію про "Кобзар"
const kobzar = {
    title: "Кобзар",
    author: "Тарас Шевченко",
    year: 1840
};

// Використайте JSON.stringify(), щоб перетворити об'єкт у JSON-рядок
const jsonKobzar = JSON.stringify(kobzar); 

// Виведіть JSON-рядок
console.log("JSON-рядок про 'Кобзар':");
console.log(typeof jsonKobzar, jsonKobzar); // string {"title":"Кобзар","author":"Тарас Шевченко","year":1840}

// Використайте JSON.parse(), щоб розпарсувати JSON-рядок
const parsedKobzar = JSON.parse(jsonKobzar);

// Виведіть дані про "Кобзар" після розпарсування
console.log("Дані про 'Кобзар' після розпарсування:");
console.log("Назва книги: " + parsedKobzar.title);
console.log("Автор книги: " + parsedKobzar.author);
console.log("Рік видання: " + parsedKobzar.year);
          `}
        </code>
      </pre>
            <p>
                Цей код створює об'єкт <code>kobzar</code>, перетворює його в JSON-рядок за допомогою <code>JSON.stringify()</code>, а потім розпарсовує JSON-рядок за допомогою <code>JSON.parse()</code>, виводячи дані про книгу.
            </p>
        </div>
    );
};

export default JsonPracticePage;