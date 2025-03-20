import React from 'react';

const AsyncAwaitPage = () => {
    return (
        <div className="page-container">
            <h1>async...await</h1>

            <p>
                <code>async...await</code> є синтаксичним цукром над <code>Promise</code>, що робить код асинхронного JavaScript більш зрозумілим та зручним для написання. Ключове слово <code>async</code> вказує, що функція повертає <code>Promise</code>, а <code>await</code> використовується для очікування виконання <code>Promise</code> та отримання його результату.
            </p>

            <h2>async Функції:</h2>
            <p>
                Ключове слово <code>async</code> використовується для визначення функції, яка повертає обіцянку (<code>Promise</code>). Функція, яка має <code>async</code> перед своєю декларацією, автоматично повертає <code>Promise</code>.
            </p>
            <pre>
                <code>
{`async function fetchData() {
    return 'Data fetched!';
}`}
                </code>
            </pre>

            <h2>await Оператор:</h2>
            <p>
                Оператор <code>await</code> працює тільки в межах <code>async</code> функцій. Він призупиняє виконання функції до тих пір, поки передана обіцянка не буде виконана або відхилена, та повертає його результат.
            </p>
            <p>
                Ось приклад з промісом, який виконується за 1 секунду:
            </p>
            <pre>
                <code>
{`async function testPromise() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("готово!"), 1000)
  });

  let result = await promise; // чекатиме, поки проміс не виконається (*)

  alert(result); // "готово!"
}

testPromise();`}
                </code>
            </pre>
            <p>
                Виконання функції “призупиняється” у рядку (*) і відновлюється, коли проміс виконається, а результатом стає <code>result</code>. Отже, код вище показує “готово!” через одну секунду.
            </p>
            <p>
                Підкреслимо: <code>await</code> буквально призупиняє виконання функції до тих пір, поки проміс не виконається, а потім відновлює її з результатом проміса. Це не вимагає жодних ресурсів ЦП, тому що рушій JavaScript може тим часом робити інші завдання: виконувати інші скрипти, обробляти події тощо.
            </p>
            <p>
                Це просто більш елегантний синтаксис отримання результату проміса, ніж <code>promise.then</code>. Зокрема, так це легше читати й писати.
            </p>

            <h2>Використання</h2>
            <h3>1. Використання в Контексті Функцій:</h3>
            <p>
                Використання <code>async</code> та <code>await</code> зроблює асинхронний код схожим на синхронний, що полегшує його розуміння та обслуговування.
            </p>
            <pre>
                <code>
{`async function fetchData() {
    try {
        let result1 = await fetch('https://example.com/data1');
        let result2 = await fetch('https://example.com/data2');
        console.log(result1, result2);
    } catch (error) {
        console.error('Error:', error);
    }
}`}
                </code>
            </pre>

            <h3>2. Використання в Контексті Обіцянок:</h3>
            <p>
                <code>async</code> та <code>await</code> можна використовувати в контексті обіцянок для кращого керування асинхронним кодом.
            </p>
            <pre>
                <code>
{`const fetchData = async () => {
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data fetched!');
        }, 1000);
    });

    console.log(result);
};

fetchData();`}
                </code>
            </pre>

            <h3>Не можна використовувати await у звичайних функціях:</h3>
            <p>
                Якщо ми спробуємо використати <code>await</code> у не-асинхронній функції, виникне синтаксична помилка:
            </p>
            <pre>
                <code>
{`function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}`}
                </code>
            </pre>
        </div>
    );
};

export default AsyncAwaitPage;