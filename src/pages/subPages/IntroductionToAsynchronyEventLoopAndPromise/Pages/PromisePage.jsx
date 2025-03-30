import React from 'react';
import {Box, Container, List, ListItem} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../features/Chapter/Chapter.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";

const PromisePage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Promise</BookHeader>

            <Paragraph>
                Асинхронне програмування в JavaScript може бути більш керованим та зручним завдяки об'єкту <Code>Promise</Code>. У цьому розділі ми розглянемо визначення та призначення <Code>Promise</Code>, його структуру, методи та переваги порівняно з Callback Hell.
            </Paragraph>

            <Paragraph>
                <Code>Promise</Code> - це об'єкт, який представляє результат або помилку асинхронної операції та дозволяє вам працювати з результатом асинхронного запиту в подальший час. Використовуючи <Code>Promise</Code>, можна зробити код більш читабельним та керованим, особливо коли маємо декілька асинхронних операцій.
            </Paragraph>

            <SubHeader>Структура та методи Promise</SubHeader>
            <Chapter>1. Створення промісу:</Chapter>
            <CodeBlock>
{`const promise = new Promise((resolve, reject) => {
  // Асинхронний код, який вирішує (resolve) або відхиляє (reject) проміс
});`}
            </CodeBlock>

            <Chapter>2. Методи Promise:</Chapter>
            <Box sx={{ml:2}}>
                <List sx={{
                    pl: 2,
                    listStyleType: 'disc',
                    '& .MuiListItem-root': {
                        display: 'list-item',
                        py: 0.5,
                        pl: 1,
                        ml: 2,
                        fontSize: 14,
                        fontWeight: 800
                    }
                }}>
                <ListItem>
                    <Code>then()</Code> - викликається, коли проміс вирішується успішно.
                </ListItem>
                <ListItem>
                    <Code>catch()</Code> - викликається, коли проміс відхиляється.
                </ListItem>
                <ListItem>
                    <Code>finally()</Code> - викликається незалежно від того, чи вирішується, чи відхиляється проміс.
                </ListItem>
                </List>
            </Box>

            <SubHeader>Переваги в порівнянні з Callback Hell</SubHeader>
            <Chapter>1. Читабельність коду:</Chapter>
            <CodeBlock>
{`loadData()
  .then(processData)
  .then(updateUI)
  .catch(handleError)
  .finally(() => console.log('Операції завершено'));`}
            </CodeBlock>

            <Paragraph>
                В порівнянні з Callback Hell, <Code>Promise</Code> надає можливість ланцюга промісів, що полегшує читання та розуміння коду.
            </Paragraph>

            <Chapter>2. Управління помилками:</Chapter>
            <Paragraph>
                Використовуючи <Code>.catch()</Code>, можна централізовано обробляти помилки для всіх промісів у ланцюжку, що робить код менш вразливим до помилок.
            </Paragraph>

            <Chapter>3. Зручність роботи з асинхронним кодом:</Chapter>
            <Paragraph>
                <Code>Promise</Code> дозволяє елегантно працювати з асинхронним кодом, відокремлюючи логіку роботи з результатами асинхронних операцій.
            </Paragraph>

            <SubHeader>Приклад коду з використанням Promise:</SubHeader>
            <CodeBlock>
{`function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Дані завантажено';
      resolve(data);
      // або
      // reject('Помилка завантаження');
    }, 1000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processedData = \`\${data} і оброблено\`;
      resolve(processedData);
    }, 1000);
  });
}

function updateUI(processedData) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(processedData);
      resolve();
    }, 1000);
  });
}

// Виклик функцій
loadData()
  .then(processData)
  .then(updateUI)
  .catch((error) => console.error(\`Помилка: \${error}\`))
  .finally(() => console.log('Операції завершено'));`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми використали <Code>Promise</Code> для кращого організації асинхронних операцій та легкості читання коду. За допомогою <Code>then</Code>, <Code>catch</Code> та <Code>finally</Code> керуємо логікою вирішення та обробкою помилок.
            </Paragraph>
        </Container>
    );
};

export default PromisePage;