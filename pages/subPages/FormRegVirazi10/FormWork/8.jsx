import React from 'react';

const FormDataHandling = () => {
    return (
        <div className="page-container">
            <h1>Робота з об'єктом FormData</h1>
            <p>
                Об'єкт <code>FormData</code> - це об'єкт JavaScript, який дозволяє зручно збирати дані з форми та відправляти їх на сервер. Він автоматично перетворює дані в формат, який може легко обробляти сервер.
            </p>

            <h2>Важливі аспекти використання FormData</h2>
            <ul>
                <li>
                    <strong>Автоматичне створення пар "ключ-значення":</strong> Об'єкт <code>FormData</code> автоматично створює пари для всіх полів форми, зберігаючи їхні значення.
                </li>
                <li>
                    <strong>Додавання додаткових даних:</strong> До створеного об'єкта <code>FormData</code> можна додавати додаткові дані за допомогою методу <code>append</code>.
                </li>
                <li>
                    <strong>Асинхронна відправка на сервер:</strong> Для відправлення даних на сервер використовується асинхронний AJAX запит. Відповідь сервера можна обробляти в обробнику подій. Проте будемо вивчати далі, як то робити.
                </li>
                <li>
                    <strong>Підтримка різних типів даних:</strong> Об'єкт <code>FormData</code> підтримує різні типи даних, включаючи тексти, файли та бінарні дані.
                </li>
            </ul>
            <p>
                Використання об'єкта <code>FormData</code> в поєднанні з AJAX (будемо вивчати далі) дозволяє легко та ефективно взаємодіяти з сервером при обробці даних з веб-форм.
            </p>

            <h2>Приклад використання FormData</h2>
            <pre>
                <code>
                    {`
// Створення об'єкту FormData з форми за її ідентифікатором
const form = document.getElementById('my-form');
const formData = new FormData(form);

// Додавання додаткових даних до об'єкта FormData
formData.append('user_id', 123);
formData.append('custom_field', 'some value');

// Display the key/value pairs
for (let data of formData.entries()) {
   console.log(data[0]+ ', ' + data[1]);
}
                    `}
                </code>
            </pre>
            <p>
                В цьому прикладі ми створюємо об'єкт <code>FormData</code> з форми <code>my-form</code>, додаємо додатковий параметр <code>user_id</code>, та <code>custom_field</code> а потім продивляемось ці дані.
            </p>

            <h2>Методи об'єкта FormData</h2>
            <p>
                При роботі з об'єктом <code>FormData</code>, ви можете використовувати різні методи для додавання, видалення та редагування даних у формі. Ось деякі з найважливіших методів:
            </p>

            <h3>1. append(name, value)</h3>
            <p>
                Цей метод дозволяє додавати пару "ключ-значення" до об'єкта <code>FormData</code>. Він приймає два аргументи: ім'я ключа та значення.
            </p>
            <pre>
                <code>
                    {`
formData.append('username', 'john_doe');
                    `}
                </code>
            </pre>

            <h3>2. delete(name)</h3>
            <p>
                Ви можете видалити ключ та відповідне значення з об'єкта <code>FormData</code> за допомогою цього методу.
            </p>
            <pre>
                <code>
                    {`
formData.delete('username');
                    `}
                </code>
            </pre>

            <h3>3. get(name)</h3>
            <p>
                Цей метод дозволяє отримати значення, яке відповідає ключу <code>name</code> в об'єкті <code>FormData</code>.
            </p>
            <pre>
                <code>
                    {`
const username = formData.get('username');
                    `}
                </code>
            </pre>

            <h3>4. getAll(name)</h3>
            <p>
                Якщо ви маєте декілька значень для одного ключа, цей метод допоможе отримати масив всіх цих значень.
            </p>
            <pre>
                <code>
                    {`
const allUsernames = formData.getAll('username');
                    `}
                </code>
            </pre>

            <h3>5. has(name)</h3>
            <p>
                Метод <code>has</code> перевіряє, чи існує ключ з ім'ям <code>name</code> в об'єкті <code>FormData</code>.
            </p>
            <pre>
                <code>
                    {`
const hasUsername = formData.has('username');
                    `}
                </code>
            </pre>

            <h3>6. set(name, value)</h3>
            <p>
                Якщо ви хочете змінити значення ключа, ви можете використовувати метод <code>set</code>. Він замінить попереднє значення новим.
            </p>
            <pre>
                <code>
                    {`
formData.set('username', 'new_username');
                    `}
                </code>
            </pre>

            <h3>7. keys(), values(), entries()</h3>
            <p>
                Ці методи повертають ітератори для ключів, значень і пар "ключ-значення" відповідно.
            </p>
            <pre>
                <code>
                    {`
for (const key of formData.keys()) {
    console.log(key);
}

for (const value of formData.values()) {
    console.log(value);
}

for (const pair of formData.entries()) {
    console.log(pair[0], pair[1]);
}
                    `}
                </code>
            </pre>

            <h2>Висновок</h2>
            <p>
                Об'єкт <code>FormData</code> також має інші корисні властивості та методи для роботи з даними форми. Вони дозволяють вам ефективно маніпулювати даними, які надходять з веб-форм та відправляються на сервер.
            </p>
        </div>
    );
};

export default FormDataHandling;