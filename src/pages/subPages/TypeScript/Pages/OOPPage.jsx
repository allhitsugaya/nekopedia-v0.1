import React from 'react';

const OOPPage = () => {
    return (
        <div className="page-container">
            <h1>Класи та об'єктно-орієнтоване програмування</h1>
            <p>
                Об'єктно-орієнтоване програмування (ООП) — це парадигма програмування, що базується на концепції об'єктів, які мають властивості та поведінку, і взаємодіють один з одним. TypeScript, як розширення JavaScript, дозволяє нам використовувати основні принципи ООП для створення структурованих, модульних та повторно використовуваних кодових баз.
            </p>

            <p>
                У цій частині ми розглянемо основні поняття та засоби об'єктно-орієнтованого програмування в TypeScript. Ми детально розглянемо визначення класів, використання конструкторів, наслідування та інтерфейси. Під час подальших прикладів ми поглибимося в роботу з функціями, типами та важливими аспектами створення ефективного коду в ООП-стилі з використанням TypeScript.
            </p>

            <h2>Визначення класів та використання конструкторів</h2>
            <p>
                В TypeScript класи використовуються для створення об'єктно-орієнтованих структур. Вони описують властивості та методи об'єктів і включають конструктор для ініціалізації екземплярів класу. Приклад нижче демонструє створення класу <code>Car</code> з властивостями <code>brand</code> та <code>model</code> та методом <code>startEngine</code>.
            </p>
            <pre>
        <code>
          {`
class Car {
  // Властивості класу
  brand: string;
  model: string;

  // Конструктор для ініціалізації об'єкта
  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  // Метод класу
  startEngine() {
    console.log(\`The \${this.brand} \${this.model}'s engine is started.\`);
  }
}

// Створення екземпляра класу
const myCar = new Car('Toyota', 'Camry');
myCar.startEngine();
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі <code>Car</code> — це клас, а <code>myCar</code> — його екземпляр. Конструктор класу викликається при створенні нового екземпляра, і властивості можуть бути ініціалізовані переданими значеннями.
            </p>

            <h2>Наслідування</h2>
            <p>
                В TypeScript можна використовувати наслідування для створення нового класу, який успадковує властивості та методи іншого класу. Це дозволяє створювати ієрархії класів та використовувати вже існуючий код.
            </p>
            <pre>
        <code>
          {`
// Базовий клас
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log('Some generic sound');
  }
}

// Клас, який успадковує Animal
class Dog extends Animal {
  // Додаткова властивість класу Dog
  breed: string;

  constructor(name: string, breed: string) {
    // Виклик конструктора базового класу
    super(name);
    this.breed = breed;
  }

  // Перевизначений метод
  makeSound() {
    console.log('Woof! Woof!');
  }
}

// Створення екземплярів класів
const genericAnimal = new Animal('Generic Animal');
const myDog = new Dog('Buddy', 'Labrador');

genericAnimal.makeSound(); // Output: Some generic sound
myDog.makeSound();        // Output: Woof! Woof!
          `}
        </code>
      </pre>

            <h2>Інтерфейси</h2>
            <p>
                Крім того, TypeScript використовує інтерфейси для визначення контрактів, які класи повинні виконувати. Інтерфейс може включати визначення методів та властивостей, які повинні бути реалізовані класами, що імплементують цей інтерфейс.
            </p>
            <pre>
        <code>
          {`
// Інтерфейс для класу, який має метод logDetails
interface Loggable {
  logDetails(): void;
}

// Клас, який реалізує інтерфейс
class Logger implements Loggable {
  logDetails() {
    console.log('Logging details...');
  }
}

// Створення екземпляру класу
const logger = new Logger();
logger.logDetails(); // Output: Logging details...
          `}
        </code>
      </pre>

            <div className='conclusion'>
                <h2>Заключення</h2>
                <p>
                    Таким чином, використання класів, наслідування та інтерфейсів у TypeScript робить код більш
                    читабельним, розширюваним та підтримуваним.
                </p>
            </div>
        </div>
    );
};

export default OOPPage;