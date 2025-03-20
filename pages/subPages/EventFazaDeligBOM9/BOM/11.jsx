import React from 'react';

const ScreenObjectPage = () => {
    return (
        <div className="page-container">
            <h1>Робота з об'єктом screen</h1>

            <p>
                Об'єкт <code>screen</code> надає інформацію про екран користувача, таку як розмір, роздільна здатність та інші характеристики екрана. Об'єкт <code>screen</code> може бути корисним для розробки веб-додатків, які адаптуються до різних розмірів та характеристик екранів. У цьому розділі ми розглянемо основи роботи з об'єктом <code>screen</code> та надамо приклади його використання.
            </p>

            <h2>Основи роботи з об'єктом screen</h2>
            <p>
                Об'єкт <code>screen</code> містить інформацію про екран користувача. Ви можете використовувати його властивості та методи для отримання розміру екрана, роздільної здатності та інших характеристик.
            </p>

            <h3>Отримання розміру екрана</h3>
            <p>
                Для отримання розміру екрана використовуйте властивості <code>width</code> (ширина) та <code>height</code> (висота).
            </p>
            <pre>
                <code>
{`const screenWidth = screen.width;
const screenHeight = screen.height;

console.log(\`Розмір екрана: \${screenWidth} x \${screenHeight}\`);`}
                </code>
            </pre>

            <h3>Отримання роздільної здатності екрана</h3>
            <p>
                Властивості <code>availWidth</code> та <code>availHeight</code> містять роздільну здатність екрана без урахування панелей інструментів браузера чи інших елементів.
            </p>
            <pre>
                <code>
{`const screenResolutionWidth = screen.availWidth;
const screenResolutionHeight = screen.availHeight;

console.log(\`Роздільна здатність екрана: \${screenResolutionWidth} x \${screenResolutionHeight}\`);`}
                </code>
            </pre>

            <h3>Інші властивості об'єкта screen</h3>
            <ul>
                <li>
                    <code>colorDepth</code>: Вказує кількість бітів на піксель для відтворення кольорів на екрані.
                </li>
                <li>
                    <code>pixelDepth</code>: Аналогічно до <code>colorDepth</code>, вказує кількість бітів на піксель.
                </li>
            </ul>

            <h2>Приклади використання об'єкта screen</h2>
            <p>
                Давайте розглянемо кілька прикладів використання об'єкта <code>screen</code>.
            </p>

            <h3>Адаптація зображень до роздільної здатності екрана</h3>
            <p>
                У цьому прикладі зображення вибирається відповідно до роздільної здатності екрана користувача, що дозволяє адаптувати вміст веб-сторінки до розмірів екрана.
            </p>
            <pre>
                <code>
{`const screenWidth = screen.width;
const screenHeight = screen.height;

let imageUrl = "default-image.jpg";

if (screenWidth <= 1024 && screenHeight <= 768) {
    imageUrl = "small-screen-image.jpg";
} else if (screenWidth <= 1920 && screenHeight <= 1080) {
    imageUrl = "medium-screen-image.jpg";
} else {
    imageUrl = "large-screen-image.jpg";
}

// Завантаження та відображення відповідного зображення
const imageElement = document.getElementById("image");
imageElement.src = imageUrl;`}
                </code>
            </pre>

            <h3>Перевірка кольорової глибини</h3>
            <p>
                У цьому прикладі перевіряється кольорова глибина екрана користувача, що дозволяє адаптувати відображення графічних елементів.
            </p>
            <pre>
                <code>
{`const colorDepth = screen.colorDepth;

if (colorDepth >= 24) {
    console.log("Ваш екран підтримує відтворення великої кількості кольорів.");
} else if (colorDepth >= 16) {
    console.log("Ваш екран підтримує відтворення середньої кількості кольорів.");
} else {
    console.log("Ваш екран підтримує обмежене відтворення кольорів.");
}`}
                </code>
            </pre>
        </div>
    );
};

export default ScreenObjectPage;