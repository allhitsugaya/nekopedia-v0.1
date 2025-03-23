import React from 'react';

const PropertyProtectionPage = () => {
    return (
        <div className="page-container">
            <h1>Захист властивостей</h1>
            <p>
                В об'єктно-орієнтованому програмуванні захист властивостей та методів є важливою частиною, щоб забезпечити конфіденційність та безпеку коду. В JavaScript з'явилися нові можливості для роботи з модифікаторами доступу, такими як <code>public</code> та <code>private</code>. Розглянемо ці модифікатори та їхню роль у захисті властивостей класів.
            </p>

            <h2>1. Модифікатор public</h2>
            <p>
                Модифікатор <code>public</code> є стандартним для всіх властивостей та методів у класі. Це означає, що вони доступні для використання ззовні класу та можуть бути викликані чи змінені з інших частин програми.
            </p>
            <pre>
        <code>
          {`
class Animal {
  constructor(name) {
    this.name = name; // Властивість public
  }

  speak() {
    console.log('Animal speaks'); // Метод public
  }
}

const myAnimal = new Animal('Leo');
console.log(myAnimal.name); // Доступ до public властивості
myAnimal.speak(); // Виклик public методу
          `}
        </code>
      </pre>
            <p>
                Властивість <code>name</code> та метод <code>speak</code> класу <code>Animal</code> є <code>public</code>, що дозволяє їм бути доступними ззовні класу.
            </p>

            <h2>2. Модифікатор private</h2>
            <p>
                Модифікатор <code>private</code> дозволяє обмежити доступ до властивостей та методів тільки всередині самого класу. Це забезпечує високий рівень конфіденційності та безпеки.
            </p>
            <pre>
        <code>
          {`
class Person {
  #salary; // Властивість private

  constructor(name, salary) {
    this.name = name; // Властивість public
    this.#salary = salary; // Властивість private
  }

  getSalary() {
    return this.#salary; // Метод, який працює з private властивістю
  }
}

const employee = new Person('John', 50000);
console.log(employee.name); // Доступ до public властивості
console.log(employee.#salary); // Помилка: Немає доступу до private властивості
console.log(employee.getSalary()); // Виклик public методу, який отримує доступ до private властивості
          `}
        </code>
      </pre>
            <p>
                Тут властивість <code>#salary</code> визначена як <code>private</code> і не може бути отримана напряму ззовні класу. Але, за допомогою методу <code>getSalary</code>, ми можемо отримати доступ до значення <code>#salary</code>.
            </p>

            <h2>Заключення</h2>
            <p>
                Захист властивостей та методів у класах дозволяє створювати безпечний та конфіденційний код. Використання модифікаторів доступу визначає рівень доступу для кожної частини класу, забезпечуючи контрольований доступ до даних та функціональності.
            </p>
        </div>
    );
};

export default PropertyProtectionPage;