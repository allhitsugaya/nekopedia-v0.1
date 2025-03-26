import React from 'react';
import { Box, List, ListItem } from '@mui/material';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const NestedInfiniteLoopsPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Вкладені та нескінченні цикли</BookHeader>

            <Paragraph>
                У деяких випадках може бути необхідно використовувати вкладені цикли або навіть створювати нескінченні цикли для розв'язання конкретних завдань.
            </Paragraph>

            <Paragraph>
                Однак важливо бути обережними, щоб уникнути нескінченних циклів, які можуть призвести до неправильної роботи програми. Завжди перевіряйте умови виходу з циклу та користуйтеся захисними механізмами для забезпечення надійності вашого коду.
            </Paragraph>

            <Paragraph>
                Ми розглянемо, як працювати з вкладеними циклами та як уникнути пасток нескінченних циклів.
            </Paragraph>

            <SubHeader>Вкладені цикли</SubHeader>
            <Paragraph>
                Вкладені цикли - це цикли, які знаходяться всередині інших циклів. Вони корисні, коли вам потрібно виконати певний блок коду для кожного елемента у зовнішньому циклі. Ось приклад вкладеного циклу <Code>for</Code>, який виводить всі можливі комбінації двох чисел від 1 до 3:
            </Paragraph>

            <CodeBlock>
                {`
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}
                `}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі ми маємо зовнішній цикл, який ітерується від 1 до 3, і вкладений цикл, який також ітерується від 1 до 3. В результаті кожен елемент зовнішнього циклу буде використовуватися з кожним елементом вкладеного циклу, що призводить до виводу всіх можливих комбінацій чисел.
            </Paragraph>

            <SubHeader>Нескінченні цикли</SubHeader>
            <Paragraph>
                Нескінченний цикл - це цикл, який ніколи не завершується при нормальних умовах. Він може виникнути через помилку в коді або некоректне визначення умови виходу з циклу. Ось приклад нескінченного циклу <Code>while</Code>:
            </Paragraph>

            <CodeBlock>
                {`
while (true) {
  console.log("Цей цикл ніколи не завершиться!");
}
                `}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі ми використали умову <Code>true</Code>, яка завжди є правдивою, тому цей цикл буде виконуватися безкінечно.
            </Paragraph>

            <SubHeader>Уникнення нескінченних циклів</SubHeader>
            <Paragraph>
                Нескінченні цикли можуть заморозити вашу програму і призвести до її відмови. Щоб уникнути цього, важливо правильно визначити умови виходу з циклу та перевіряти їх уважно. Ось кілька порад:
            </Paragraph>

            <List sx={{ mb: 2 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    Визначте чітку умову виходу з циклу.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    Переконайтеся, що умова виходу може статися.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    Використовуйте захисний механізм, такий як <Code>break</Code>, щоб зупинити цикл у разі потреби.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    Використовуйте розуміння вашого коду та відладчик для виявлення проблем з нескінченними циклами.
                </ListItem>
            </List>

            <Paragraph>
                Наведений нижче приклад демонструє використання умови виходу з нескінченного циклу <Code>while</Code>:
            </Paragraph>

            <CodeBlock>
                {`
let counter = 0;
while (counter < 10) {
  console.log("Цей цикл виконається 10 разів");
  counter++;
}
                `}
            </CodeBlock>

            <Paragraph>
                Цей цикл завершиться, коли <Code>counter</Code> досягне значення 10.
            </Paragraph>
        </Box>
    );
};

export default NestedInfiniteLoopsPage;