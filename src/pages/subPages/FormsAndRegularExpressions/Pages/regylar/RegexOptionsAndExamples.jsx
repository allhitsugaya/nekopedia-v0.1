import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const RegexOptionsAndExamples = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Опції та модифікатори регулярних виразів і приклади застосування</BookHeader>

            <Paragraph>
                При створенні регулярного виразу можна додавати опції, що модифікують його поведінку.
            </Paragraph>

            <SubHeader>Основні модифікатори регулярних виразів</SubHeader>
            <List sx={{ mb: 2 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">i:</Typography> Регістронезалежний пошук
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">g:</Typography> Пошук всіх відповідностей у тексті
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">m:</Typography> Пошук в кожному рядку окремо
                </ListItem>
            </List>

            <CodeBlock>
                {`
const regex = /Hello/gi;
const text = "Hello, world! Hi, there!";
const matches = text.match(regex);
console.log(matches); // Виведе ["Hello", "Hi"]
                `}
            </CodeBlock>

            <Paragraph>
                Це лише вступ до роботи з регулярними виразами. У наступних розділах ми розглянемо більше опцій, методів та прикладів використання регулярних виразів для обробки текстових даних.
            </Paragraph>

            <SubHeader>Приклади застосування регулярних виразів</SubHeader>
            <Paragraph>
                Регулярні вирази виявляються надзвичайно корисними при обробці тексту. Ось декілька практичних прикладів:
            </Paragraph>

            <Box component="section" mb={4}>
                <Typography variant="h6" component="h3" gutterBottom>
                    1. Пошук email-адрес
                </Typography>
                <Paragraph>
                    Регулярні вирази можуть допомогти вам знайти всі email-адреси в тексті.
                </Paragraph>
                <CodeBlock>
                    {`
const text = "Email me at john.doe@example.com or support@mywebsite.com";
const emailRegex = /\\S+@\\S+\\.\\S+/g;
const emails = text.match(emailRegex);
console.log(emails); // ["john.doe@example.com", "support@mywebsite.com"]
                    `}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h6" component="h3" gutterBottom>
                    2. Вилучення номерів телефонів
                </Typography>
                <Paragraph>
                    Ви можете знайти та вилучити номери телефонів з тексту.
                </Paragraph>
                <CodeBlock>
                    {`
const text = "Call me at +1 (123) 456-7890 or +44 (20) 1234 5678";
const phoneRegex = /\\+\\d{1,4} \\(\\d{1,4}\\) \\d{1,4}-\\d{1,4}/g;
const phoneNumbers = text.match(phoneRegex);
console.log(phoneNumbers); // ["+1 (123) 456-7890", "+44 (20) 1234 5678"]
                    `}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h6" component="h3" gutterBottom>
                    3. Валідація email-адреси
                </Typography>
                <Paragraph>
                    Регулярні вирази також можуть використовуватися для перевірки правильності введених email-адрес.
                </Paragraph>
                <CodeBlock>
                    {`
const email = "john.doe@example.com";
const emailRegex = /\\S+@\\S+\\.\\S+/;
if (emailRegex.test(email)) {
  console.log("Email адреса правильна.");
} else {
  console.log("Неправильний формат email адреси.");
}
                    `}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h6" component="h3" gutterBottom>
                    4. Валідація URL-адреси
                </Typography>
                <Paragraph>
                    Аналогічно, ви можете перевірити правильність URL-адреси.
                </Paragraph>
                <CodeBlock>
                    {`
const url = "<https://www.example.com>";
const urlRegex = /^(https?|ftp):\\/\\/[^\\s/$.?#].[^\\s]*$/;
if (urlRegex.test(url)) {
  console.log("URL адреса правильна.");
} else {
  console.log("Неправильний формат URL адреси.");
}
                    `}
                </CodeBlock>
            </Box>

            <Box className='conclusion'>
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Ці приклади лише деякі зі способів використання регулярних виразів для роботи з текстовими даними в
                    JavaScript. Вони можуть бути корисними при обробці, пошуку та валідації різних типів інформації.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default RegexOptionsAndExamples;