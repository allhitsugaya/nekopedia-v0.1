import React from 'react';

const TypeScriptBasicsPage = () => {
    return (
        <div className="page-container">
            <h1>Основні поняття</h1>

            <p>
                <strong>TypeScript</strong> - це мова програмування, яка є надмножиною (супермножиною) JavaScript. Вона додає до JavaScript статичну типізацію, що дозволяє визначати типи змінних, параметрів та повертаємих значень функцій. TypeScript компілюється в JavaScript, тому код, написаний на TypeScript, може бути використаний в будь-якому проекті, який використовує JavaScript.
            </p>

            <p>
                TypeScript був представлений Microsoft як відкрите джерело в 2012 році. З того часу він став дуже популярним у розробці великих проектів, оскільки він допомагає уникнути багатьох типових помилок та полегшує рефакторинг коду.
            </p>

            <h2>Основні Типи Даних</h2>
            <p>
                Перечислення базових типів: <code>number</code>, <code>string</code>, <code>boolean</code>, <code>object</code>.
            </p>
            <pre>
                <code>
{`let age: number = 25;
let name: string = 'John';
let isStudent: boolean = true;
let person: object = { name: 'John', age: 25 };`}
                </code>
            </pre>

            <h2>Визначення типів для змінних та параметрів функцій</h2>
            <pre>
                <code>
{`// Визначення типу для змінної
let count: number;
count = 10;

// Визначення типу для параметра функції
function multiply(x: number, y: number): number {
  return x * y;
}`}
                </code>
            </pre>

            <h2>Введення в інтерфейси та типи для створення власних структур даних</h2>
            <pre>
                <code>
{`// Визначення інтерфейсу
interface Person {
  name: string;
  age: number;
}

// Використання інтерфейсу
let student: Person = { name: 'Alice', age: 22 };

// Визначення типу
type Point = { x: number; y: number };

// Використання типу
let coordinates: Point = { x: 10, y: 20 };`}
                </code>
            </pre>

            <p>
                Цей конспект покриває основні поняття TypeScript, включаючи введення в мову, базові типи даних та використання інтерфейсів та типів для визначення структур даних.
            </p>
        </div>
    );
};

export default TypeScriptBasicsPage;