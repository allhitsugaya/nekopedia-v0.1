import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";

const FunctionVariantsPage = () => {
    return (
        <Container>
            <BookHeader>Варіанти створення функцій</BookHeader>
            <Paragraph>
                JavaScript пропонує багато способів роботи з функціями. Ми розглянемо вирази функцій, які дозволяють оголошувати функції динамічно, об'єкт <code>Function</code> для їх створення, стрілкові функції, які спрощують синтаксис, функції вищого порядку для більш гнучкого коду та функції-колбек для асинхронного програмування. Ознайомимось із цими концепціями для розширення можливостей JavaScript.
            </Paragraph>

            <SubHeader>Вирази функцій</SubHeader>
            <Paragraph>
                Одним із способів оголошення функцій є використання виразів функцій. Вони можуть зберігатися у змінних і викликатися пізніше. Ось приклад:
            </Paragraph>
            <CodeBlock>
          {`
const mathPlus = function(a, b) {
    return a + b;
};

const result = mathPlus(3, 5); // результат отримає значення 8
          `}
            </CodeBlock>
            <Paragraph>
                Вирази функцій особливо корисні, коли функція є анонімною і використовується як аргумент для іншої функції.
            </Paragraph>

            <SubHeader>Анонімні функції</SubHeader>
            <Paragraph>
                Анонімні функції в JavaScript - це функції, які не мають імені або імені змінної і є одноразовими або невеликими. Вони корисні для виконання одноразових завдань, створення функцій-колбеків або для захоплення змінних у замиканні. Ось деякі приклади використання анонімних функцій:
            </Paragraph>
            <SubHeader component="h3">Як функція-колбек:</SubHeader>
            <CodeBlock>
          {`
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(function(x) {
    return x * x;
});
          `}
            </CodeBlock>
            <h3>Анонімна функція, передана як аргумент:</h3>
            <CodeBlock>
          {`
setTimeout(function() {
    console.log("Ця функція викликається через 2 секунди");
}, 2000);
          `}
            </CodeBlock>
            <SubHeader variant="h3">Анонімна функція, яка викликається сама:</SubHeader>
            <CodeBlock>
          {`
(function() {
    console.log("Ця функція викликається автоматично.");
})();
          `}
            </CodeBlock>
            <SubHeader variant="h3">Замикання:</SubHeader>
            <CodeBlock>
          {`
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

const increment = createCounter();
increment(); // 1
increment(); // 2
          `}
      </CodeBlock>
            <Paragraph>
                Анонімні функції дозволяють визначити та викликати функції без необхідності давати їм ім'я або прив'язувати їх до змінних. Це особливо корисно для оптимізації коду, коли функція використовується лише один раз.
            </Paragraph>

            <SubHeader>Об'єкт Function</SubHeader>
            <Paragraph>
                Функції є об'єктами в JavaScript, і об'єкт <Code>Function</Code> є конструктором для створення функцій. Він може бути використаний для динамічного створення функцій. Ось приклад:
            </Paragraph>
            <CodeBlock>
          {`
const func = new Function('a', 'b', 'return a + b');
const result = func(3, 5); // результат отримає значення 8
          `}
            </CodeBlock>
            <Paragraph>
                Не досвідчених розробників такий код може довести до істерики та бажання кинути навчання. Але не варто панікувати, на практиці, адекватні люди таке не пишуть. Бо цей підхід менш звичний. Нам він просто показує, що функції в JavaScript є об'єктами першого класу.
            </Paragraph>

            <SubHeader>Стрілкові функції</SubHeader>
            <Paragraph>
                Стрілкові функції - це спрощена синтаксична форма визначення функцій. Вони особливо корисні для визначення коротких функцій. Ось приклад:
            </Paragraph>
            <CodeBlock>
          {`
const arrowMathPlus = (a, b) => a + b;
const result = arrowMathPlus(3, 5); // результат отримає значення 8
          `}
            </CodeBlock>
            <Paragraph>
                Стрілкові функції не мають свого контексту <Code>this</Code>, що робить їх зручними для використання в об'єктно-орієнтованому програмуванні.
            </Paragraph>

            <SubHeader>Функції вищого порядку</SubHeader>
            <Paragraph>
                Функції вищого порядку - це функції, які приймають інші функції як аргументи або повертають їх як результат. Вони розширюють можливості функцій в JavaScript і сприяють створенню більш гнучких програм. Ось приклад використання функції вищого порядку <Code>map</Code>:
            </Paragraph>
            <CodeBlock>
          {`
const arrayOfNumbers = [1, 2, 3, 4, 5];
const result = arrayOfNumbers.map(x => x * 2); // результат містить [2, 4, 6, 8, 10]
          `}
            </CodeBlock>

            <SubHeader>Функція-колбек</SubHeader>
            <Paragraph>
                Функції-колбек - це функції, які передаються як аргументи іншим функціям і викликаються пізніше, коли виконання головної функції досягає точки виклику. Вони широко використовуються в асинхронному програмуванні. Ось приклад:
            </Paragraph>
            <CodeBlock>
          {`
function callAfterTimeout(callback, delay) {
    setTimeout(callback, delay);
}

callAfterTimeout(() => {
    console.log("Ця функція виконається після затримки.");
}, 1000);
          `}
            </CodeBlock>
            <Paragraph>S
                Ця функція приймає іншу функцію (функцію-колбек) і виконує її після зазначеної затримки.
            </Paragraph>
        </Container>
    );
};

export default FunctionVariantsPage;