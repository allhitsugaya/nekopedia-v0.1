import React from 'react';
import { Box, List, ListItem, Typography } from "@mui/material";
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const PromisePage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Promise</BookHeader>

            <Paragraph>
                Асинхронне програмування в JavaScript може бути більш керованим та зручним завдяки об'єкту <Code>Promise</Code>. У цьому розділі ми розглянемо визначення та призначення <Code>Promise</Code>, його структуру, методи та переваги порівняно з Callback Hell.
            </Paragraph>

            <Paragraph>
                <Code>Promise</Code> - це об'єкт, який представляє результат або помилку асинхронної операції та дозволяє вам працювати з результатом асинхронного запиту в подальший час. Використовуючи <Code>Promise</Code>, можна зробити код більш читабельним та керованим, особливо коли маємо декілька асинхронних операцій.
            </Paragraph>

            <SubHeader>Структура та методи Promise</SubHeader>

            <Box component="section" mb={3}>
                <Typography variant="h6" component="h3" gutterBottom>
                    1. Створення промісу:
                </Typography>
                <CodeBlock>
                    {`const promise = new Promise((resolve, reject) => {
  // Асинхронний код, який вирішує (resolve) або відхиляє (reject) проміс
});`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h6" component="h3" gutterBottom>
                    2. Методи Promise:
                </Typography>
                <List sx={{ mb: 2 }}>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        <Code>then()</Code> - Викликається, коли проміс вирішується успішно
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        <Code>catch()</Code> - Викликається, коли проміс відхиляється
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        <Code>finally()</Code> - Викликається незалежно від того, чи вирішується, чи відхиляється проміс
                    </ListItem>
                </List>
            </Box>

            <SubHeader>Переваги в порівнянні з Callback Hell</SubHeader>

            <Box component="section" mb={3}>
                <Typography variant="h6" component="h3" gutterBottom>
                    1. Читабельність коду:
                </Typography>
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
            </Box>

            <Box component="section" mb={3}>
                <Typography variant="h6" component="h3" gutterBottom>
                    2. Управління помилками:
                </Typography>
                <Paragraph>
                    Використовуючи <Code>.catch()</Code>, можна централізовано обробляти помилки для всіх промісів у ланцюжку, що робить код менш вразливим до помилок.
                </Paragraph>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h6" component="h3" gutterBottom>
                    3. Зручність роботи з асинхронним кодом:
                </Typography>
                <Paragraph>
                    <Code>Promise</Code> дозволяє елегантно працювати з асинхронним кодом, відокремлюючи логіку роботи з результатами асинхронних операцій.
                </Paragraph>
            </Box>

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
        </Box>
    );
};

export default PromisePage;