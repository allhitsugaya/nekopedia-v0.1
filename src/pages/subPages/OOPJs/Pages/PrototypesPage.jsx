import React from 'react';
import { Box, Typography } from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const PrototypesPage = () => {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Прототипи
            </Typography>

            <Paragraph>
                В JavaScript, кожен об'єкт має посилання на інший об'єкт, відомий як "прототип". Прототип визначає базовий набір властивостей та методів, які спільні для всіх об'єктів, створених на основі цього прототипу. Це спрощує створення та розширення об'єктів в JavaScript. Вони дозволяють зробити код більш організованим та зручним для використання, а також спрощують створення об'єктів та управління даними.
            </Paragraph>

            <Typography variant="h4" gutterBottom>
                Властивості та методи прототипів
            </Typography>
            <Paragraph>
                Властивості та методи прототипу можуть бути використані всіма об'єктами, які спадковують від даного прототипу. Наприклад, всі об'єкти масиву мають доступ до властивостей та методів прототипу <code>Array</code>, таких як <code>length</code>, <code>push</code>, <code>pop</code> тощо.
            </Paragraph>
            <CodeBlock>
                {`const myArray = [1, 2, 3];
console.log(myArray.length); // 3
myArray.push(4);
console.log(myArray); // [1, 2, 3, 4]`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі, ми використали властивість <code>length</code> та метод <code>push</code> для роботи з масивом. Ці функції доступні саме завдяки прототипу <code>Array</code>.
            </Paragraph>

            <Typography variant="h4" gutterBottom>
                Створення власних прототипів
            </Typography>
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
                У цьому прикладі ми створили прототип <code>carPrototype</code>, який містить методи <code>start</code> та <code>stop</code>. Потім ми створили два об'єкти <code>car1</code> та <code>car2</code> на основі цього прототипу та надали їм власні властивості <code>make</code> та <code>model</code>. Обидва об'єкти можуть використовувати методи прототипу.
            </Paragraph>

            <Typography variant="h4" gutterBottom>
                Ланцюжки прототипів
            </Typography>
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
                У цьому оновленому прикладі ми створили ланцюжок прототипів, де об'єкт <code>Kitten</code> спадковує властивості та метод <code>speak</code> від <code>Cat</code>, який, в свою чергу, спадковує їх від <code>Animal</code>. Це є прикладом ланцюжка прототипів, де один об'єкт успадковує властивості та методи від іншого в послідовному порядку.
            </Paragraph>

            <Box>
                <Typography variant="h4" gutterBottom>
                    Заключення
                </Typography>
                <Paragraph>
                    Прототипи є важливим механізмом у JavaScript, який дозволяє створювати структуровані та ефективні програми. Вони дозволяють повторно використовувати код, створювати ланцюжки спадкування та забезпечують зручний спосіб управління властивостями та методами об'єктів. Використання прототипів робить код більш організованим, зрозумілим та підтримуваним.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default PrototypesPage;
