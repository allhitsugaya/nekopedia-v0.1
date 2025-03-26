import React from 'react';
import { Box, Typography } from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const ArrayCopyAndSavePage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Збереження та копіювання масивів</BookHeader>

            <Paragraph>
                В JavaScript існують різні способи зберігання та копіювання масивів, і різниця між ними полягає у тому, чи зберігається посилання на оригінальний масив чи створюється новий незалежний масив.
            </Paragraph>

            <SubHeader>Збереження масиву</SubHeader>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                1. Просте присвоєння
            </Typography>
            <Paragraph>
                При присвоєнні масиву іншій змінній створюється посилання на оригінальний масив, тому зміни в одному вплинуть на інший.
            </Paragraph>
            <CodeBlock>
                {`const originalArray = [1, 2, 3];
const newArray = originalArray; // newArray посилається на originalArray

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3, 4]`}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                2. Метод slice()
            </Typography>
            <Paragraph>
                Метод <Code>slice()</Code> створює новий масив, який містить підрядок оригінального масиву.
            </Paragraph>
            <CodeBlock>
                {`const originalArray = [1, 2, 3];
const newArray = originalArray.slice();

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                3. Оператор розширення ... (spread operator)
            </Typography>
            <Paragraph>
                Оператор розширення створює новий масив і копіює значення з оригінального масиву.
            </Paragraph>
            <CodeBlock>
                {`const originalArray = [1, 2, 3];
const newArray = [...originalArray];

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
            </CodeBlock>

            <SubHeader>Копіювання масиву</SubHeader>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                1. Метод concat()
            </Typography>
            <Paragraph>
                Метод <Code>concat()</Code> створює новий масив, об'єднуючи два (або більше) масиви.
            </Paragraph>
            <CodeBlock>
                {`const originalArray = [1, 2, 3];
const newArray = originalArray.concat();

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                2. Метод Array.from()
            </Typography>
            <Paragraph>
                Метод <Code>Array.from()</Code> створює новий масив з ітерованого об'єкта, такого як масив або строка.
            </Paragraph>
            <CodeBlock>
                {`const originalArray = [1, 2, 3];
const newArray = Array.from(originalArray);

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                3. Оператор розширення ... (spread operator)
            </Typography>
            <Paragraph>
                Оператор розширення також використовується для створення глибоких копій об'єктів та масивів.
            </Paragraph>
            <CodeBlock>
                {`const originalArray = [1, 2, 3];
const newArray = [...originalArray];

newArray.push(4);
console.log(originalArray); // Виведе [1, 2, 3]`}
            </CodeBlock>

            <Box className='conclusion'>
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Важливо розуміти, коли використовувати збереження (посилання) та копіювання масивів, оскільки це впливає на роботу з вашими даними та може уникнути небажаних побічних ефектів.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default ArrayCopyAndSavePage;