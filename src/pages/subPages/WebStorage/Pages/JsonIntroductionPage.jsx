import React from 'react';
import { Typography, Container, List, ListItem } from '@mui/material';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../features/Chapter/Chapter.jsx";

const JsonIntroductionPage = () => {

    return (
        <Container className="page-container">
            <SubHeader variant="h2" gutterBottom>Введення до JSON (JavaScript Object Notation)</SubHeader>
            <Paragraph>
                JSON (JavaScript Object Notation) - це легкий та легко читаний формат обміну даними. Він широко використовується для передачі даних між веб-серверами та клієнтськими додатками.
            </Paragraph>
            <Paragraph>
                Він представляє дані у вигляді тексту, що дозволяє легко обмінювати інформацію між різними мовами програмування. Та використовується для передачі даних в сучасних веб-додатках, включаючи обмін даними з сервером, збереження налаштувань, зчитування конфігураційних файлів і багато інших завдань.
            </Paragraph>

            <SubHeader variant="h2" gutterBottom>Використання JSON в JavaScript</SubHeader>
            <Chapter variant="h3" gutterBottom>Парсинг JSON</Chapter>
            <Paragraph>
                У JavaScript існує функція <Code>JSON.parse()</Code>, яка дозволяє перетворювати JSON-рядок у об'єкт JavaScript. Приклад:
            </Paragraph>
            <CodeBlock>
                {`
const jsonStr = '{"name": "John", "age": 30, "isStudent": false}';
const jsonObj = JSON.parse(jsonStr);
                `}
            </CodeBlock>

            <Chapter variant="h3" gutterBottom>Серіалізація в JSON</Chapter>
            <Paragraph>
                Для перетворення об'єкту JavaScript у JSON-рядок використовується метод <Code>JSON.stringify()</Code>. Приклад:
            </Paragraph>
            <CodeBlock>
                {`
const obj = { name: 'John', age: 30, isStudent: false };
const jsonStr = JSON.stringify(obj);
                `}
            </CodeBlock>

            <SubHeader variant="h2" gutterBottom>Валідація JSON</SubHeader>
            <Chapter variant="h3" gutterBottom>Перевірка валідності JSON</Chapter>
            <Paragraph>
                Щоб переконатися, що JSON є валідним, використовують функцію <Code>JSON.parse()</Code> і обробку винятків. Якщо JSON неправильний, це викличе виняток, і його можна обробити.
            </Paragraph>
            <CodeBlock>
                {`
try {
  const jsonStr = '{"name": "John", "age": 30, "isStudent": false';
  const jsonObj = JSON.parse(jsonStr);
} catch (error) {
  console.error('Неправильний JSON:', error);
}
                `}
            </CodeBlock>

            <SubHeader variant="h2" gutterBottom>Застосування JSON в практиці</SubHeader>
            <List>
                <ListItem>
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                        Збереження конфігурацій:
                    </Typography> JSON використовується для збереження конфігураційних налаштувань додатків, наприклад, параметрів вигляду або поведінки.
                </ListItem>
                <ListItem>
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                        Обмін даними з сервером:
                    </Typography> JSON є популярним форматом для обміну даними між клієнтськими додатками та серверами, наприклад, при використанні API.
                </ListItem>
                <ListItem>
                    <Typography component="span" sx={{ fontWeight: 600 }}>
                        Локальне сховище:
                    </Typography> JSON дозволяє зберігати дані локально на клієнтському боці, використовуючи <Code>LocalStorage</Code> або <Code>SessionStorage</Code>.
                </ListItem>
            </List>
        </Container>
    );
};

export default JsonIntroductionPage;