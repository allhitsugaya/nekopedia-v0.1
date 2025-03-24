import { Typography, useTheme } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const TypeScriptBasicsPage = () => {
    const theme = useTheme();

    return (
        <>
            <Typography
                variant="h1"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    mb: 4,
                }}
            >
                Основні поняття
            </Typography>

            <Paragraph>
                <Typography component="span" sx={{ fontWeight: 600 }}>TypeScript</Typography> - це мова програмування, яка є надмножиною (супермножиною) JavaScript. Вона додає до JavaScript статичну типізацію, що дозволяє визначати типи змінних, параметрів та повертаємих значень функцій. TypeScript компілюється в JavaScript, тому код, написаний на TypeScript, може бути використаний в будь-якому проекті, який використовує JavaScript.
            </Paragraph>

            <Paragraph>
                TypeScript був представлений Microsoft як відкрите джерело в 2012 році. З того часу він став дуже популярним у розробці великих проектів, оскільки він допомагає уникнути багатьох типових помилок та полегшує рефакторинг коду.
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
                Основні Типи Даних
            </Typography>

            <Paragraph>
                Перечислення базових типів: <Code>number</Code>, <Code>string</Code>, <Code>boolean</Code>, <Code>object</Code>.
            </Paragraph>

            <CodeBlock>
                {`let age: number = 25;
let name: string = 'John';
let isStudent: boolean = true;
let person: object = { name: 'John', age: 25 };`}
            </CodeBlock>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                }}
            >
                Визначення типів для змінних та параметрів функцій
            </Typography>

            <CodeBlock>
                {`// Визначення типу для змінної
let count: number;
count = 10;

// Визначення типу для параметра функції
function multiply(x: number, y: number): number {
  return x * y;
}`}
            </CodeBlock>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                }}
            >
                Введення в інтерфейси та типи для створення власних структур даних
            </Typography>

            <CodeBlock>
                {`// Визначення інтерфейсу
interface Person {
  name: string;
  age: number;
}

// Використання інтерфейсу
let student: Person = { name: 'Alice', age: 22 };

// Визначення типу
type Point = { x: number; y: number };

// Використання типу
let coordinates: Point = { x: 10, y: 20 };`}
            </CodeBlock>

            <Paragraph sx={{ mt: 4 }}>
                Цей конспект покриває основні поняття TypeScript, включаючи введення в мову, базові типи даних та використання інтерфейсів та типів для визначення структур даних.
            </Paragraph>
        </>
    );
};

export default TypeScriptBasicsPage;