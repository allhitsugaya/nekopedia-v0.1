import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const FunctionScopeClosuresPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Область видимості функції</BookHeader>

            <Paragraph>
                В JavaScript існують два рівні контекстів виконання коду: глобальний та локальний. Глобальний контекст визначається, коли код виконується поза всіма функціями. Локальні контексти виникають, коли ви визначаєте та викликаєте функції. Кожен контекст має свою власну область видимості для змінних, що визначені в ньому. Ця концепція дозволяє ізолювати та організувати ваш код.
            </Paragraph>

            <SubHeader>Область видимості (scope)</SubHeader>
            <Paragraph>
                Область видимості (scope) визначає, де та як змінні можуть бути доступними в коді. В JavaScript існують:
            </Paragraph>
            <List>
                <ListItem>
                    <ListItemText primary="глобальна область видимості" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="локальні області видимості" />
                </ListItem>
            </List>
            <Paragraph>
                Які визначають, де можна отримати доступ до змінних. Давайте подивимося на приклади:
            </Paragraph>
            <CodeBlock>
                {`// Глобальна змінна
let globalVariable = 'Я глобальна';

function exampleFunction() {
    // Локальна змінна, доступна тільки у межах цієї функції
    let localVariable = 'Я локальна';

    console.log(globalVariable); // Можна отримати доступ до глобальної змінної
    console.log(localVariable); // Можна отримати доступ до локальної змінної
}

exampleFunction();

console.log(globalVariable); // Можна отримати доступ до глобальної змінної
console.log(localVariable); // Помилка: localVariable не визначена в цьому контексті`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі <Code>globalVariable</Code> оголошена за межами будь-якої функції і, отже, її можна отримати доступ у всьому коді. З іншого боку, <Code>localVariable</Code> оголошена в межах функції <Code>exampleFunction</Code> і, отже, її можна отримати доступ лише всередині цієї функції.
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Параметри функцій
            </Typography>
            <Paragraph>
                Крім глобальних та локальних змінних, функції також можуть отримувати параметри. Параметри - це значення, які передаються у функцію при її виклику. Давайте розглянемо приклад:
            </Paragraph>
            <CodeBlock>
                {`function mathCalc(a, b) {
    let sum = a + b;
    return sum;
}

let result = mathCalc(5, 3);
console.log(result); // Виведе 8`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі <Code>mathCalc</Code> - це функція, яка отримує два параметри <Code>a</Code> і <Code>b</Code>, додає їх разом і повертає результат. При виклику функції <Code>mathCalc(5, 3)</Code>, значення <Code>5</Code> передається у <Code>a</Code>, а значення <Code>3</Code> передається у <Code>b</Code>, і функція повертає суму цих двох значень, тобто <Code>8</Code>.
            </Paragraph>
            <Paragraph>
                Проте ви не зможете отримати доступ до <Code>a</Code> та <Code>b</Code> за межами функції:
            </Paragraph>
            <CodeBlock>
                {`function mathCalc(a, b) {
    let sum = a + b;
    return sum;
}

let result = mathCalc(5, 3);
console.log(result); // Виведе 8
console.log(a); // Uncaught ReferenceError: a is not defined
console.log(b); // ...`}
            </CodeBlock>

            <SubHeader>Замикання (closures)</SubHeader>
            <Paragraph>
                Замикання - це функції, які мають доступ до змінних з області видимості батьківської функції, навіть після завершення роботи батьківської функції. Це дозволяє зберігати стан та інформацію, яка зберігається протягом тривалого часу.
            </Paragraph>
            <CodeBlock>
                {`function createCounter() {
    let localVariable = 0;

    function increment() {
        localVariable++;
        console.log(localVariable);
    }

    return increment;
}

let counter1 = createCounter();
let counter2 = createCounter();

counter1(); // Виведе 1
counter1(); // Виведе 2

counter2(); // Виведе 1`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі функція <Code>createCounter</Code> створює та повертає функцію <Code>increment</Code>. Кожний раз, коли <Code>increment</Code> викликається, вона збільшує значення <Code>localVariable</Code> на одиницю і виводить його. Крім того, кожний виклик <Code>createCounter</Code> створює нову область видимості зі своєю власною змінною <Code>localVariable</Code>, і ця змінна зберігається завдяки замиканню.
            </Paragraph>

            <Box className='conclusion'>
                <SubHeader>Заключення</SubHeader>
                <Paragraph>
                    Ці основи роботи з функціями, область видимості та замикання є фундаментальними концепціями JavaScript і відіграють важливу роль у розробці програм на цій мові. Детальне розуміння цих понять допоможе вам писати більш складні та потужні функції.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default FunctionScopeClosuresPage;