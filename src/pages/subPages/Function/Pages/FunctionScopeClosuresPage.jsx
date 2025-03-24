import React from 'react';

const FunctionScopeClosuresPage = () => {
    return (
        <div className="page-container">
            <h1>Область видимості функції</h1>
            <p>
                В JavaScript існують два рівні контекстів виконання коду: глобальний та локальний. Глобальний контекст визначається, коли код виконується поза всіма функціями. Локальні контексти виникають, коли ви визначаєте та викликаєте функції. Кожен контекст має свою власну область видимості для змінних, що визначені в ньому. Ця концепція дозволяє ізолювати та організувати ваш код.
            </p>

            <h2>Область видимості (scope)</h2>
            <p>
                Область видимості (scope) визначає, де та як змінні можуть бути доступними в коді. В JavaScript існують:
            </p>
            <ul>
                <li>глобальна область видимості</li>
                <li>локальні області видимості</li>
            </ul>
            <p>
                Які визначають, де можна отримати доступ до змінних. Давайте подивимося на приклади:
            </p>
            <pre>
        <code>
          {`
// Глобальна змінна
let globalVariable = 'Я глобальна';

function exampleFunction() {
    // Локальна змінна, доступна тільки у межах цієї функції
    let localVariable = 'Я локальна';

    console.log(globalVariable); // Можна отримати доступ до глобальної змінної
    console.log(localVariable); // Можна отримати доступ до локальної змінної
}

exampleFunction();

console.log(globalVariable); // Можна отримати доступ до глобальної змінної
console.log(localVariable); // Помилка: localVariable не визначена в цьому контексті
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі <code>globalVariable</code> оголошена за межами будь-якої функції і, отже, її можна отримати доступ у всьому коді. З іншого боку, <code>localVariable</code> оголошена в межах функції <code>exampleFunction</code> і, отже, її можна отримати доступ лише всередині цієї функції.
            </p>

            <h3>Параметри функцій</h3>
            <p>
                Крім глобальних та локальних змінних, функції також можуть отримувати параметри. Параметри - це значення, які передаються у функцію при її виклику. Давайте розглянемо приклад:
            </p>
            <pre>
        <code>
          {`
function mathCalc(a, b) {
    let sum = a + b;
    return sum;
}

let result = mathCalc(5, 3);
console.log(result); // Виведе 8
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі <code>mathCalc</code> - це функція, яка отримує два параметри <code>a</code> і <code>b</code>, додає їх разом і повертає результат. При виклику функції <code>mathCalc(5, 3)</code>, значення <code>5</code> передається у <code>a</code>, а значення <code>3</code> передається у <code>b</code>, і функція повертає суму цих двох значень, тобто <code>8</code>.
            </p>
            <p>
                Проте ви не зможете отримати доступ до <code>a</code> та <code>b</code> за межами функції:
            </p>
            <pre>
        <code>
          {`
function mathCalc(a, b) {
    let sum = a + b;
    return sum;
}

let result = mathCalc(5, 3);
console.log(result); // Виведе 8
console.log(a); // Uncaught ReferenceError: a is not defined
console.log(b); // ...
          `}
        </code>
      </pre>

            <h2>Замикання (closures)</h2>
            <p>
                Замикання - це функції, які мають доступ до змінних з області видимості батьківської функції, навіть після завершення роботи батьківської функції. Це дозволяє зберігати стан та інформацію, яка зберігається протягом тривалого часу.
            </p>
            <pre>
        <code>
          {`
function createCounter() {
    let localVariable = 0;

    function increment() {
        localVariable++;
        console.log(localVariable);
    }

    return increment;
}

let counter1 = createCounter();
let counter2 = createCounter();

counter1(); // Виведе 1
counter1(); // Виведе 2

counter2(); // Виведе 1
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі функція <code>createCounter</code> створює та повертає функцію <code>increment</code>. Кожний раз, коли <code>increment</code> викликається, вона збільшує значення <code>localVariable</code> на одиницю і виводить його. Крім того, кожний виклик <code>createCounter</code> створює нову область видимості зі своєю власною змінною <code>localVariable</code>, і ця змінна зберігається завдяки замиканню.
            </p>

            <h2>Заключення</h2>
            <p>
                Ці основи роботи з функціями, область видимості та замикання є фундаментальними концепціями JavaScript і відіграють важливу роль у розробці програм на цій мові. Детальне розуміння цих понять допоможе вам писати більш складні та потужні функції.
            </p>
        </div>
    );
};

export default FunctionScopeClosuresPage;