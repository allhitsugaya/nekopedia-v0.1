import React from 'react';

const FormDataHandling = () => {
    return (
        <div className="page-container">
            <h1>Робота з даними формами</h1>
            <p>
                Один з найважливіших аспектів веб-розробки - це взаємодія користувача з веб-сторінкою через форми. JavaScript дозволяє не лише збирати дані, які користувач вводить у форми, але і виконувати обробку та валідацію цих даних. У цьому розділі ми розглянемо, як отримати дані з полів форми та обробити події, пов'язані з формою.
            </p>

            <h2>Використання властивостей value, checked і selected</h2>
            <h3>1. Зчитування текстових полів</h3>
            <p>
                Для отримання тексту, який користувач ввів у текстове поле, використовується властивість <code>value</code>. Наприклад:
            </p>
            <pre>
                <code>
                    {`
const inputText = document.getElementById('text-input');
const textValue = inputText.value;
                    `}
                </code>
            </pre>

            <h3>2. Зчитування прапорцевих (чекбокс) полів</h3>
            <p>
                Для чекбоксів та радіокнопок, властивість <code>checked</code> вказує, чи вони вибрані:
            </p>
            <pre>
                <code>
                    {`
const checkbox = document.getElementById('checkbox-input');
const isChecked = checkbox.checked;
                    `}
                </code>
            </pre>

            <h3>3. Зчитування значення вибраного варіанту (список)</h3>
            <p>
                Для вибору зі списку використовується властивість <code>selected</code>. Для відповідного елементу <code>select</code> вказується <code>selected</code>.
            </p>
            <pre>
                <code>
                    {`
const selectElement = document.getElementById('select-input');
const selectedOption = selectElement.options[selectElement.selectedIndex].value;
                    `}
                </code>
            </pre>

            <h2>Обробка подій форми</h2>
            <h3>1. Подія submit</h3>
            <p>
                Вона спрацьовує при надсиланні форми. Ви можете додати обробник подій для перевірки та обробки даних перед надсиланням.
            </p>
            <pre>
                <code>
                    {`
const form = document.getElementById('my-form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Зупинити автоматичну відправку форми
    // Отримання та обробка даних з форми
});
                    `}
                </code>
            </pre>

            <h3>2. Подія reset</h3>
            <p>
                Ця подія відбувається, коли користувач натискає кнопку скидання форми (якщо вона є). Ви можете додати обробник подій для виконання певних дій при скиданні форми.
            </p>
            <pre>
                <code>
                    {`
const form = document.getElementById('my-form');
form.addEventListener('reset', function () {
    // Виконання дій при скиданні форми
});
                    `}
                </code>
            </pre>

            <h3>3. Подія change</h3>
            <p>
                Вона спрацьовує при зміні значення поля форми. Це корисно для негайної валідації даних або показу додаткових полів залежно від вибору.
            </p>
            <pre>
                <code>
                    {`
const inputText = document.getElementById('text-input');
inputText.addEventListener('change', function () {
    // Виконати дії після зміни текстового поля
});
                    `}
                </code>
            </pre>
        </div>
    );
};

export default FormDataHandling;