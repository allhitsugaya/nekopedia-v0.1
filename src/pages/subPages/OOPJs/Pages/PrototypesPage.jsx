import React from 'react';
import { Container} from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";
import Code from "../../../../features/Code/Code.jsx";

const PrototypesPage = () => {
    return (
        <Container>
            <BookHeader variant="h3" gutterBottom>
                Прототипи
            </BookHeader>

            <Paragraph>
                В JavaScript, кожен об'єкт має посилання на інший об'єкт, відомий як "прототип". Прототип визначає базовий набір властивостей та методів, які спільні для всіх об'єктів, створених на основі цього прототипу. Це спрощує створення та розширення об'єктів в JavaScript. Вони дозволяють зробити код більш організованим та зручним для використання, а також спрощують створення об'єктів та управління даними.
            </Paragraph>

            <SubHeader variant="h4" gutterBottom>
                Властивості та методи прототипів
            </SubHeader>
            <Paragraph>
                Властивості та методи прототипу можуть бути використані всіма об'єктами, які спадковують від даного прототипу. Наприклад, всі об'єкти масиву мають доступ до властивостей та методів прототипу <Code>Array</Code>, таких як <Code>length</Code>, <Code>push</Code>, <Code>pop</Code> тощо.
            </Paragraph>
            <CodeBlock>
                {`const myArray = [1, 2, 3];
console.log(myArray.length); // 3
myArray.push(4);
console.log(myArray); // [1, 2, 3, 4]`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі, ми використали властивість <Code>length</Code> та метод <Code>push</Code> для роботи з масивом. Ці функції доступні саме завдяки прототипу <Code>Array</Code>.
            </Paragraph>

            <SubHeader variant="h4" gutterBottom>
                Створення власних прототипів
            </SubHeader>
            <Paragraph>
                Ви також можете створювати власні прототипи для об'єктів. Це корисно, коли ви хочете створити багато об'єктів зі спільними властивостями та методами. Ось приклад:
            </Paragraph>
            <CodeBlock>
                {`// Створення прототипу для автомобілів
const carPrototype = {
    start() {
        console.log(\`\${this.make} \${this.model} почав рух.\`);
    },
    stop() {
        console.log(\`\${this.make} \${this.model} зупинився.\`);
    }
};

// Створення об'єкту автомобіля на основі прототипу
const car1 = Object.create(carPrototype);
car1.make = "Toyota";
car1.model = "Camry";
car1.start(); // Toyota Camry почав рух.

const car2 = Object.create(carPrototype);
car2.make = "Honda";
car2.model = "Civic";
car2.start(); // Honda Civic почав рух.`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми створили прототип <Code>carPrototype</Code>, який містить методи <Code>start</Code> та <Code>stop</Code>. Потім ми створили два об'єкти <Code>car1</Code> та <Code>car2</Code> на основі цього прототипу та надали їм власні властивості <Code>make</Code> та <Code>model</Code>. Обидва об'єкти можуть використовувати методи прототипу.
            </Paragraph>

            <SubHeader variant="h4" gutterBottom>
                Ланцюжки прототипів
            </SubHeader>
            <Paragraph>
                JavaScript дозволяє створювати ланцюжки прототипів, де один об'єкт може мати посилання на інший об'єкт, який, в свою чергу, може мати посилання на інший, і так далі. Це дозволяє спадкувати властивості та методи від більшого числа прототипів.
            </Paragraph>
            <CodeBlock>
                {`// Створення об'єкта "Animal" з методом "speak"
const Animal = {
  speak() {
    console.log(\`\${this.name} говорить.\`);
  }
};

// Створення об'єкта "Cat" на основі "Animal" та додавання властивості "name"
const Cat = Object.create(Animal);
Cat.name = "Whiskers";

// Створення об'єкта "Kitten" на основі "Cat" та додавання властивості "name"
const Kitten = Object.create(Cat);
Kitten.name = "Fluffy";

// Виклик методу "speak" для "Kitten"
Kitten.speak(); // "Fluffy говорить."`}
            </CodeBlock>
            <Paragraph>
                У цьому оновленому прикладі ми створили ланцюжок прототипів, де об'єкт <Code>Kitten</Code> спадковує властивості та метод <Code>speak</Code> від <Code>Cat</Code>, який, в свою чергу, спадковує їх від <Code>Animal</Code>. Це є прикладом ланцюжка прототипів, де один об'єкт успадковує властивості та методи від іншого в послідовному порядку.
            </Paragraph>

            <Conclusion>
                Заключення
            </Conclusion>
            <Paragraph>
                Прототипи є важливим механізмом у JavaScript, який дозволяє створювати структуровані та ефективні програми. Вони дозволяють повторно використовувати код, створювати ланцюжки спадкування та забезпечують зручний спосіб управління властивостями та методами об'єктів. Використання прототипів робить код більш організованим, зрозумілим та підтримуваним.
            </Paragraph>
        </Container>
    );
};

export default PrototypesPage;
