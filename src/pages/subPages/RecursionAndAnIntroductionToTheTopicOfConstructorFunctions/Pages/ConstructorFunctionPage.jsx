import React from 'react';

const ConstructorFunctionPage = () => {
    return (
        <div className="page-container">
            <h1>Функція конструктор</h1>
            <p>
                Конструктори об'єктів та методи об'єкта - це потужні інструменти, які дозволяють створювати та працювати з об'єктами в JavaScript. Вони допомагають організувати код та робити його більш структурованим та ефективним.
            </p>

            <h2>1. Функція конструктор</h2>
            <p>
                Функція конструктор - це спеціальна функція в JavaScript, призначена для створення нових об'єктів певного типу. Вона дозволяє нам визначити структуру та властивості об'єкта та використовувати її для створення багатьох об'єктів з однаковою структурою.
            </p>

            <h3>Створення Багаторазових Об'єктів</h3>
            <p>
                Однією з основних функцій конструкторів є можливість створювати багаторазові об'єкти одного типу. Замість того, щоб кожен раз вручну створювати новий об'єкт з однаковою структурою, ми можемо використовувати конструктор для швидкого створення нових екземплярів.
            </p>
            <pre>
        <code>
          {`
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Toyota", "Camry", 2022);
const car2 = new Car("Honda", "Civic", 2023);
const car3 = new Car("Ford", "Focus", 2022);
          `}
        </code>
      </pre>
            <p>
                Тут <code>Car</code> - це конструктор, який дозволяє створювати об'єкти для різних автомобілів, зберігаючи загальну структуру.
            </p>

            <h3>Інкапсуляція Даних</h3>
            <p>
                Конструктори також дозволяють досягнути інкапсуляції даних, тобто обмеження доступу до деяких властивостей об'єкта. Ми можемо використовувати приватні властивості та методи для збереження даних та додаткової логіки в межах об'єкта.
            </p>
            <pre>
        <code>
          {`
function BankAccount(accountNumber) {
  let balance = 0;

  this.getAccountNumber = function() {
    return accountNumber;
  };

  this.getBalance = function() {
    return balance;
  };

  this.deposit = function(amount) {
    balance += amount;
  };

  this.withdraw = function(amount) {
    if (balance >= amount) {
      balance -= amount;
    } else {
      console.log("Недостатньо коштів на рахунку.");
    }
  };
}

const account1 = new BankAccount("123456");
account1.deposit(1000);
account1.withdraw(500);
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі <code>balance</code> - це приватна змінна, і ми використовуємо методи для доступу до неї та зміни її значення. Це дозволяє контролювати доступ до даних об'єкта та забезпечує безпеку даних.
            </p>

            <h3>Наслідування та Прототипи</h3>
            <p>
                JavaScript також використовує концепцію прототипів для спадкування властивостей та методів. Конструктори можуть бути використані для створення прототипів об'єктів, що дозволяє створювати ієрархії об'єктів та спадкувати їхню функціональність.
            </p>
            <pre>
        <code>
          {`
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  console.log(\`\${this.name} говорить\`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.makeSound = function() {
  console.log(\`\${this.name} гавкає\`);
};

const dog1 = new Dog("Барсік");
dog1.makeSound(); // "Барсік гавкає"
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі <code>Animal</code> є базовим конструктором, і <code>Dog</code> успадковує від нього, перевизначаючи метод <code>makeSound</code>. Це дозволяє створювати спеціалізовані об'єкти на основі загальних конструкторів.
            </p>

            <h3>Варіативність та Параметри</h3>
            <p>
                Конструктори також можуть приймати параметри, що робить їх більш гнучкими та варіативними. Ми можемо передавати різну кількість аргументів при створенні об'єктів.
            </p>
            <pre>
        <code>
          {`
function Product(name, price) {
  this.name = name;
  this.price = price || 0;
}

const product1 = new Product("Молоко");
const product2 = new Product("Хліб", 2.5);
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі <code>Product</code> може мати один або два параметри, і об'єкти створюються залежно від переданих аргументів.
            </p>

            <div className='conclusion'>
                <h2>Заключення</h2>
                <p>
                    Конструктори - це потужний механізм мови JavaScript, який дозволяє створювати об'єкти, виконувати
                    інкапсуляцію даних та створювати ієрархії об'єктів. Вони роблять код більш структурованим, зручним
                    та ефективним. Розуміння цих концепцій є важливим для успішного програмування в JavaScript.
                </p>
            </div>
        </div>
    );
};

export default ConstructorFunctionPage;