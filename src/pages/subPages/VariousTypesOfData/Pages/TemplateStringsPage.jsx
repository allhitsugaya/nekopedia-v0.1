import React from 'react';

const TemplateStringsPage = () => {
    return (
        <div className="page-container">
            <h1>Шаблонні рядки в JavaScript</h1>
            <p>
                Шаблонні рядки (Template Strings) - це потужний інструмент в JavaScript для створення рядків, які включають в себе значення змінних та вирази. Вони представляють собою спеціальні рядки, які визначаються за допомогою обернутих (``) та використовують вираз <code>${'{}'}</code> для вставки значень. Давайте розглянемо, як працюють шаблонні рядки та де їх можна застосовувати.
            </p>

            <h2>Основи використання</h2>
            <p>
                Спершу давайте розглянемо основний синтаксис шаблонних рядків:
            </p>
            <pre>
        <code>
          {`
const name = "John";
const age = 30;

const message = \`Привіт, мене звати \${name} і мені \${age} років.\`;
console.log(message); // Привіт, мене звати John і мені 30 років.
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі ми створюємо змінні <code>name</code> і <code>age</code>, і потім ми створюємо рядок <code>message</code>, використовуючи шаблонні рядки. Змінні та вирази, заключені в <code>${'{}'}</code>, підставляються в рядок, коли він обчислюється.
            </p>

            <h2>Багаторядковий текст</h2>
            <p>
                Шаблонні рядки також ідеально підходять для створення багаторядкових текстів:
            </p>
            <pre>
        <code>
          {`
const best = \`
  Думи мої, думи мої,
  Лихо мені з вами!
  Нащо стали на папері
  Сумними рядами?..
\`;
console.log(best);
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі ми використовуємо шаблонні рядки для оголошення багаторядкового вірша. Обернуті лапки дозволяють вам вставити переноси рядка без потреби вручну додавати символи <code>\n</code>.
            </p>

            <h2>Вирази та функції</h2>
            <p>
                Шаблонні рядки дозволяють вставляти не тільки змінні, але і вирази та результати функцій:
            </p>
            <pre>
        <code>
          {`
const a = 5;
const b = 10;

const sum = \`Сума чисел \${a} і \${b} дорівнює \${a + b}\`;
console.log(sum); // Сума чисел 5 і 10 дорівнює 15

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const greeting = \`Привіт, \${capitalize(name)}!\`;
console.log(greeting); // Привіт, John!
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі ми обчислюємо суму чисел <code>a</code> і <code>b</code> та вставляємо її у рядок <code>sum</code>. Також ми використовуємо функцію <code>capitalize</code> для перетворення імені у велику літеру у рядку <code>greeting</code>.
            </p>

            <h2>Вирази шаблонів</h2>
            <p>
                Шаблонні рядки також підтримують вирази шаблонів, які дозволяють виконувати операції над виразами та вставляти їхні результати:
            </p>
            <pre>
        <code>
          {`
const a = 5;
const b = 10;

const result = \`\${a} + \${b} = \${a + b}\`;
console.log(result); // "5 + 10 = 15"

const isAdult = true;
const ageMessage = \`Я є \${isAdult ? "дорослим" : "дитиною"}.\`;
console.log(ageMessage); // Я є дорослим.
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі ми вставляємо результати арифметичного виразу та виразу тернарного оператора у наші рядки.
            </p>

            <div className='conclusion'>
                <h2>Висновок</h2>
                <p>
                    Шаблонні рядки роблять роботу з рядками в JavaScript більш зручною та читабельною. Вони особливо
                    корисні, коли потрібно комбінувати рядки та значення змінних у складних рядках.
                </p>
            </div>
        </div>
    );
};

export default TemplateStringsPage;