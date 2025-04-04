import React from 'react';
import { Box, Typography } from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const OOPConceptsPage = () => {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Основні поняття ООП в JavaScript, інкапсуляція та спадкування
            </Typography>

            <Paragraph>
                Об'єктно-орієнтований JavaScript (ООП) - це потужний підхід до програмування, який дозволяє створювати
                структуровані та ефективні програми за допомогою об'єктів та класів. Власне, ООП — це спосіб написання коду,
                що дозволяє створювати об'єкти з допомогою одного об'єкта. У цьому полягає суть шаблону проектування «Конструктор».
                Загальний об'єкт, як правило, називається планом, проектом або схемою (blueprint), а створювані з його допомогою
                об'єкти — екземплярами (instances).
            </Paragraph>

            <Paragraph>
                Кожен екземпляр має як властивості, що успадковуються від батька, і власні властивості. Наприклад, якщо ми маємо
                проект Human (людина), ми можемо створювати на його основі екземпляри з різними іменами.
            </Paragraph>

            <CodeBlock>
                {`
// Конструктор "Human" (батьківський клас)
function Human(name, age) {
  this.name = name;
  this.age = age;
  this.getInfo = function () {
    console.log(\`Name: \${this.name}, Age: \${this.age}\`);
  };
}

// Створення екземплярів класу "Human"
const person1 = new Human("John", 30);
const person2 = new Human("Alice", 25);

// Виклик методу "getInfo" для кожного екземпляра
person1.getInfo(); // "Name: John, Age: 30"
person2.getInfo(); // "Name: Alice, Age: 25"
                `}
            </CodeBlock>

            <Typography variant="h4" gutterBottom>
                Інкапсуляція
            </Typography>

            <Paragraph>
                Інкапсуляція - це механізм, що дозволяє обмежити доступ до даних та методів об'єкта та приховувати їх
                від зовнішнього світу. Це підвищує безпеку та дозволяє керувати тим, як дані використовуються і змінюються
                в вашій програмі.
            </Paragraph>

            <Paragraph>
                У JavaScript до ES6 (ECMAScript 2015) інкапсуляція була обмеженою через відсутність модифікаторів доступу, таких
                як private, protected, і public. Однак, інкапсуляцію все одно можна було досягти за допомогою замикань. Ось приклад:
            </Paragraph>

            <CodeBlock>
                {`
// Функція-конструктор для створення об'єкта "Person"
function Person(name, age) {
  // Приватні змінні, недоступні ззовні
  var _name = name;
  var _age = age;

  // Публічний метод для отримання інформації про особу
  this.getInfo = function() {
    return \`Name: \${_name}, Age: \${_age}\`;
  };

  // Публічний метод для зміни імені
  this.setName = function(newName) {
    _name = newName;
  };

  // Публічний метод для зміни віку
  this.setAge = function(newAge) {
    _age = newAge;
  };
}

// Створення екземпляру "Person"
var person = new Person("John", 30);

// Звернення до публічних методів
console.log(person.getInfo()); // "Name: John, Age: 30"

// Зміна імені та віку за допомогою публічних методів
person.setName("Alice");
person.setAge(25);

console.log(person.getInfo()); // "Name: Alice, Age: 25"
                `}
            </CodeBlock>

            <Typography variant="h4" gutterBottom>
                Спадкування
            </Typography>

            <Paragraph>
                Спадкування - це потужний механізм, який дозволяє створювати нові класи на основі існуючих класів.
                При спадкуванні новий клас успадковує властивості та методи від батьківського класу, що полегшує повторне
                використання коду та розширення функціональності.
            </Paragraph>

            <Paragraph>
                Його можна досягнути шляхом створення підкласів, які успадковують властивості та методи батьківського класу.
                Ось приклад успадкування:
            </Paragraph>

            <CodeBlock>
                {`
// Батьківський клас "Animal" (тварина)
function Animal(name) {
  this.name = name;
}

// Метод для виведення звуку тварини
Animal.prototype.makeSound = function() {
  console.log(\`\${this.name} makes a sound.\`);
};

// Підклас "Dog" (собака), який успадковує властивості та методи від "Animal"
function Dog(name, breed) {
  Animal.call(this, name); // Виклик конструктора батьківського класу
  this.breed = breed;
}

// Наслідування прототипу батьківського класу
Dog.prototype = Object.create(Animal.prototype);

// Додатковий метод для собаки
Dog.prototype.bark = function() {
  console.log(\`\${this.name} barks.\`);
};

// Створення екземпляру "Dog"
const myDog = new Dog("Buddy", "Golden Retriever");

// Виклик методів об'єкта
myDog.makeSound(); // "Buddy makes a sound."
myDog.bark();      // "Buddy barks."
                `}
            </CodeBlock>

            <Box className="conclusion">
                <Typography variant="h4" gutterBottom>
                    Заключення
                </Typography>
                <Paragraph>
                    Об'єктно-орієнтоване програмування в JavaScript дозволяє створювати структуровані та ефективні
                    програми за допомогою інкапсуляції, спадкування та інших принципів ООП. Використання цих концепцій
                    допомагає покращити якість коду, зробити його більш зрозумілим та підтримуваним.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default OOPConceptsPage;
