import React from 'react';

const IIFEPage = () => {
    return (
        <div className="page-container">
            <h1>Функція, що самовикликається (IIFE)</h1>
            <p>
                Самовикликаючіся функції, також відомі як IIFE (Immediately Invoked Function Expressions), - це потужний інструмент в JavaScript, який дозволяє створювати функції та викликати їх безпосередньо після визначення. Ця техніка корисна для ізоляції змінних, створення приватних областей видимості та уникнення конфліктів імен. Тут розглянемо синтаксис IIFE та способи їх використання для створення приватних областей видимості в JavaScript.
            </p>

            <h2>Синтаксис IIFE</h2>
            <p>
                IIFE - це функція, яка визначається та викликається одразу. Ось загальний синтаксис IIFE:
            </p>
            <pre>
        <code>
          {`
(function () {
  // код функції
})();
          `}
        </code>
      </pre>
            <p>
                Визначення функції розміщується в круглих дужках, що негайно викликають її для виконання. Функція може бути анонімною, тобто вона не має імені.
            </p>

            <h2>Використання IIFE для створення приватних областей видимості</h2>
            <p>
                Однією з ключових переваг IIFE є їх здатність створювати приватні області видимості для змінних. Це означає, що змінні, оголошені всередині IIFE, недоступні ззовні і не конфліктують з іншими змінними в глобальному контексті. Ось приклад:
            </p>
            <pre>
        <code>
          {`
(function () {
  var privateVariable = 'Ця змінна приватна';
  // Отримання доступу до приватної змінної
  console.log(privateVariable);
})();

console.log(privateVariable); // Спроба доступу до privateVariable ззовні IIFE призведе до помилки:
// Uncaught ReferenceError: privateVariable is not defined
          `}
        </code>
      </pre>
            <p>
                В даному прикладі <code>privateVariable</code> є приватною змінною, доступною лише всередині IIFE. Це дозволяє уникнути конфліктів імен та зберегти дані відсутніми для зовнішнього світу.
            </p>
            <p>
                IIFE також корисні для уникнення забруднення глобального об'єкту, оскільки змінні та функції, оголошені всередині IIFE, не забруднюють глобальний об'єкт <code>window</code> (у веб-середовищі) чи глобальний об'єкт <code>Node.js</code>.
            </p>

            <h2>Приклади використання IIFE</h2>

            <h3>1. Захист даних</h3>
            <p>
                Використання IIFE для захисту конфіденційних даних:
            </p>
            <pre>
        <code>
          {`
(function () {
  var secretKey = 'mySecretKey';
  function encryptData(data) {
    // Логіка шифрування з використанням secretKey
  }
  // Захищені функції та дані
})();
          `}
        </code>
      </pre>

            <h3>2. Модульний підхід</h3>
            <p>
                Використання IIFE для створення модульних компонентів коду:
            </p>
            <pre>
        <code>
          {`
var myModule = (function () {
  var privateVar = 'Це приватна змінна';

  function privateFunction() {
    // Приватна функція
  }

  return {
    publicVar: 'Це публічна змінна',
    publicFunction: function () {
      // Публічна функція
    },
  };
})();
          `}
        </code>
      </pre>

            <h2>Заключення</h2>
            <p>
                IIFE є потужним інструментом в JavaScript, який дозволяє створювати приватні області видимості та захищати дані від неповноважних доступів. Вони знаходять застосування в багатьох аспектах розробки, допомагаючи створювати надійний та організований код.
            </p>
        </div>
    );
};

export default IIFEPage;