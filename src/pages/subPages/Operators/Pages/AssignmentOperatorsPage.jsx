import { Typography, Box } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const AssignmentOperatorsPage = () => {
    return (
        <Box style={{
            maxWidth: '100%',
            padding: 2,
            textAlign: 'left'
        }}>
            <Typography
                variant="h1"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    mb: 4,
                    color: 'text.primary'
                }}
            >
                Оператори присвоювання, інкремент та декремент
            </Typography>

            <Paragraph>
                Оператори присвоювання, інкремент та декремент - це важливі концепції в мові програмування JavaScript. Вони дозволяють працювати зі змінними та об'єктами та роблять код більш зрозумілим та ефективним. Давайте розглянемо ці концепції докладніше.
            </Paragraph>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Оператори присвоювання
            </Typography>

            <Paragraph>
                Оператори присвоювання використовуються для присвоєння значення змінній. Найпоширенішим оператором присвоювання є <Code>=</Code>. Наприклад:
            </Paragraph>

            <CodeBlock>
                {`let x = 10; // Змінній x присвоєно значення 10`}
            </CodeBlock>

            <Paragraph>
                Завдяки операторам присвоювання можна легко оновлювати значення змінних. Також існують скорочені форми операцій присвоювання, такі як <Code>+=</Code>, <Code>-=</Code> тощо. Наприклад:
            </Paragraph>

            <CodeBlock>
                {`let y = 5;
y += 3; // Змінній y присвоюється нове значення 8 (5 + 3)`}
            </CodeBlock>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Інкремент та декремент
            </Typography>

            <Paragraph>
                Інкремент і декремент - це оператори для збільшення або зменшення значення змінної на 1. У циклічних обчисленнях дуже часто використовуються присвоювання вигляду <Code>і=і+1</Code> та <Code>і=і-1</Code>. Їх можна задати в скороченій формі за допомогою одномісних операторів збільшення – інкременту (<Code>++</Code>) і зменшення – декременту (<Code>--</Code>). Ці оператори (і відповідні операції) мають префіксну (<Code>++і, --і</Code>) і постфіксну (<Code>і++, і--</Code>) форми.
            </Paragraph>

            <Paragraph>
                Головне пам'ятати, що оператор інкремента <Code>++</Code> збільшує змінну на 1, а оператор декремента <Code>--</Code> зменшує на 1. Наприклад:
            </Paragraph>

            <CodeBlock>
                {`let a = 5;
let b = ++a; // Змінна a спочатку збільшується на 1, потім значення присвоюється змінній b (a=6, b=6)`}
            </CodeBlock>

            <CodeBlock>
                {`let c = 10;
let d = c--; // Змінна c спочатку присвоюється змінній d, потім зменшується на 1 (c=9, d=10)`}
            </CodeBlock>

            <Paragraph>
                Використання інкремента та декремента дозволяє легко збільшувати або зменшувати значення змінних, що дуже корисно у численних обчисленнях та циклах.
            </Paragraph>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Приклади коду
            </Typography>

            <Paragraph>
                Давайте розглянемо декілька прикладів коду, що демонструють використання операторів присвоювання, інкремента та декремента:
            </Paragraph>

            <CodeBlock>
                {`let num1 = 10;
let num2 = 20;

num1 += num2; // Оператор += додає num2 до num1, num1 стає 30
num2 -= 5;    // Оператор -= віднімає 5 від num2, num2 стає 15

let count = 0;
count++;      // Оператор інкремента count++
count--;      // Оператор декремента count--

let i = 5;
let j = i++; // Оператор постфіксного інкремента, j отримує значення 5, i збільшується на 1 (i=6)`}
            </CodeBlock>

            <Paragraph>
                Використання цих операторів допомагає зробити ваш код більш читабельним і зрозумілим, а також сприяє впровадженню швидких та ефективних обчислень.
            </Paragraph>
        </Box>
    );
};

export default AssignmentOperatorsPage;