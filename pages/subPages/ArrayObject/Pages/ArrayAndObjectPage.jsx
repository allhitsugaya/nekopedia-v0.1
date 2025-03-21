import React from 'react';

const ArrayAndObjectPage = () => {
    return (
        <div className="page-container">
            <h1>Array та Object</h1>
            <p>
                В JavaScript, <code>Array</code> (масив) та <code>Object</code> (об'єкт) - це дві основні структури даних, які використовуються для зберігання та організації даних. В цій доповіді ми більш детально розглянемо роботу з об'єктами та масивами, включаючи створення об'єктів, використання методів для роботи з властивостями та додаванням/видаленням властивостей. Проте базово <code>Object</code> (об'єкт) та <code>Array</code> (масив) мають такий вигляд:
            </p>

            <h2>Об'єкт</h2>
            <pre>
        <code>
          {`
// Об'єкт
const obj = { key1: 1, key2: 2, key3: 3 };
console.log(obj['key1']); // Доступ за ключем
obj.newKey = 'значення'; // Додавання ключа
          `}
        </code>
      </pre>

            <h2>Масив</h2>
            <pre>
        <code>
          {`
// Масив
const arr = [1, 2, 3];
console.log(arr[0]); // Доступ за індексом
arr.push(4); // Додавання елементу
console.log(arr.length); // Властивість "length"
          `}
        </code>
      </pre>

            <h2>Тип</h2>
            <pre>
        <code>
          {`
// Тип
console.log(typeof obj); // "object" - об'єкт вважається об'єктом
console.log(typeof arr); // "object" - масив також вважається об'єктом
          `}
        </code>
      </pre>
        </div>
    );
};

export default ArrayAndObjectPage;