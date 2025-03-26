import React from 'react';
import { Box, Typography } from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';

const VariableDeclarationPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Оголошення змінних. Різниця між "var", "let" та "const"</BookHeader>

            <Paragraph>
                Оголошення змінних є однією з фундаментальних концепцій у JavaScript. Вони дозволяють зберігати та керувати даними у програмах. У цьому розділі ми розглянемо, як оголошувати змінні та яка різниця між ключовими словами <Code>var</Code>, <Code>let</Code> та <Code>const</Code>.
            </Paragraph>

            <Box component="section" mb={4}>
                <SubHeader>Оголошення змінних</SubHeader>
                <Paragraph>
                    Оголошення змінних - це процес створення іменованих контейнерів для зберігання даних. У JavaScript є три способи оголошення змінних: <Code>var</Code>, <Code>let</Code> та <Code>const</Code>.
                </Paragraph>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    var
                </Typography>
                <Paragraph>
                    Ключове слово <Code>var</Code> було першим способом оголошення змінних у JavaScript. Змінні, оголошені за допомогою <Code>var</Code>, мають глобальний або функціональний обсяг видимості (залежно від того, де вони були оголошені).
                </Paragraph>
                <CodeBlock>
                    {`
var name = "John";
console.log(name); // Виведе "John"
                    `}
                </CodeBlock>
                <Paragraph>
                    Однак змінні, оголошені за допомогою <Code>var</Code>, мають проблему з областю видимості, що може призводити до небажаних ефектів, коли змінна доступна поза своєю функцією.
                </Paragraph>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    let
                </Typography>
                <Paragraph>
                    Ключове слово <Code>let</Code> було введене у стандарті ECMAScript 6 (ES6) і стало покращенням у порівнянні з <Code>var</Code>. Змінні, оголошені за допомогою <Code>let</Code>, мають блоковий обсяг видимості.
                </Paragraph>
                <CodeBlock>
                    {`
let age = 30;
if (true) {
  let age = 25; // Локальна змінна у блоку
  console.log(age); // Виведе 25
}
console.log(age); // Виведе 30 (змінна зовнішнього блоку)
                    `}
                </CodeBlock>
                <Paragraph>
                    Використання <Code>let</Code> дозволяє уникнути конфліктів імен змінних та поліпшити структуру коду.
                </Paragraph>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    const
                </Typography>
                <Paragraph>
                    Ключове слово <Code>const</Code> також введене у стандарті ES6 і використовується для оголошення змінних, значення яких не можна змінювати після їхньої ініціалізації.
                </Paragraph>
                <CodeBlock>
                    {`
const pi = 3.14159;
// pi = 3.14; // Помилка! Не можна змінити значення константи

const user = { name: "John" };
user.name = "Alice"; // Працює, бо ми змінюємо властивість, а не саму змінну
                    `}
                </CodeBlock>
                <Paragraph>
                    Використання <Code>const</Code> рекомендується для оголошення змінних, які не повинні змінюватися після ініціалізації.
                </Paragraph>
            </Box>

            <Box component="section" mb={4}>
                <SubHeader>Порівняння var, let та const</SubHeader>
                <Paragraph>
                    Ось основні відмінності між цими способами оголошення змінних:
                </Paragraph>
                <ul>
                    <li><Code>var</Code> - функціональна область видимості, можливість переоголошення</li>
                    <li><Code>let</Code> - блочна область видимості, неможливість переоголошення</li>
                    <li><Code>const</Code> - блочна область видимості, неможливість переприсвоєння</li>
                </ul>
            </Box>

            <Box className='conclusion' >
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Розуміння різниці між <Code>var</Code>, <Code>let</Code> та <Code>const</Code> дуже важливе для написання якісного коду. У сучасному JavaScript рекомендується використовувати <Code>const</Code> за замовчуванням, <Code>let</Code> - коли потрібна зміна значення, і уникати <Code>var</Code> у новому коді.
                </Paragraph>
                <Paragraph>
                    Правильне використання типів оголошення змінних допомагає уникнути багатьох поширених помилок і робить код більш зрозумілим та підтримуваним.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default VariableDeclarationPage;