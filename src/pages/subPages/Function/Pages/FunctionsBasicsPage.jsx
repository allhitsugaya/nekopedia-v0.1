import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Code from "../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";

const FunctionsBasicsPage = () => {
    return (
        <Container>
            <BookHeader>Основи роботи з функціями</BookHeader>
            <Paragraph>
                Функції також є однією з найважливіших концепцій в JavaScript. Вони дозволяють організовувати код, забезпечують його повторне використання та сприяють створенню більш структурованих програм. У цій доповіді ми розглянемо основи роботи з функціями в JavaScript, включаючи їх визначення, виклик, повернення значень та область видимості змінних.
            </Paragraph>

            <SubHeader>Визначення функцій через Function Expression та Function Declaration</SubHeader>
            <Paragraph>
                В JavaScript функції можна визначити двома основними способами: за допомогою виразів функцій (Function Expression) та оголошень функцій (Function Declaration).
            </Paragraph>

            <SubHeader variant="h3">Function Declaration:</SubHeader>
            <Paragraph>
                В оголошенні функції ім'я функції вказується після ключового слова <Code>function</Code>. Цей спосіб визначення функцій дозволяє використовувати функцію перед тим, як вона визначена у коді.
            </Paragraph>
            <CodeBlock>
          {`
greet("Alice"); // Виклик функції перед її визначенням
function greet(name) {
    console.log(\`Hello, \${name}!\`);
}
          `}
            </CodeBlock>
            <Paragraph>
                Тут дуже важливою особливістю оголошення функцій є "підняття" (hoisting), що означає, що JavaScript автоматично переміщує оголошення функції вгору до початку області видимості.
            </Paragraph>

            <SubHeader variant="h3">Function Expression:</SubHeader>
            <Paragraph>
                У виразі функції функція присвоюється змінній. Ім'я функції може бути пустим (анонімна функція) або вказаним. Така функція може бути використана лише після її визначення.
            </Paragraph>
            <CodeBlock>
          {`
const greet = function(name) {
    console.log(\`Hello, \${name}!\`);
};

greet("Bob"); // Виклик функції після її визначення
          `}
            </CodeBlock>
            <Paragraph>
                Function Expression корисні, коли потрібно передати функцію як аргумент в іншу функцію (наприклад, функції вищого порядку).
            </Paragraph>
            <Paragraph>
                Основна різниця полягає в часі і доступності функцій. Function Declaration дозволяє використовувати функцію перед її визначенням завдяки підняттю. Function Expression вимагають визначення перед використанням і можуть бути прив'язані до областей видимості більш точно за допомогою змінних.
            </Paragraph>
            <Paragraph>
                Обираючи між ними, варто враховувати вимоги вашого проекту та особливості областей видимості в коді.
            </Paragraph>

            <SubHeader>Виклик функцій</SubHeader>
            <Paragraph>
                Після визначення функції, її можна викликати для виконання коду, який вона містить. Для виклику функції використовується її ім'я, а також круглі дужки. Наприклад:
            </Paragraph>
            <CodeBlock>
          {`
helloWorld(); // Виклик функції
          `}
            </CodeBlock>
            <Paragraph>
                При виклику функції вона виконується, і в результаті може виконати певні дії або повернути значення.
            </Paragraph>

            <SubHeader>Повернення значень з функцій</SubHeader>
            <Paragraph>
                Функції можуть повертати значення за допомогою ключового слова <Code>return</Code>. Це значення може бути використане в інших частинах програми. Приклад:
            </Paragraph>
            <CodeBlock>
          {`
function mathPlus(a, b) {
    return a + b;
}

let sum = mathPlus(3, 5); // сума отримає значення 8
          `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі функція <Code>mathPlus</Code> приймає два аргументи, додає їх і повертає результат. Про аргументи ми ще поговоримо, не хвилюйтесь.
            </Paragraph>

            <SubHeader>Область видимості змінних в функціях</SubHeader>
            <Paragraph>
                Змінні, які визначені в межах функції, мають локальну область видимості. Це означає, що вони доступні лише всередині функції і не бачимі ззовні. Наприклад:
            </Paragraph>
            <CodeBlock>
          {`
function localFunction() {
    let x = 10;
    console.log(x); // x видима тільки всередині функції
}

localFunction();
console.log(x); // Помилка: x не визначено
          `}
            </CodeBlock>
            <Paragraph>
                Це робить функції самостійними та ізольованими блоками коду, які не конфліктують з іншим кодом програми.
            </Paragraph>
        </Container>
    );
};

export default FunctionsBasicsPage;