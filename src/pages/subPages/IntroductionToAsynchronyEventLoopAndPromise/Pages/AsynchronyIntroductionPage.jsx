import React from 'react';
import { Box, List, ListItem, Typography } from "@mui/material";
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const AsynchronyIntroductionPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Введення в асинхронність</BookHeader>

            <Paragraph>
                Асинхронність в JavaScript є ключовим аспектом, який розширює можливості мови та дозволяє створювати більш ефективні та відзивчиві додатки. Давайте розглянемо основні поняття синхронного та асинхронного коду, а також дослідимо, чому асинхронність є необхідною для розвитку сучасних веб-додатків на JavaScript.
            </Paragraph>

            <SubHeader>Синхронний та асинхронний код</SubHeader>
            <Paragraph>
                <strong>Синхронний код</strong> виконується послідовно, операція за операцією. Кожен блокуючий виклик чекає завершення попереднього, що може призводити до зупинки виконання.
            </Paragraph>
            <CodeBlock>
                {`console.log('1');
console.log('2');
console.log('3');`}
            </CodeBlock>
            <Paragraph>
                У вищенаведеному коді <Code>2</Code> та <Code>3</Code> виведуться в консоль лише після того, як виведеться <Code>1</Code>.
            </Paragraph>

            <Paragraph>
                <strong>Асинхронний код</strong> виконується паралельно, без очікування завершення попередніх операцій.
            </Paragraph>
            <CodeBlock>
                {`console.log('1');

setTimeout(() => {
    console.log('2');
}, 1000);

console.log('3');`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі <Code>2</Code> виведеться через секунду, а <Code>3</Code> виведеться без очікування завершення <Code>setTimeout</Code>.
            </Paragraph>

            <SubHeader>Важливість асинхронності для JavaScript</SubHeader>
            <Paragraph>
                Асинхронність є важливою для JavaScript через такі аспекти:
            </Paragraph>
            <List sx={{ mb: 2 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Завантаження ресурсів:</Typography> Асинхронне завантаження зображень, стилів, та інших ресурсів дозволяє не блокувати виконання коду, забезпечуючи швидше завантаження сторінки.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Робота з сервером:</Typography> Асинхронні запити на сервер (за допомогою AJAX або Fetch API) дозволяють отримувати та відправляти дані без зупинки виконання інших операцій.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Запуск функцій у фоновому режимі:</Typography> Використання Web Workers для виконання функцій в окремому потоці, не впливаючи на виконання основного коду.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Очікування подій:</Typography> Асинхронна обробка подій дозволяє реагувати на користувацькі взаємодії без зупинки програми.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Паралельність операцій:</Typography> Виконання багатьох завдань паралельно підвищує ефективність програм та забезпечує гладку роботу інтерфейсу.
                </ListItem>
            </List>

            <Box className='conclusion'>
                <SubHeader>Заключення</SubHeader>
                <Paragraph>
                    Асинхронність є важливим механізмом у JavaScript, який дозволяє створювати ефективні та відзивчиві
                    додатки. Використання асинхронного коду дозволяє уникнути блокування головного потоку, забезпечити
                    швидке завантаження ресурсів та ефективну обробку подій. Це робить JavaScript ідеальним інструментом
                    для розробки сучасних веб-додатків.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default AsynchronyIntroductionPage;