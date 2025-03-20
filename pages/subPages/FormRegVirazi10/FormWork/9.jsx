import React from 'react';

const AjaxUsage = () => {
    return (
        <div className="page-container">
            <h1>Використання AJAX для асинхронної відправки даних</h1>
            <p>
                В сучасному веб-розробництві однією з найважливіших задач є обмін даними з сервером без перезавантаження сторінки. Для цього використовується технологія AJAX (Asynchronous JavaScript and XML), яка дозволяє взаємодіяти з сервером асинхронно та без блокування веб-сторінки. У цьому розділі ми розглянемо, як використовувати AJAX для відправки даних з клієнта на сервер та отримання відповіді від сервера.
            </p>

            <h2>Основи AJAX</h2>
            <p>
                AJAX базується на використанні об'єкта <code>XMLHttpRequest</code> (XHR) або сучасного API <code>fetch</code>. Вони дозволяють виконувати HTTP-запити до сервера, такі як GET та POST, і обробляти відповідь асинхронно.
            </p>

            <h3>Використання XMLHttpRequest</h3>
            <pre>
                <code>
                    {`
// Створюємо новий об'єкт XMLHttpRequest
const xhr = new XMLHttpRequest();

// Налаштовуємо запит
xhr.open('GET', 'https://example.com/api/data', true);

// Додаємо обробник події, який виконається при отриманні відповіді
xhr.onload = function () {
    if (xhr.status === 200) {
        const response = xhr.responseText;
        console.log(response);
    }
};

// Відправляємо запит
xhr.send();
                    `}
                </code>
            </pre>

            <h3>Використання fetch</h3>
            <pre>
                <code>
                    {`
// Використовуючи метод fetch для відправки GET-запиту
fetch('https://example.com/api/data')
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Помилка: ' + error);
    });
                    `}
                </code>
            </pre>

            <h2>Відправка даних на сервер</h2>
            <p>
                Для відправки даних на сервер, особливо при роботі з формами, ми можемо використовувати метод POST.
            </p>

            <h3>Використання XMLHttpRequest</h3>
            <pre>
                <code>
                    {`
const xhr = new XMLHttpRequest();
const url = 'https://example.com/api/submit';

// Налаштовуємо запит
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json');

const formData = { username: 'john_doe', email: 'john@example.com' };
const jsonData = JSON.stringify(formData);

// Додаємо обробник події для відповіді
xhr.onload = function () {
    if (xhr.status === 200) {
        const response = xhr.responseText;
        console.log(response);
    }
};

// Відправляємо дані
xhr.send(jsonData);
                    `}
                </code>
            </pre>

            <h3>Використання fetch</h3>
            <pre>
                <code>
                    {`
const url = 'https://example.com/api/submit';
const formData = new FormData();
formData.append('username', 'john_doe');
formData.append('email', 'john@example.com');

// Використовуємо метод POST та передаємо об'єкт FormData
fetch(url, {
    method: 'POST',
    body: formData,
})
    .then(response => response.text())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Помилка: ' + error);
    });
                    `}
                </code>
            </pre>

            <h2>Висновок</h2>
            <p>
                Використання AJAX і технології відправки даних асинхронно дає можливість створювати більш інтерактивні веб-сайти.
            </p>
        </div>
    );
};

export default AjaxUsage;