import React from 'react';
import { Box, Paper } from '@mui/material';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const PropertyProtectionPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Захист властивостей</BookHeader>

            <Paragraph>
                В об'єктно-орієнтованому програмуванні захист властивостей та методів є важливою частиною, щоб забезпечити конфіденційність та безпеку коду. В JavaScript з'явилися нові можливості для роботи з модифікаторами доступу, такими як <Code>public</Code> та <Code>private</Code>. Розглянемо ці модифікатори та їхню роль у захисті властивостей класів.
            </Paragraph>

            <SubHeader>1. Модифікатор public</SubHeader>
            <Paragraph>
                Модифікатор <Code>public</Code> є стандартним для всіх властивостей та методів у класі. Це означає, що вони доступні для використання ззовні класу та можуть бути викликані чи змінені з інших частин програми.
            </Paragraph>
            <CodeBlock>
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
            </CodeBlock>
            <Paragraph>
                Властивість <Code>name</Code> та метод <Code>speak</Code> класу <Code>Animal</Code> є <Code>public</Code>, що дозволяє їм бути доступними ззовні класу.
            </Paragraph>

            <SubHeader>2. Модифікатор private</SubHeader>
            <Paragraph>
                Модифікатор <Code>private</Code> дозволяє обмежити доступ до властивостей та методів тільки всередині самого класу. Це забезпечує високий рівень конфіденційності та безпеки.
            </Paragraph>
            <CodeBlock>
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
            </CodeBlock>
            <Paragraph>
                Тут властивість <Code>#salary</Code> визначена як <Code>private</Code> і не може бути отримана напряму ззовні класу. Але, за допомогою методу <Code>getSalary</Code>, ми можемо отримати доступ до значення <Code>#salary</Code>.
            </Paragraph>

            <Paper sx={{ p: 3, mt: 3, backgroundColor: 'background.paper' }} className='conclusion'>
                <SubHeader>Заключення</SubHeader>
                <Paragraph>
                    Захист властивостей та методів у класах дозволяє створювати безпечний та конфіденційний код.
                    Використання модифікаторів доступу визначає рівень доступу для кожної частини класу, забезпечуючи
                    контрольований доступ до даних та функціональності.
                </Paragraph>
            </Paper>
        </Box>
    );
};

export default PropertyProtectionPage;