import {Typography, List, ListItem, Box, Container} from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";

const BinaryLogicalOperatorsPage = () => {
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
                Бінарні та логічні оператори
            </BookHeader>

            <Paragraph>
                В JavaScript існують різні типи операторів, які використовуються для виконання операцій над значеннями. Бінарні оператори працюють з двома операндами і виконують операції, такі як додавання, віднімання, множення та інші математичні операції. Логічні оператори, такі як "AND" (<Code>&&</Code>) і "OR" (<Code>||</Code>), використовуються для створення умовних виразів, які видають логічні значення <Code>true</Code> або <Code>false</Code>.
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
                Бінарні оператори
            </SubHeader>

            <Paragraph>
                Бінарні оператори - це операції, які приймають два операнди, тобто значення, над якими вони виконують дії. Ось деякі з найпоширеніших бінарних операторів в JavaScript:
            </Paragraph>

            <CodeBlock>
                {`let a = 10;
let b = 5;

let sum = a + b; // Результат: 15
let difference = a - b; // Результат: 5
let product = a * b; // Результат: 50
let quotient = a / b; // Результат: 2`}
            </CodeBlock>

            <Paragraph>
                Бінарні та арифметичні операції в JS - це два різних поняття. Бінарні операції - це ті, що приймають два операнди та повертають одне значення. Арифметичні операції - це підмножина бінарних операцій, що виконують математичні дії, такі як додавання, віднімання, множення, ділення та остача від ділення. Отже, всі арифметичні операції є бінарними, але не всі бінарні операції є арифметичними.
            </Paragraph>

            <Paragraph>
                Наприклад, в JS існують також бінарні операції порівняння, логічні операції, побітові операції та операції присвоєння, які не є арифметичними. Вони використовуються для перевірки рівності, нерівності, істинності, хибності, маніпуляції з битами та зміни значень змінних відповідно.
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
                Арифметична операція додавання
            </SubHeader>

            <Paragraph>
                Це операція, яка приймає два операнди та повертає їх суму.
            </Paragraph>

            <CodeBlock>
                {`let a = 5; // a є типу number
let b = 7; // b є типу number
console.log(a + b); // 12, бо 5 + 7 = 12

let c = "Hello"; // c є типу string
let d = "World"; // d є типу string
console.log(c + d); // HelloWorld, бо "Hello" + "World" = "HelloWorld"`}
            </CodeBlock>

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
                Бінарна операція порівняння
            </SubHeader>

            <Paragraph>
                Це операція, яка приймає два операнди та повертає значення <Code>true</Code> або <Code>false</Code>, залежно від того, чи виконується певна умова.
            </Paragraph>

            <CodeBlock>
                {`let x = 10; // x є типу number
let y = "10"; // y є типу string
console.log(x == y); // true, бо значення x та y рівні після приведення типів
console.log(x === y); // false, бо типи x та y не рівні`}
            </CodeBlock>

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
                Логічні оператори
            </SubHeader>

            <Paragraph>
                Логічні оператори використовуються для порівняння та об'єднання логічних значень. Ось деякі з найпоширеніших логічних операторів:
            </Paragraph>

            <Box sx={{ml:2}}>
            <List sx={{
                pl: 2,
                listStyleType: 'disc',
                '& .MuiListItem-root': {
                    display: 'list-item',
                    py: 0.5,
                    pl: 1,
                    ml: 2,
                    fontWeight:800
                }
            }}>
                <ListItem><Code>&&</Code> (логічне "І" або "AND")</ListItem>
                <ListItem><Code>||</Code> (логічне "АБО" або "OR")</ListItem>
                <ListItem><Code>!</Code> (логічне заперечення)</ListItem>
            </List>
            </Box>

            <Paragraph>
                Логічні оператори повертають логічні значення <Code>true</Code> або <Code>false</Code> в залежності від результату порівняння.
            </Paragraph>

            <CodeBlock>
                {`let x = 5;
let y = 10;

let result1 = x < y && x !== y; // Результат: true
let result2 = x === y || y > 20; // Результат: false
let result3 = !(x < y); // Результат: false`}
            </CodeBlock>

            <Paragraph>
                Логічні оператори дозволяють виконувати умовні операції та створювати складні умови.
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
                Логічний оператор "??"
            </SubHeader>

            <Paragraph>
                Логічний оператор <Code>??</Code>, введений в ECMAScript 2020 (ES11), використовується для визначення значення за замовчуванням (fallback) для змінної, яка може бути <Code>null</Code> або <Code>undefined</Code>. Він повертає перше визначене (не <Code>null</Code> і не <Code>undefined</Code>) значення або значення за замовчуванням, якщо всі значення <Code>null</Code> або <Code>undefined</Code>.
            </Paragraph>

            <CodeBlock>
                {`let user = null;
let defaultUser = { name: 'Гість' };

let currentUser = user ?? defaultUser;

console.log(currentUser); // Результат: { name: 'Гість' }`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі <Code>currentUser</Code> приймає значення змінної <Code>user</Code>, якщо воно не є <Code>null</Code> або <Code>undefined</Code>, інакше - значення <Code>defaultUser</Code>.
            </Paragraph>
        </Box>
        </Container>
    );
};

export default BinaryLogicalOperatorsPage;