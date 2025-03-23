import React from 'react';

const EventDelegationExamples = () => {
    return (
        <div className="page-container">
            <h1>Приклади Делегування Подій</h1>

            <h2>Обробка кліків на списку елементів</h2>
            <p>
                Розглянемо приклад обробки кліків на списку елементів за допомогою делегування подій. Уявімо, що у нас є ненумерований список <code>ul</code>, і ми хочемо реагувати на кліки на кожному пункті списку. Ми можемо встановити обробник подій на батьківському елементі <code>ul</code> та визначити, який саме пункт був клікнутий.
            </p>
            <pre>
                <code>
{`<ul id="myList">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>`}
                </code>
            </pre>
            <pre>
                <code>
{`const myList = document.getElementById("myList");

myList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        // Отримати текст клікнутого пункту
        const clickedItemText = event.target.textContent;
        console.log("Клікнуто на пункті: " + clickedItemText);
    }
});`}
                </code>
            </pre>
            <p>
                У цьому прикладі ми використовуємо делегування подій, щоб відслідковувати кліки на кожному пункті списку, хоча обробник подій призначено батьківському елементу <code>ul</code>.
            </p>

            <h2>Валідація форми за допомогою делегування</h2>
            <p>
                Інший приклад використання делегування подій - це валідація форми перед її відправленням. Ми можемо встановити обробник подій на формі та перевірити валідність даних, коли користувач намагається відправити форму.
            </p>
            <pre>
                <code>
{`<form id="myForm">
    <input type="text" name="username" placeholder="Ім'я користувача">
    <input type="email" name="email" placeholder="Email">
    <button type="submit">Відправити</button>
</form>`}
                </code>
            </pre>
            <pre>
                <code>
{`const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

function validateForm() {
    // Ваш код валідації форми
    return true; // Повернути true, якщо дані коректні
}`}
                </code>
            </pre>
            <p>
                У цьому прикладі ми використовуємо делегування подій, щоб відслідковувати подію <code>submit</code> на формі і викликати функцію валідації. Якщо дані не відповідають вимогам, ми зупиняємо подію і запобігаємо відправленню форми.
            </p>

            <div className='conclusion'>
                <h2>Висновок</h2>
                <p>
                    Делегування подій - це потужний підхід до роботи з подіями в JavaScript, який дозволяє зменшити
                    кількість обробників подій на сторінці та спрощує роботу з багатьма елементами. Використовуючи
                    делегування, ви можете покращити продуктивність та підтримуваність свого коду, особливо при
                    взаємодії з багатою кількістю динамічно створених елементів.
                </p>
            </div>
        </div>
    );
};

export default EventDelegationExamples;