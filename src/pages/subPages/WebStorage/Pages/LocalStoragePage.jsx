import React from "react";
import { Typography, Container, List, ListItem } from "@mui/material";
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';

const LocalStoragePage = () => {
    return (
        <Container>
            <Typography variant="h2">LocalStorage</Typography>

            <Paragraph>
                LocalStorage - це один із механізмів WebStorage в JavaScript, який дозволяє зберігати дані на боці клієнта в браузері.
            </Paragraph>

            <Paragraph>
                Цей механізм дозволяє зберігати дані на довший термін, навіть після закриття браузера або перезавантаження сторінки. Дані, збережені в LocalStorage, залишаються доступними для JavaScript-коду на стороні клієнта і можуть використовуватися для зберігання інформації, яка має бути доступною при наступних відвідуваннях веб-сайту.
            </Paragraph>

            <Typography variant="h2">Особливості та можливості LocalStorage</Typography>

            <List>
                <ListItem>
                    <Typography fontWeight={500}>Постійність даних:</Typography> Дані, збережені в LocalStorage, доступні назавжди або до їх видалення. Це робить його відмінним інструментом для зберігання налаштувань користувача, даних сесій, локальних кешів і багатьох інших типів інформації.
                </ListItem>
                <ListItem>
                    <Typography fontWeight={500}>Обмеження обсягу:</Typography> LocalStorage обмежений обсягом даних, які можна зберегти (зазвичай 5-10 МБ в залежності від браузера). Це обмеження слід враховувати при роботі з великими обсягами інформації.
                </ListItem>
                <ListItem>
                    <Typography fontWeight={500}>Легкий доступ до даних:</Typography> Дані в LocalStorage доступні через JavaScript API і можуть бути легко витягнуті, оновлені, видалені і перевірені з використанням простих команд.
                </ListItem>
                <ListItem>
                    <Typography fontWeight={500}>Безпека і обмеження:</Typography> Доступ до LocalStorage можливий лише для коду, який запущений на стороні клієнта в межах домену, з якого була завантажена сторінка. Це забезпечує обмежену видимість і захист даних від сторонніх джерел.
                </ListItem>
            </List>

            <Typography variant="h2">Приклади зберігання та витягування даних в LocalStorage</Typography>

            <Typography variant="h3">Зберігання даних</Typography>
            <CodeBlock>
                {`// Зберігання значення 'John' під ключем 'username'
localStorage.setItem('username', 'John');`}
            </CodeBlock>

            <Typography variant="h3">Витягування даних</Typography>
            <CodeBlock>
                {`// Витягування значення, збереженого під ключем 'username'
const username = localStorage.getItem('username');
console.log('Користувач:', username); // Виводить 'Користувач: John'`}
            </CodeBlock>

            <Typography variant="h3">Видалення даних</Typography>
            <CodeBlock>
                {`// Видалення значення, збереженого під ключем 'username'
localStorage.removeItem('username');`}
            </CodeBlock>

            <Typography variant="h3">Очищення всіх даних</Typography>
            <CodeBlock>
                {`// Очищення всіх даних в LocalStorage
localStorage.clear();`}
            </CodeBlock>
        </Container>
    );
};

export default LocalStoragePage;
