import React from 'react';
import { Box, Typography } from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const URLAndLocationPage = () => {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Робота з URL та location
            </Typography>

            <Paragraph>
                URL (Uniform Resource Locator) визначає адресу в Інтернеті, де можна знайти ресурс. В JavaScript ви можете взаємодіяти з URL та об'єктом <code>Location</code> для отримання та зміни поточної адреси сторінки. Цей розділ розгляне основні аспекти роботи з URL і об'єктом <code>Location</code>.
            </Paragraph>

            <Typography variant="h4" gutterBottom>
                Вступ до URL та Location
            </Typography>
            <Paragraph>
                URL (Uniform Resource Locator) - це рядок, який вказує адресу ресурсу в Інтернеті. URL складається з кількох частин, включаючи протокол (наприклад, HTTP або HTTPS), доменне ім'я (наприклад, <code>www.example.com</code>), шлях до ресурсу (наприклад, <code>/page</code>), і, за необхідності, параметри запиту (query parameters).
            </Paragraph>
            <CodeBlock>
                {`Приклад URL:
https://www.example.com/page?param1=value1&param2=value2`}
            </CodeBlock>
            <Paragraph>
                URL використовується для ідентифікації та доступу до різних ресурсів в Інтернеті, таких як веб-сторінки, зображення, файли та багато інших. У веб-розробці часто виникає необхідність отримання та зміни URL сторінки, і для цього використовуються об'єкт <code>Location</code>.
            </Paragraph>

            <Typography variant="h4" gutterBottom>
                Робота з об'єктом Location
            </Typography>
            <Paragraph>
                Об'єкт <code>Location</code> надає доступ до різних властивостей та методів для роботи з URL поточної сторінки. Він доступний через властивість <code>window.location</code>. Ось деякі основні можливості роботи з об'єктом <code>Location</code>.
            </Paragraph>

            <Typography variant="h5" gutterBottom>
                Отримання поточного URL
            </Typography>
            <Paragraph>
                Для отримання поточного URL використовуйте властивість <code>href</code>.
            </Paragraph>
            <CodeBlock>
                {`const currentURL = window.location.href;
console.log("Поточний URL:", currentURL);`}
            </CodeBlock>

            <Typography variant="h5" gutterBottom>
                Отримання компонентів URL
            </Typography>
            <Paragraph>
                URL складається з різних компонентів, таких як протокол, домен, шлях, параметри запиту тощо. Ви можете отримати ці компоненти окремо за допомогою відповідних властивостей <code>Location</code>.
            </Paragraph>
            <CodeBlock>
                {`const protocol = window.location.protocol; // Повертає протокол (наприклад, "https:")
const host = window.location.host; // Повертає домен та порт (наприклад, "www.example.com:80")
const hostname = window.location.hostname; // Повертає тільки домен (наприклад, "www.example.com")
const port = window.location.port; // Повертає номер порта (наприклад, "80")
const pathname = window.location.pathname; // Повертає шлях (наприклад, "/page")
const search = window.location.search; // Повертає параметри запиту (наприклад, "?param1=value1&param2=value2")
const hash = window.location.hash; // Повертає якорну частину URL (наприклад, "#section")`}
            </CodeBlock>

            <Typography variant="h5" gutterBottom>
                Зміна URL
            </Typography>
            <Paragraph>
                Ви також можете змінювати URL за допомогою об'єкта <code>Location</code>. Наприклад, для переходу на нову сторінку ви можете просто змінити значення <code>href</code>.
            </Paragraph>
            <CodeBlock>
                {`window.location.href = "https://www.newpage.com";`}
            </CodeBlock>
            <Paragraph>
                Це викличе перехід на нову сторінку з URL <code>"https://www.newpage.com"</code>.
            </Paragraph>

            <Typography variant="h5" gutterBottom>
                Перевірка URL
            </Typography>
            <Paragraph>
                Об'єкт <code>Location</code> дозволяє вам перевіряти різні аспекти URL, наприклад, чи містить він певну частину, як параметри запиту, якорну частину тощо. Для цього ви можете використовувати різні методи та властивості, такі як <code>pathname</code>, <code>search</code>, <code>hash</code>, <code>includes()</code>, <code>startsWith()</code>, тощо.
            </Paragraph>
            <CodeBlock>
                {`if (window.location.search.includes("param1=value1")) {
    console.log("URL містить параметр 'param1'");
}

if (window.location.pathname.startsWith("/products")) {
    console.log("URL починається з '/products'");
}`}
            </CodeBlock>

            <Typography variant="h4" gutterBottom>
                Приклади роботи з URL і Location
            </Typography>
            <Paragraph>
                Давайте розглянемо декілька прикладів використання URL та об'єкта <code>Location</code>.
            </Paragraph>

            <Typography variant="h5" gutterBottom>
                Перевірка поточного URL
            </Typography>
            <CodeBlock>
                {`const currentURL = window.location.href;

if (currentURL.includes("example.com")) {
    console.log("Ви на веб-сайті example.com");
}`}
            </CodeBlock>

            <Typography variant="h5" gutterBottom>
                Перехід на іншу сторінку після затримки
            </Typography>
            <CodeBlock>
                {`// Початковий URL
console.log("Початковий URL:", window.location.href);

// Затримка в 3 секунди
setTimeout(function () {
    // Зміна URL та перехід на іншу сторінку після затримки
    window.location.href = "https://www.newpage.com";
}, 3000);`}
            </CodeBlock>
            <Paragraph>
                Це призведе до переходу на нову сторінку після трьох секунд очікування.
            </Paragraph>

            <Typography variant="h5" gutterBottom>
                Отримання параметрів запиту
            </Typography>
            <CodeBlock>
                {`// Приклад URL з параметрами запиту
const url = "https://www.example.com/page?param1=value1&param2=value2";

// Отримання параметрів запиту
const searchParams = new URLSearchParams(window.location.search);
const param1 = searchParams.get("param1");
const param2 = searchParams.get("param2");

console.log("param1:", param1);
console.log("param2:", param2);`}
            </CodeBlock>
            <Paragraph>
                Цей код розбирає URL та отримує значення параметрів запиту <code>"param1"</code> та <code>"param2"</code>.
            </Paragraph>
        </Box>
    );
};

export default URLAndLocationPage;
