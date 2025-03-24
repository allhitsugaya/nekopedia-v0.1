import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const ScreenObjectPage = () => {
    return (
        <Box>
            <Typography variant="h3" gutterBottom>
                Робота з об'єктом screen
            </Typography>

            <Paragraph>
                Об'єкт <code>screen</code> надає інформацію про екран користувача, таку як розмір, роздільна здатність та інші характеристики екрана. Об'єкт <code>screen</code> може бути корисним для розробки веб-додатків, які адаптуються до різних розмірів та характеристик екранів. У цьому розділі ми розглянемо основи роботи з об'єктом <code>screen</code> та надамо приклади його використання.
            </Paragraph>

            <Typography variant="h4" gutterBottom>
                Основи роботи з об'єктом screen
            </Typography>
            <Paragraph>
                Об'єкт <code>screen</code> містить інформацію про екран користувача. Ви можете використовувати його властивості та методи для отримання розміру екрана, роздільної здатності та інших характеристик.
            </Paragraph>

            <Typography variant="h5" gutterBottom>
                Отримання розміру екрана
            </Typography>
            <Paragraph>
                Для отримання розміру екрана використовуйте властивості <code>width</code> (ширина) та <code>height</code> (висота).
            </Paragraph>
            <CodeBlock>
                {`const screenWidth = screen.width;
const screenHeight = screen.height;

console.log(\`Розмір екрана: \${screenWidth} x \${screenHeight}\`);`}
            </CodeBlock>

            <Typography variant="h5" gutterBottom>
                Отримання роздільної здатності екрана
            </Typography>
            <Paragraph>
                Властивості <code>availWidth</code> та <code>availHeight</code> містять роздільну здатність екрана без урахування панелей інструментів браузера чи інших елементів.
            </Paragraph>
            <CodeBlock>
                {`const screenResolutionWidth = screen.availWidth;
const screenResolutionHeight = screen.availHeight;

console.log(\`Роздільна здатність екрана: \${screenResolutionWidth} x \${screenResolutionHeight}\`);`}
            </CodeBlock>

            <Typography variant="h5" gutterBottom>
                Інші властивості об'єкта screen
            </Typography>
            <List>
                <ListItem>
                    <Typography variant="body1">
                        <code>colorDepth</code>: Вказує кількість бітів на піксель для відтворення кольорів на екрані.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="body1">
                        <code>pixelDepth</code>: Аналогічно до <code>colorDepth</code>, вказує кількість бітів на піксель.
                    </Typography>
                </ListItem>
            </List>

            <Typography variant="h4" gutterBottom>
                Приклади використання об'єкта screen
            </Typography>
            <Paragraph>
                Давайте розглянемо кілька прикладів використання об'єкта <code>screen</code>.
            </Paragraph>

            <Typography variant="h5" gutterBottom>
                Адаптація зображень до роздільної здатності екрана
            </Typography>
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

            <Typography variant="h5" gutterBottom>
                Перевірка кольорової глибини
            </Typography>
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
        </Box>
    );
};

export default ScreenObjectPage;
