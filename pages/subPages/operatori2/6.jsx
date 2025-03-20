import React from 'react';

const OperatorPrecedencePage = () => {
    return (
        <div className="page-container">
            <h1>Правила та порядок виконання операторів</h1>
            <p>
                В JavaScript правильне розуміння порядку виконання операторів дуже важливе для написання ефективного та надійного коду. Тому ми розглянемо основні правила та порядок виконання операторів, що допоможе вам у подальшій розробці на мові JavaScript.
            </p>

            <h2>Порядок виконання</h2>
            <p>
                У JavaScript існує поняття "приоритет операторів". Оператори з більшим пріоритетом виконуються першими. Якщо оператори мають однаковий приоритет, то вони виконуються зліва направо (асоціативність). Наприклад, у виразі <code>a + b * c</code>, спочатку виконується множення, а потім додавання.
            </p>
            <pre>
        <code>
          {`
let result = 10 + 2 * 3; // Результат буде 16 (10 + (2 * 3))
          `}
        </code>
      </pre>

            <h2>Застосування дужок</h2>
            <p>
                Для визначення точного порядку виконання можна використовувати дужки. Вирази, які знаходяться у дужках, виконуються першими. Наприклад:
            </p>
            <pre>
        <code>
          {`
let result = (10 + 2) * 3; // Результат буде 36 ((10 + 2) * 3)
          `}
        </code>
      </pre>

            <h2>Приоритетність операторів</h2>
            <p>
                JavaScript має вбудований приоритет для різних видів операторів. Наприклад, арифметичні операції мають вищий пріоритет за порівняння.
            </p>
            <pre>
        <code>
          {`
let result = 5 + 10 > 8; // Результат буде true, бо 15 > 8
          `}
        </code>
      </pre>

            <h2>Порядок виконання умовних виразів</h2>
            <p>
                Умовні вирази, такі як <code>if</code>, <code>else if</code> та <code>else</code>, також мають свій порядок виконання. JavaScript виконує їх в порядку, в якому вони зустрічаються, і зупиняється, коли виконується перший <code>true</code> умови.
            </p>
            <pre>
        <code>
          {`
if (condition1) {
  // Код, що виконується, якщо condition1 true
} else if (condition2) {
  // Код, що виконується, якщо condition1 false і condition2 true
} else {
  // Код, що виконується, якщо обидві умови false
}
          `}
        </code>
      </pre>

            <h2>Оператори присвоювання та порядок виконання</h2>
            <p>
                Оператори присвоювання, такі як <code>=</code>, мають низький приоритет. Оператори з вищим приоритетом виконуються перед присвоюванням.
            </p>
            <pre>
        <code>
          {`
let a = 5; // Спочатку вирахується 5, а потім присвоюється a
          `}
        </code>
      </pre>

            <h2>Висновок</h2>
            <p>
                Правильне розуміння порядку виконання операторів допоможе уникнути помилок і писати більш читабельний код. Завдяки цим знанням ви зможете покращити якість свого JavaScript-коду та зробити його більш ефективним.
            </p>
        </div>
    );
};

export default OperatorPrecedencePage;