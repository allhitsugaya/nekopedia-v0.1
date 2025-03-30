import {Box, Container, Typography} from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";

const ConditionalOperatorsPage = () => {
    return (
        <Container>
        <Box style={{
            maxWidth: '100%',
            padding: 2,
            textAlign: 'left'
        }}>
            <BookHeader
                variant="h1"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    mb: 4,
                    color: 'text.primary'
                }}
            >
                Умовний оператор if та тернарний оператор
            </BookHeader>

            <Paragraph>
                Умовний оператор <Code>if</Code> є однією з фундаментальних конструкцій в мові програмування JavaScript. Він дозволяє виконувати різні частини коду залежно від того, чи виконується певна умова. Тут ми розглянемо синтаксис умовного оператора <Code>if</Code>, його використання та кілька корисних практичних прикладів.
            </Paragraph>
            <Paragraph>
                Завдяки йому можна робити розгалуження у коді та змінювати поведінку програми в залежності від умов.
            </Paragraph>

            <SubHeader
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Синтаксис оператора if
            </SubHeader>

            <Paragraph>
                Основна структура оператора <Code>if</Code> виглядає наступним чином:
            </Paragraph>

            <CodeBlock>
                {`if (умова) {
    // Код, що виконується, якщо умова істинна
}`}
            </CodeBlock>

            <Paragraph>
                Умова - це вираз або значення, яке перевіряється на істинність. Якщо умова істинна, виконується блок коду всередині фігурних дужок. Якщо умова неправильна, блок коду пропускається.
            </Paragraph>

            <SubHeader
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Приклади використання
            </SubHeader>

            <Typography
                variant="h3"
                sx={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    mt: 3,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Перевірка числа на парність
            </Typography>

            <CodeBlock>
                {`let number = 5;

if (number % 2 === 0) {
    console.log("Число парне.");
} else {
    console.log("Число непарне.");
}`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі ми перевіряємо, чи є число парним, використовуючи оператор <Code>%</Code>, який повертає залишок від ділення числа на 2. Якщо залишок дорівнює 0, умова виконується, і виводиться "Число парне", в іншому випадку виводиться "Число непарне".
            </Paragraph>

            <SubHeader
                variant="h3"
                sx={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    mt: 3,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Визначення старшості
            </SubHeader>

            <CodeBlock>
                {`let age = 18;

if (age < 18) {
    console.log("Ви надто молоді для голосування.");
} else if (age >= 18 && age < 35) {
    console.log("Ви можете голосувати, але ще не можете балотуватися.");
} else {
    console.log("Ви можете голосувати та балотуватися.");
}`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі ми використовуємо <Code>if</Code>, <Code>else if</Code> і <Code>else</Code> для визначення, які права голосу має особа в залежності від її віку. Умови оцінюються в порядку, в якому вони вказані, і виконується перший блок коду, для якого умова істинна.
            </Paragraph>

            <SubHeader
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Вкладені умовні оператори if
            </SubHeader>

            <Paragraph>
                Умовні оператори можна вкладати один в одного для більш складних перевірок. Ось приклад вкладеного оператора <Code>if</Code>:
            </Paragraph>

            <CodeBlock>
                {`let temperature = 25;
let isRaining = false;

if (temperature > 30) {
    console.log("На вулиці жарко.");
    if (isRaining) {
        console.log("Але також йде дощ.");
    }
} else {
    console.log("На вулиці прохолодно.");
}`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі ми перевіряємо температуру та наявність дощу. Якщо температура більше 30 градусів, ми виводимо повідомлення про жару. Якщо при цій умові йде дощ, виводимо також інше повідомлення.
            </Paragraph>

            <SubHeader
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Тернарний оператор ?
            </SubHeader>

            <Paragraph>
                Тернарний оператор, також відомий як умовний оператор, приймає три операнди і виконує умовну операцію на підставі значення умови. Синтаксис тернарного оператора виглядає так:
            </Paragraph>

            <CodeBlock>
                {`умова ? вираз1 : вираз2`}
            </CodeBlock>

            <Paragraph>
                Якщо умова істинна, то виконується <Code>вираз1</Code>, інакше - <Code>вираз2</Code>.
            </Paragraph>

            <CodeBlock>
                {`let age = 25;

let message = age >= 18 ? 'Доросла людина' : 'Неповнолітній';`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі, якщо вік більше або дорівнює 18, то <Code>message</Code> буде містити рядок 'Доросла людина', в іншому випадку - 'Неповнолітній'.
            </Paragraph>

            <div style={{ marginTop: '2rem' }}>
                <SubHeader
                    variant="h2"
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary'
                    }}
                >
                    Заключні слова
                </SubHeader>
                <Paragraph>
                    Умовний оператор <Code>if</Code> - це потужний інструмент в JavaScript, який дозволяє вам створювати логіку у вашому коді на основі умов. Розуміння його синтаксису та правильне використання допоможуть вам писати більш складні та функціональні програми.
                </Paragraph>
                <Paragraph>
                    Це лише початок вашого шляху до розуміння умовних операторів в JavaScript. Вони є основою багатьох складніших конструкцій, і з їхньою допомогою ви зможете створювати різноманітні програми та веб-додатки. Не соромтеся експериментувати та вдосконалювати свої навички роботи з умовними операторами. Успіхів у вашому навчанні JavaScript!
                </Paragraph>
            </div>
        </Box>
        </Container>
    );
};

export default ConditionalOperatorsPage;