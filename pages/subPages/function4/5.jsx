import React from 'react';

const FunctionParametersAdvancedPage = () => {
    return (
        <div className="page-container">
            <h1>Передача параметрів функції</h1>
            <p>
                Функції є основною будівельною одиницею в JavaScript і грають важливу роль у створенні багатьох програм. У цій доповіді ми розглянемо деякі важливі аспекти роботи з функціями, такі як передача за значенням та за посиланням, використання об'єкта <code>arguments</code> та введення рест-параметрів.
            </p>

            <h2>Передача за значенням та за посиланням</h2>
            <p>
                Важливим аспектом роботи з функціями є розуміння того, як передаються аргументи в функції. JavaScript передає примітивні типи даних за значенням (by value) і об'єкти за посиланням (by reference).
            </p>
            <pre>
        <code>
          {`
function changeValue(x) {
    x = 10;
}

let value = 5;
changeValue(value);
console.log(value); // Виведе 5, оскільки число передалось за значенням

function changeObject(obj) {
    obj.name = "Іван";
}

let user = { name: "Петро" };
changeObject(user);
console.log(user.name); // Виведе "Іван", оскільки об'єкт передається за посиланням
          `}
        </code>
      </pre>
            <p>
                У першому прикладі змінна <code>value</code> передається у функцію, але оскільки це примітивний тип (number), він передається за значенням, і змінна <code>x</code> у функції це інша змінна, яка не впливає на <code>value</code>. У другому прикладі об'єкт <code>user</code> передається за посиланням, тому зміни, внесені у функції, впливають на вихідний об'єкт.
            </p>

            <h2>Об'єкт arguments</h2>
            <p>
                В JavaScript кожна функція має спеціальний об'єкт <code>arguments</code>, який дозволяє отримувати доступ до всіх переданих аргументів, навіть якщо їх кількість не відома передчасно.
            </p>
            <pre>
        <code>
          {`
function showArguments() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

showArguments(1, "Два", true); // Виведе 1, "Два", true
          `}
        </code>
      </pre>
            <p>
                Об'єкт <code>arguments</code> - це псевдо-масив, тобто об'єкт, що виглядає як масив, але не має всіх його методів.
            </p>

            <h3>Особливості використання arguments у стрілкових функціях</h3>
            <p>
                У стрілкових функціях <code>arguments</code> відсутній. Спроба отримати доступ до нього в стрілковій функції призведе до помилки.
            </p>
            <pre>
        <code>
          {`
const baseFunction = function() {
    console.log(arguments);
}

const arrowFunction = () => {
    console.log(arguments); // Помилка: arguments не визначено
}

baseFunction(1, 2, 3);
arrowFunction(1, 2, 3);
          `}
        </code>
      </pre>
            <p>
                Оскільки <code>arguments</code> відсутній у стрілкових функціях, ми можемо використовувати синтаксис рест-параметрів для отримання всіх переданих аргументів у вигляді масиву.
            </p>
            <pre>
        <code>
          {`
const arrowFunction = (...args) => {
    console.log(args);
}

arrowFunction(1, 2, 3); // Виведе [1, 2, 3]
          `}
        </code>
      </pre>

            <h3>Специфіка динамічного контексту</h3>
            <p>
                У звичайних функціях <code>this</code> може змінюватися залежно від контексту виклику, а в стрілкових функціях він залишається фіксованим, відповідаючи контексту, у якому функція була створена.
            </p>
            <pre>
        <code>
          {`
function regularFunction() {
    console.log(this);
}

const obj = { method: regularFunction };
obj.method(); // Виведе obj, оскільки контекст виклику - це obj

const arrowFunction = () => {
    console.log(this);
}

arrowFunction.call(obj); // Виведе {}, оскільки контекст залишається незмінним
          `}
        </code>
      </pre>

            <h2>Рест-параметри</h2>
            <p>
                Рест-параметри - це зручний спосіб обробки довільної кількості аргументів у функції.
            </p>
            <pre>
        <code>
          {`
function getSum(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

let result = getSum(1, 2, 3, 4, 5);
console.log(result); // Виведе 15, оскільки сумуємо всі передані числа
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі <code>...numbers</code> означає, що ми можемо передавати будь-яку кількість аргументів, і вони автоматично зберігаються у масиві <code>numbers</code>.
            </p>
        </div>
    );
};

export default FunctionParametersAdvancedPage;