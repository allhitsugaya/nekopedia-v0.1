import React from 'react';
import {Box, Typography, List, ListItem, Container} from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import Conclusion from "../../../../../features/Conclusion/Conclusion.jsx";

const NavigatorObjectPage = () => {
    return (
        <Container>
            <BookHeader variant="h3" >
                Робота з об'єктом navigator
            </BookHeader>

            <Paragraph>
                Об'єкт <Code>navigator</Code> є частиною BOM і містить інформацію про браузер користувача, включаючи характеристики такі як назва браузера, версія, операційна система та інше. Розробники використовують об'єкт <Code>navigator</Code> для створення веб-додатків, які можуть адаптуватися до конкретних характеристик користувачів.
            </Paragraph>

            <SubHeader variant="h4" >
                Приклади властивостей об'єкта navigator
            </SubHeader>
            <Paragraph>
                Об'єкт <Code>navigator</Code> має багато корисних властивостей, які надають інформацію про браузер та пристрій. Ось деякі з них:
            </Paragraph>

            <List>
                <ListItem>
                    <Typography variant="body1">
                        <Code>navigator.userAgent</Code>: Містить рядок, який містить інформацію про браузер та операційну систему користувача. Наприклад, <Code>"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36."</Code>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        <Code>navigator.appName</Code>: Повертає ім'я браузера. Наприклад, <Code>"Netscape."</Code>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        <Code>navigator.appVersion</Code>: Містить інформацію про версію браузера. Наприклад, <Code>"5.0 (Windows)."</Code>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        <Code>navigator.platform</Code>: Повертає операційну систему користувача. Наприклад, <Code>"Win32."</Code>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        <Code>navigator.language</Code>: Містить інформацію про мову браузера користувача. Наприклад, <Code>"en-US."</Code>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        <Code>navigator.onLine</Code>: Вказує, чи встановлено з'єднання з Інтернетом (<Code>true</Code> або <Code>false</Code>).
                    </Typography>
                </ListItem>
            </List>

            <Paragraph>
                Ці властивості дозволяють вам отримувати інформацію про браузер користувача та операційну систему, що може бути корисною для адаптації веб-додатків.
            </Paragraph>

            <Chapter Chaptervariant="h4" >
                Робота з об'єктом navigator
            </Chapter>
            <Paragraph>
                Робота з об'єктом <Code>navigator</Code> дозволяє розробникам створювати більш адаптивні та користувацькі додатки. Нижче ми розглянемо декілька прикладів використання цього об'єкта.
            </Paragraph>

            <Chapter variant="h5" >
                Перевірка назви браузера
            </Chapter>
            <Paragraph>
                Ви можете перевірити, який браузер використовує користувач і адаптувати вміст веб-сторінки відповідно.
            </Paragraph>
            <CodeBlock>
                {`if (navigator.userAgent.includes("Chrome")) {
    console.log("Ви використовуєте браузер Chrome.");
} else if (navigator.userAgent.includes("Firefox")) {
    console.log("Ви використовуєте браузер Firefox.");
} else {
    console.log("Ви використовуєте інший браузер.");
}`}
            </CodeBlock>

            <Chapter variant="h5" >
                Перевірка підтримки функцій
            </Chapter>
            <Paragraph>
                Ви можете перевірити, чи підтримує браузер певні функції, перш ніж використовувати їх у своєму коді.
            </Paragraph>
            <CodeBlock>
                {`if (navigator.userAgent.includes("Chrome") && 'serviceWorker' in navigator) {
    // Використовувати службу робітника (Service Worker) для офлайн режиму
} else {
    // Використовувати альтернативний підхід для роботи в офлайн режимі
}`}
            </CodeBlock>

            <Chapter variant="h5" >
                Визначення мови користувача
            </Chapter>
            <Paragraph>
                На основі інформації про мову браузера користувача ви можете встановити відповідну мову для вашого веб-додатка.
            </Paragraph>
            <CodeBlock>
                {`const userLanguage = navigator.language;
if (userLanguage.startsWith("en")) {
    // Вибрати англійську мову
} else if (userLanguage.startsWith("fr")) {
    // Вибрати французьку мову
} else {
    // Вибрати мову за замовчуванням
}`}
            </CodeBlock>

                <Conclusion>
                    Висновок
                </Conclusion>
                <Paragraph>
                    Об'єкт <Code>navigator</Code> є потужним інструментом для веб-розробників, який надає інформацію про браузер та пристрій користувача. Ця інформація може бути використана для створення більш адаптивних та користувацьких веб-додатків. Розуміння роботи з об'єктом <Code>navigator</Code> допомагає розробникам створювати додатки, які можуть працювати оптимально на різних браузерах і платформах.
                </Paragraph>
        </Container>
    );
};

export default NavigatorObjectPage;
