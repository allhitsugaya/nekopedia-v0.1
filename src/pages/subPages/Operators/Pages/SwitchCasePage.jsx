import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const SwitchCasePage = () => {
    return (
        <>
            <Typography variant="h2" component="h2">Умовна конструкція switch/case</Typography>
            <Paragraph>
                Така конструкція дає можливість перевіряти значення змінної на рівність з різними варіантами і виконувати код, пов'язаний із відповідним варіантом. Давайте розглянемо синтаксис <Code>switch/case</Code>, його використання та наведемо практичні приклади.
            </Paragraph>

            <Typography variant="h2" component="h2">Синтаксис switch/case</Typography>
            <Paragraph>
                Основна структура <Code>switch/case</Code> виглядає наступним чином:
            </Paragraph>
            <CodeBlock>
                {`
switch (вираз) {
    case значення1:
        // Код, що виконується, якщо вираз рівний значенню1
        break;
    case значення2:
        // Код, що виконується, якщо вираз рівний значенню2
        break;
    case значення3:
        // Код, що виконується, якщо вираз рівний значенню3
        break;
    // Інші варіанти case
    default:
        // Код, що виконується, якщо жоден варіант не підходить
}
                `}
            </CodeBlock>
            <List dense>
                <ListItem>
                    <ListItemText primary={<><Code>вираз</Code> - вираз або значення, яке перевіряється на рівність зі значеннями в <Code>case</Code>.</>} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={<><Code>case значення1</Code> - визначає варіант, який буде виконаний, якщо вираз дорівнює <Code>значенню1</Code>.</>} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={<><Code>break</Code> - ключове слово, яке припиняє виконання <Code>switch</Code> після виконання коду в потрібному <Code>case</Code>.</>} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={<><Code>default</Code> - варіант, що виконується, якщо жоден із <Code>case</Code> не підходить.</>} />
                </ListItem>
            </List>

            <Typography variant="h2" component="h2">Важливі аспекти switch/case</Typography>
            <List dense>
                <ListItem>
                    <ListItemText
                        primary={<strong><Code>break</Code></strong>}
                        secondary="Ключове слово break є важливим, оскільки воно припиняє виконання switch, якщо виконується певний варіант. Якщо ви його не використовуєте, виконання продовжиться і для наступних case."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={<strong><Code>default</Code></strong>}
                        secondary="Оператор default використовується, якщо жоден варіант не підходить. Він є необов'язковим, але рекомендується використовувати його, щоб мати обробку непередбачуваних значень."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary={<strong>Типи даних</strong>}
                        secondary="switch/case порівнює значення на рівність без перевірки типів даних. Це може призвести до непередбачуваної поведінки, якщо типи відрізняються."
                    />
                </ListItem>
            </List>

            <Typography variant="h2" component="h2">Приклади використання</Typography>

            <Typography variant="h3" component="h3">День тижня</Typography>
            <CodeBlock>
                {`
let day = "п'ятниця";
let message;

switch (day) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
        message = "Це робочий день.";
        break;
    case "субота":
    case "неділя":
        message = "Це вихідний день.";
        break;
    default:
        message = "Неправильно вказаний день.";
}

console.log(message);
                `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми використовуємо <Code>switch/case</Code>, щоб визначити, чи є заданий день робочим або вихідним. При цьому використовується <Code>break</Code>, щоб зупинити виконання <Code>switch</Code> після відповідного варіанта.
            </Paragraph>

            <Typography variant="h3" component="h3">Вибір операції</Typography>
            <CodeBlock>
                {`
let operation = "помножити";
let result;

switch (operation) {
    case "додати":
        result = 10 + 5;
        break;
    case "відняти":
        result = 10 - 5;
        break;
    case "помножити":
        result = 10 * 5;
        break;
    case "поділити":
        result = 10 / 5;
        break;
    default:
        result = "Невідома операція";
}

console.log(\`Результат: \${result}\`);
                `}
            </CodeBlock>
            <Paragraph>
                Тут ми використовуємо <Code>switch/case</Code>, щоб обрати математичну операцію на основі значення <Code>operation</Code>.
            </Paragraph>

            <Box className='conclusion'>
                <Typography variant="h2" component="h2">Заключні слова</Typography>
                <Paragraph>
                    Умовна конструкція <Code>switch/case</Code> є потужним інструментом для обробки різних варіантів
                    значень у вашому коді. Вона дозволяє писати більш читабельний код для обробки багатьох сценаріїв.
                    Пам'ятайте про важливість <Code>break</Code> та <Code>default</Code> для точного керування
                    виконанням.
                </Paragraph>
                <Paragraph>
                    Ви можете використовувати <Code>switch/case</Code>, коли маєте багато варіантів, і вам потрібно
                    визначити, який код виконувати на основі значення змінної. Практикуйте цю конструкцію, і вона стане
                    корисною у ваших JavaScript-проектах.
                </Paragraph>
            </Box>
        </>
    );
};

export default SwitchCasePage;