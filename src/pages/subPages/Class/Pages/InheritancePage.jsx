import React from 'react';

const InheritancePage = () => {
    return (
        <div className="page-container">
            <h1>Спадкування</h1>
            <p>
                Спадкування в програмуванні - це механізм, що дозволяє класу (підкласу) успадковувати властивості та методи іншого класу (батьківського класу). У JavaScript цей механізм реалізується за допомогою ключового слова <code>extends</code>. Давайте детальніше розглянемо, як працює спадкування класів у JavaScript.
            </p>

            <h2>1. Оголошення батьківського класу</h2>
            <p>
                Почнемо з оголошення класу <code>Animal</code> в якості батьківського класу. В цьому класі ми визначимо конструктор та метод <code>makeSound</code>:
            </p>
            <pre>
        <code>
          {`
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Some generic animal sound');
  }
}
          `}
        </code>
      </pre>
            <p>
                Тут <code>Animal</code> має конструктор, який встановлює властивість <code>name</code>, та метод <code>makeSound</code>, який виводить загальний звук для всіх тварин.
            </p>

            <h2>2. Створення підкласу з використанням extends</h2>
            <p>
                Тепер давайте створимо підклас <code>Dog</code>, який успадковує властивості та методи від класу <code>Animal</code>. Ми використовуємо ключове слово <code>extends</code> для вказання батьківського класу.
            </p>
            <pre>
        <code>
          {`
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Викликає конструктор батьківського класу
    this.breed = breed;
  }

  bark() {
    console.log('Woof! Woof!');
  }
}
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі клас <code>Dog</code> успадковує властивість <code>name</code> та метод <code>makeSound</code> від класу <code>Animal</code>. Ми також додаємо власну властивість <code>breed</code> та метод <code>bark</code>.
            </p>

            <h2>3. Створення екземплярів підкласу та виклик методів</h2>
            <p>
                Тепер ми можемо створити екземпляр класу <code>Dog</code> та викликати його методи, включаючи ті, які успадковані від класу <code>Animal</code>.
            </p>
            <pre>
        <code>
          {`
const myDog = new Dog('Buddy', 'Labrador');
myDog.makeSound(); // Викличе метод makeSound з класу Animal
myDog.bark(); // Викличе метод bark з класу Dog
console.log(myDog.name); // Виведе ім'я, успадковане від класу Animal
console.log(myDog.breed); // Виведе породу, додану в класі Dog
          `}
        </code>
      </pre>
            <p>
                Ми створюємо екземпляр <code>myDog</code> класу <code>Dog</code> з ім'ям "Buddy" та породою "Labrador". Виклик методів <code>makeSound</code> та <code>bark</code> демонструє, як підклас може успадковувати та розширювати функціональність батьківського класу.
            </p>

            <h2>4. Використання ключового слова super</h2>
            <p>
                У конструкторі підкласу ми використовуємо ключове слово <code>super</code> для виклику конструктора батьківського класу. Це необхідно для правильної ініціалізації властивостей, успадкованих від батьківського класу.
            </p>
            <pre>
        <code>
          {`
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Викликає конструктор батьківського класу
    this.breed = breed;
  }
  // Решта коду...
}
          `}
        </code>
      </pre>
            <p>
                Спадкування класів в JavaScript дозволяє створювати більш узагальнені та структуровані класи, сприяє перевикористанню коду та полегшує розширення функціональності. Клас <code>Dog</code> успадковує властивості та методи від класу <code>Animal</code>, а також може мати свої власні унікальні характеристики та методи.
            </p>

            <div className='conclusion'>
                <h2>Заключення</h2>
                <p>
                    Спадкування є важливим механізмом у програмуванні, який дозволяє створювати ієрархії класів,
                    успадковувати властивості та методи, а також розширювати функціональність. Використання ключового
                    слова <code>extends</code> та <code>super</code> робить код більш структурованим, зрозумілим та
                    підтримуваним.
                </p>
            </div>
        </div>
    );
};

export default InheritancePage;