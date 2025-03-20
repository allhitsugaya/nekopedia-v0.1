import React from 'react';

const FormNameAttribute = () => {
    return (
        <div className="page-container">
            <h1>Пояснення ролі атрибуту name на полях форми</h1>
            <p>
                В HTML форми використовуються для збору та відправки даних на сервер. Кожне поле форми повинно бути ідентифіковане, і атрибут <code>name</code> відіграє важливу роль у цьому контексті.
            </p>
            <p>
                Атрибут <code>name</code> вказує ім'я поля форми, яке буде використано як ключ для відправлення даних на сервер. Всі дані, введені користувачем в це поле, будуть відправлені під цим іменем у вигляді параметру.
            </p>

            <h2>Приклад</h2>
            <pre>
                <code>
                    {`
<form action="submit.php" method="post">
    <label for="name">Ім'я:</label>
    <input type="text" id="name" name="user_name" required>

    <label for="email">Електронна пошта:</label>
    <input type="email" id="email" name="user_email" required>

    <button type="submit">Відправити</button>
</form>
                    `}
                </code>
            </pre>
            <p>
                У цьому прикладі поля форми мають атрибути <code>name</code>. Поле "Ім'я" має <code>name="user_name"</code>, а поле "Електронна пошта" - <code>name="user_email"</code>. Коли користувач вводить своє ім'я та адресу електронної пошти і надсилає форму, дані будуть відправлені на сервер під відповідними ключами.
            </p>

            <h2>Обробка на сервері</h2>
            <p>
                На сервері, призначений для обробки цієї форми, може виглядати так:
            </p>
            <pre>
                <code>
                    {`
$userName = $_POST['user_name'];
$userEmail = $_POST['user_email'];
                    `}
                </code>
            </pre>
            <p>
                Тут <code>$_POST['user_name']</code> і <code>$_POST['user_email']</code> - це дані, які були введені відповідно в поля "Ім'я" і "Електронна пошта" форми.
            </p>

            <h2>Роль атрибуту name</h2>
            <p>
                Роль атрибуту <code>name</code> важлива, оскільки вона дозволяє ідентифікувати дані на сервері та прив'язувати їх до конкретних полів форми. Це дозволяє легко обробляти і аналізувати введені користувачем дані.
            </p>
        </div>
    );
};

export default FormNameAttribute;