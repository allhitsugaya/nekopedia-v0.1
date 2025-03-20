import React from 'react';

const ExecutionContextPage = () => {
    return (
        <div className="page-container">
            <h1>Контекст виклику в JavaScript</h1>
            <p>
                Контекст виклику є ключовим поняттям в JavaScript, яке визначає, як функції отримують доступ до об'єкту, в якому вони були викликані. Розуміння цього поняття є важливим для ефективної роботи з об'єктами, методами та ключовими властивостями мови.
            </p>

            <h2>Основні поняття</h2>

            <h3>1. Глобальний контекст виклику</h3>
            <p>
                Все, що визначено за межами будь-якої функції чи блока коду, належить глобальному контексту виклику. У глобальному контексті <code>this</code> посилається на глобальний об'єкт <code>window</code> в браузері або на глобальний об'єкт <code>global</code> в середовищі Node.js.
            </p>
            <pre>
        <code>
          {`
console.log(this); // window (в браузері) або global (в Node.js)
          `}
        </code>
      </pre>

            <h3>2. Контекст виклику функції</h3>
            <p>
                Кожна функція в JavaScript має свій власний контекст виклику, який визначається тим, як вона була викликана.
            </p>
            <pre>
        <code>
          {`
function greet() {
  console.log(this);
}

greet(); // window (в браузері) або global (в Node.js)
          `}
        </code>
      </pre>

            <h3>3. Зміна контексту виклику</h3>
            <p>
                Змінити контекст виклику можна за допомогою методів <code>call()</code>, <code>apply()</code>, або <code>bind()</code>.
            </p>
            <pre>
        <code>
          {`
const person = {
  name: 'John',
  greet: function() {
    console.log(\`Hello, \${this.name}!\`);
  },
};

const newPerson = { name: 'Jane' };

person.greet.call(newPerson); // Hello, Jane!
person.greet.apply(newPerson); // Hello, Jane!

const greetJane = person.greet.bind(newPerson);
greetJane(); // Hello, Jane!
          `}
        </code>
      </pre>

            <h3>4. Контекст виклику при обробці подій</h3>
            <p>
                При обробці подій контекст виклику може змінюватись в залежності від того, як викликано функцію.
            </p>
            <pre>
        <code>
          {`
const button = document.getElementById('myButton');

button.addEventListener('click', function() {
  console.log(this); // button
});
          `}
        </code>
      </pre>
        </div>
    );
};

export default ExecutionContextPage;