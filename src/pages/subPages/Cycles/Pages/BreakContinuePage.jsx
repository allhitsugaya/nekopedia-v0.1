import React from 'react';
import { Box, Paper } from '@mui/material';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const BreakContinuePage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Використання break та continue у циклах</BookHeader>

            <Paragraph>
                Цикли є однією з найбільш важливих структур в програмуванні, і вони дозволяють виконувати певні операції декілька разів. Проте іноді виникають ситуації, коли потрібно вийти із циклу раніше, ніж всі ітерації будуть завершені, або ж пропустити певну ітерацію. Для цього в JavaScript існують ключові слова <Code>break</Code> і <Code>continue</Code>. Ми розглянемо їхнє використання в різних типах циклів: <Code>while</Code>, <Code>do...while</Code> і <Code>for</Code>.
            </Paragraph>

            <SubHeader>Використання break у циклах</SubHeader>
            <Paragraph>
                Ключове слово <Code>break</Code> використовується для виходу із циклу раніше, ніж всі ітерації будуть завершені. Воно особливо корисне, коли виникає необхідність негайно зупинити цикл при заданій умові. Нижче наведено приклад використання <Code>break</Code> у циклі <Code>while</Code>:
            </Paragraph>
            <CodeBlock>
                {`
let i = 0;
while (i < 5) {
    console.log(i);
    if (i === 3) {
        break; // Вийти з циклу, якщо i дорівнює 3
    }
    i++;
}
                `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі цикл <Code>while</Code> виведе числа від 0 до 3, і коли <Code>i</Code> буде дорівнювати 3, <Code>break</Code> припинить подальшу ітерацію циклу.
            </Paragraph>
            <Paragraph>
                Ключове слово <Code>break</Code> також можна використовувати в циклах <Code>do...while</Code> та <Code>for</Code>, і його використання вони мають схожий принцип.
            </Paragraph>

            <SubHeader>Використання continue у циклах</SubHeader>
            <Paragraph>
                Ключове слово <Code>continue</Code> використовується для переходу до наступної ітерації циклу без виконання після нього решти коду в поточній ітерації. Це корисно, коли потрібно пропустити певні ітерації на підставі певної умови. Ось приклад використання <Code>continue</Code> у циклі <Code>for</Code>:
            </Paragraph>
            <CodeBlock>
                {`
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Пропустити ітерацію, коли i дорівнює 2
    }
    console.log(i);
}
                `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі цикл <Code>for</Code> виведе числа від 0 до 4, але пропустить число 2 через використання <Code>continue</Code>.
            </Paragraph>

            <SubHeader>Використання break та continue в реальних сценаріях</SubHeader>
            <Paragraph>
                Існує безліч сценаріїв, де <Code>break</Code> та <Code>continue</Code> є дуже корисними. Один із них - пошук певного значення у масиві та виходження із циклу, якщо воно знайдено. Ось приклад:
            </Paragraph>
            <CodeBlock>
                {`
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 6;
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        found = true;
        break; // Завершити цикл, коли знайдено значення
    }
}

if (found) {
    console.log(\`Знайдено \${target} у масиві.\`);
} else {
    console.log(\`\${target} не знайдено у масиві.\`);
}
                `}
            </CodeBlock>
            <Paragraph>
                В цьому прикладі ми шукаємо значення <Code>target</Code> у масиві <Code>numbers</Code>. Якщо воно знайдено, ми використовуємо <Code>break</Code>, щоб завершити цикл раніше.
            </Paragraph>
            <Paragraph>
                Ще однією типовою ситуацією є обробка непарних чи парних чисел у масиві. За допомогою <Code>continue</Code> ми можемо пропустити числа, які не відповідають нашій умові:
            </Paragraph>
            <CodeBlock>
                {`
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        continue; // Пропустити парні числа
    }
    console.log(numbers[i]);
}
                `}
            </CodeBlock>
            <Paragraph>
                У цьому випадку ми пропускаємо парні числа і виводимо лише непарні.
            </Paragraph>

            <Paper sx={{ p: 3, mt: 3, backgroundColor: 'background.paper' }} className='conclusion'>
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Ключові слова <Code>break</Code> та <Code>continue</Code> дозволяють керувати виконанням циклів в
                    JavaScript. Вони роблять код більш гнучким і дозволяють виходити з циклів або пропускати окремі
                    ітерації на основі певних умов. Розуміння їхнього використання робить вас більш ефективним
                    розробником, оскільки ви можете писати більш читабельний та продуктивний код.
                </Paragraph>
            </Paper>
        </Box>
    );
};

export default BreakContinuePage;