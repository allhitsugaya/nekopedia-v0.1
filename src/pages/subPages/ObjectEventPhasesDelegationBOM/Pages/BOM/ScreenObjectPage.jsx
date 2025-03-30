import React from 'react';
import {Box, Typography, List, ListItem, Container} from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";

const ScreenObjectPage = () => {
    return (
        <Container>
            <BookHeader variant="h3" >
                Робота з об'єктом screen
            </BookHeader>


            <Paragraph>
                Об'єкт <Code>screen</Code> надає інформацію про екран користувача, таку як розмір, роздільна здатність та інші характеристики екрана. Об'єкт <Code>screen</Code> може бути корисним для розробки веб-додатків, які адаптуються до різних розмірів та характеристик екранів. У цьому розділі ми розглянемо основи роботи з об'єктом <Code>screen</Code> та надамо приклади його використання.
            </Paragraph>

            <SubHeader variant="h4" >
                Основи роботи з об'єктом screen
            </SubHeader>
            <Paragraph>
                Об'єкт <Code>screen</Code> містить інформацію про екран користувача. Ви можете використовувати його властивості та методи для отримання розміру екрана, роздільної здатності та інших характеристик.
            </Paragraph>

            <Chapter variant="h5" >
                Отримання розміру екрана
            </Chapter>
            <Paragraph>
                Для отримання розміру екрана використовуйте властивості <Code>width</Code> (ширина) та <Code>height</Code> (висота).
            </Paragraph>
            <CodeBlock>
                {`const screenWidth = screen.width;
const screenHeight = screen.height;

console.log(\`Розмір екрана: \${screenWidth} x \${screenHeight}\`);`}
            </CodeBlock>

            <Chapter variant="h5" >
                Отримання роздільної здатності екрана
            </Chapter>
            <Paragraph>
                Властивості <Code>availWidth</Code> та <Code>availHeight</Code> містять роздільну здатність екрана без урахування панелей інструментів браузера чи інших елементів.
            </Paragraph>
            <CodeBlock>
                {`const screenResolutionWidth = screen.availWidth;
const screenResolutionHeight = screen.availHeight;

console.log(\`Роздільна здатність екрана: \${screenResolutionWidth} x \${screenResolutionHeight}\`);`}
            </CodeBlock>

            <Chapter variant="h5" >
                Інші властивості об'єкта screen
            </Chapter>
            <List>
                <ListItem>
                    <Typography variant="body1">
                        <Code>colorDepth</Code>: Вказує кількість бітів на піксель для відтворення кольорів на екрані.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        <Code>pixelDepth</Code>: Аналогічно до <Code>colorDepth</Code>, вказує кількість бітів на піксель.
                    </Typography>
                </ListItem>
            </List>

            <SubHeader variant="h4" >
                Приклади використання об'єкта screen
            </SubHeader>
            <Paragraph>
                Давайте розглянемо кілька прикладів використання об'єкта <Code>screen</Code>.
            </Paragraph>

            <Chapter variant="h5" >
                Адаптація зображень до роздільної здатності екрана
            </Chapter>
            <Paragraph>
                У цьому прикладі зображення вибирається відповідно до роздільної здатності екрана користувача, що дозволяє адаптувати вміст веб-сторінки до розмірів екрана.
            </Paragraph>
            <CodeBlock>
                {`const screenWidth = screen.width;
const screenHeight = screen.height;

let imageUrl = "default-image.jpg";

if (screenWidth <= 1024 && screenHeight <= 768) {
    imageUrl = "small-screen-image.jpg";
} else if (screenWidth <= 1920 && screenHeight <= 1080) {
    imageUrl = "medium-screen-image.jpg";
} else {
    imageUrl = "large-screen-image.jpg";
}

// Завантаження та відображення відповідного зображення
const imageElement = document.getElementById("image");
imageElement.src = imageUrl;`}
            </CodeBlock>

            <Chapter variant="h5" >
                Перевірка кольорової глибини
            </Chapter>
            <Paragraph>
                У цьому прикладі перевіряється кольорова глибина екрана користувача, що дозволяє адаптувати відображення графічних елементів.
            </Paragraph>
            <CodeBlock>
                {`const colorDepth = screen.colorDepth;

if (colorDepth >= 24) {
    console.log("Ваш екран підтримує відтворення великої кількості кольорів.");
} else if (colorDepth >= 16) {
    console.log("Ваш екран підтримує відтворення середньої кількості кольорів.");
} else {
    console.log("Ваш екран підтримує обмежене відтворення кольорів.");
}`}
            </CodeBlock>
        </Container>
    );
};

export default ScreenObjectPage;
