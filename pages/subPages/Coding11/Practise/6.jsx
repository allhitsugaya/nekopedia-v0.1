import React from 'react';

const EfficiencyAndOptimizationPage = () => {
    return (
        <div className="page-container">
            <h1>Частина 4: Ефективність та оптимізація</h1>
            <p>
                Один із ключових аспектів розробки програмного забезпечення на JavaScript - це вибір оптимальних структур даних для конкретних завдань. Правильний вибір допомагає покращити продуктивність, зменшити споживання пам'яті та підвищити зрозумілість коду. У цьому розділі ми розглянемо, як правильно вибирати та використовувати структури даних в JavaScript, а також як уникати зайвого використання пам'яті.
            </p>

            <h2>1. Приклади неоптимальних структур даних</h2>
            <p>
                Використання неоптимальних структур даних може призвести до ряду негативних наслідків, таких як зайве витрачання пам'яті, сповільнення роботи програми та збільшення часу виконання. Ось деякі приклади негативного впливу використання неоптимальних структур даних:
            </p>

            <h3>Зайве витрачання пам'яті</h3>
            <p>
                Використання надто об'ємних структур даних, коли для задачі досить меншої, призводить до зайвого споживання пам'яті. Наприклад, збереження чисел в об'єкті замість масиву:
            </p>
            <pre>
        <code>
          {`
// Неоптимальний варіант
const data = { 0: 'zero', 1: 'one', 2: 'two' };

// Оптимальний варіант
const data = ['zero', 'one', 'two'];
          `}
        </code>
      </pre>

            <h3>Збільшення часу виконання</h3>
            <p>
                Вибір неправильної структури даних може призвести до збільшення часу виконання операцій. Наприклад, пошук елемента в неіндексованому масиві:
            </p>
            <pre>
        <code>
          {`
// Неоптимальний варіант
const items = [10, 20, 30, 40, 50];
const target = 30;
const index = items.indexOf(target); // Потребує перебору масиву

// Оптимальний варіант
const items = { 10: true, 20: true, 30: true, 40: true, 50: true };
const target = 30;
const exists = items[target]; // Швидший доступ
          `}
        </code>
      </pre>
            <p>
                Таким чином, вибір оптимальних структур даних є важливим аспектом при розробці програм на JavaScript, оскільки це допомагає покращити продуктивність, споживання пам'яті та час виконання.
            </p>

            <h2>2. Базові умови вибору структур даних</h2>
            <h3>Масиви (Arrays)</h3>
            <p>
                Масиви є однією з основних структур даних в JavaScript і ідеально підходять для зберігання послідовностей значень. Наприклад, масив може бути використаний для зберігання списку користувачів або елементів меню. Ось приклад:
            </p>
            <pre>
        <code>
          {`
const users = ['John', 'Alice', 'Bob'];
          `}
        </code>
      </pre>

            <h3>Об'єкти (Objects)</h3>
            <p>
                Об'єкти використовуються для представлення сутностей з різними властивостями. Наприклад, для зберігання інформації про користувачів можна використовувати об'єкти:
            </p>
            <pre>
        <code>
          {`
const user = {
    name: 'John',
    age: 30,
    country: 'USA',
};
          `}
        </code>
      </pre>

            <h3>Мапи (Maps)</h3>
            <p>
                Мапи введені в стандарті ES6 і дозволяють зберігати пари "ключ-значення". Вони корисні для реалізації словників та інших структур даних:
            </p>
            <pre>
        <code>
          {`
const dictionary = new Map();
dictionary.set('apple', 'a fruit');
dictionary.set('book', 'a printed publication');
          `}
        </code>
      </pre>

            <h3>Сети (Sets)</h3>
            <p>
                Сети - це колекція унікальних значень. Вони можуть бути використані для вилучення дублікатів та зберігання унікальних даних:
            </p>
            <pre>
        <code>
          {`
const uniqueValues = new Set([1, 2, 3, 1]);
          `}
        </code>
      </pre>
            <p>
                Ці практичні приклади допомагають вам зберігати пам'ять та зробити ваш код більш продуктивним. Використання оптимальних структур даних є ключовим аспектом у веб-розробці та допомагає покращити продуктивність вашого JavaScript-коду.
            </p>

            <h2>3. Оптимізації коду для покращення продуктивності</h2>
            <p>
                Профілювання та оптимізація коду - дозволяє покращити продуктивність та ефективність вашого програмного продукту. Профілювання - це процес аналізу роботи програми для виявлення "гарячих точок" або місць, де витрати часу і ресурсів є найбільшими. Після виявлення таких точок можна вжити оптимізаційних заходів для поліпшення продуктивності.
            </p>

            <h3>Виявлення та усунення "гарячих точок" в коді</h3>
            <p>
                Один з перших кроків при оптимізації коду - це ідентифікація "гарячих точок" або місць, де програма витрачає найбільше часу. Для цього можна використовувати різні інструменти профілювання, такі як браузерні DevTools або зовнішні профілювальні програми.
            </p>
            <p>
                Наприклад, цей код представляє собою приклад використання інструменту профілювання у JavaScript для вимірювання часу виконання певного фрагмента коду:
            </p>
            <pre>
        <code>
          {`
// Приклад коду для профілювання
function timeConsumingFunction() {
    // ...
    // Гаряча точка: інтенсивне обчислення
    for (let i = 0; i < 1000000; i++) {
        // Обчислення
    }
    // ...
}

// Профілювання функції
console.time("timeConsumingFunction");
timeConsumingFunction();
console.timeEnd("timeConsumingFunction");
          `}
        </code>
      </pre>
            <p>
                Давайте розглянемо його детальніше:
            </p>
            <ul>
                <li>
                    Ми маємо функцію <code>timeConsumingFunction()</code>, яка імітує обчислення, що можуть займати значний час. В даному випадку, у циклі з 1000000 ітерацій, ми виконуємо певні обчислення. Ця частина коду є "гарячою точкою" (hotspot), оскільки витрати часу на неї є значними і можуть стати об'єктом оптимізації.
                </li>
                <li>
                    Потім, ми використовуємо <code>console.time("timeConsumingFunction")</code>, щоб почати вимірювати час виконання функції <code>timeConsumingFunction</code>. Ми передаємо ярлик ("timeConsumingFunction") для ідентифікації таймера.
                </li>
                <li>
                    Після цього ми викликаємо функцію <code>timeConsumingFunction()</code>. Під час виконання цієї функції, браузер або середовище виконання JavaScript почне вимірювати час.
                </li>
                <li>
                    Завершуючи виконання функції, ми викликаємо <code>console.timeEnd("timeConsumingFunction")</code>. Ця функція завершує вимірювання часу для таймера з ярликом "timeConsumingFunction" і виводить результат в консоль.
                </li>
            </ul>
            <p>
                Після виконання цього коду в консолі ви побачите результат у форматі "timeConsumingFunction: [час виконання]ms". Це дасть вам інформацію про те, скільки часу зайняло виконання функції <code>timeConsumingFunction</code>.
            </p>
            <p>
                Цей підхід допомагає ідентифікувати "гарячі точки" в коді, тобто місця, де програма витрачає найбільше часу, і виявити потребу в оптимізації цих частин коду для покращення продуктивності.
            </p>
            <p>
                Загалом, профілювання та оптимізація коду - це важливий етап розробки для забезпечення продуктивності та ефективності програм. Вибір правильних інструментів профілювання, ідентифікація "гарячих точок" та вжиття оптимізаційних заходів допомагають створити швидкий та продуктивний код.
            </p>
        </div>
    );
};

export default EfficiencyAndOptimizationPage;