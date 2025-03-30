import React from 'react';
import {Box, Container, List, ListItem} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";

const AsynchronyIntroductionPage = () => {
    return (
        <Container   className="page-container">
            <BookHeader>Введення в асинхронність</BookHeader>
            <Paragraph>
                Асинхронність в JavaScript є ключовим аспектом, який розширює можливості мови та дозволяє створювати більш ефективні та відзивчиві додатки. Давайте розглянемо основні поняття синхронного та асинхронного коду, а також дослідимо, чому асинхронність є необхідною для розвитку сучасних веб-додатків на JavaScript.
            </Paragraph>

            <SubHeader>Синхронний та асинхронний код</SubHeader>
            <Paragraph>
                <Code>Синхронний код</Code> виконується послідовно, операція за операцією. Кожен блокуючий виклик чекає завершення попереднього, що може призводити до зупинки виконання.
            </Paragraph>
            <CodeBlock>
          {`
console.log('1');
console.log('2');
console.log('3');
          `}
            </CodeBlock>
            <Paragraph>
                У вищенаведеному коді <Code>2</Code> та <Code>3</Code> виведуться в консоль лише після того, як виведеться <Code>1</Code>.
            </Paragraph>

            <Paragraph>
                <Code>Асинхронний код</Code> виконується паралельно, без очікування завершення попередніх операцій.
            </Paragraph>
            <CodeBlock>
          {`
console.log('1');

setTimeout(() => {
    console.log('2');
}, 1000);

console.log('3');
          `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі <Code>2</Code> виведеться через секунду, а <Code>3</Code> виведеться без очікування завершення <Code>setTimeout</Code>.
            </Paragraph>

            <SubHeader>Важливість асинхронності для JavaScript</SubHeader>
            <Paragraph>
                Асинхронність є важливою для JavaScript через такі аспекти:
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
                    <Code>Завантаження ресурсів:</Code> Асинхронне завантаження зображень, стилів, та інших ресурсів дозволяє не блокувати виконання коду, забезпечуючи швидше завантаження сторінки.
                </ListItem>
                <ListItem>
                    <Code>Робота з сервером:</Code> Асинхронні запити на сервер (за допомогою AJAX або Fetch API) дозволяють отримувати та відправляти дані без зупинки виконання інших операцій.
                </ListItem>
                <ListItem>
                    <Code>Запуск функцій у фоновому режимі:</Code> Використання Web Workers для виконання функцій в окремому потоці, не впливаючи на виконання основного коду.
                </ListItem>
                <ListItem>
                    <Code>Очікування подій:</Code> Асинхронна обробка подій дозволяє реагувати на користувацькі взаємодії без зупинки програми.
                </ListItem>
                <ListItem>
                    <Code>Паралельність операцій:</Code> Виконання багатьох завдань паралельно підвищує ефективність програм та забезпечує гладку роботу інтерфейсу.
                </ListItem>
                </List>
            </Box>

            <Conclusion>Заключення</Conclusion>
                <Paragraph>
                    Асинхронність є важливим механізмом у JavaScript, який дозволяє створювати ефективні та відзивчиві
                    додатки. Використання асинхронного коду дозволяє уникнути блокування головного потоку, забезпечити
                    швидке завантаження ресурсів та ефективну обробку подій. Це робить JavaScript ідеальним інструментом
                    для розробки сучасних веб-додатків.
                </Paragraph>
        </Container>
    );
};

export default AsynchronyIntroductionPage;