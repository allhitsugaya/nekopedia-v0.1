import React from 'react';

const NamingConventions = () => {
    return (
        <div className="page-container">
            <h1>Частина 2.1: Неймінг</h1>
            <p>
                Важливість неймінгу та коментування в JavaScript важко переоцінити. Іменування змінних та функцій впливає на зрозумілість коду. Правильний неймінг покращує розуміння функцій та полегшує уникнення помилок. Коментарі, у свою чергу, допомагають пояснити складні частини коду та документувати публічні методи. Дотримання правил неймінгу та розумне коментування сприяють підтримці та безпеці коду, а також полегшують спільну роботу в команді розробників.
            </p>

            <h2>1. Дотримання конвенцій іменування</h2>
            <p>
                Правильний вибір назв змінних та функцій є важливим елементом написання чистого та зрозумілого коду. Коректні назви допомагають зробити код більш зрозумілим та підтримуваним. Давайте ми розглянемо важливі аспекти вибору правильних назв для змінних та функцій в мові JavaScript.
            </p>

            <h3>Приклади</h3>
            <h4>CamelCase</h4>
            <p>
                Одна з найпоширеніших конвенцій іменування в JavaScript. Імена змінних та функцій пишуться з малої літери, окрім першої, і кожне нове слово починається з великої літери. Наприклад, <code>myVariable</code>, <code>calculateTotalAmount</code>.
            </p>
            <pre>
                <code>
                    {`
let myVariable = 42;
function calculateTotalAmount(price, quantity) {
    return price * quantity;
}
                    `}
                </code>
            </pre>

            <h4>snake_case</h4>
            <p>
                Ця конвенція полягає в тому, що слова в іменах розділяються підкресленням. Це не часто використовується в назвах змінних та функцій у JavaScript.
            </p>
            <pre>
                <code>
                    {`
let my_variable = 42;
function calculate_total_amount(price, quantity) {
    return price * quantity;
}
                    `}
                </code>
            </pre>

            <h4>PascalCase</h4>
            <p>
                В цій конвенції кожне слово починається з великої літери, і жодних інших роздільників не використовується. Використовується для назв класів та конструкторів.
            </p>
            <pre>
                <code>
                    {`
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
                    `}
                </code>
            </pre>

            <h2>Зрозумілі та описові назви</h2>
            <p>
                <strong>Зрозумілість:</strong> Назви змінних та функцій повинні бути зрозумілими та легко читатися. Вони повинні відображати суть об'єкта або операції, яку вони виконують. Якщо змінна відповідає за збереження кількості товарів, то <code>quantity</code> буде більш зрозумілою назвою, ніж <code>q</code>.
            </p>
            <p>
                <strong>Описовість:</strong> Імена мають бути якомога більш описовими. Наприклад, <code>calculateTotalAmount</code> говорить нам більше, ніж <code>calculate</code>.
            </p>

            <h2>Уникнення абревіатур та скорочень</h2>
            <p>
                Уникайте використання абревіатур та скорочень, які можуть бути незрозумілими для інших розробників. Наприклад, <code>getInfo</code> краще, ніж <code>getInf</code>, якщо це не є загальноприйнятим скороченням в проекті.
            </p>
            <pre>
                <code>
                    {`
// Погано: скорочення, яке може бути незрозумілим
function getInf(data) {
    // ...
}

// Добре: зрозуміла та описова назва
function getInfo(data) {
    // ...
}
                    `}
                </code>
            </pre>

            <h2>Висновок</h2>
            <p>
                Загальні принципи іменування змінних та функцій допомагають зробити код більш зрозумілим і підтримуваним. Пам'ятайте, що зрозумілі та описові назви є ключем до успішної розробки та спільної роботи над проектами.
            </p>
        </div>
    );
};

export default NamingConventions;