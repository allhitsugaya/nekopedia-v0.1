import React from 'react';
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import {Container} from "@mui/material";

const ArrayCopyAndSavePage = () => {
    return (
        <Container>
            <BookHeader>Збереження та копіювання масивів</BookHeader>

            <Paragraph>В JavaScript існують різні способи зберігання та копіювання масивів, і різниця між ними полягає у тому, чи зберігається посилання на оригінальний масив чи створюється новий незалежний масив. Ось приклади:</Paragraph>

            <SubHeader >Збереження масиву:</SubHeader >

            <Chapter >1. Просте присвоєння:</Chapter >
            <Paragraph>При присвоєнні масиву іншій змінній створюється посилання на оригінальний масив, тому зміни в одному вплинуть на інший.</Paragraph>
            <CodeBlock>
        {`const originalArray = [1, 2, 3];
const newArray = originalArray; // newArray посилається на originalArray

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3, 4]`}
      </CodeBlock>

            <Chapter >2. Метод slice():</Chapter >
            <Paragraph>Метод slice() створює новий масив, який містить підрядок оригінального масиву.</Paragraph>
            <CodeBlock>
        {`const originalArray = [1, 2, 3];
const newArray = originalArray.slice();

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
      </CodeBlock>

            <Chapter >3. Оператор розширення ... (spread operator):</Chapter >
            <Paragraph>Оператор розширення створює новий масив і копіює значення з оригінального масиву.</Paragraph>
            <CodeBlock>
        {`const originalArray = [1, 2, 3];
const newArray = [...originalArray];

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
      </CodeBlock>

            <SubHeader >Копіювання масиву:</SubHeader >

            <Chapter >1. Метод concat():</Chapter >
            <Paragraph>Метод concat() створює новий масив, об'єднуючи два (або більше) масиви.</Paragraph>
            <CodeBlock>
        {`const originalArray = [1, 2, 3];
const newArray = originalArray.concat();

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
      </CodeBlock>

            <Chapter >2. Метод Array.from():</Chapter >
            <Paragraph>Метод Array.from() створює новий масив з ітерованого об'єкта, такого як масив або строка.</Paragraph>
            <CodeBlock>
        {`const originalArray = [1, 2, 3];
const newArray = Array.from(originalArray);

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
      </CodeBlock>

            <Chapter >3. Оператор розширення ... (spread operator):</Chapter >
            <Paragraph>Оператор розширення також використовується для створення глибоких копій об'єктів та масивів.</Paragraph>
            <CodeBlock>
        {`const originalArray = [1, 2, 3];
const newArray = [...originalArray];

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
      </CodeBlock>

            <Paragraph>Важливо розуміти, коли використовувати збереження (посилання) та копіювання масивів, оскільки це впливає на роботу з вашими даними та може уникнути небажаних побічних ефектів.</Paragraph>
        </Container>
    );
}

export default ArrayCopyAndSavePage;
