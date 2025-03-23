import React from 'react';

const ArrowFunctionsPage = () => {
    return (
        <div className="page-container">
            <h1>Стрілкові функції</h1>
            <p>
                Стрілкові функції — це сучасний та ефективний інструмент у світі JavaScript, ідеальний для простих функцій, що використовуються для обробки подій, маніпулювання масивами, фільтрації даних та інших операцій. Вони роблять код більш зрозумілим і компактним, забезпечуючи читачам можливість легше розуміти та утримувати код у порядку. Проте, важливо ретельно ознайомитися із їхніми відмінностями в порівнянні зі звичайними функціями.
            </p>
            <p>
                Але не менш важливим є розуміння контексту виклику. Це поняття визначає, як функції отримують доступ до об'єкту, в якому вони були викликані. Знання цього концепту є вирішальним для зміни поведінки функцій та їхнього використання в різних контекстах.
            </p>
            <p>
                Розглядаючи ці аспекти, ми зможемо вдосконалити наші навички в програмуванні та забезпечити більш чистий та продуктивний код у JavaScript.
            </p>
            <p>
                У сучасному JavaScript стрілкові функції стали необхідним інструментом для розробників. Вони дозволяють писати більш зрозуміливий та компактний код. У цій доповіді ми розглянемо синтаксис стрілкових функцій та порівняємо їх із звичайними функціями, виявляючи відмінності та вигоди, які вони пропонують.
            </p>

            <h2>Синтаксис стрілкових функцій</h2>
            <p>
                Стрілкові функції в JavaScript визначаються коротким та зрозумілим способом, що робить їх чудовим вибором для простих функцій.
            </p>
            <p>
                Ось загальний синтаксис стрілкових функцій:
            </p>
            <pre>
        <code>
          {`
const functionName = (parameters) => res;
          `}
        </code>
      </pre>
            <p>
                <strong>functionName:</strong> Ім'я функції (опціонально).<br />
                <strong>parameters:</strong> Параметри функції, що приймаються у вигляді аргументів.<br />
                <strong>res:</strong> Вираз, який обчислюється та повертається функцією.
            </p>
            <p>
                Ось кілька прикладів:
            </p>
            <pre>
        <code>
          {`
// Стрілкова функція без параметрів
const sayHello = () => {
  console.log('Hello!');
};

// Стрілкова функція з одним параметром
const double = (x) => {
  return x * 2;
};

// Стрілкова функція з одним параметром (скорочена форма)
const double = x => x * 2;

// Стрілкова функція з багатьма параметрами
const add = (a, b) => a + b;
          `}
        </code>
      </pre>

            <h2>Відмінності від звичайних функцій</h2>
            <p>
                Хоча стрілкові функції є коротшими та більш зрозумілими, ніж звичайні функції, вони мають деякі відмінності:
            </p>
            <h3>1. Відсутність this</h3>
            <p>
                У звичайних функціях <code>this</code> вказує на об'єкт, в якому вони були викликані. У стрілкових функціях <code>this</code> відсутній та береться з контексту, в якому функція була створена.
            </p>
            <pre>
        <code>
          {`
function RegularFunction() {
  this.value = 42;
  setTimeout(function () {
    console.log(this.value); // undefined
  }, 1000);
}

const arrowFunction = () => {
  this.value = 42;
  setTimeout(() => {
    console.log(this.value); // 42
  }, 1000);
};

new RegularFunction();
arrowFunction();
          `}
        </code>
      </pre>
            <h3>2. Неможливість використовувати arguments</h3>
            <p>
                У стрілкових функціях неможливо використовувати об'єкт <code>arguments</code>. Цей об'єкт містить всі передані параметри функції, і його використання може бути корисним в деяких сценаріях.
            </p>
            <h3>3. Неможливість бути конструктором</h3>
            <p>
                Стрілкові функції не можуть бути використані як конструктори для створення нових об'єктів. Вони завжди є анонімними та не мають прототипу, тому не підходять для створення класів.
            </p>

            <div className='conclusion'>
                <h2>Висновок</h2>
                <p>
                    Стрілкові функції - потужний та зручний інструмент в сучасному JavaScript, особливо для простих
                    функцій, які використовуються для обробки подій, масивів, фільтрації та інших операцій. Вони роблять
                    код більш зрозумілим та компактним. Однак важливо пам'ятати їхні відмінності від звичайних функцій,
                    такі як відсутність <code>this</code> та неможливість використовувати <code>arguments</code>. З
                    правильним розумінням та використанням стрілкових функцій ви зможете писати більш ефективний та
                    зрозумілий код у своїх проектах.
                </p>
            </div>
        </div>
    );
};

export default ArrowFunctionsPage;