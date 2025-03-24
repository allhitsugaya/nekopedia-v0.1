import React from 'react';

const ArrayCopyAndSavePage = () => {
    return (
        <div>
            <h1>Збереження та копіювання масивів</h1>

            <p>В JavaScript існують різні способи зберігання та копіювання масивів, і різниця між ними полягає у тому, чи зберігається посилання на оригінальний масив чи створюється новий незалежний масив. Ось приклади:</p>

            <h2>Збереження масиву:</h2>

            <h3>1. Просте присвоєння:</h3>
            <p>При присвоєнні масиву іншій змінній створюється посилання на оригінальний масив, тому зміни в одному вплинуть на інший.</p>
            <pre>
        {`const originalArray = [1, 2, 3];
const newArray = originalArray; // newArray посилається на originalArray

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3, 4]`}
      </pre>

            <h3>2. Метод slice():</h3>
            <p>Метод slice() створює новий масив, який містить підрядок оригінального масиву.</p>
            <pre>
        {`const originalArray = [1, 2, 3];
const newArray = originalArray.slice();

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
      </pre>

            <h3>3. Оператор розширення ... (spread operator):</h3>
            <p>Оператор розширення створює новий масив і копіює значення з оригінального масиву.</p>
            <pre>
        {`const originalArray = [1, 2, 3];
const newArray = [...originalArray];

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
      </pre>

            <h2>Копіювання масиву:</h2>

            <h3>1. Метод concat():</h3>
            <p>Метод concat() створює новий масив, об'єднуючи два (або більше) масиви.</p>
            <pre>
        {`const originalArray = [1, 2, 3];
const newArray = originalArray.concat();

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
      </pre>

            <h3>2. Метод Array.from():</h3>
            <p>Метод Array.from() створює новий масив з ітерованого об'єкта, такого як масив або строка.</p>
            <pre>
        {`const originalArray = [1, 2, 3];
const newArray = Array.from(originalArray);

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
      </pre>

            <h3>3. Оператор розширення ... (spread operator):</h3>
            <p>Оператор розширення також використовується для створення глибоких копій об'єктів та масивів.</p>
            <pre>
        {`const originalArray = [1, 2, 3];
const newArray = [...originalArray];

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
      </pre>

            <p>Важливо розуміти, коли використовувати збереження (посилання) та копіювання масивів, оскільки це впливає на роботу з вашими даними та може уникнути небажаних побічних ефектів.</p>
        </div>
    );
}

export default ArrayCopyAndSavePage;
