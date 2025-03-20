import React from 'react';

const ArrayMethodsPage = () => {
    return (
        <div>
            <h1>Основні методи та методи перебору масиву</h1>

            <h2>Основні методи масивів</h2>
            <p>JavaScript надає багато вбудованих методів для роботи з масивами. Ми розглянемо методи, такі як join, concat, slice, splice, і багато інших. Ці методи допомагають вирішувати різноманітні завдання з масивами.</p>

            <h3>Об'єднання масивів</h3>
            <pre>
        {`const moreFruits = ['grape', 'blueberry'];
const allFruits = fruits.concat(moreFruits); // ['apple', 'orange', 'cherry', 'grape', 'blueberry']`}
      </pre>

            <h3>Видалення підмасиву</h3>
            <pre>
        {`const someFruits = allFruits.slice(1, 2); // ['orange', 'cherry']`}
      </pre>

            <h3>Видалення елементів і вставка нових</h3>
            <pre>
        {`const removedFruits = allFruits.splice(1, 2, 'pear', 'watermelon');
// removedFruits = ['orange', 'cherry'], allFruits стане ['apple', 'pear', 'watermelon', 'grape', 'blueberry']`}
      </pre>

            <h2>Методи перебору масиву</h2>
            <p>Ми дослідимо методи для перебору масивів, такі як forEach, map, filter, та for. Ці методи дозволяють виконувати операції над кожним елементом масиву та створювати нові масиви або обчислювати значення.</p>

            <h3>1. Цикл for:</h3>
            <p>Це найбільш базовий метод перебору масиву. Ви використовуєте індекси для доступу до елементів масиву.</p>
            <pre>
        {`const fruits = ['apple', 'banana', 'cherry'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`}
      </pre>

            <h3>2. Цикл for...of:</h3>
            <p>Цей цикл спрощує перебір масиву, оскільки ви просто вказуєте змінну для кожного елемента масиву.</p>
            <pre>
        {`const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}`}
      </pre>

            <h3>3. Метод forEach:</h3>
            <p>Метод forEach є методом масиву, який приймає функцію зворотнього виклику та застосовує її до кожного елемента масиву.</p>
            <pre>
        {`const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit) => {
  console.log(fruit);
})`}
      </pre>

            <h3>4. Метод map:</h3>
            <p>Метод map також приймає функцію зворотнього виклику та створює новий масив, в якому кожен елемент є результатом функції.</p>
            <pre>
        {`const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);
console.log(doubled); // Виведе [2, 4, 6]`}
      </pre>

            <p>Різниця між цими методами полягає в зручності та призначенні. for та for...of дають вам більше контролю, але вимагають більше коду. forEach та map дозволяють спростити код та роблять його більш декларативним. Вибір методу залежить від ваших потреб і вподобань.</p>
        </div>
    );
}

export default ArrayMethodsPage;
