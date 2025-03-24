import { Typography, List, ListItem } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const ArithmeticOperatorsPage = () => {
    return (
        <>
            <Typography
                variant="h1"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    mb: 4,
                    color: 'text.primary'
                }}
            >
                Арифметичні оператори та залишок від ділення
            </Typography>

            <Paragraph>
                Арифметичні оператори є важливою частиною будь-якої мови програмування, включаючи JavaScript. Вони дозволяють виконувати різноманітні обчислення та операції з числами. Тут ми детально розглянемо арифметичні оператори та особливості роботи з залишком від ділення (оператор <Code>%</Code>).
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
                Арифметичні оператори
            </Typography>

            <Paragraph>
                JavaScript підтримує різні арифметичні оператори, які можуть бути використані для виконання математичних обчислень. Основні арифметичні оператори включають:
            </Paragraph>

            <List sx={{
                pl: 2,
                listStyleType: 'disc',
                '& .MuiListItem-root': {
                    display: 'list-item',
                    py: 0.5,
                    pl: 1,
                    ml: 2
                }
            }}>
                <ListItem><Code>+</Code> (додавання)</ListItem>
                <ListItem><Code>-</Code> (віднімання)</ListItem>
                <ListItem><Code>*</Code> (множення)</ListItem>
                <ListItem><Code>/</Code> (ділення)</ListItem>
                <ListItem><Code>%</Code> (залишок від ділення)</ListItem>
            </List>

            <Paragraph>Ось приклади використання цих операторів:</Paragraph>

            <CodeBlock>
                {`let a = 10;
let b = 5;

let sum = a + b; // Результат: 15
let difference = a - b; // Результат: 5
let product = a * b; // Результат: 50
let quotient = a / b; // Результат: 2`}
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
                Залишок від ділення
            </Typography>

            <Paragraph>
                Залишок від ділення (або модуль, чи остача) - це число, яке залишається після цілочисельного ділення одного числа на інше. У JavaScript для обчислення залишку від ділення використовується оператор <Code>%</Code>.
            </Paragraph>

            <CodeBlock>
                {`let a = 10;
let b = 3;

let remainder = a % b; // Результат: 1`}
            </CodeBlock>

            <Paragraph>
                В цьому прикладі, змінна <Code>remainder</Code> буде мати значення <Code>1</Code>, оскільки при діленні <Code>10</Code> на <Code>3</Code> отримуємо максимально можливе число цілих трійок у десяти, яке дорівнює <Code>3</Code> (<Code>3 * 3 = 9</Code>), і залишок <Code>1</Code>, який не ділиться націло на <Code>3</Code>.
            </Paragraph>

            <Paragraph>
                Залишок від ділення може бути корисним у великому спектрі завдань, таких як визначення парних або непарних чисел, перевірка кратності тощо.
            </Paragraph>
        </>
    );
};

export default ArithmeticOperatorsPage;