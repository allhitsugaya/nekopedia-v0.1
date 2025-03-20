import React from 'react';

const WorkingWithContextPage = () => {
    return (
        <div className="page-container">
            <h1>Робота з Контекстом виклику</h1>

            <h2>1. Використання this у методах об'єктів</h2>
            <p>
                У методах об'єктів <code>this</code> посилається на сам об'єкт, в якому метод був викликаний.
            </p>
            <pre>
        <code>
          {`
const car = {
  brand: 'Toyota',
  model: 'Camry',
  start: function() {
    console.log(\`Starting \${this.brand} \${this.model}\`);
  },
};

car.start(); // Starting Toyota Camry
          `}
        </code>
      </pre>

            <h2>2. Використання this в конструкторах</h2>
            <p>
                Контекст виклику може бути важливим при створенні об'єктів за допомогою конструктора. У конструкторах <code>this</code> посилається на новий об'єкт, який створюється.
            </p>
            <pre>
        <code>
          {`
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHello = function() {
    console.log(\`Hello, my name is \${this.name}, and I am \${this.age} years old.\`);
  };
}

const person1 = new Person('Alice', 25);
const person2 = new Person('Bob', 30);

person1.sayHello(); // Hello, my name is Alice, and I am 25 years old.
person2.sayHello(); // Hello, my name is Bob, and I am 30 years old.
          `}
        </code>
      </pre>

            <h2>3. Використання bind для збереження контексту</h2>
            <p>
                Метод <code>bind</code> дозволяє зафіксувати контекст виклику функції, щоб він не змінювався при передачі функції як колбека або виклику в іншому контексті.
            </p>
            <pre>
        <code>
          {`
const user = {
  name: 'John',
  logName: function() {
    console.log(this.name);
  },
};

const button = document.getElementById('myButton');
button.addEventListener('click', user.logName.bind(user));
          `}
        </code>
      </pre>

            <h2>Заключення</h2>
            <p>
                Розуміння контексту виклику є ключовим для ефективного використання JavaScript. Вивчення його різних аспектів, таких як глобальний контекст, контекст функцій та методи зміни контексту, допомагає розробникам використовувати цю особливість мови для досягнення кращої читабельності та ефективності свого коду.
            </p>
        </div>
    );
};

export default WorkingWithContextPage;