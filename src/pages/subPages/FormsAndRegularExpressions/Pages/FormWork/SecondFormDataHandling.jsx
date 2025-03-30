import React from 'react';
import {Box, Container, List, ListItem} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import Conclusion from "../../../../../features/Conclusion/Conclusion.jsx";

const SecondFormDataHandling = () => {
    return (
        <Container className="page-container">
            <BookHeader>Робота з об'єктом FormData</BookHeader>
            <Paragraph>
                Об'єкт <Code>FormData</Code> - це об'єкт JavaScript, який дозволяє зручно збирати дані з форми та відправляти їх на сервер. Він автоматично перетворює дані в формат, який може легко обробляти сервер.
            </Paragraph>

            <SubHeader>Важливі аспекти використання FormData</SubHeader>
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
                    <Code>Автоматичне створення пар "ключ-значення":</Code> Об'єкт <Code>FormData</Code> автоматично створює пари для всіх полів форми, зберігаючи їхні значення.
                </ListItem>
                <ListItem>
                    <Code>Додавання додаткових даних:</Code> До створеного об'єкта <Code>FormData</Code> можна додавати додаткові дані за допомогою методу <Code>append</Code>.
                </ListItem>
                <ListItem>
                    <Code>Асинхронна відправка на сервер:</Code> Для відправлення даних на сервер використовується асинхронний AJAX запит. Відповідь сервера можна обробляти в обробнику подій. Проте будемо вивчати далі, як то робити.
                </ListItem>
                <ListItem>
                    <Code>Підтримка різних типів даних:</Code> Об'єкт <Code>FormData</Code> підтримує різні типи даних, включаючи тексти, файли та бінарні дані.
                </ListItem>
                </List>
            </Box>
            <Paragraph>
                Використання об'єкта <Code>FormData</Code> в поєднанні з AJAX (будемо вивчати далі) дозволяє легко та ефективно взаємодіяти з сервером при обробці даних з веб-форм.
            </Paragraph>

            <SubHeader>Приклад використання FormData</SubHeader>
            <CodeBlock>
                    {`
// Створення об'єкту FormData з форми за її ідентифікатором
const form = document.getElementById('my-form');
const formData = new FormData(form);

// Додавання додаткових даних до об'єкта FormData
formData.append('user_id', 123);
formData.append('custom_field', 'some value');

// Display the key/value pairs
for (let data of formData.entries()) {
   console.log(data[0]+ ', ' + data[1]);
}
                    `}
            </CodeBlock>
            <Paragraph>
                В цьому прикладі ми створюємо об'єкт <Code>FormData</Code> з форми <Code>my-form</Code>, додаємо додатковий параметр <Code>user_id</Code>, та <Code>custom_field</Code> а потім продивляемось ці дані.
            </Paragraph>

            <SubHeader>Методи об'єкта FormData</SubHeader>
            <Paragraph>
                При роботі з об'єктом <Code>FormData</Code>, ви можете використовувати різні методи для додавання, видалення та редагування даних у формі. Ось деякі з найважливіших методів:
            </Paragraph>

            <Chapter>1. append(name, value)</Chapter>
            <Paragraph>
                Цей метод дозволяє додавати пару "ключ-значення" до об'єкта <Code>FormData</Code>. Він приймає два аргументи: ім'я ключа та значення.
            </Paragraph>
            <CodeBlock>
                    {`
formData.append('username', 'john_doe');
                    `}
            </CodeBlock>

            <Chapter>2. delete(name)</Chapter>
            <Paragraph>
                Ви можете видалити ключ та відповідне значення з об'єкта <Code>FormData</Code> за допомогою цього методу.
            </Paragraph>
            <CodeBlock>
                    {`
formData.delete('username');
                    `}
            </CodeBlock>

            <Chapter>3. get(name)</Chapter>
            <Paragraph>
                Цей метод дозволяє отримати значення, яке відповідає ключу <Code>name</Code> в об'єкті <Code>FormData</Code>.
            </Paragraph>
            <CodeBlock>
                    {`
const username = formData.get('username');
                    `}
            </CodeBlock>

            <Chapter>4. getAll(name)</Chapter>
            <Paragraph>
                Якщо ви маєте декілька значень для одного ключа, цей метод допоможе отримати масив всіх цих значень.
            </Paragraph>
            <CodeBlock>
                    {`
const allUsernames = formData.getAll('username');
                    `}
            </CodeBlock>

            <Chapter>5. has(name)</Chapter>
            <Paragraph>
                Метод <Code>has</Code> перевіряє, чи існує ключ з ім'ям <Code>name</Code> в об'єкті <Code>FormData</Code>.
            </Paragraph>
            <CodeBlock>
                    {`
const hasUsername = formData.has('username');
                    `}
            </CodeBlock>

            <Chapter>6. set(name, value)</Chapter>
            <Paragraph>
                Якщо ви хочете змінити значення ключа, ви можете використовувати метод <Code>set</Code>. Він замінить попереднє значення новим.
            </Paragraph>
            <CodeBlock>
                    {`
formData.set('username', 'new_username');
                    `}
            </CodeBlock>

            <Chapter>7. keys(), values(), entries()</Chapter>
            <Paragraph>
                Ці методи повертають ітератори для ключів, значень і пар "ключ-значення" відповідно.
            </Paragraph>
            <CodeBlock>
                    {`
for (const key of formData.keys()) {
    console.log(key);
}

for (const value of formData.values()) {
    console.log(value);
}

for (const pair of formData.entries()) {
    console.log(pair[0], pair[1]);
}
                    `}
            </CodeBlock>

                <Conclusion>Висновок</Conclusion>
                <Paragraph>
                    Об'єкт <Code>FormData</Code> також має інші корисні властивості та методи для роботи з даними форми.
                    Вони дозволяють вам ефективно маніпулювати даними, які надходять з веб-форм та відправляються на
                    сервер.
                </Paragraph>
        </Container>
    );
};

export default SecondFormDataHandling;