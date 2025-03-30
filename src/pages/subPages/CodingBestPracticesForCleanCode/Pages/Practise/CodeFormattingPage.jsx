import React from 'react';
import {Box, Container, List, ListItem} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../../features/Code/Code.jsx";

const CodeFormattingPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Частина 3: Оформлення коду</BookHeader>
            <Paragraph>
                Відступи та правильне форматування грають важливу роль в написанні якісного та зрозумілого коду на JavaScript. Дотримання єдиного стилю форматування сприяє покращенню читабельності коду, полегшує спільну роботу в команді та зменшує ризик виникнення помилок. У цьому розділі ми розглянемо важливі практики використання відступів та форматування в JavaScript, а також інструменти, які допомагають автоматизувати цей процес.
            </Paragraph>

            <SubHeader>1. Дотримання Єдиного Стилю</SubHeader>
            <Paragraph>
                Одним із ключових аспектів використання відступів та форматування є дотримання єдиного стилю коду всередині проекту. Це означає, що всі розробники в команді повинні користуватися однаковими правилами відступів та форматування, щоб код був послідовним та зрозумілим для всіх.
            </Paragraph>
            <Chapter>Приклад 1: Дотримання єдиного стилю відступів</Chapter>
            <CodeBlock>
          {`
// Поганий стиль
function poorStyle() {
var x = 10;
if (x > 5) {
console.log('x більше 5');
}
}

// Кращий стиль
function goodStyle() {
  var x = 10;
  if (x > 5) {
    console.log('x більше 5');
  }
}
          `}
            </CodeBlock>

            <SubHeader>2. Використання Автоматичних Інструментів</SubHeader>
            <Paragraph>
                Важливо мати уніфікований стиль форматування для вашого коду. Для JavaScript існують різні стандарти форматування, такі як ESLint, Airbnb JavaScript Style Guide, і Google JavaScript Style Guide. Ви можете вибрати один з них або створити свій власний стиль форматування для вашого проекту.
            </Paragraph>
            <Chapter>Приклад 2: Використання Prettier</Chapter>
            <Paragraph>
                Prettier - це інструмент, який автоматично форматує код згідно з налаштованими правилами. Можна закинути туди код, а він його зможе відформатувати.
            </Paragraph>
            <CodeBlock>
          {`
// Код до використання Prettier
function poorlyFormattedCode() {
var x=5;
if(x>3){
console.log('x більше 3');}
}

// Після використання Prettier
function wellFormattedCode() {
  var x = 5;
  if (x > 3) {
    console.log('x більше 3');
  }
}
          `}
            </CodeBlock>

            <SubHeader>3. Автоматичне форматування в PhpStorm</SubHeader>
            <Paragraph>
                В PhpStorm (або іншій IDE на базі IntelliJ IDEA), ви можете використовувати автоматичне форматування коду за допомогою вбудованих інструментів. Щоб налаштувати автоматичне форматування коду, слід виконати наступні кроки:
            </Paragraph>
            <Chapter>Налаштування редактора коду:</Chapter>
            <Paragraph>
                Перш ніж налаштовувати автоматичне форматування, впевніться, що редактор відображає код з відступами та форматуванням, яке ви бажаєте використовувати. Це можна перевірити у налаштуваннях редактора. Для цього:
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
                <ListItem>У меню PhpStorm перейдіть до <Code>File &gt; Settings</Code> (для Windows) або <Code>PhpStorm &gt; Preferences</Code> (для macOS).</ListItem>
                <ListItem>У налаштуваннях оберіть <Code>Editor &gt; Code Style</Code>.</ListItem>
                </List>
            </Box>
            <Paragraph>
                Тут ви можете налаштувати вигляд вашого коду, такий як розмір відступів, використання табуляції чи пробілів, форматування брекетів тощо.
            </Paragraph>

            <Chapter>Автоматичне форматування коду:</Chapter>
            <Paragraph>
                PhpStorm має можливість автоматично форматувати код, коли ви вставляєте його або натискаєте гарячу клавішу. Для цього:
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
                <ListItem>У редакторі виберіть код, який ви хочете відформатувати.</ListItem>
                <ListItem>Використовуйте гарячу клавішу <Code>Reformat Code</Code>. У більшості випадків це <Code>Ctrl + Alt + L</Code> (для Windows/Linux) або <Code>Cmd + Option + L</Code> (для macOS).</ListItem>
                </List>
            </Box>
            <Paragraph>
                Це дозволить вам швидко відформатувати виділений код відповідно до налаштувань стилю, які ви визначили у попередньому кроці.
            </Paragraph>
            <Paragraph>
                Важливо пам'ятати, що правильна настройка налаштувань стилю є ключовою для успішного автоматичного форматування. Це допомагає забезпечити консистентність та читабельність коду в проекті.
            </Paragraph>
        </Container>
    );
};

export default CodeFormattingPage;