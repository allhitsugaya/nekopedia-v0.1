import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const SecondFormDataHandling = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Робота з об'єктом FormData</BookHeader>

            <Paragraph>
                Об'єкт <Code>FormData</Code> - це об'єкт JavaScript, який дозволяє зручно збирати дані з форми та відправляти їх на сервер. Він автоматично перетворює дані в формат, який може легко обробляти сервер.
            </Paragraph>

            <SubHeader>Важливі аспекти використання FormData</SubHeader>
            <Paragraph>
                Основні характеристики роботи з об'єктом FormData:
            </Paragraph>
            <List sx={{ mb: 2 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Автоматичне створення пар "ключ-значення":</Typography> Об'єкт <Code>FormData</Code> автоматично створює пари для всіх полів форми, зберігаючи їхні значення.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Додавання додаткових даних:</Typography> До створеного об'єкта <Code>FormData</Code> можна додавати додаткові дані за допомогою методу <Code>append</Code>.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Асинхронна відправка на сервер:</Typography> Для відправлення даних на сервер використовується асинхронний AJAX запит.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Підтримка різних типів даних:</Typography> Об'єкт <Code>FormData</Code> підтримує різні типи даних, включаючи тексти, файли та бінарні дані.
                </ListItem>
            </List>
            <Paragraph>
                Використання об'єкта <Code>FormData</Code> в поєднанні з AJAX дозволяє легко та ефективно взаємодіяти з сервером при обробці даних з веб-форм.
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
                При роботі з об'єктом <Code>FormData</Code>, ви можете використовувати різні методи для додавання, видалення та редагування даних у формі:
            </Paragraph>

            <Typography variant="h6" component="h3" gutterBottom>
                1. append(name, value)
            </Typography>
            <Paragraph>
                Цей метод дозволяє додавати пару "ключ-значення" до об'єкта <Code>FormData</Code>. Він приймає два аргументи: ім'я ключа та значення.
            </Paragraph>
            <CodeBlock>
                {`formData.append('username', 'john_doe');`}
            </CodeBlock>

            <Typography variant="h6" component="h3" gutterBottom>
                2. delete(name)
            </Typography>
            <Paragraph>
                Ви можете видалити ключ та відповідне значення з об'єкта <Code>FormData</Code> за допомогою цього методу.
            </Paragraph>
            <CodeBlock>
                {`formData.delete('username');`}
            </CodeBlock>

            <Typography variant="h6" component="h3" gutterBottom>
                3. get(name)
            </Typography>
            <Paragraph>
                Цей метод дозволяє отримати значення, яке відповідає ключу <Code>name</Code> в об'єкті <Code>FormData</Code>.
            </Paragraph>
            <CodeBlock>
                {`const username = formData.get('username');`}
            </CodeBlock>

            <Typography variant="h6" component="h3" gutterBottom>
                4. getAll(name)
            </Typography>
            <Paragraph>
                Якщо ви маєте декілька значень для одного ключа, цей метод допоможе отримати масив всіх цих значень.
            </Paragraph>
            <CodeBlock>
                {`const allUsernames = formData.getAll('username');`}
            </CodeBlock>

            <Typography variant="h6" component="h3" gutterBottom>
                5. has(name)
            </Typography>
            <Paragraph>
                Метод <Code>has</Code> перевіряє, чи існує ключ з ім'ям <Code>name</Code> в об'єкті <Code>FormData</Code>.
            </Paragraph>
            <CodeBlock>
                {`const hasUsername = formData.has('username');`}
            </CodeBlock>

            <Typography variant="h6" component="h3" gutterBottom>
                6. set(name, value)
            </Typography>
            <Paragraph>
                Якщо ви хочете змінити значення ключа, ви можете використовувати метод <Code>set</Code>. Він замінить попереднє значення новим.
            </Paragraph>
            <CodeBlock>
                {`formData.set('username', 'new_username');`}
            </CodeBlock>

            <Typography variant="h6" component="h3" gutterBottom>
                7. keys(), values(), entries()
            </Typography>
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

            <Box className='conclusion'>
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Об'єкт <Code>FormData</Code> також має інші корисні властивості та методи для роботи з даними форми.
                    Вони дозволяють вам ефективно маніпулювати даними, які надходять з веб-форм та відправляються на
                    сервер.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default SecondFormDataHandling;