import React from 'react';

const RegexOptionsAndExamples = () => {
    return (
        <div className="page-container">
            <h1>Опції та модифікатори регулярних виразів і приклади застосування регулярних виразів</h1>
            <p>
                При створенні регулярного виразу можна додавати опції, що модифікують його поведінку. Наприклад:
            </p>
            <ul>
                <li>
                    <strong>i:</strong> Регістронезалежний пошук.
                </li>
                <li>
                    <strong>g:</strong> Пошук всіх відповідностей у тексті.
                </li>
                <li>
                    <strong>m:</strong> Пошук в кожному рядку окремо.
                </li>
            </ul>
            <pre>
                <code>
                    {`
const regex = /Hello/gi;
const text = "Hello, world! Hi, there!";
const matches = text.match(regex);
console.log(matches); // Виведе ["Hello", "Hi"]
                    `}
                </code>
            </pre>
            <p>
                Це лише вступ до роботи з регулярними виразами. У наступних розділах ми розглянемо більше опцій, методів та прикладів використання регулярних виразів для обробки текстових даних.
            </p>

            <h2>Приклади застосування регулярних виразів</h2>
            <p>
                Регулярні вирази виявляються надзвичайно корисними при обробці тексту. Давайте розглянемо декілька прикладів їх застосування:
            </p>

            <h3>Пошук email-адрес</h3>
            <p>
                Регулярні вирази можуть допомогти вам знайти всі email-адреси в тексті.
            </p>
            <pre>
                <code>
                    {`
const text = "Email me at john.doe@example.com or support@mywebsite.com";
const emailRegex = /\\S+@\\S+\\.\\S+/g;
const emails = text.match(emailRegex);
console.log(emails); // ["john.doe@example.com", "support@mywebsite.com"]
                    `}
                </code>
            </pre>

            <h3>Вилучення номерів телефонів</h3>
            <p>
                Ви можете знайти та вилучити номери телефонів з тексту.
            </p>
            <pre>
                <code>
                    {`
const text = "Call me at +1 (123) 456-7890 or +44 (20) 1234 5678";
const phoneRegex = /\\+\\d{1,4} \\(\\d{1,4}\\) \\d{1,4}-\\d{1,4}/g;
const phoneNumbers = text.match(phoneRegex);
console.log(phoneNumbers); // ["+1 (123) 456-7890", "+44 (20) 1234 5678"]
                    `}
                </code>
            </pre>

            <h3>Валідація email-адреси</h3>
            <p>
                Регулярні вирази також можуть використовуватися для перевірки правильності введених email-адрес.
            </p>
            <pre>
                <code>
                    {`
const email = "john.doe@example.com";
const emailRegex = /\\S+@\\S+\\.\\S+/;
if (emailRegex.test(email)) {
  console.log("Email адреса правильна.");
} else {
  console.log("Неправильний формат email адреси.");
}
                    `}
                </code>
            </pre>

            <h3>Валідація URL-адреси</h3>
            <p>
                Аналогічно, ви можете перевірити правильність URL-адреси.
            </p>
            <pre>
                <code>
                    {`
const url = "<https://www.example.com>";
const urlRegex = /^(https?|ftp):\\/\\/[^\\s/$.?#].[^\\s]*$/;
if (urlRegex.test(url)) {
  console.log("URL адреса правильна.");
} else {
  console.log("Неправильний формат URL адреси.");
}
                    `}
                </code>
            </pre>

            <h2>Висновок</h2>
            <p>
                Ці приклади лише деякі зі способів використання регулярних виразів для роботи з текстовими даними в JavaScript. Вони можуть бути корисними при обробці, пошуку та валідації різних типів інформації.
            </p>
        </div>
    );
};

export default RegexOptionsAndExamples;