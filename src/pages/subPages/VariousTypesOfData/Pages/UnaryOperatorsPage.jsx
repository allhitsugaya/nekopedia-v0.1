import React from 'react';
import { Box, Container } from '@mui/material';
import { Typography } from '@mui/material';
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../features/Code/Code.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";
import Chapter from "../../../../features/Chapter/Chapter.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";

const UnaryOperatorsPage = () => {
    return (
        <Container>
            <Box sx={{ mb: 3 }}>
                <BookHeader >
                    Унарні оператори та їх роль
                </BookHeader>
            </Box>

            <Paragraph>
                У JavaScript є два типи операторів: унарні та бінарні. Унарні оператори діють на один операнд, тоді як бінарні оператори діють на два операнди. Унарні оператори можуть бути передоператорами або постдекрементами.
            </Paragraph>

            <SubHeader >
                Передоператори
            </SubHeader>
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

            <SubHeader >
                Постдекременти
            </SubHeader>
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

            <SubHeader >
                Роль унарних операторів
            </SubHeader>
            <Paragraph>
                Унарні оператори є важливими елементами JavaScript, оскільки вони допомагають здійснювати швидкі та ефективні операції з даними. Вони також дозволяють змінювати значення змінних та об'єктів за допомогою простих операцій.
            </Paragraph>

            <Chapter >
                Перетворення рядків у числа
            </Chapter>
            <Paragraph>
                Унарний плюс дозволяє перетворювати рядки у числа, що може бути корисним при обчисленнях:
            </Paragraph>
            <CodeBlock>
                {`
let str = "10";
let num = +str; // num = 10
                `}
            </CodeBlock>

            <Chapter  >
                Перевірка на існування
            </Chapter>
            <Paragraph>
                Унарні оператори корисні при перевірці на існування (<Code>null</Code> або <Code>undefined</Code>):
            </Paragraph>
            <CodeBlock>
                {`
let obj = null;
let exists = !!obj; // exists = false
                `}
            </CodeBlock>

            <Chapter >
                Інкремент та декремент
            </Chapter>
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

            <Box sx={{ mt: 4 }}>
                <Conclusion >
                    Висновок
                </Conclusion>
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
