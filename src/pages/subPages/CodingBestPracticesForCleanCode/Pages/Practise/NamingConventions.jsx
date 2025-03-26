import React from 'react';
import { Box, Paper } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const NamingConventions = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Частина 2.1: Неймінг</BookHeader>

            <Paragraph>
                Важливість неймінгу та коментування в JavaScript важко переоцінити. Іменування змінних та функцій впливає на зрозумілість коду. Правильний неймінг покращує розуміння функцій та полегшує уникнення помилок. Коментарі, у свою чергу, допомагають пояснити складні частини коду та документувати публічні методи. Дотримання правил неймінгу та розумне коментування сприяють підтримці та безпеці коду, а також полегшують спільну роботу в команді розробників.
            </Paragraph>

            <SubHeader>1. Дотримання конвенцій іменування</SubHeader>
            <Paragraph>
                Правильний вибір назв змінних та функцій є важливим елементом написання чистого та зрозумілого коду. Коректні назви допомагають зробити код більш зрозумілим та підтримуваним. Давайте ми розглянемо важливі аспекти вибору правильних назв для змінних та функцій в мові JavaScript.
            </Paragraph>

            <SubHeader level={3}>Приклади</SubHeader>
            <SubHeader level={4}>CamelCase</SubHeader>
            <Paragraph>
                Одна з найпоширеніших конвенцій іменування в JavaScript. Імена змінних та функцій пишуться з малої літери, окрім першої, і кожне нове слово починається з великої літери. Наприклад, <Code>myVariable</Code>, <Code>calculateTotalAmount</Code>.
            </Paragraph>
            <CodeBlock>
                {`
let myVariable = 42;
function calculateTotalAmount(price, quantity) {
    return price * quantity;
}
                `}
            </CodeBlock>

            <SubHeader level={4}>snake_case</SubHeader>
            <Paragraph>
                Ця конвенція полягає в тому, що слова в іменах розділяються підкресленням. Це не часто використовується в назвах змінних та функцій у JavaScript.
            </Paragraph>
            <CodeBlock>
                {`
let my_variable = 42;
function calculate_total_amount(price, quantity) {
    return price * quantity;
}
                `}
            </CodeBlock>

            <SubHeader level={4}>PascalCase</SubHeader>
            <Paragraph>
                В цій конвенції кожне слово починається з великої літери, і жодних інших роздільників не використовується. Використовується для назв класів та конструкторів.
            </Paragraph>
            <CodeBlock>
                {`
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
                `}
            </CodeBlock>

            <SubHeader>Зрозумілі та описові назви</SubHeader>
            <Paragraph>
                <strong>Зрозумілість:</strong> Назви змінних та функцій повинні бути зрозумілими та легко читатися. Вони повинні відображати суть об'єкта або операції, яку вони виконують. Якщо змінна відповідає за збереження кількості товарів, то <Code>quantity</Code> буде більш зрозумілою назвою, ніж <Code>q</Code>.
            </Paragraph>
            <Paragraph>
                <strong>Описовість:</strong> Імена мають бути якомога більш описовими. Наприклад, <Code>calculateTotalAmount</Code> говорить нам більше, ніж <Code>calculate</Code>.
            </Paragraph>

            <SubHeader>Уникнення абревіатур та скорочень</SubHeader>
            <Paragraph>
                Уникайте використання абревіатур та скорочень, які можуть бути незрозумілими для інших розробників. Наприклад, <Code>getInfo</Code> краще, ніж <Code>getInf</Code>, якщо це не є загальноприйнятим скороченням в проекті.
            </Paragraph>
            <CodeBlock>
                {`
// Погано: скорочення, яке може бути незрозумілим
function getInf(data) {
    // ...
}

// Добре: зрозуміла та описова назва
function getInfo(data) {
    // ...
}
                `}
            </CodeBlock>

            <Paper sx={{ p: 3, mt: 3, backgroundColor: 'background.paper' }}>
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Загальні принципи іменування змінних та функцій допомагають зробити код більш зрозумілим і
                    підтримуваним. Пам'ятайте, що зрозумілі та описові назви є ключем до успішної розробки та спільної
                    роботи над проектами.
                </Paragraph>
            </Paper>
        </Box>
    );
};

export default NamingConventions;