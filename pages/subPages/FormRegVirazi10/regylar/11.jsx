import React from 'react';

const StringMethodsWithRegex = () => {
    return (
        <div className="page-container">
            <h1>Використання методів рядків з регулярними виразами</h1>

            <h2>1. Метод match</h2>
            <p>
                Метод <code>match</code> дозволяє знаходити всі відповідності регулярному виразу в рядку. Він повертає масив, що містить всі відповідності.
            </p>
            <pre>
                <code>
                    {`
const text = "Hello, World! Hello, Universe!";
const regex = /Hello/g;
const matches = text.match(regex);
console.log(matches); // Виведе ["Hello", "Hello"]
                    `}
                </code>
            </pre>

            <h2>2. Метод test</h2>
            <p>
                Метод <code>test</code> перевіряє, чи відповідає рядок регулярному виразу. Він повертає <code>true</code>, якщо є відповідність, і <code>false</code>, якщо немає.
            </p>
            <pre>
                <code>
                    {`
const regex = /Hello/;
const text = "Hello, World!";
const result = regex.test(text);
console.log(result); // Виведе true
                    `}
                </code>
            </pre>

            <h2>3. Метод search</h2>
            <p>
                Метод <code>search</code> шукає позицію першої відповідності регулярному виразу в рядку. Він повертає індекс першої відповідності або <code>-1</code>, якщо відповідності не знайдено.
            </p>
            <pre>
                <code>
                    {`
const regex = /World/;
const text = "Hello, World!";
const position = text.search(regex);
console.log(position); // Виведе 7
                    `}
                </code>
            </pre>

            <h2>4. Метод replace</h2>
            <p>
                Метод <code>replace</code> дозволяє замінювати всі відповідності регулярного виразу у рядку на новий текст.
            </p>
            <pre>
                <code>
                    {`
const text = "Hello, World! Hello, Universe!";
const regex = /Hello/g;
const newText = text.replace(regex, "Hi");
console.log(newText); // Виведе "Hi, World! Hi, Universe!"
                    `}
                </code>
            </pre>
        </div>
    );
};

export default StringMethodsWithRegex;