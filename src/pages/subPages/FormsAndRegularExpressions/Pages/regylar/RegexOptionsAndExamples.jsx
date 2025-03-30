import React from 'react';
import {Box, Container, List, ListItem} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import Conclusion from "../../../../../features/Conclusion/Conclusion.jsx";

const RegexOptionsAndExamples = () => {
    return (
        <Container className="page-container">
            <BookHeader>Опції та модифікатори регулярних виразів і приклади застосування регулярних виразів</BookHeader>
            <Paragraph>
                При створенні регулярного виразу можна додавати опції, що модифікують його поведінку. Наприклад:
            </Paragraph>
            <Box sx={{ml:2}}>
                <List sx={{
                    pl: 2,
                    listStyleType: 'disc',
                    '& .MuiListItem-root': {
                        display: 'list-item',
                        py: 0.5,
                        pl: 1,
                        ml: 2,
                        fontSize: 14
                    }
                }}>
                <ListItem>
                    <Code>i:</Code> Регістронезалежний пошук.
                </ListItem>
                <ListItem>
                    <Code>g:</Code> Пошук всіх відповідностей у тексті.
                </ListItem>
                <ListItem>
                    <Code>m:</Code> Пошук в кожному рядку окремо.
                </ListItem>
                </List>
            </Box>
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
                Регулярні вирази виявляються надзвичайно корисними при обробці тексту. Давайте розглянемо декілька прикладів їх застосування:
            </Paragraph>

            <Chapter>Пошук email-адрес</Chapter>
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

            <Chapter>Вилучення номерів телефонів</Chapter>
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

            <Chapter>Валідація email-адреси</Chapter>
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

            <Chapter>Валідація URL-адреси</Chapter>
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


                <Conclusion>Висновок</Conclusion>
                <Paragraph>
                    Ці приклади лише деякі зі способів використання регулярних виразів для роботи з текстовими даними в
                    JavaScript. Вони можуть бути корисними при обробці, пошуку та валідації різних типів інформації.
                </Paragraph>
        </Container>
    );
};

export default RegexOptionsAndExamples;