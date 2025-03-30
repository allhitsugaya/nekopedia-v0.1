import React from "react";
import { Typography, Container, List, ListItem } from "@mui/material";
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../features/Chapter/Chapter.jsx";

const LocalStoragePage = () => {
    return (
        <Container>
            <SubHeader variant="h2">LocalStorage</SubHeader>

            <Paragraph>
                LocalStorage - це один із механізмів WebStorage в JavaScript, який дозволяє зберігати дані на боці клієнта в браузері.
            </Paragraph>

            <Paragraph>
                Цей механізм дозволяє зберігати дані на довший термін, навіть після закриття браузера або перезавантаження сторінки. Дані, збережені в LocalStorage, залишаються доступними для JavaScript-коду на стороні клієнта і можуть використовуватися для зберігання інформації, яка має бути доступною при наступних відвідуваннях веб-сайту.
            </Paragraph>

            <SubHeader variant="h2">Особливості та можливості LocalStorage</SubHeader>

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

            <SubHeader variant="h2">Приклади зберігання та витягування даних в LocalStorage</SubHeader>

            <Chapter variant="h3">Зберігання даних</Chapter>
            <CodeBlock>
                {`// Зберігання значення 'John' під ключем 'username'
localStorage.setItem('username', 'John');`}
            </CodeBlock>

            <Chapter variant="h3">Витягування даних</Chapter>
            <CodeBlock>
                {`// Витягування значення, збереженого під ключем 'username'
const username = localStorage.getItem('username');
console.log('Користувач:', username); // Виводить 'Користувач: John'`}
            </CodeBlock>

            <Chapter variant="h3">Видалення даних</Chapter>
            <CodeBlock>
                {`// Видалення значення, збереженого під ключем 'username'
localStorage.removeItem('username');`}
            </CodeBlock>

            <Chapter variant="h3">Очищення всіх даних</Chapter>
            <CodeBlock>
                {`// Очищення всіх даних в LocalStorage
localStorage.clear();`}
            </CodeBlock>
        </Container>
    );
};

export default LocalStoragePage;
