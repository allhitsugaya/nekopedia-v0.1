import React from 'react';
import { Box } from '@mui/material';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const WhileDoWhilePage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Цикл while/do while</BookHeader>

            <Paragraph>
                У цій доповіді ми розглянемо такі види циклів як <Code>while</Code> та <Code>do...while</Code>, їх властивості та приклади використання.
            </Paragraph>

            <Paragraph>
                Вони корисні в різних сценаріях, включаючи ітерацію по масивам, опрацювання користувацьких введень, роботу з базами даних та багато інших завдань.
            </Paragraph>

            <Paragraph>
                Цикли <Code>while</Code> та <Code>do...while</Code> - це потужні інструменти в програмуванні, які дозволяють виконувати код умовно багато разів. Проте дотримуйтесь правил гарного програмування та уникайте безкінечних циклів, докладаючи особливу увагу до умов виходу з циклів.
            </Paragraph>

            <Paragraph>
                Навчайтеся використовувати ці цикли в своїх проектах, тоді ви збільшите ефективність свого коду.
            </Paragraph>

            <SubHeader>Цикл while</SubHeader>
            <Paragraph>
                Цикл <Code>while</Code> виконується, доки певна умова є істинною (<Code>true</Code>). Ось загальний синтаксис цього циклу:
            </Paragraph>

            <CodeBlock>
                {`
while (умова) {
    // Блок коду, який виконується, поки умова true
}
                `}
            </CodeBlock>

            <Paragraph>
                Приклад використання циклу <Code>while</Code> для виведення чисел від 1 до 5:
            </Paragraph>

            <CodeBlock>
                {`
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
                `}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі ми ініціалізуємо змінну <Code>i</Code> значенням 1 і встановлюємо умову, що цикл буде виконуватися, доки <Code>i</Code> менше або дорівнює 5. Після кожного кроку циклу збільшуємо значення <Code>i</Code> на 1.
            </Paragraph>

            <SubHeader>Цикл do...while</SubHeader>
            <Paragraph>
                Цикл <Code>do...while</Code> схожий на <Code>while</Code>, але код у блоку виконується принаймні один раз, навіть якщо умова відразу <Code>false</Code>. Ось синтаксис цього циклу:
            </Paragraph>

            <CodeBlock>
                {`
do {
    // Блок коду, який виконується, поки умова true
} while (умова);
                `}
            </CodeBlock>

            <Paragraph>
                Приклад використання циклу <Code>do...while</Code> для виведення чисел від 1 до 5:
            </Paragraph>

            <CodeBlock>
                {`
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
                `}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі ми спочатку виводимо число 1, а потім перевіряємо умову. Оскільки умова <Code>i меньше= 5</Code> є <Code>true</Code>, цикл продовжує виконуватися і виводить числа від 2 до 5.
            </Paragraph>

            <SubHeader>Порівняння циклів</SubHeader>
            <Paragraph>
                Основна різниця між <Code>while</Code> та <Code>do...while</Code> полягає в тому, що <Code>do...while</Code> гарантує, що блок коду виконається принаймні один раз, навіть якщо умова відразу <Code>false</Code>. У випадку, якщо умова відразу <Code>false</Code>, то цикл <Code>while</Code> не виконається.
            </Paragraph>
        </Box>
    );
};

export default WhileDoWhilePage;