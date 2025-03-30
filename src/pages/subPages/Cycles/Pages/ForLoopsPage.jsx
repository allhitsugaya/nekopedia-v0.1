import React from 'react';
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Code from "../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import {Container} from "@mui/material";

const ForLoopsPage = () => {
    return (
        <Container>
            <BookHeader>Цикл for, for…of, for…in</BookHeader>
            <Paragraph>
                Цикли - це потужні інструменти в програмуванні, які дозволяють вам ефективно обробляти дані та виконувати однотипні завдання. Вибір між циклами залежить від конкретного завдання, яке ви хочете вирішити.
            </Paragraph>
            <Paragraph>
                Використовуйте <Code>for</Code>, коли вам потрібно визначити умови для ітерації.
                Використовуйте <Code>for...in</Code>, коли вам потрібно перебрати властивості об'єкта.
                Використовуйте <Code>for...of</Code>, коли ви маєте справу з ітерабельними об'єктами.
            </Paragraph>
            <Paragraph>
                Але давайте подивимося більш детально:
            </Paragraph>

            <SubHeader
              >Цикл for</SubHeader>
            <Paragraph>
                Цикл <Code>for</Code> - це найпоширеніший вид циклу в JavaScript. Він дозволяє вам вказати початкову умову, умову виходу та крок ітерації. Ось загальний синтаксис цього циклу:
            </Paragraph>
            <CodeBlock>
          {`
for (ініціалізація; умова; ітерація) {
    // Блок коду, який виконується на кожній ітерації
}
          `}
      </CodeBlock>
            <Paragraph>
                Приклад використання циклу <Code>for</Code> для виведення чисел від 1 до 5:
            </Paragraph>
            <CodeBlock>
          {`
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
          `}
      </CodeBlock>
            <Paragraph>
                У цьому прикладі ми ініціалізуємо змінну <Code>i</Code> значенням 1, встановлюємо умову, що цикл буде виконуватися, доки <Code>i</Code> менше або дорівнює 5, і після кожної ітерації збільшуємо значення <Code>i</Code> на 1.
            </Paragraph>
            <Paragraph>
                Давайте ще раз розглянемо цикл <Code>for</Code> по частинах:
            </Paragraph>
            <CodeBlock>
          {`
початок
let i = 1
Виконується один раз, при вході в цикл.

умова
i <= 5
Перевіряється перед кожною ітерацією циклу. Якщо умова невірна, цикл зупиняється.

тіло
console.log(i)
Виконується знову і знову, поки умова є правдивою (true).

крок
i++
Виконується після тіла на кожній ітерації, але перед перевіркою умови.
          `}
      </CodeBlock>
            <Paragraph>
                Загальний алгоритм циклу працює так:
            </Paragraph>
            <CodeBlock>
          {`
Початок виконання
 → (Якщо умова == true → виконати тіло і виконати крок)
 → (Якщо умова == true → виконати тіло і виконати крок) 
→ (Якщо умова == true → виконати тіло і виконати крок) 
→ ...
          `}
      </CodeBlock>

            <SubHeader>Цикл for...in</SubHeader>
            <Paragraph>
                Цикл <Code>for...in</Code> використовується для ітерації по властивостях об'єкта. Ось його синтаксис:
            </Paragraph>
            <CodeBlock>
          {`
for (змінна in об'єкт) {
    // Блок коду, який виконується на кожній ітерації
}
          `}
      </CodeBlock>
            <Paragraph>
                Приклад використання циклу <Code>for...in</Code> для ітерації по властивостях об'єкта:
            </Paragraph>
            <CodeBlock>
          {`
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

for (let key in person) {
    console.log(key, person[key]);
}
          `}
      </CodeBlock>
            <Paragraph>
                У цьому прикладі ми перебираємо всі властивості об'єкта <Code>person</Code> та виводимо їхні ключі та значення.
            </Paragraph>

            <SubHeader
               >Цикл for...of</SubHeader>
            <Paragraph>
                Цикл <Code>for...of</Code> використовується для ітерації по елементах ітерабельних об'єктів, таких як масиви, рядки, мапи тощо. Ось синтаксис цього циклу:
            </Paragraph>
            <CodeBlock>
          {`
for (змінна of ітерабельний_об'єкт) {
    // Блок коду, який виконується на кожній ітерації
}
          `}
      </CodeBlock>
            <Paragraph>
                Приклад використання циклу <Code>for...of</Code> для ітерації по елементах масиву:
            </Paragraph>
            <CodeBlock>
          {`
const numbers = [1, 2, 3, 4, 5];

for (let num of numbers) {
    console.log(num);
}
          `}
      </CodeBlock>
            <Paragraph>
                У цьому прикладі ми перебираємо всі елементи масиву <Code>numbers</Code> та виводимо їх.
            </Paragraph>
        </Container>
    );
};

export default ForLoopsPage;