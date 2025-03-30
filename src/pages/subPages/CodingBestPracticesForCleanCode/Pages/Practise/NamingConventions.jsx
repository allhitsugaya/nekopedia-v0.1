import React from 'react';
import {Container, Typography} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import Conclusion from "../../../../../features/Conclusion/Conclusion.jsx";

const NamingConventions = () => {
    return (
        <Container   className="page-container">
            <BookHeader>Частина 2.1: Неймінг</BookHeader>
            <Paragraph>
                Важливість неймінгу та коментування в JavaScript важко переоцінити. Іменування змінних та функцій впливає на зрозумілість коду. Правильний неймінг покращує розуміння функцій та полегшує уникнення помилок. Коментарі, у свою чергу, допомагають пояснити складні частини коду та документувати публічні методи. Дотримання правил неймінгу та розумне коментування сприяють підтримці та безпеці коду, а також полегшують спільну роботу в команді розробників.
            </Paragraph>

            <SubHeader>1. Дотримання конвенцій іменування</SubHeader>
            <Paragraph>
                Правильний вибір назв змінних та функцій є важливим елементом написання чистого та зрозумілого коду. Коректні назви допомагають зробити код більш зрозумілим та підтримуваним. Давайте ми розглянемо важливі аспекти вибору правильних назв для змінних та функцій в мові JavaScript.
            </Paragraph>

            <Chapter>Приклади</Chapter>
            <Chapter variant='h4'>CamelCase</Chapter>
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


            <Chapter variant="h4">snake_case</Chapter>
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

            <Chapter variant="h4">PascalCase</Chapter>
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
                <Code>Зрозумілість:</Code> Назви змінних та функцій повинні бути зрозумілими та легко читатися. Вони повинні відображати суть об'єкта або операції, яку вони виконують. Якщо змінна відповідає за збереження кількості товарів, то <Code>quantity</Code> буде більш зрозумілою назвою, ніж <Code>q</Code>.
            </Paragraph>
            <Paragraph>
                <Code>Описовість:</Code> Імена мають бути якомога більш описовими. Наприклад, <Code>calculateTotalAmount</Code> говорить нам більше, ніж <Code>calculate</Code>.
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

                <Conclusion>Висновок</Conclusion>
                <Paragraph>
                    Загальні принципи іменування змінних та функцій допомагають зробити код більш зрозумілим і
                    підтримуваним. Пам'ятайте, що зрозумілі та описові назви є ключем до успішної розробки та спільної
                    роботи над проектами.
                </Paragraph>
        </Container>
    );
};

export default NamingConventions;