import React from 'react';

const URLAndLocationPage = () => {
    return (
        <div className="page-container">
            <h1>Робота з URL та location</h1>

            <p>
                URL (Uniform Resource Locator) визначає адресу в Інтернеті, де можна знайти ресурс. В JavaScript ви можете взаємодіяти з URL та об'єктом <code>Location</code> для отримання та зміни поточної адреси сторінки. Цей розділ розгляне основні аспекти роботи з URL і об'єктом <code>Location</code>.
            </p>

            <h2>Вступ до URL та Location</h2>
            <p>
                URL (Uniform Resource Locator) - це рядок, який вказує адресу ресурсу в Інтернеті. URL складається з кількох частин, включаючи протокол (наприклад, HTTP або HTTPS), доменне ім'я (наприклад, <code>www.example.com</code>), шлях до ресурсу (наприклад, <code>/page</code>), і, за необхідності, параметри запиту (query parameters).
            </p>
            <pre>
                <code>
{`Приклад URL:
https://www.example.com/page?param1=value1&param2=value2`}
                </code>
            </pre>
            <p>
                URL використовується для ідентифікації та доступу до різних ресурсів в Інтернеті, таких як веб-сторінки, зображення, файли та багато інших. У веб-розробці часто виникає необхідність отримання та зміни URL сторінки, і для цього використовуються об'єкт <code>Location</code>.
            </p>

            <h2>Робота з об'єктом Location</h2>
            <p>
                Об'єкт <code>Location</code> надає доступ до різних властивостей та методів для роботи з URL поточної сторінки. Він доступний через властивість <code>window.location</code>. Ось деякі основні можливості роботи з об'єктом <code>Location</code>.
            </p>

            <h3>Отримання поточного URL</h3>
            <p>
                Для отримання поточного URL використовуйте властивість <code>href</code>.
            </p>
            <pre>
                <code>
{`const currentURL = window.location.href;
console.log("Поточний URL:", currentURL);`}
                </code>
            </pre>

            <h3>Отримання компонентів URL</h3>
            <p>
                URL складається з різних компонентів, таких як протокол, домен, шлях, параметри запиту тощо. Ви можете отримати ці компоненти окремо за допомогою відповідних властивостей <code>Location</code>.
            </p>
            <pre>
                <code>
{`const protocol = window.location.protocol; // Повертає протокол (наприклад, "https:")
const host = window.location.host; // Повертає домен та порт (наприклад, "www.example.com:80")
const hostname = window.location.hostname; // Повертає тільки домен (наприклад, "www.example.com")
const port = window.location.port; // Повертає номер порта (наприклад, "80")
const pathname = window.location.pathname; // Повертає шлях (наприклад, "/page")
const search = window.location.search; // Повертає параметри запиту (наприклад, "?param1=value1&param2=value2")
const hash = window.location.hash; // Повертає якорну частину URL (наприклад, "#section")`}
                </code>
            </pre>

            <h3>Зміна URL</h3>
            <p>
                Ви також можете змінювати URL за допомогою об'єкта <code>Location</code>. Наприклад, для переходу на нову сторінку ви можете просто змінити значення <code>href</code>.
            </p>
            <pre>
                <code>
{`window.location.href = "https://www.newpage.com";`}
                </code>
            </pre>
            <p>
                Це викличе перехід на нову сторінку з URL <code>"https://www.newpage.com"</code>.
            </p>

            <h3>Перевірка URL</h3>
            <p>
                Об'єкт <code>Location</code> дозволяє вам перевіряти різні аспекти URL, наприклад, чи містить він певну частину, як параметри запиту, якорну частину тощо. Для цього ви можете використовувати різні методи та властивості, такі як <code>pathname</code>, <code>search</code>, <code>hash</code>, <code>includes()</code>, <code>startsWith()</code>, тощо.
            </p>
            <pre>
                <code>
{`if (window.location.search.includes("param1=value1")) {
    console.log("URL містить параметр 'param1'");
}

if (window.location.pathname.startsWith("/products")) {
    console.log("URL починається з '/products'");
}`}
                </code>
            </pre>

            <h2>Приклади роботи з URL і Location</h2>
            <p>
                Давайте розглянемо декілька прикладів використання URL та об'єкта <code>Location</code>.
            </p>

            <h3>Перевірка поточного URL</h3>
            <pre>
                <code>
{`const currentURL = window.location.href;

if (currentURL.includes("example.com")) {
    console.log("Ви на веб-сайті example.com");
}`}
                </code>
            </pre>

            <h3>Перехід на іншу сторінку після затримки</h3>
            <pre>
                <code>
{`// Початковий URL
console.log("Початковий URL:", window.location.href);

// Затримка в 3 секунди
setTimeout(function () {
    // Зміна URL та перехід на іншу сторінку після затримки
    window.location.href = "https://www.newpage.com";
}, 3000);`}
                </code>
            </pre>
            <p>
                Це призведе до переходу на нову сторінку після трьох секунд очікування.
            </p>

            <h3>Отримання параметрів запиту</h3>
            <pre>
                <code>
{`// Приклад URL з параметрами запиту
const url = "https://www.example.com/page?param1=value1&param2=value2";

// Отримання параметрів запиту
const searchParams = new URLSearchParams(window.location.search);
const param1 = searchParams.get("param1");
const param2 = searchParams.get("param2");

console.log("param1:", param1);
console.log("param2:", param2);`}
                </code>
            </pre>
            <p>
                Цей код розбирає URL та отримує значення параметрів запиту <code>"param1"</code> та <code>"param2"</code>.
            </p>
        </div>
    );
};

export default URLAndLocationPage;