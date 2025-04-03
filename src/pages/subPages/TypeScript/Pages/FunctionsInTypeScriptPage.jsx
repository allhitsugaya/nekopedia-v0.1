import { Typography, useTheme, Box } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const FunctionsInTypeScriptPage = () => {
    const theme = useTheme();

    return (
        <Box>
            <Typography
                variant="h1"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    mb: 4,
                    color: theme.palette.text.primary
                }}
            >
                Робота з функціями
            </Typography>

            <Paragraph>
                В сучасному світі розробки програмного забезпечення TypeScript вже давно став необхідним інструментом для тих, хто прагне високої якості та стабільності свого коду. Відповідальність за це несе не тільки сам розробник, а й засоби, які він обирає для своєї роботи.
            </Paragraph>

            <Paragraph>
                Одним із ключових аспектів TypeScript є його потужна система визначення типів. У цьому контексті робота з функціями набуває особливого значення, адже вони є основною будівельною одиницею програми. У даній доповіді ми детально розглянемо основи роботи з функціями в TypeScript, надаючи конкретні приклади та використовуючи передові практики, які забезпечать читабельність, надійність та гнучкість вашого коду. Давайте розглянемо ключові аспекти визначення типів для функцій, використання необов'язкових та за замовчуванням параметрів, а також принципи перевантаження функцій, які забезпечать елегантну та розширювану архітектуру коду.
            </Paragraph>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: theme.palette.text.primary
                }}
            >
                Визначення типів для функцій
            </Typography>

            <Paragraph>
                В TypeScript визначення типів для функцій є важливою практикою, що дозволяє забезпечити безпеку коду та допомагає розробникам розуміти та очікувати, які дані обробляються та повертаються функцією.
            </Paragraph>

            <Paragraph>
                Параметри функції можуть мати різні типи, і тип повернення визначається після <Code>:</Code>. У прикладі, функція <Code>add</Code> приймає два числових параметри та повертає числовий результат типу <Code>number</Code>:
            </Paragraph>

            <CodeBlock>
                {`// Приклад визначення типів для функції
function add(x: number, y: number): number {
  return x + y;
}

// Використання функції
let result: number = add(5, 10);`}
            </CodeBlock>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: theme.palette.text.primary
                }}
            >
                Необов'язкові та за замовчуванням параметри
            </Typography>

            <Paragraph>
                Необов'язкові параметри дозволяють функції приймати частковий набір аргументів, що може бути корисним у випадках, коли деякі значення можуть бути визначені за потреби. Параметри за замовчуванням надають значення, якщо вони не передаються.
            </Paragraph>

            <Paragraph>
                Це полегшує використання функцій та зроблює їх більш гнучкими.
            </Paragraph>

            <CodeBlock>
                {`// Використання необов'язкового параметра
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return \`\${greeting}, \${name}!\`;
  } else {
    return \`Hello, \${name}!\`;
  }
}

// Використання параметра за замовчуванням
function increment(value: number, step: number = 1): number {
  return value + step;
}`}
            </CodeBlock>

            <Paragraph>
                Тут функція <Code>greet</Code> приймає два параметри, але <Code>greeting</Code> є необов'язковим. Функція <Code>increment</Code> має параметр <Code>step</Code>, який має значення за замовчуванням, якщо воно не передано. Завдяки символу <Code>?</Code>.
            </Paragraph>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: theme.palette.text.primary
                }}
            >
                Перевантаження Функцій
            </Typography>

            <Paragraph>
                Перевантаження функцій в TypeScript дозволяє описати різні варіанти виклику функції з різними типами аргументів і типами повернення. Це дозволяє розробникам викликати функцію з різними аргументами та очікувати відмінних результатів.
            </Paragraph>

            <Paragraph>
                Цей приклад показує функцію <Code>multiply</Code>, яка може приймати або числові, або рядкові параметри, повертаючи відповідно числовий або рядковий результат.
            </Paragraph>

            <CodeBlock>
                {`// Перевантаження функції
function multiply(value: number, factor: number): number;
function multiply(value: string, factor: number): string;
function multiply(value: any, factor: number): any {
  if (typeof value === 'number') {
    return value * factor;
  } else if (typeof value === 'string') {
    return value.repeat(factor);
  }
}

// Використання функції
let result1: number = multiply(5, 3);
let result2: string = multiply('abc', 3);`}
            </CodeBlock>

            <Paragraph sx={{ mt: 4 }}>
                У цьому доповідь розглянуті основні практики роботи з функціями в TypeScript. Зазначено важливість визначення типів для забезпечення безпеки коду та полегшення роботи над проектом.
            </Paragraph>
        </Box>
    );
};

export default FunctionsInTypeScriptPage;