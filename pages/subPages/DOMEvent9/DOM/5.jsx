import React from 'react';

const DomManipulationPage = () => {
    return (
        <div className="page-container">
            <h1>Додавання, видалення та модифікація DOM-елементів</h1>
            <p>
                Додавання, видалення та модифікація DOM-елементів є критичними аспектами роботи з Document Object Model (DOM) веб-сторінки. DOM дає можливість JavaScript взаємодіяти з веб-сторінкою, змінювати її вміст і структуру, щоб створювати динамічні та інтерактивні веб-додатки.
            </p>

            <h2>Додавання елементів до DOM</h2>
            <p>
                Один із основних способів взаємодії з DOM - це додавання нових елементів до сторінки. Ви можете створити новий елемент за допомогою <code>document.createElement()</code>, встановити його атрибути і вміст, і вставити в DOM за допомогою методів, таких як <code>appendChild()</code> або <code>insertBefore()</code>.
            </p>
            <pre>
        <code>
          {`
// Створення нового елемента div
const newDiv = document.createElement('div');
newDiv.textContent = 'Новий елемент';

// Вставка в DOM
const parentElement = document.getElementById('container');
parentElement.appendChild(newDiv);
          `}
        </code>
      </pre>

            <h2>Видалення елементів з DOM</h2>
            <p>
                Для видалення елемента з DOM використовується метод <code>removeChild()</code>. Вам потрібно вказати батьківський елемент і елемент, який ви хочете видалити. Наприклад:
            </p>
            <pre>
        <code>
          {`
const elementToRemove = document.getElementById('element-to-remove');
const parentElement = elementToRemove.parentNode;
parentElement.removeChild(elementToRemove);
          `}
        </code>
      </pre>

            <h2>Зміна властивостей та атрибутів</h2>
            <p>
                Властивості та атрибути DOM-елементів можна легко змінювати за допомогою JavaScript. Наприклад, ви можете змінювати текстовий контент елемента, міняти стилі, встановлювати атрибути тощо.
            </p>
            <pre>
        <code>
          {`
const elementToModify = document.getElementById('element-to-modify');
elementToModify.textContent = 'Новий текст';
elementToModify.style.color = 'red';
elementToModify.setAttribute('data-custom', 'значення');
          `}
        </code>
      </pre>

            <h2>Модифікація класів</h2>
            <p>
                Ви також можете додавати та видаляти класи у DOM-елементів, щоб змінювати їх стилі. Методи <code>classList.add()</code>, <code>classList.remove()</code> та <code>classList.toggle()</code> допомагають вам керувати класами.
            </p>
            <pre>
        <code>
          {`
const element = document.getElementById('my-element');
element.classList.add('highlighted');
element.classList.remove('hidden');
          `}
        </code>
      </pre>
        </div>
    );
};

export default DomManipulationPage;