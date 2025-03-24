import React from 'react';
import Code from "../../../../features/Code/Code.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";

const ComparisonOperatorsPage = () => {
    return (
        <div className="page-container">
            <h1>Оператори порівняння</h1>
            <Paragraph>
                Оператори порівняння в JavaScript грають важливу роль у порівнянні значень та виразів. Вони дозволяють визначати відносини між об'єктами та даними і відповідають на питання, чи вірне одне значення відносно іншого. Давайте детально розглянемо п'ять реляційних операторів: <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code> та <code>in</code>, та подамо приклади їх використання.
            </Paragraph>

            <h2>Оператори &lt; та &gt;</h2>
            <Paragraph>
                Оператор <Code>&lt;</Code> (менше) порівнює лівий операнд з правим та повертає <Code>true</Code>, якщо лівий операнд менший за правий, інакше повертає <code>false</code>. Наприклад:
            </Paragraph>
            <pre>
        <Code>
          {`
let x = 5;
let y = 10;
let isLess = x < y; // isLess містить true, оскільки 5 менше за 10.
          `}
        </Code>
      </pre>
            <Paragraph>
                Оператор <Code>&gt;</Code> (більше) працює на зворотних засадах. Він повертає <Code>true</Code>, якщо лівий операнд більший за правий:
            </Paragraph>
            <pre>
        <Code>
          {`
let x = 15;
let y = 10;
let isGreater = x > y; // isGreater містить true, оскільки 15 більше за 10.
          `}
        </Code>
      </pre>

            <h2>Оператори &lt;= та &gt;=</h2>
            <Paragraph>
                Оператор <code>&lt;=</code> (менше або дорівнює) порівнює, чи лівий операнд менший або дорівнює правому операнду, та повертає <Code>true</Code>, якщо це вірно:
            </Paragraph>
            <pre>
        <Code>
          {`
let x = 10;
let y = 10;
let isLessOrEqual = x <= y; // isLessOrEqual містить true, оскільки 10 дорівнює 10.
          `}
        </Code>
      </pre>
            <Paragraph>
                Оператор <code>&gt;=</code> (більше або дорівнює) працює на зворотних засадах, він повертає <Code>true</Code>, якщо лівий операнд більший або дорівнює правому:
            </Paragraph>
            <pre>
        <Code>
          {`
let x = 10;
let y = 5;
let isGreaterOrEqual = x >= y; // isGreaterOrEqual містить true, оскільки 10 більше за 5.
          `}
        </Code>
      </pre>

            <h2>Оператор in</h2>
            <Paragraph>
                Оператор <Code>in</Code> використовується для перевірки, чи об'єкт містить вказану властивість. Він повертає <Code>true</Code>, якщо властивість існує в об'єкті, інакше повертає <code>false</code>. Приклад:
            </Paragraph>
            <pre>
        <Code>
          {`
let person = { name: "John", age: 30 };
let hasName = "name" in person; // hasName містить true, оскільки властивість "name" існує в об'єкті.
let hasAddress = "address" in person; // hasAddress містить false, оскільки властивості "address" немає.
          `}
        </Code>
      </pre>

            <h2>Використання реляційних операторів</h2>
            <Paragraph>
                Реляційні оператори дозволяють вам створювати умовні вирази та вирішувати різноманітні завдання. Наприклад, вони корисні при фільтрації даних у масиві:
            </Paragraph>
            <pre>
        <Code>
          {`
let numbers = [5, 10, 15, 20, 25];
let filteredNumbers = numbers.filter(function (num) {
  return num > 15; // Фільтруємо значення більше за 15.
});
// filteredNumbers містить [20, 25].
          `}
        </Code>
      </pre>
            <Paragraph>
                Реляційні оператори також використовуються у виразах умовного оператора <Code>if</Code>, щоб приймати рішення на основі порівнянь:
            </Paragraph>
            <pre>
        <Code>
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
        </Code>
      </pre>

            <h2>Висновок</h2>
            <Paragraph>
                Пам'ятайте, що реляційні оператори порівнюють значення та повертають логічні результати (<Code>true</Code> або <Code>false</Code>), що робить їх корисними при прийнятті умовних рішень та фільтрації даних у JavaScript.
            </Paragraph>
        </div>
    );
};

export default ComparisonOperatorsPage;