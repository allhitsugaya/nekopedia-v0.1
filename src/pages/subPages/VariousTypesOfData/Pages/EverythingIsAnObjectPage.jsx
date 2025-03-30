import React from 'react';
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../features/Code/Code.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import {Box, Container, Typography} from '@mui/material';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../features/Chapter/Chapter.jsx";

const EverythingIsAnObjectPage = () => {
    return (
        <Container>
            <Box sx={{ mb: 3 }}>
            <BookHeader>Все в JavaScript є об'єктом 🤯</BookHeader>
            <Paragraph>
                Вираз "все в JavaScript є об'єктом" вказує на те, що в JavaScript більшість значень, з якими ви працюєте, насправді представлені як об'єкти або можуть бути перетворені в об'єкти за необхідності. Це пов'язано з тим, що JavaScript є об'єктно-орієнтованою мовою програмування, де об'єкти використовуються для представлення даних і функцій.
            </Paragraph>

            <SubHeader >
                Приклади
            </SubHeader>

            <Chapter  >
                Примітивні типи даних
            </Chapter>
            <Paragraph>
                Навіть числа, рядки і булеві значення можуть бути перетворені в об'єкти за допомогою обгорток (wrapper objects), таких як <Code>Number</Code>, <Code>String</Code> та <Code>Boolean</Code>. Це дозволяє вам викликати методи на примітивних типах, якщо потрібно.
            </Paragraph>
            <CodeBlock>
                {`
let num = 42;
let str = "Hello";

console.log(num.toString()); // Результат: "42"
console.log(str.length); // Результат: 5
                `}
            </CodeBlock>

            <Chapter >
                Функції теж є об'єктами
            </Chapter>
            <Paragraph>
                Функції можуть мати властивості і бути передані як аргументи.
            </Paragraph>
            <CodeBlock>
                {`
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet.author = "John";

console.log(greet.author); // Результат: "John"
                `}
            </CodeBlock>

            <Chapter >
                Масиви і об'єкти
            </Chapter>
            <Paragraph>
                Ці структури даних є об'єктами. Масиви мають числові індекси, а об'єкти - ключі і значення.
            </Paragraph>
            <CodeBlock>
                {`
let myArray = [1, 2, 3];
let myObject = { name: "John", age: 30 };

console.log(myArray[0]); // Результат: 1
console.log(myObject.name); // Результат: "John"
                `}
            </CodeBlock>

            <SubHeader >
                Важливість розуміння
            </SubHeader>
            <Paragraph>
                Ця особливість робить JavaScript гнучкою мовою, але вона також вимагає ретельного розуміння, оскільки деякі операції можуть бути неочевидними через автоматичне перетворення типів. Важливо знати, коли і як правильно використовувати різні типи та об'єкти в JavaScript, щоб побудувати ефективний та надійний код.
            </Paragraph>
        </Box>
        </Container>
    );
};

export default EverythingIsAnObjectPage;
