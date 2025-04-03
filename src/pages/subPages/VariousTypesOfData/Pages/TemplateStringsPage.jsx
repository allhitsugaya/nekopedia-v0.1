import React from 'react';
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Code from "../../../../features/Code/Code.jsx";
import { Box, Typography } from '@mui/material';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const TemplateStringsPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Шаблонні рядки в JavaScript</BookHeader>

            <Paragraph>
                Шаблонні рядки (Template Strings) - це потужний інструмент в JavaScript для створення рядків, які включають в себе значення змінних та вирази. Вони представляють собою спеціальні рядки, які визначаються за допомогою обернутих (``) та використовують вираз <Code>${'{}'}</Code> для вставки значень. Давайте розглянемо, як працюють шаблонні рядки та де їх можна застосовувати.
            </Paragraph>

            <Typography variant="h2" component="h2" sx={{ fontWeight: 600 }}>
                Основи використання
            </Typography>
            <Paragraph>
                Спершу давайте розглянемо основний синтаксис шаблонних рядків:
            </Paragraph>
            <CodeBlock>
                {`
const name = "John";
const age = 30;

const message = \`Привіт, мене звати \${name} і мені \${age} років.\`;
console.log(message); // Привіт, мене звати John і мені 30 років.
                `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми створюємо змінні <Code>name</Code> і <Code>age</Code>, і потім ми створюємо рядок <Code>message</Code>, використовуючи шаблонні рядки. Змінні та вирази, заключені в <Code>${'{}'}</Code>, підставляються в рядок, коли він обчислюється.
            </Paragraph>

            <Typography variant="h2" component="h2" sx={{ fontWeight: 600 }}>
                Багаторядковий текст
            </Typography>
            <Paragraph>
                Шаблонні рядки також ідеально підходять для створення багаторядкових текстів:
            </Paragraph>
            <CodeBlock>
                {`
const best = \`
  Думи мої, думи мої,
  Лихо мені з вами!
  Нащо стали на папері
  Сумними рядами?..
\`;
console.log(best);
                `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми використовуємо шаблонні рядки для оголошення багаторядкового вірша. Обернуті лапки дозволяють вам вставити переноси рядка без потреби вручну додавати символи <Code>\n</Code>.
            </Paragraph>

            <Typography variant="h2" component="h2" sx={{ fontWeight: 600 }}>
                Вирази та функції
            </Typography>
            <Paragraph>
                Шаблонні рядки дозволяють вставляти не тільки змінні, але і вирази та результати функцій:
            </Paragraph>
            <CodeBlock>
                {`
const a = 5;
const b = 10;

const sum = \`Сума чисел \${a} і \${b} дорівнює \${a + b}\`;
console.log(sum); // Сума чисел 5 і 10 дорівнює 15

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const greeting = \`Привіт, \${capitalize(name)}!\`;
console.log(greeting); // Привіт, John!
                `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми обчислюємо суму чисел <Code>a</Code> і <Code>b</Code> та вставляємо її у рядок <Code>sum</Code>. Також ми використовуємо функцію <Code>capitalize</Code> для перетворення імені у велику літеру у рядку <Code>greeting</Code>.
            </Paragraph>

            <Typography variant="h2" component="h2" sx={{ fontWeight: 600 }}>
                Вирази шаблонів
            </Typography>
            <Paragraph>
                Шаблонні рядки також підтримують вирази шаблонів, які дозволяють виконувати операції над виразами та вставляти їхні результати:
            </Paragraph>
            <CodeBlock>
                {`
const a = 5;
const b = 10;

const result = \`\${a} + \${b} = \${a + b}\`;
console.log(result); // "5 + 10 = 15"

const isAdult = true;
const ageMessage = \`Я є \${isAdult ? "дорослим" : "дитиною"}.\`;
console.log(ageMessage); // Я є дорослим.
                `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми вставляємо результати арифметичного виразу та виразу тернарного оператора у наші рядки.
            </Paragraph>

            <Box sx={{ mt: 4 }} className='conclusion'>
                <Typography variant="h2" component="h2" sx={{ fontWeight: 600 }}>
                    Висновок
                </Typography>
                <Paragraph>
                    Шаблонні рядки роблять роботу з рядками в JavaScript більш зручною та читабельною. Вони особливо
                    корисні, коли потрібно комбінувати рядки та значення змінних у складних рядках.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default TemplateStringsPage;
