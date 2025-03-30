import React from 'react';
import {Container} from "@mui/material";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";

const PureFunctionsPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Чисті функції</BookHeader>
            <Paragraph>
                Чисті функції є фундаментальним поняттям в програмуванні, особливо в JavaScript. Це функції, які мають певні властивості, спрощуючи розробку, розуміння і тестування коду.
            </Paragraph>
            <Paragraph>
                Використовуючи чисті функції, можна забезпечити більшу стабільність, легкість розуміння і підтримки коду, що робить їх важливою концепцією в розробці програмного забезпечення.
            </Paragraph>

            <SubHeader>Основні характеристики чистих функцій</SubHeader>
            <Paragraph>
                Ось основні характеристики чистих функцій:
            </Paragraph>

            <SubHeader variant="h3">1. Детермінованість</SubHeader>
            <Paragraph>
                Чиста функція завжди повертає однаковий результат для однакових вхідних даних. Немає впливу зовнішнього стану або змінних.
            </Paragraph>
            <CodeBlock>
          {`
function add(a, b) {
  return a + b;
}
          `}
            </CodeBlock>


            <SubHeader variant="h3">2. Без побічних ефектів</SubHeader >
            <Paragraph>
                Це означає, що чиста функція не змінює стану програми і не виконує операцій, які впливають на зовнішнє середовище. Вона лише обчислює результат і повертає його.
            </Paragraph>
            <CodeBlock>
          {`
let x = 10;

function double(n) {
  return n * 2;
}

let result = double(x); // result = 20, x не змінюється
          `}
            </CodeBlock>

            <SubHeader variant="h3">3. Без побічних ефектів вводу-виводу</SubHeader >
            <Paragraph>
                Чисті функції не залежать від зовнішніх джерел даних, таких як файли, мережа або консольний вивід.
            </Paragraph>
            <CodeBlock>
          {`
function fetchData() {
  // Ця функція не є чистою, оскільки залежить від зовнішнього ресурсу
  return fetch('https://example.com/data.json').then(response => response.json());
}
          `}
            </CodeBlock>

            <SubHeader variant="h3">4. Незалежність від порядку</SubHeader >
            <Paragraph>
                Результат виконання чистої функції не залежить від порядку виклику функцій або інших операцій у програмі.
            </Paragraph>
            <CodeBlock>
          {`
function add(a, b) {
  return a + b;
}

let sum1 = add(2, 3); // sum1 = 5
let sum2 = add(3, 2); // sum2 = 5, порядок не має значення
          `}
            </CodeBlock>

            <SubHeader variant="h3">5. Чудова тестируваність</SubHeader >
            <Paragraph>
                Чисті функції легше тестувати, оскільки їх результати передбачувані та не залежать від зовнішніх умов.
            </Paragraph>
            <CodeBlock>
          {`
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
          `}
            </CodeBlock>
        </Container>
    );
};

export default PureFunctionsPage;