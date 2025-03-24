import React from 'react';
import { Box, Typography } from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const PolymorphismAbstractionPage = () => {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Поліморфізм та абстракція
            </Typography>

            <Typography variant="h4" gutterBottom>
                Поліморфізм
            </Typography>
            <Paragraph>
                Поліморфізм - це принцип, що дозволяє об'єктам різних класів відповідати на однакові запити чи виклики методів за допомогою одного і того ж інтерфейсу. Це спрощує роботу з різними об'єктами, які можуть реалізовувати однаковий функціонал залежно від свого контексту.
            </Paragraph>
            <Paragraph>
                Поліморфізм може бути досягнутий за допомогою функцій-конструкторів. Ось приклад з використанням функцій-конструкторів:
            </Paragraph>
            <CodeBlock>
                {`
// Функція-конструктор для геометричної фігури "Shape"
function Shape() {
  this.type = "Shape";

  // Метод для обчислення площі фігури (загальний метод)
  this.calculateArea = function() {
    return "Cannot calculate the area of a generic shape.";
  };
}

// Функція-конструктор для кола
function Circle(radius) {
  Shape.call(this); // Виклик конструктора "Shape"
  this.type = "Circle";
  this.radius = radius;

  // Перевизначений метод для обчислення площі кола
  this.calculateArea = function() {
    return Math.PI * this.radius ** 2;
  };
}

// Функція-конструктор для прямокутника
function Rectangle(width, height) {
  Shape.call(this); // Виклик конструктора "Shape"
  this.type = "Rectangle";
  this.width = width;
  this.height = height;

  // Перевизначений метод для обчислення площі прямокутника
  this.calculateArea = function() {
    return this.width * this.height;
  };
}

// Функція для обчислення площі будь-якої фігури (використовує поліморфізм)
function getArea(shape) {
  return shape.calculateArea();
}

// Створення екземплярів функцій-конструкторів
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

// Виклик функції getArea з різними фігурами
console.log(getArea(circle));    // "78.53981633974483" (площа кола)
console.log(getArea(rectangle)); // "24" (площа прямокутника)
                `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми використовуємо функції-конструктори "Shape", "Circle" та "Rectangle" для створення фігур. Кожна фігура має власну реалізацію методу <code>calculateArea</code>, який перевизначено у підкласах для обчислення площі відповідно до їхньої форми. Функція <code>getArea</code> використовує поліморфізм для обчислення площі будь-якої фігури, навіть без заздалегідь відомого типу фігури.
            </Paragraph>

            <Typography variant="h4" gutterBottom>
                Абстракція
            </Typography>
            <Paragraph>
                Абстракція - це процес виділення суттєвих характеристик об'єкта та приховування зайвих деталей. Абстракція дозволяє спростити взаємодію з об'єктами, забезпечуючи інтерфейс для їх використання та приховуючи реалізацію деталей.
            </Paragraph>
            <CodeBlock>
                {`
// Абстракція калькулятора
const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Помилка: ділення на нуль!";
        }
    }
};

// Використання абстракції калькулятора
const result1 = calculator.add(5, 3);
console.log("Результат додавання:", result1); // 8

const result2 = calculator.multiply(4, 7);
console.log("Результат множення:", result2); // 28
                `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми створили абстракцію калькулятора, яка надає простий інтерфейс для виконання математичних операцій. Користувач не потребує знати, як саме реалізовані операції, а лише використовує методи <code>add</code>, <code>subtract</code>, <code>multiply</code> та <code>divide</code>.
            </Paragraph>

            <Typography variant="h4" gutterBottom>
                Заключення
            </Typography>
            <Paragraph>
                Поліморфізм та абстракція є важливими принципами об'єктно-орієнтованого програмування. Поліморфізм дозволяє об'єктам різних класів використовувати однаковий інтерфейс, що спрощує роботу з ними. Абстракція дозволяє приховувати зайві деталі реалізації, надаючи зручний інтерфейс для взаємодії з об'єктами. Використання цих принципів робить код більш структурованим, зрозумілим та підтримуваним.
            </Paragraph>
        </Box>
    );
};

export default PolymorphismAbstractionPage;
