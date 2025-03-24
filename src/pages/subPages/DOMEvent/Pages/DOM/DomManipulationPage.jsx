import React from 'react';

const DomManipulationPage = () => {
    return (
        <div className="page-container">
            <h1>Зміна властивостей та атрибутів</h1>
            <p>
                Один з ключових аспектів роботи з DOM (Document Object Model) - це зміна властивостей та атрибутів DOM-елементів, які дозволяють нам динамічно змінювати вміст і стиль сторінки.
            </p>

            <h2>Зміна тексту елемента</h2>
            <p>
                Для зміни тексту елемента використовуємо властивість <code>textContent</code>. Наприклад, давайте змінимо текст кнопки:
            </p>
            <pre>
        <code>
          {`
const button = document.getElementById("myButton");
button.textContent = "Новий текст кнопки";
          `}
        </code>
      </pre>

            <h2>Зміна стилів</h2>
            <p>
                Зміна стилів елемента виконується з використанням властивості <code>style</code>. Для прикладу, змінимо колір та розмір шрифту тексту:
            </p>
            <pre>
        <code>
          {`
const textElement = document.getElementById("myText");
textElement.style.color = "blue";
textElement.style.fontSize = "18px";
          `}
        </code>
      </pre>

            <h2>Зміна атрибутів</h2>
            <p>
                Для зміни атрибутів, таких як <code>src</code> для зображень або <code>href</code> для посилань, використовуємо метод <code>setAttribute</code>. Розглянемо приклад зміни атрибута <code>src</code> для зображення:
            </p>
            <pre>
        <code>
          {`
const image = document.getElementById("myImage");
image.setAttribute("src", "новий_шлях_до_зображення.jpg");
          `}
        </code>
      </pre>

            <h2>Заключення</h2>
            <p>
                Зміна властивостей та атрибутів в DOM дозволяє змінювати вміст та вигляд сторінки на льоту, що є корисним при створенні динамічних веб-сторінок.
            </p>
        </div>
    );
};

export default DomManipulationPage;