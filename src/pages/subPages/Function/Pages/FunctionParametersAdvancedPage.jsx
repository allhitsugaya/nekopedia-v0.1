import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";

const FunctionParametersAdvancedPage = () => {
    return (
        <Container>
            <BookHeader>Передача параметрів функції</BookHeader>
            <Paragraph>
                Функції є основною будівельною одиницею в JavaScript і грають важливу роль у створенні багатьох програм. У цій доповіді ми розглянемо деякі важливі аспекти роботи з функціями, такі як передача за значенням та за посиланням, використання об'єкта <Code>arguments</Code> та введення рест-параметрів.
            </Paragraph>

            <SubHeader>Передача за значенням та за посиланням</SubHeader>
            <Paragraph>
                Важливим аспектом роботи з функціями є розуміння того, як передаються аргументи в функції. JavaScript передає примітивні типи даних за значенням (by value) і об'єкти за посиланням (by reference).
            </Paragraph>
            <CodeBlock>
          {`
function changeValue(x) {
    x = 10;
}

let value = 5;
changeValue(value);
console.log(value); // Виведе 5, оскільки число передалось за значенням

function changeObject(obj) {
    obj.name = "Іван";
}

let user = { name: "Петро" };
changeObject(user);
console.log(user.name); // Виведе "Іван", оскільки об'єкт передається за посиланням
          `}
            </CodeBlock>
            <Paragraph>
                У першому прикладі змінна <Code>value</Code> передається у функцію, але оскільки це примітивний тип (number), він передається за значенням, і змінна <Code>x</Code> у функції це інша змінна, яка не впливає на <Code>value</Code>. У другому прикладі об'єкт <Code>user</Code> передається за посиланням, тому зміни, внесені у функції, впливають на вихідний об'єкт.
            </Paragraph>

            <SubHeader>Об'єкт arguments</SubHeader>
            <Paragraph>
                В JavaScript кожна функція має спеціальний об'єкт <Code>arguments</Code>, який дозволяє отримувати доступ до всіх переданих аргументів, навіть якщо їх кількість не відома передчасно.
            </Paragraph>
            <CodeBlock>
          {`
function showArguments() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

showArguments(1, "Два", true); // Виведе 1, "Два", true
          `}
            </CodeBlock>
            <Paragraph>
                Об'єкт <Code>arguments</Code> - це псевдо-масив, тобто об'єкт, що виглядає як масив, але не має всіх його методів.
            </Paragraph>

            <SubHeader variant="h3">Особливості використання arguments у стрілкових функціях</SubHeader>
            <Paragraph>
                У стрілкових функціях <Code>arguments</Code> відсутній. Спроба отримати доступ до нього в стрілковій функції призведе до помилки.
            </Paragraph>
            <CodeBlock>
          {`
const baseFunction = function() {
    console.log(arguments);
}

const arrowFunction = () => {
    console.log(arguments); // Помилка: arguments не визначено
}

baseFunction(1, 2, 3);
arrowFunction(1, 2, 3);
          `}
            </CodeBlock>
            <Paragraph>
                Оскільки <Code>arguments</Code> відсутній у стрілкових функціях, ми можемо використовувати синтаксис рест-параметрів для отримання всіх переданих аргументів у вигляді масиву.
            </Paragraph>
            <CodeBlock>
          {`
const arrowFunction = (...args) => {
    console.log(args);
}

arrowFunction(1, 2, 3); // Виведе [1, 2, 3]
          `}
            </CodeBlock>

            <SubHeader variant="h3">Специфіка динамічного контексту</SubHeader>
            <Paragraph>
                У звичайних функціях <Code>this</Code> може змінюватися залежно від контексту виклику, а в стрілкових функціях він залишається фіксованим, відповідаючи контексту, у якому функція була створена.
            </Paragraph>
            <CodeBlock>
          {`
function regularFunction() {
    console.log(this);
}

const obj = { method: regularFunction };
obj.method(); // Виведе obj, оскільки контекст виклику - це obj

const arrowFunction = () => {
    console.log(this);
}

arrowFunction.call(obj); // Виведе {}, оскільки контекст залишається незмінним
          `}
            </CodeBlock>

            <SubHeader>Рест-параметри</SubHeader>
            <Paragraph>
                Рест-параметри - це зручний спосіб обробки довільної кількості аргументів у функції.
            </Paragraph>
            <CodeBlock>
          {`
function getSum(...numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

let result = getSum(1, 2, 3, 4, 5);
console.log(result); // Виведе 15, оскільки сумуємо всі передані числа
          `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі <Code>...numbers</Code> означає, що ми можемо передавати будь-яку кількість аргументів, і вони автоматично зберігаються у масиві <Code>numbers</Code>.
            </Paragraph>
        </Container>
    );
};

export default FunctionParametersAdvancedPage;