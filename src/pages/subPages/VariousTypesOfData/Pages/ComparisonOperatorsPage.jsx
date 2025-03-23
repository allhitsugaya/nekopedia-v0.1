import React from 'react';

const ComparisonOperatorsPage = () => {
    return (
        <div className="page-container">
            <h1>Оператори порівняння</h1>
            <p>
                Оператори порівняння в JavaScript грають важливу роль у порівнянні значень та виразів. Вони дозволяють визначати відносини між об'єктами та даними і відповідають на питання, чи вірне одне значення відносно іншого. Давайте детально розглянемо п'ять реляційних операторів: <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code> та <code>in</code>, та подамо приклади їх використання.
            </p>

            <h2>Оператори &lt; та &gt;</h2>
            <p>
                Оператор <code>&lt;</code> (менше) порівнює лівий операнд з правим та повертає <code>true</code>, якщо лівий операнд менший за правий, інакше повертає <code>false</code>. Наприклад:
            </p>
            <pre>
        <code>
          {`
let x = 5;
let y = 10;
let isLess = x < y; // isLess містить true, оскільки 5 менше за 10.
          `}
        </code>
      </pre>
            <p>
                Оператор <code>&gt;</code> (більше) працює на зворотних засадах. Він повертає <code>true</code>, якщо лівий операнд більший за правий:
            </p>
            <pre>
        <code>
          {`
let x = 15;
let y = 10;
let isGreater = x > y; // isGreater містить true, оскільки 15 більше за 10.
          `}
        </code>
      </pre>

            <h2>Оператори &lt;= та &gt;=</h2>
            <p>
                Оператор <code>&lt;=</code> (менше або дорівнює) порівнює, чи лівий операнд менший або дорівнює правому операнду, та повертає <code>true</code>, якщо це вірно:
            </p>
            <pre>
        <code>
          {`
let x = 10;
let y = 10;
let isLessOrEqual = x <= y; // isLessOrEqual містить true, оскільки 10 дорівнює 10.
          `}
        </code>
      </pre>
            <p>
                Оператор <code>&gt;=</code> (більше або дорівнює) працює на зворотних засадах, він повертає <code>true</code>, якщо лівий операнд більший або дорівнює правому:
            </p>
            <pre>
        <code>
          {`
let x = 10;
let y = 5;
let isGreaterOrEqual = x >= y; // isGreaterOrEqual містить true, оскільки 10 більше за 5.
          `}
        </code>
      </pre>

            <h2>Оператор in</h2>
            <p>
                Оператор <code>in</code> використовується для перевірки, чи об'єкт містить вказану властивість. Він повертає <code>true</code>, якщо властивість існує в об'єкті, інакше повертає <code>false</code>. Приклад:
            </p>
            <pre>
        <code>
          {`
let person = { name: "John", age: 30 };
let hasName = "name" in person; // hasName містить true, оскільки властивість "name" існує в об'єкті.
let hasAddress = "address" in person; // hasAddress містить false, оскільки властивості "address" немає.
          `}
        </code>
      </pre>

            <h2>Використання реляційних операторів</h2>
            <p>
                Реляційні оператори дозволяють вам створювати умовні вирази та вирішувати різноманітні завдання. Наприклад, вони корисні при фільтрації даних у масиві:
            </p>
            <pre>
        <code>
          {`
let numbers = [5, 10, 15, 20, 25];
let filteredNumbers = numbers.filter(function (num) {
  return num > 15; // Фільтруємо значення більше за 15.
});
// filteredNumbers містить [20, 25].
          `}
        </code>
      </pre>
            <p>
                Реляційні оператори також використовуються у виразах умовного оператора <code>if</code>, щоб приймати рішення на основі порівнянь:
            </p>
            <pre>
        <code>
          {`
let temperature = 25;
if (temperature > 30) {
  console.log("Гаряче!");
} else if (temperature <= 30 && temperature > 20) {
  console.log("Приємна температура.");
} else {
  console.log("Холодно.");
}
          `}
        </code>
      </pre>

            <div className="conclusion">
                <h2>Висновок</h2>
                <p>
                    Пам'ятайте, що реляційні оператори порівнюють значення та повертають логічні результати
                    (<code>true</code> або <code>false</code>), що робить їх корисними при прийнятті умовних рішень та
                    фільтрації даних у JavaScript.
                </p>
            </div>
        </div>
    );
};

export default ComparisonOperatorsPage;