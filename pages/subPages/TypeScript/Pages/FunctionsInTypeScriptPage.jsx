import React from 'react';

const FunctionsInTypeScriptPage = () => {
    return (
        <div className="page-container">
            <h1>Робота з функціями</h1>

            <p>
                В сучасному світі розробки програмного забезпечення TypeScript вже давно став необхідним інструментом для тих, хто прагне високої якості та стабільності свого коду. Відповідальність за це несе не тільки сам розробник, а й засоби, які він обирає для своєї роботи.
            </p>

            <p>
                Одним із ключових аспектів TypeScript є його потужна система визначення типів. У цьому контексті робота з функціями набуває особливого значення, адже вони є основною будівельною одиницею програми. У даній доповіді ми детально розглянемо основи роботи з функціями в TypeScript, надаючи конкретні приклади та використовуючи передові практики, які забезпечать читабельність, надійність та гнучкість вашого коду. Давайте розглянемо ключові аспекти визначення типів для функцій, використання необов’язкових та за замовчуванням параметрів, а також принципи перевантаження функцій, які забезпечать елегантну та розширювану архітектуру коду.
            </p>

            <h2>Визначення типів для функцій</h2>
            <p>
                В TypeScript визначення типів для функцій є важливою практикою, що дозволяє забезпечити безпеку коду та допомагає розробникам розуміти та очікувати, які дані обробляються та повертаються функцією.
            </p>
            <p>
                Параметри функції можуть мати різні типи, і тип повернення визначається після <code>:</code>. У прикладі, функція <code>add</code> приймає два числових параметри та повертає числовий результат типу <code>number</code>:
            </p>
            <pre>
                <code>
{`// Приклад визначення типів для функції
function add(x: number, y: number): number {
  return x + y;
}

// Використання функції
let result: number = add(5, 10);`}
                </code>
            </pre>

            <h2>Необов’язкові та за замовчуванням параметри</h2>
            <p>
                Необов’язкові параметри дозволяють функції приймати частковий набір аргументів, що може бути корисним у випадках, коли деякі значення можуть бути визначені за потреби. Параметри за замовчуванням надають значення, якщо вони не передаються.
            </p>
            <p>
                Це полегшує використання функцій та зроблює їх більш гнучкими.
            </p>
            <pre>
                <code>
{`// Використання необов’язкового параметра
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return \`\${greeting}, \${name}!\`;
  } else {
    return \`Hello, \${name}!\`;
  }
}

// Використання параметра за замовчуванням
function increment(value: number, step: number = 1): number {
  return value + step;
}`}
                </code>
            </pre>
            <p>
                Тут функція <code>greet</code> приймає два параметри, але <code>greeting</code> є необов’язковим. Функція <code>increment</code> має параметр <code>step</code>, який має значення за замовчуванням, якщо воно не передано. Завдяки символу <code>?</code>.
            </p>

            <h2>Перевантаження Функцій</h2>
            <p>
                Перевантаження функцій в TypeScript дозволяє описати різні варіанти виклику функції з різними типами аргументів і типами повернення. Це дозволяє розробникам викликати функцію з різними аргументами та очікувати відмінних результатів.
            </p>
            <p>
                Цей приклад показує функцію <code>multiply</code>, яка може приймати або числові, або рядкові параметри, повертаючи відповідно числовий або рядковий результат.
            </p>
            <pre>
                <code>
{`// Перевантаження функції
function multiply(value: number, factor: number): number;
function multiply(value: string, factor: number): string;
function multiply(value: any, factor: number): any {
  if (typeof value === 'number') {
    return value * factor;
  } else if (typeof value === 'string') {
    return value.repeat(factor);
  }
}

// Використання функції
let result1: number = multiply(5, 3);
let result2: string = multiply('abc', 3);`}
                </code>
            </pre>

            <p>
                У цьому доповідь розглянуті основні практики роботи з функціями в TypeScript. Зазначено важливість визначення типів для забезпечення безпеки коду та полегшення роботи над проектом.
            </p>
        </div>
    );
};

export default FunctionsInTypeScriptPage;