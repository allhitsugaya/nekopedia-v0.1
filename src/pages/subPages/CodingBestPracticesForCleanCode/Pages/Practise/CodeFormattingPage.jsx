import React from 'react';
import { Box, List, ListItem } from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";

const CodeFormattingPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Частина 3: Оформлення коду</BookHeader>

            <Paragraph>
                Відступи та правильне форматування грають важливу роль в написанні якісного та зрозумілого коду на JavaScript. Дотримання єдиного стилю форматування сприяє покращенню читабельності коду, полегшує спільну роботу в команді та зменшує ризик виникнення помилок. У цьому розділі ми розглянемо важливі практики використання відступів та форматування в JavaScript, а також інструменти, які допомагають автоматизувати цей процес.
            </Paragraph>

            <SubHeader>1. Дотримання Єдиного Стилю</SubHeader>
            <Paragraph>
                Одним із ключових аспектів використання відступів та форматування є дотримання єдиного стилю коду всередині проекту. Це означає, що всі розробники в команді повинні користуватися однаковими правилами відступів та форматування, щоб код був послідовним та зрозумілим для всіх.
            </Paragraph>

            <SubHeader level={3}>Приклад 1: Дотримання єдиного стилю відступів</SubHeader>
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

            <SubHeader level={3}>Приклад 2: Використання Prettier</SubHeader>
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

            <SubHeader level={3}>Налаштування редактора коду:</SubHeader>
            <Paragraph>
                Перш ніж налаштовувати автоматичне форматування, впевніться, що редактор відображає код з відступами та форматуванням, яке ви бажаєте використовувати. Це можна перевірити у налаштуваннях редактора. Для цього:
            </Paragraph>
            <List sx={{ mb: 2 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    У меню PhpStorm перейдіть до <Code>File &gt; Settings</Code> (для Windows) або <Code>PhpStorm &gt; Preferences</Code> (для macOS).
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    У налаштуваннях оберіть <Code>Editor &gt; Code Style</Code>.
                </ListItem>
            </List>
            <Paragraph>
                Тут ви можете налаштувати вигляд вашого коду, такий як розмір відступів, використання табуляції чи пробілів, форматування брекетів тощо.
            </Paragraph>

            <SubHeader level={3}>Автоматичне форматування коду:</SubHeader>
            <Paragraph>
                PhpStorm має можливість автоматично форматувати код, коли ви вставляєте його або натискаєте гарячу клавішу. Для цього:
            </Paragraph>
            <List sx={{ mb: 2 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    У редакторі виберіть код, який ви хочете відформатувати.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    Використовуйте гарячу клавішу <Code>Reformat Code</Code>. У більшості випадків це <Code>Ctrl + Alt + L</Code> (для Windows/Linux) або <Code>Cmd + Option + L</Code> (для macOS).
                </ListItem>
            </List>
            <Paragraph>
                Це дозволить вам швидко відформатувати виділений код відповідно до налаштувань стилю, які ви визначили у попередньому кроці.
            </Paragraph>
            <Paragraph>
                Важливо пам'ятати, що правильна настройка налаштувань стилю є ключовою для успішного автоматичного форматування. Це допомагає забезпечити консистентність та читабельність коду в проекті.
            </Paragraph>
        </Box>
    );
};

export default CodeFormattingPage;