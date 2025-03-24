import React from 'react';

const FormEvents = () => {
    return (
        <div className="page-container">
            <h1>Події елементів форми</h1>
            <p>
                JavaScript дозволяє створювати інтерактивні форми, які реагують на події, такі як натискання кнопки, введення тексту або відправка даних. Один з найпоширеніших способів використання подій на елементах форми - це валідація даних, які користувач вводить. Наприклад, ми можемо перевіряти, чи правильно користувач ввів свою адресу електронної пошти.
            </p>

            <h2>Типи подій форми</h2>
            <ul>
                <li>
                    <strong>click:</strong> Спрацьовує при натисканні на елемент.
                </li>
                <li>
                    <strong>submit:</strong> Спрацьовує при відправці форми. Це дозволяє валідувати введені дані перед їх відправкою.
                </li>
                <li>
                    <strong>input:</strong> Спрацьовує при введенні даних в текстове поле або інший елемент.
                </li>
                <li>
                    <strong>change:</strong> Спрацьовує при зміні значення елемента, такого як <code>&lt;select&gt;</code>.
                </li>
                <li>
                    <strong>focus:</strong> Спрацьовує при фокусуванні на елементі, наприклад, коли користувач клікає на текстовому полі.
                </li>
            </ul>

            <h2>Приклад №1</h2>
            <p>
                Для навішування обробників подій на елементи форми ми використовуємо <code>addEventListener</code>. Ось приклад додавання обробника події до значення яке вводить користувач:
            </p>
            <pre>
                <code>
                    {`
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form action="#" id="my-form">
    <label for="email">
        <span>email: </span>
        <input type="text" name="email" id="email">
    </label>
    <span id="message"></span>
</form>
<script>
    const emailInput = document.getElementById('email');
    const messageSpan = document.getElementById('message');

    emailInput.addEventListener('input', function (event) {
        const email = event.target.value;
        if (email.includes('@')) {
            messageSpan.innerText = ''
        } else {
            messageSpan.innerText = 'Email повинен мати символ "@"'
        }
    });
</script>
</body>
</html>
                    `}
                </code>
            </pre>
            <p>
                Отже, цей код дозволяє валідувати введену адресу електронної пошти на наявність символу '@' і надавати відповідне повідомлення користувачу. Давайте подивимося детально на кроки:
            </p>
            <ul>
                <li>
                    HTML-форма містить одне текстове поле для введення адреси електронної пошти (email) і мітку до нього.
                </li>
                <li>
                    У веб-сторінці є також <code>&lt;span&gt;</code> з ідентифікатором <code>message</code>, який поки що є порожнім.
                </li>
                <li>
                    Вставлений JavaScript код визначає змінні <code>emailInput</code> та <code>messageSpan</code>, які посилаються на текстове поле та <code>&lt;span&gt;</code> відповідно.
                </li>
                <li>
                    Відбувається реєстрація обробника події <code>input</code> для текстового поля з ідентифікатором <code>email</code>. Це означає, що коли користувач вводить текст в поле, буде викликана функція-обробник, що визначена всередині слухача.
                </li>
                <li>
                    В обробнику події отримується значення введеного тексту (email) за допомогою <code>event.target.value</code>.
                </li>
                <li>
                    Перевіряється, чи містить введений текст символ '@'. Якщо так, то <code>&lt;span id="message"&gt;</code> очищається, і повідомлення про помилку (якщо воно вже було відображене) прибирається.
                </li>
                <li>
                    Якщо в тексті немає символу '@', то в <code>&lt;span&gt;</code> із ідентифікатором <code>message</code> встановлюється текст "Email повинен мати символ '@'".
                </li>
            </ul>

            <h2>Приклад №2</h2>
            <p>
                Цей код демонструє, як додавати обробники подій до текстового поля та форми для відслідковування подій вводу та відправки форми, а також виведення повідомлень в консоль для відстеження цих подій.
            </p>
            <pre>
                <code>
                    {`
// Отримуємо посилання на текстове поле за ідентифікатором
const myInput = document.getElementById('myInput');

// Додаємо обробник події для введення даних
myInput.addEventListener('input', function() {
    console.log('Користувач ввів дані:', myInput.value);
});

// Отримуємо посилання на форму за ідентифікатором
const myForm = document.getElementById('myForm');

// Додаємо обробник події для відправки форми
myForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Зупиняємо стандартну відправку форми
    console.log('Дані відправлено:', myInput.value);
});
                    `}
                </code>
            </pre>
            <p>
                Цей код виконує наступні дії:
            </p>
            <ul>
                <li>
                    Пошук елемента за ідентифікатором "myInput" у структурі DOM (Document Object Model) і отримання посилання на цей елемент.
                </li>
                <li>
                    Додавання обробника події для текстового поля "myInput" для події <code>input</code>. Обробник буде виконуватися, коли користувач буде вводити дані у текстове поле. В обробнику відбувається виведення в консоль повідомлення "Користувач ввів дані:" разом зі значенням, яке ввів користувач у поле <code>myInput</code>.
                </li>
                <li>
                    Пошук форми за ідентифікатором "myForm" у структурі DOM і отримання посилання на цей елемент.
                </li>
                <li>
                    Додавання обробника події для форми "myForm" для події <code>submit</code>. Обробник буде виконуватися, коли користувач намагається відправити форму, наприклад, натискаючи кнопку "Submit". В обробнику події виконується така дія:
                    <ul>
                        <li>
                            <code>event.preventDefault();</code> зупиняє стандартну відправку форми, тобто перехоплює стандартну поведінку браузера при натисканні на кнопку "Submit", щоб заборонити перезавантаження сторінки або відправку даних на сервер.
                        </li>
                        <li>
                            <code>console.log('Дані відправлено:', myInput.value);</code> виводить в консоль повідомлення "Дані відправлено:", разом із значенням, яке користувач ввів у текстове поле.
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default FormEvents;