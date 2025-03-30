import React from 'react';
import {Box, Container, Typography} from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import Code from "../../../../../features/Code/Code.jsx";

const URLAndLocationPage = () => {
    return (
        <Container>
            <BookHeader variant="h3">
                Робота з URL та location
            </BookHeader>

            <Paragraph>
                URL (Uniform Resource Locator) визначає адресу в Інтернеті, де можна знайти ресурс. В JavaScript ви можете взаємодіяти з URL та об'єктом <Code>Location</Code> для отримання та зміни поточної адреси сторінки. Цей розділ розгляне основні аспекти роботи з URL і об'єктом <Code>Location</Code>.
            </Paragraph>

            <SubHeader variant="h4" >
                Вступ до URL та Location
            </SubHeader>
            <Paragraph>
                URL (Uniform Resource Locator) - це рядок, який вказує адресу ресурсу в Інтернеті. URL складається з кількох частин, включаючи протокол (наприклад, HTTP або HTTPS), доменне ім'я (наприклад, <Code>www.example.com</Code>), шлях до ресурсу (наприклад, <Code>/page</Code>), і, за необхідності, параметри запиту (query parameters).
            </Paragraph>
            <CodeBlock>
                {`Приклад URL:
https://www.example.com/page?param1=value1&param2=value2`}
            </CodeBlock>
            <Paragraph>
                URL використовується для ідентифікації та доступу до різних ресурсів в Інтернеті, таких як веб-сторінки, зображення, файли та багато інших. У веб-розробці часто виникає необхідність отримання та зміни URL сторінки, і для цього використовуються об'єкт <Code>Location</Code>.
            </Paragraph>

            <SubHeader variant="h4" >
                Робота з об'єктом Location
            </SubHeader>
            <Paragraph>
                Об'єкт <Code>Location</Code> надає доступ до різних властивостей та методів для роботи з URL поточної сторінки. Він доступний через властивість <Code>window.location</Code>. Ось деякі основні можливості роботи з об'єктом <Code>Location</Code>.
            </Paragraph>

            <Chapter variant="h5" >
                Отримання поточного URL
            </Chapter>
            <Paragraph>
                Для отримання поточного URL використовуйте властивість <Code>href</Code>.
            </Paragraph>
            <CodeBlock>
                {`const currentURL = window.location.href;
console.log("Поточний URL:", currentURL);`}
            </CodeBlock>

            <Chapter variant="h5" >
                Отримання компонентів URL
            </Chapter>
            <Paragraph>
                URL складається з різних компонентів, таких як протокол, домен, шлях, параметри запиту тощо. Ви можете отримати ці компоненти окремо за допомогою відповідних властивостей <Code>Location</Code>.
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

            <Chapter variant="h5" >
                Зміна URL
            </Chapter>
            <Paragraph>
                Ви також можете змінювати URL за допомогою об'єкта <Code>Location</Code>. Наприклад, для переходу на нову сторінку ви можете просто змінити значення <Code>href</Code>.
            </Paragraph>
            <CodeBlock>
                {`window.location.href = "https://www.newpage.com";`}
            </CodeBlock>
            <Paragraph>
                Це викличе перехід на нову сторінку з URL <Code>"https://www.newpage.com"</Code>.
            </Paragraph>

            <Chapter variant="h5" >
                Перевірка URL
            </Chapter>
            <Paragraph>
                Об'єкт <Code>Location</Code> дозволяє вам перевіряти різні аспекти URL, наприклад, чи містить він певну частину, як параметри запиту, якорну частину тощо. Для цього ви можете використовувати різні методи та властивості, такі як <Code>pathname</Code>, <Code>search</Code>, <Code>hash</Code>, <Code>includes()</Code>, <Code>startsWith()</Code>, тощо.
            </Paragraph>
            <CodeBlock>
                {`if (window.location.search.includes("param1=value1")) {
    console.log("URL містить параметр 'param1'");
}

if (window.location.pathname.startsWith("/products")) {
    console.log("URL починається з '/products'");
}`}
            </CodeBlock>

            <SubHeader variant="h4" >
                Приклади роботи з URL і Location
            </SubHeader>
            <Paragraph>
                Давайте розглянемо декілька прикладів використання URL та об'єкта <Code>Location</Code>.
            </Paragraph>

            <Chapter variant="h5" >
                Перевірка поточного URL
            </Chapter>
            <CodeBlock>
                {`const currentURL = window.location.href;

if (currentURL.includes("example.com")) {
    console.log("Ви на веб-сайті example.com");
}`}
            </CodeBlock>

            <Chapter variant="h5" >
                Перехід на іншу сторінку після затримки
            </Chapter>
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

            <Chapter variant="h5" >
                Отримання параметрів запиту
            </Chapter>
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
                Цей код розбирає URL та отримує значення параметрів запиту <Code>"param1"</Code> та <Code>"param2"</Code>.
            </Paragraph>
        </Container>
    );
};

export default URLAndLocationPage;
