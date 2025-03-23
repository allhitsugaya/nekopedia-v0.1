import React from 'react';

const DomContentLoadedAndWindowOnloadPage = () => {
    return (
        <div className="page-container">
            <h1>DOMContentLoaded та window.onload</h1>
            <p>
                У цьому розділі ми дослідимо два важливих методи подій - <code>DOMContentLoaded</code> та <code>window.onload</code> в контексті JavaScript. Ці методи дозволяють вам керувати тим, як ваш код взаємодіє з DOM (Document Object Model), коли сторінка завантажується.
            </p>

            <h2>DOMContentLoaded: Подія для Завантаження DOM</h2>
            <p>
                <code>DOMContentLoaded</code> - це подія, яка спрацьовує, коли весь DOM документа був побудований і готовий для взаємодії з JavaScript. Це стає можливим після завершення завантаження HTML-структури та побудови DOM-дерева, але до завершення завантаження зовнішніх ресурсів, таких як стилі, зображення і скрипти.
            </p>
            <p>
                Використання події <code>DOMContentLoaded</code> допомагає уникнути ситуацій, коли ваш JavaScript код намагається взаємодіяти з DOM, який ще не був повністю побудований. Ось приклад використання цієї події:
            </p>
            <pre>
        <code>
          {`
document.addEventListener('DOMContentLoaded', function() {
  // Код, який виконується після завантаження DOM
  const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    alert('Клікнули на кнопці!');
  });
});
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі ми слухаємо подію <code>DOMContentLoaded</code> на об'єкті <code>document</code>, і коли ця подія спрацьовує, ми додаємо обробник події для кнопки з <code>id</code> <code>myButton</code>. Це гарантує, що код виконається тільки після повного завантаження DOM.
            </p>

            <h2>window.onload: Загальна Подія Завантаження Сторінки</h2>
            <p>
                <code>window.onload</code> - це подія, яка спрацьовує, коли весь контент сторінки, включаючи DOM, стилі, зображення та інші ресурси, був повністю завантажений. Ця подія гарантує, що весь контент доступний для взаємодії, але вона викликається тільки один раз, коли сторінка завантажена.
            </p>
            <pre>
        <code>
          {`
window.onload = function() {
  // Код, який виконується після завантаження сторінки
  const image = document.getElementById('myImage');
  image.src = 'new-image.jpg';
};
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі ми використовуємо <code>window.onload</code> для зміни джерела зображення після завантаження сторінки. Це гарантує, що зображення буде змінено тільки після того, як всі ресурси сторінки завантажені.
            </p>

            <h2>Порівняння DOMContentLoaded та window.onload</h2>
            <p>
                Обидві події - <code>DOMContentLoaded</code> та <code>window.onload</code> - використовуються для керування тим, коли ваш JavaScript код виконується після завантаження сторінки. Однак вони мають певні відмінності:
            </p>
            <ul>
                <li>
                    <strong>DOMContentLoaded відбувається раніше:</strong> <code>DOMContentLoaded</code> спрацьовує, коли DOM готовий, навіть якщо деякі зовнішні ресурси, такі як зображення, ще не завантажені. Це дозволяє починати взаємодію з DOM раніше, ніж завантажаться всі зовнішні ресурси.
                </li>
                <li>
                    <strong>window.onload відбувається пізніше:</strong> <code>window.onload</code> чекає на завершення завантаження всіх ресурсів, включаючи зображення, стилі та інші. Тобто це остання подія, яка спрацьовує при завантаженні сторінки.
                </li>
                <li>
                    <strong>window.onload не може бути декілька разів:</strong> Ви можете призначити тільки один обробник для <code>window.onload</code>, і він виконається лише раз при завантаженні сторінки. У випадку <code>DOMContentLoaded</code>, ви можете додавати багато обробників, які будуть виконані після завершення побудови DOM.
                </li>
                <li>
                    <strong>Використання за потреби:</strong> Використовуйте <code>DOMContentLoaded</code>, якщо вам потрібно реагувати на готовність DOM, а <code>window.onload</code>, якщо потрібно чекати на завершення завантаження всіх ресурсів, які впливають на розмір сторінки, такі як зображення.
                </li>
            </ul>
        </div>
    );
};

export default DomContentLoadedAndWindowOnloadPage;