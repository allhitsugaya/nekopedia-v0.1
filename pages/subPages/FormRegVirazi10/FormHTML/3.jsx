import React from 'react';

const FormAttributes = () => {
    return (
        <div className="page-container">
            <h1>Особливості атрибутів action і method форм в HTML</h1>
            <p>
                У HTML-формах існують різні атрибути, які визначають, як саме дані форми будуть оброблятися та надсилатися на сервер. Два з найважливіших атрибутів - <code>action</code> і <code>method</code>.
            </p>

            <h2>action - куди відправити дані</h2>
            <p>
                Атрибут <code>action</code> визначає URL-адресу, на яку будуть відправлені дані після натискання на кнопку "Відправити". Цей URL може бути абсолютним або відносним відносно поточної сторінки. Зазвичай вказується адреса серверного скрипту, який обробляє дані форми.
            </p>
            <pre>
                <code>
                    {`
<form action="https://example.com/submit.php" method="post">
    <!-- Елементи форми -->
</form>
                    `}
                </code>
            </pre>

            <h2>method - Як відправити дані</h2>
            <p>
                Атрибут <code>method</code> вказує метод, який буде використовуватися для відправки даних на сервер. Два основні методи - <code>GET</code> і <code>POST</code>.
            </p>
            <h3>GET</h3>
            <p>
                <code>GET</code> - використовується для отримання даних з сервера. Дані передаються у URL-запиті. Це підходить для запиту даних або пошуку, але не рекомендується для надсилання чутливої інформації, так як дані видимі у URL.
            </p>
            <pre>
                <code>
                    {`
<form action="search.php" method="get">
    <!-- Елементи форми -->
    <button type="submit">Пошук</button>
</form>
                    `}
                </code>
            </pre>
            <h3>POST</h3>
            <p>
                <code>POST</code> - використовується для надсилання даних на сервер у вигляді тіла запиту. Це рекомендований метод для надсилання чутливої інформації, так як дані не відображаються у URL.
            </p>
            <pre>
                <code>
                    {`
<form action="login.php" method="post">
    <!-- Елементи форми -->
    <button type="submit">Увійти</button>
</form>
                    `}
                </code>
            </pre>

            <h2>Приклад</h2>
            <pre>
                <code>
                    {`
<form action="submit.php" method="post">
    <label for="name">Ім'я:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Електронна пошта:</label>
    <input type="email" id="email" name="email" required>

    <button type="submit">Відправити</button>
</form>
                    `}
                </code>
            </pre>
            <p>
                У цьому прикладі форма має атрибут <code>action</code>, який вказує, куди надсилати дані, і атрибут <code>method</code>, який вказує метод надсилання даних (в даному випадку - <code>POST</code>). Коли користувач натискає кнопку "Відправити", дані форми будуть надіслані на сервер за вказаною адресою з використанням методу <code>POST</code>.
            </p>
            <p>
                Правильне використання атрибутів <code>action</code> і <code>method</code> допомагає забезпечити правильну обробку та надсилання даних форми на сервер.
            </p>
        </div>
    );
};

export default FormAttributes;