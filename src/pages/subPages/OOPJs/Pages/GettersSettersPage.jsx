import React from 'react';
import {Container} from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";

const GettersSettersPage = () => {

    return (
        <Container>
            <BookHeader variant="h1" sx={{ fontSize: 24, fontWeight: 'bold' }}>
                Гетери та сетери
            </BookHeader>

            <Paragraph>
                У світі програмування, особливо в мові JavaScript, гетери та сетери – це потужний механізм, який дозволяє контролювати доступ до властивостей об'єктів. Ця функціональність робить код більш безпечним і допомагає забезпечити правильне взаємодіяти з даними. Давайте розглянемо, що таке гетери та сетери, і як їх використовувати в JavaScript.
            </Paragraph>

            <SubHeader variant="h2" sx={{ fontSize: 20, fontWeight: 'bold' }}>
                1. Гетери і їх призначення
            </SubHeader>

            <Paragraph>
                Гетери - це функції, які дозволяють отримувати значення властивостей об'єктів. Вони ідеально підходять для забезпечення безпечного та контрольованого доступу до даних. Щоб створити гетер, використовується ключове слово <Code>get</Code> разом з ім'ям властивості.
            </Paragraph>

            <CodeBlock>
                {`const user = {
  firstName: "John",
  lastName: "Doe",

  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
};

console.log(user.fullName); // "John Doe"`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі, ми створили об'єкт <Code>user</Code> з гетером <Code>fullName</Code>, який об'єднує ім'я та прізвище користувача в один рядок. Завдяки гетеру, ми можемо легко отримати повне ім'я користувача, не звертаючись до окремих властивостей. А при зміні <Code>user.firstName</Code> одразу зміни будуть і у <Code>fullName</Code>.
            </Paragraph>

            <SubHeader variant="h2" sx={{ fontSize: 20, fontWeight: 'bold' }}>
                2. Сетери та їх призначення
            </SubHeader>

            <Paragraph>
                Сетери - це функції, які дозволяють змінювати значення властивостей об'єктів. Вони корисні для контролю за даними та валідації введених значень. Для створення сетера використовується ключове слово <Code>set</Code> разом з ім'ям властивості.
            </Paragraph>

            <CodeBlock>
                {`const temperature = {
  _celsius: 0,

  get fahrenheit() {
    return (this._celsius * 9/5) + 32;
  },

  set fahrenheit(value) {
    this._celsius = (value - 32) * 5/9;
  }
};

temperature.fahrenheit = 68;
console.log(temperature.fahrenheit); // 20`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі, ми створили об'єкт <Code>temperature</Code> з сетером <Code>fahrenheit</Code>, який конвертує градуси Фаренгейта в градуси Цельсія і зберігає їх у відповідній властивості <Code>_celsius</Code>. Сетер дозволяє нам легко встановлювати температуру у Фаренгейтах, і автоматично переводити її в градуси Цельсія.
            </Paragraph>

            <SubHeader variant="h2" sx={{ fontSize: 20, fontWeight: 'bold' }}>
                3. Захист властивостей об'єктів
            </SubHeader>

            <Paragraph>
                Гетери та сетери також можуть використовуватися для захисту властивостей об'єктів від некоректного доступу та невірних значень.
            </Paragraph>

            <CodeBlock>
                {`const person = {
  _age: 0,

  get age() {
    return this._age;
  },

  set age(value) {
    if (value >= 0) {
      this._age = value;
    } else {
      console.log("Вік не може бути від'ємним.");
    }
  }
};

person.age = 25; // Установка віку
console.log(person.age); // 25

person.age = -5; // Спроба установки віку від'ємним числом
// Виведе "Вік не може бути від'ємним."`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі, гетер <Code>age</Code> дозволяє отримувати вік особи, а сетер <Code>age</Code> перевіряє, чи вік є не від'ємним значенням перед зберіганням. Таким чином, ми можемо забезпечити коректну обробку даних та захист від некоректних значень.
            </Paragraph>

            <Conclusion variant="h2" sx={{ fontSize: 20, fontWeight: 'bold' }}>
                Заключення
            </Conclusion>

            <Paragraph>
                Гетери та сетери є важливим інструментом у JavaScript, який дозволяє контролювати доступ до властивостей об'єктів. Вони забезпечують безпеку даних, дозволяють валідувати введені значення та спрощують роботу з об'єктами. Використання гетерів та сетерів робить код більш структурованим, зрозумілим та підтримуваним.
            </Paragraph>
        </Container>
    );
};

export default GettersSettersPage;