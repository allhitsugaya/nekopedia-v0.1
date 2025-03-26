import React from 'react';
import { Box, Typography } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const StringMethodsWithRegex = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Використання методів рядків з регулярними виразами</BookHeader>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    1. Метод match()
                </Typography>
                <Paragraph>
                    Метод <Code>match</Code> дозволяє знаходити всі відповідності регулярному виразу в рядку. Він повертає масив, що містить всі відповідності.
                </Paragraph>
                <CodeBlock>
                    {`
const text = "Hello, World! Hello, Universe!";
const regex = /Hello/g;
const matches = text.match(regex);
console.log(matches); // Виведе ["Hello", "Hello"]
                    `}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    2. Метод test()
                </Typography>
                <Paragraph>
                    Метод <Code>test</Code> перевіряє, чи відповідає рядок регулярному виразу. Він повертає <Code>true</Code>, якщо є відповідність, і <Code>false</Code>, якщо немає.
                </Paragraph>
                <CodeBlock>
                    {`
const regex = /Hello/;
const text = "Hello, World!";
const result = regex.test(text);
console.log(result); // Виведе true
                    `}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    3. Метод search()
                </Typography>
                <Paragraph>
                    Метод <Code>search</Code> шукає позицію першої відповідності регулярному виразу в рядку. Він повертає індекс першої відповідності або <Code>-1</Code>, якщо відповідності не знайдено.
                </Paragraph>
                <CodeBlock>
                    {`
const regex = /World/;
const text = "Hello, World!";
const position = text.search(regex);
console.log(position); // Виведе 7
                    `}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h2" gutterBottom>
                    4. Метод replace()
                </Typography>
                <Paragraph>
                    Метод <Code>replace</Code> дозволяє замінювати всі відповідності регулярного виразу у рядку на новий текст.
                </Paragraph>
                <CodeBlock>
                    {`
const text = "Hello, World! Hello, Universe!";
const regex = /Hello/g;
const newText = text.replace(regex, "Hi");
console.log(newText); // Виведе "Hi, World! Hi, Universe!"
                    `}
                </CodeBlock>
            </Box>
        </Box>
    );
};

export default StringMethodsWithRegex;