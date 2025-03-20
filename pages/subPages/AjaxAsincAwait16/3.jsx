import React from 'react';

const HttpMethodsPage = () => {
    return (
        <div className="page-container">
            <h1>Методи роботи з API (GET, POST, PUT, DELETE)</h1>

            <p>
                У цьому розділі ми розглянемо, як відправляти <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code> запити, передавати параметри запиту, а також обробляти отриману відповідь від сервера.
            </p>

            <p>
                <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>DELETE</code> - це чотири основних методи HTTP-запитів, які використовуються для взаємодії між клієнтом і сервером у веб-розробці.
            </p>

            <p>
                Ці методи HTTP є частиною стандарту REST і використовуються для забезпечення повноцінної реалізації CRUD-операцій (створення, читання, оновлення, видалення) у веб-розробці.
            </p>

            <h2>GET-запит:</h2>
            <p>
                Використовується для отримання даних з сервера. Параметри запиту передаються у URL (як рядок запиту), наприклад, <code>https://example.com/api/data?param1=value1&param2=value2</code>. Ідеально підходить для запитів, які не змінюють стан сервера і призначені лише для отримання інформації.
            </p>
            <pre>
                <code>
{`// Приклад використання GET-запиту за допомогою Fetch API
const userId = 123;
const apiUrl = \`https://api.example.com/user?id=\${userId}\`;

fetch(apiUrl)
    .then(response => response.json())
    .then(user => console.log(user))
    .catch(error => console.error('Помилка:', error));`}
                </code>
            </pre>

            <h2>POST-запит:</h2>
            <p>
                Використовується для надсилання даних на сервер для обробки або збереження. Параметри передаються у тілі запиту, тому вони не видно у URL, що робить його придатним для надсилання великої кількості чутливих даних. Використовується там, де потрібно змінити стан сервера.
            </p>
            <pre>
                <code>
{`// Приклад використання POST-запиту за допомогою Fetch API
const userData = { name: 'Alice', age: 30 };

fetch('https://api.example.com/save', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
})
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error('Помилка:', error));`}
                </code>
            </pre>

            <h2>PUT-запит:</h2>
            <p>
                Використовується для оновлення чи створення ресурсу на сервері за вказаним URL. Якщо ресурс існує, він оновлюється; якщо відсутній - створюється новий. Запит має містити повний опис ресурсу.
            </p>
            <pre>
                <code>
{`// Приклад використання PUT-запиту за допомогою Fetch API
const updatedUserData = { name: 'Alice', age: 31 };

fetch('https://api.example.com/user/123', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUserData)
})
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error('Помилка:', error));`}
                </code>
            </pre>

            <h2>DELETE-запит:</h2>
            <p>
                Використовується для видалення ресурсу на сервері за вказаним URL. Запит не має тіла, оскільки весь інформаційний вміст передається у URL.
            </p>
            <pre>
                <code>
{`// Приклад використання DELETE-запиту за допомогою Fetch API
fetch('https://api.example.com/user/123', {
    method: 'DELETE'
})
    .then(response => {
        if (response.ok) {
            console.log('Ресурс успішно видалено');
        } else {
            console.error('Помилка видалення ресурсу');
        }
    })
    .catch(error => console.error('Помилка:', error));`}
                </code>
            </pre>

            <p>
                Вищенаведені приклади демонструють основні аспекти відправлення запитів на сервер та обробки отриманої відповіді від сервера в JavaScript. Важливо пам'ятати, що обробка помилок також є важливою частиною розробки, тому її не слід ігнорувати. Здатність передавати дані між клієнтом і сервером дозволяє створювати динамічні та інтерактивні веб-додатки.
            </p>
        </div>
    );
};

export default HttpMethodsPage;