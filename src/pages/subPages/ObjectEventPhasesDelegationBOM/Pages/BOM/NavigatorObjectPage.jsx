import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const NavigatorObjectPage = () => {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Робота з об'єктом navigator
            </Typography>

            <Paragraph>
                Об'єкт <code>navigator</code> є частиною BOM і містить інформацію про браузер користувача, включаючи характеристики такі як назва браузера, версія, операційна система та інше. Розробники використовують об'єкт <code>navigator</code> для створення веб-додатків, які можуть адаптуватися до конкретних характеристик користувачів.
            </Paragraph>

            <Typography variant="h4" gutterBottom>
                Приклади властивостей об'єкта navigator
            </Typography>
            <Paragraph>
                Об'єкт <code>navigator</code> має багато корисних властивостей, які надають інформацію про браузер та пристрій. Ось деякі з них:
            </Paragraph>

            <List>
                <ListItem>
                    <Typography variant="body1">
                        <code>navigator.userAgent</code>: Містить рядок, який містить інформацію про браузер та операційну систему користувача. Наприклад, <code>"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36."</code>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        <code>navigator.appName</code>: Повертає ім'я браузера. Наприклад, <code>"Netscape."</code>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        <code>navigator.appVersion</code>: Містить інформацію про версію браузера. Наприклад, <code>"5.0 (Windows)."</code>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        <code>navigator.platform</code>: Повертає операційну систему користувача. Наприклад, <code>"Win32."</code>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        <code>navigator.language</code>: Містить інформацію про мову браузера користувача. Наприклад, <code>"en-US."</code>
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        <code>navigator.onLine</code>: Вказує, чи встановлено з'єднання з Інтернетом (<code>true</code> або <code>false</code>).
                    </Typography>
                </ListItem>
            </List>

            <Paragraph>
                Ці властивості дозволяють вам отримувати інформацію про браузер користувача та операційну систему, що може бути корисною для адаптації веб-додатків.
            </Paragraph>

            <Typography variant="h4" gutterBottom>
                Робота з об'єктом navigator
            </Typography>
            <Paragraph>
                Робота з об'єктом <code>navigator</code> дозволяє розробникам створювати більш адаптивні та користувацькі додатки. Нижче ми розглянемо декілька прикладів використання цього об'єкта.
            </Paragraph>

            <Typography variant="h5" gutterBottom>
                Перевірка назви браузера
            </Typography>
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

            <Typography variant="h5" gutterBottom>
                Перевірка підтримки функцій
            </Typography>
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

            <Typography variant="h5" gutterBottom>
                Визначення мови користувача
            </Typography>
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

            <Box mt={4} className='conclusion'>
                <Typography variant="h4" gutterBottom>
                    Висновок
                </Typography>
                <Paragraph>
                    Об'єкт <code>navigator</code> є потужним інструментом для веб-розробників, який надає інформацію про браузер та пристрій користувача. Ця інформація може бути використана для створення більш адаптивних та користувацьких веб-додатків. Розуміння роботи з об'єктом <code>navigator</code> допомагає розробникам створювати додатки, які можуть працювати оптимально на різних браузерах і платформах.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default NavigatorObjectPage;
