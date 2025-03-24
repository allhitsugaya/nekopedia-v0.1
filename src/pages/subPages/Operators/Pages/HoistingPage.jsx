import {Box, Typography} from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const HoistingPage = () => {
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
                Сплив змінних (Hoisting)
            </Typography>

            <Paragraph>
                Сплив змінних, або "hoisting", є однією з особливостей, яку варто розуміти при роботі з JavaScript. Ця концепція впливає на те, як змінні та функції обробляються в контексті коду.
            </Paragraph>

            <Paragraph>
                Справа ви бачите цикл роботи JavaScript, що показує послідовність, в якій відбувається оголошення та ініціалізація змінних.
            </Paragraph>

            <Paragraph>
                Однак не забуватимемо, що у JavaScript ми можемо оголошувати та ініціалізувати наші змінні одночасно, як у цьому ну просто найпоширенішому прикладі:
            </Paragraph>

            <CodeBlock>
                {`var a = 100;`}
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
                Що таке "Сплив змінних"?
            </Typography>

            <Paragraph>
                Сплив змінних - це механізм, властивий JavaScript, коли декларації змінних та функцій піднімаються (спливають) вгору в своєму лексичному контексті перед тим, як код буде виконаний. Це означає, що ви можете використовувати змінні та функції до їх декларації в коді.
            </Paragraph>

            <Paragraph>
                Давайте подивимося на приклад спливу змінних:
            </Paragraph>

            <CodeBlock>
                {`console.log(x); // undefined
var x = 5;`}
            </CodeBlock>

            <Paragraph>
                Хоча змінна <Code>x</Code> виводиться перед її декларацією, код все одно працює. Однак значення <Code>undefined</Code> показує, що змінна була піднята вгору перед виконанням коду. Тобто фактично код виглядає так:
            </Paragraph>

            <CodeBlock>
                {`var x; // Змінну підняли (спливли) вгору
console.log(x); // undefined
x = 5; // Присвоєння значення
console.log(x); // 5`}
            </CodeBlock>

            <Paragraph>
                Це дозволяє нам використовувати змінну <Code>x</Code> навіть до її фактичної декларації.
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
                Сплив змінних (Hoisting) функцій
            </Typography>

            <Paragraph>
                Та ж сама концепція застосовується до функцій. Функції також піднімаються вгору перед виконанням коду. Давайте розглянемо приклад:
            </Paragraph>

            <CodeBlock>
                {`sayHello(); // Виклик функції перед декларацією

function sayHello() {
  console.log("Привіт!");
}`}
            </CodeBlock>

            <Paragraph>
                Функцію <Code>sayHello</Code> можна викликати навіть до того, як вона була оголошена, завдяки спливу функцій. Фактично для рушія код виглядає так:
            </Paragraph>

            <CodeBlock>
                {`function sayHello() {
  console.log("Привіт!");
}

sayHello(); // Виклик функції після декларації`}
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
                Пастка: Ініціалізація та "let"/"const"
            </Typography>

            <Paragraph>
                Хоча сплив змінних застосовується до <Code>var</Code>, варто бути обережними при використанні <Code>let</Code> і <Code>const</Code>. Давайте розглянемо приклад:
            </Paragraph>

            <CodeBlock>
                {`console.log(x); // ReferenceError: x is not defined
let x = 5;`}
            </CodeBlock>

            <Paragraph>
                Змінна <Code>x</Code> не піднімається (спливає) вгору, якщо вона оголошена за допомогою <Code>let</Code> чи <Code>const</Code>. Тому ви отримаєте <Code>ReferenceError</Code>, якщо намагаєтеся використовувати її перед декларацією.
            </Paragraph>
        </Box>
    );
};

export default HoistingPage;