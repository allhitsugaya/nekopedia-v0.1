import React from 'react';
import {Container, Typography} from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";

const OperatorPrecedencePage = () => {
    return (
        <Container>
            <SubHeader variant="h2" component="h1">Правила та порядок виконання операторів</SubHeader>
            <Paragraph>
                В JavaScript правильне розуміння порядку виконання операторів дуже важливе для написання ефективного та надійного коду. Тому ми розглянемо основні правила та порядок виконання операторів, що допоможе вам у подальшій розробці на мові JavaScript.
            </Paragraph>

            <SubHeader variant="h2" component="h2">Порядок виконання</SubHeader>
            <Paragraph>
                У JavaScript існує поняття "приоритет операторів". Оператори з більшим пріоритетом виконуються першими. Якщо оператори мають однаковий приоритет, то вони виконуються зліва направо (асоціативність). Наприклад, у виразі <Code>a + b * c</Code>, спочатку виконується множення, а потім додавання.
            </Paragraph>
            <CodeBlock>
                {`
let result = 10 + 2 * 3; // Результат буде 16 (10 + (2 * 3))
                `}
            </CodeBlock>

            <SubHeader variant="h2" component="h2">Застосування дужок</SubHeader>
            <Paragraph>
                Для визначення точного порядку виконання можна використовувати дужки. Вирази, які знаходяться у дужках, виконуються першими. Наприклад:
            </Paragraph>
            <CodeBlock>
                {`
let result = (10 + 2) * 3; // Результат буде 36 ((10 + 2) * 3)
                `}
            </CodeBlock>

            <SubHeader variant="h2" component="h2">Приоритетність операторів</SubHeader>
            <Paragraph>
                JavaScript має вбудований приоритет для різних видів операторів. Наприклад, арифметичні операції мають вищий пріоритет за порівняння.
            </Paragraph>
            <CodeBlock>
                {`
let result = 5 + 10 > 8; // Результат буде true, бо 15 > 8
                `}
            </CodeBlock>

            <SubHeader variant="h2" component="h2">Порядок виконання умовних виразів</SubHeader>
            <Paragraph>
                Умовні вирази, такі як <Code>if</Code>, <Code>else if</Code> та <Code>else</Code>, також мають свій порядок виконання. JavaScript виконує їх в порядку, в якому вони зустрічаються, і зупиняється, коли виконується перший <Code>true</Code> умови.
            </Paragraph>
            <CodeBlock>
                {`
if (condition1) {
  // Код, що виконується, якщо condition1 true
} else if (condition2) {
  // Код, що виконується, якщо condition1 false і condition2 true
} else {
  // Код, що виконується, якщо обидві умови false
}
                `}
            </CodeBlock>

            <SubHeader variant="h2" component="h2">Оператори присвоювання та порядок виконання</SubHeader>
            <Paragraph>
                Оператори присвоювання, такі як <Code>=</Code>, мають низький приоритет. Оператори з вищим приоритетом виконуються перед присвоюванням.
            </Paragraph>
            <CodeBlock>
                {`
let a = 5; // Спочатку вирахується 5, а потім присвоюється a
                `}
            </CodeBlock>

            <>
                <Conclusion >Висновок</Conclusion>
                <Paragraph>
                    Правильне розуміння порядку виконання операторів допоможе уникнути помилок і писати більш
                    читабельний код. Завдяки цим знанням ви зможете покращити якість свого JavaScript-коду та зробити
                    його більш ефективним.
                </Paragraph>
            </>
        </Container>
    );
};

export default OperatorPrecedencePage;