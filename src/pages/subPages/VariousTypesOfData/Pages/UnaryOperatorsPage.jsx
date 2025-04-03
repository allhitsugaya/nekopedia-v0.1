import React from 'react';
import { Box, Container } from '@mui/material';
import { Typography } from '@mui/material';
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../features/Code/Code.jsx";

const UnaryOperatorsPage = () => {
    return (
        <Container>
            <Box sx={{ mb: 3 }}>
                <Typography variant="h2" component="h2" sx={{ fontWeight: 600 }}>
                    Унарні оператори та їх роль
                </Typography>
            </Box>

            <Paragraph>
                У JavaScript є два типи операторів: унарні та бінарні. Унарні оператори діють на один операнд, тоді як бінарні оператори діють на два операнди. Унарні оператори можуть бути передоператорами або постдекрементами.
            </Paragraph>

            <Typography variant="h2" component="h2" sx={{ fontWeight: 600 }}>
                Передоператори
            </Typography>
            <Paragraph>
                Передоператор - це унарний оператор, який змінює значення операнду перед тим, як виконається дія. Унарні передоператори включають в себе плюс, мінус, логічне заперечення та інші. Ось декілька прикладів:
            </Paragraph>
            <CodeBlock>
                {`
let x = 10;
x = -x; // Переприсвоюємо x зі зміненим знаком
console.log(x); // -10

let z = true;
let w = !z;
console.log(w); // false
                `}
            </CodeBlock>

            <Typography variant="h2" component="h2" sx={{ fontWeight: 600 }}>
                Постдекременти
            </Typography>
            <Paragraph>
                Постдекремент - це унарний оператор, який зменшує значення операнду після того, як виконано дію. Постдекремент може використовуватися зі змінними, об'єктами та іншими типами даних. Ось декілька прикладів:
            </Paragraph>
            <CodeBlock>
                {`
let x = 10;
x--;
console.log(x); // 9

let obj = { a: 1, b: 2 };
let z = obj.a--; // z = 1, obj.a = 0
                `}
            </CodeBlock>

            <Typography variant="h2" component="h2" sx={{ fontWeight: 600 }}>
                Роль унарних операторів
            </Typography>
            <Paragraph>
                Унарні оператори є важливими елементами JavaScript, оскільки вони допомагають здійснювати швидкі та ефективні операції з даними. Вони також дозволяють змінювати значення змінних та об'єктів за допомогою простих операцій.
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Перетворення рядків у числа
            </Typography>
            <Paragraph>
                Унарний плюс дозволяє перетворювати рядки у числа, що може бути корисним при обчисленнях:
            </Paragraph>
            <CodeBlock>
                {`
let str = "10";
let num = +str; // num = 10
                `}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Перевірка на існування
            </Typography>
            <Paragraph>
                Унарні оператори корисні при перевірці на існування (<Code>null</Code> або <Code>undefined</Code>):
            </Paragraph>
            <CodeBlock>
                {`
let obj = null;
let exists = !!obj; // exists = false
                `}
            </CodeBlock>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                Інкремент та декремент
            </Typography>
            <Paragraph>
                Унарні оператори дозволяють здійснювати швидкий інкремент або декремент змінної, що може пришвидшити виконання коду:
            </Paragraph>
            <CodeBlock>
                {`
let a = 0;
let b = ++a;
console.log(b); // 1
                `}
            </CodeBlock>

            <Box sx={{ mt: 4 }} className='conclusion'>
                <Typography variant="h2" component="h2" sx={{ fontWeight: 600 }}>
                    Висновок
                </Typography>
                <Paragraph>
                    Розуміння явного та неявного перетворення типів даних є важливим для написання надійного та
                    передбачуваного коду. Використання явного перетворення допомагає уникнути неочікуваних помилок, а
                    строге порівняння <Code>===</Code> запобігає проблемам, пов'язаним із неявним перетворенням.
                </Paragraph>
            </Box>
        </Container>
    );
};

export default UnaryOperatorsPage;
