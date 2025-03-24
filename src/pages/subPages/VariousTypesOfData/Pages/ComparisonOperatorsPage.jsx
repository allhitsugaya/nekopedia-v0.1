import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";
import Code from "../../../../features/Code/Code.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";

const ComparisonOperatorsPage = () => {
    return (
        <Box className="page-container" sx={{ p: 3 }}>
            <Typography variant="h4">Оператори порівняння</Typography>
            <Paragraph>
                Оператори порівняння в JavaScript грають важливу роль у порівнянні значень та виразів.
                Вони дозволяють визначати відносини між об'єктами та даними і відповідають на питання,
                чи вірне одне значення відносно іншого. Давайте детально розглянемо реляційні оператори:
            </Paragraph>

            <List>
                <ListItem>
                    <Code>&lt;</Code> (менше)
                </ListItem>
                <ListItem>
                    <Code>&gt;</Code> (більше)
                </ListItem>
                <ListItem>
                    <Code>&lt;=</Code> (менше або дорівнює)
                </ListItem>
                <ListItem>
                    <Code>&gt;=</Code> (більше або дорівнює)
                </ListItem>
                <ListItem>
                    <Code>in</Code>
                </ListItem>
            </List>

            <Typography variant="h5">Оператори &lt; та &gt;</Typography>
            <Paragraph>
                Оператор <Code>&lt;</Code> повертає <Code>true</Code>, якщо лівий операнд менший за правий:
            </Paragraph>
            <CodeBlock>
                {`let x = 5;
let y = 10;
let isLess = x < y; // true`}
            </CodeBlock>

            <Paragraph>
                Оператор <Code>&gt;</Code> працює на зворотних засадах:
            </Paragraph>
            <CodeBlock>
                {`let x = 15;
let y = 10;
let isGreater = x > y; // true`}
            </CodeBlock>

            <Typography variant="h5">Оператори &lt;= та &gt;=</Typography>
            <Paragraph>
                Оператор <Code>&lt;=</Code> перевіряє, чи лівий операнд менший або дорівнює правому:
            </Paragraph>
            <CodeBlock>
                {`let x = 10;
let y = 10;
let isLessOrEqual = x <= y; // true`}
            </CodeBlock>

            <Paragraph>
                Оператор <Code>&gt;=</Code> працює аналогічно:
            </Paragraph>
            <CodeBlock>
                {`let x = 10;
let y = 5;
let isGreaterOrEqual = x >= y; // true`}
            </CodeBlock>

            <Typography variant="h5">Оператор in</Typography>
            <Paragraph>
                Використовується для перевірки наявності властивості в об'єкті:
            </Paragraph>
            <CodeBlock>
                {`let person = { name: "John", age: 30 };
let hasName = "name" in person; // true
let hasAddress = "address" in person; // false`}
            </CodeBlock>

            <Typography variant="h5">Приклади використання</Typography>
            <Paragraph>
                Фільтрація даних у масиві:
            </Paragraph>
            <CodeBlock>
                {`let numbers = [5, 10, 15, 20, 25];
let filteredNumbers = numbers.filter(num => num > 15);
// [20, 25]`}
            </CodeBlock>

            <Paragraph>
                Використання в умовах:
            </Paragraph>
            <CodeBlock>
                {`let temperature = 25;
if (temperature > 30) {
  console.log("Гаряче!");
} else if (temperature <= 30 && temperature > 20) {
  console.log("Приємна температура.");
} else {
  console.log("Холодно.");
}`}
            </CodeBlock>

            <Typography variant="h5">Висновок</Typography>
            <Paragraph>
                Реляційні оператори порівнюють значення та повертають <Code>true</Code> або <Code>false</Code>,
                що робить їх корисними при фільтрації даних і прийнятті умовних рішень у JavaScript.
            </Paragraph>
        </Box>
    );
};

export default ComparisonOperatorsPage;