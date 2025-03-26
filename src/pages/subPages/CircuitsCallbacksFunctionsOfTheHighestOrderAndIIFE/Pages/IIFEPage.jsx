import React from 'react';
import { Box, Typography, Paper, ListItem, List } from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";

const IIFEPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Функції, що самовикликаються (IIFE)</BookHeader>

            <Paragraph>
                Самовикликаючіся функції (IIFE - Immediately Invoked Function Expressions) - це фундаментальна концепція JavaScript, яка дозволяє виконувати функції негайно після їх оголошення. Ця техніка особливо корисна для створення ізольованих областей видимості та інкапсуляції коду.
            </Paragraph>

            <SubHeader>Синтаксис IIFE</SubHeader>
            <Paragraph>
                Базовий синтаксис IIFE складається з двох частин:
            </Paragraph>
            <CodeBlock>
                {`(function() {
  // Тіло функції
})();`}
            </CodeBlock>
            <Paragraph>
                Або з використанням стрілкової функції (ES6+):
            </Paragraph>
            <CodeBlock>
                {`(() => {
  // Тіло функції
})();`}
            </CodeBlock>
            <Paragraph>
                Функція огортається в дужки, що перетворює її у вираз функції, і негайно викликається за допомогою <Code>()</Code> в кінці.
            </Paragraph>

            <SubHeader>Основні випадки використання</SubHeader>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    1. Приватна область видимості
                </Typography>
                <Paragraph>
                    IIFE створює замикання, що дозволяє мати приватні змінні:
                </Paragraph>
                <CodeBlock>
                    {`(function() {
  const privateVar = 'Доступно тільки тут';
  console.log(privateVar); // Працює
})();

console.log(privateVar); // Помилка: privateVar is not defined`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    2. Уникнення забруднення глобальної області
                </Typography>
                <Paragraph>
                    IIFE допомагають уникати конфліктів імен у глобальній області:
                </Paragraph>
                <CodeBlock>
                    {`// Без IIFE - змінні у глобальній області
var count = 0;

// З IIFE - змінні інкапсульовані
(function() {
  var count = 0;
  // Логіка роботи з count
})();`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    3. Модульний патерн
                </Typography>
                <Paragraph>
                    IIFE дозволяють реалізувати модульний підхід до організації коду:
                </Paragraph>
                <CodeBlock>
                    {`const myModule = (function() {
  // Приватні змінні та функції
  const privateData = 'hidden';
  
  function privateMethod() {
    console.log('Цей метод приватний');
  }

  // Публічний API
  return {
    publicMethod: function() {
      privateMethod();
      return 'Доступ до: ' + privateData;
    }
  };
})();

myModule.publicMethod(); // Виклик публічного методу`}
                </CodeBlock>
            </Box>

            <SubHeader>Розширені приклади</SubHeader>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    1. IIFE з параметрами
                </Typography>
                <Paragraph>
                    Можна передавати параметри в IIFE:
                </Paragraph>
                <CodeBlock>
                    {`(function(window, document) {
  // Робота з window і document
  console.log('DOM ready');
})(window, document);`}
                </CodeBlock>
            </Box>

            <Box component="section" mb={4}>
                <Typography variant="h5" component="h3" gutterBottom>
                    2. Асинхронні IIFE
                </Typography>
                <Paragraph>
                    Можна використовувати IIFE з async/await:
                </Paragraph>
                <CodeBlock>
                    {`(async function() {
  const data = await fetchData();
  console.log(data);
})();`}
                </CodeBlock>
            </Box>

            <Paper sx={{ p: 3, mt: 3, backgroundColor: 'background.paper' }}>
                <SubHeader>Сучасні альтернативи</SubHeader>
                <Paragraph>
                    У сучасному JavaScript (ES6+) існують альтернативи IIFE:
                </Paragraph>
                <List>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        <Code>Блоки {}</Code> з <Code>let/const</Code> (створюють блокову область видимості)
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        <Code>Модулі ES6</Code> (нативна інкапсуляція коду)
                    </ListItem>
                </List>
                <Paragraph>
                    Однак IIFE все ще залишаються корисними для специфічних випадків використання та підтримки старого коду.
                </Paragraph>
            </Paper>
        </Box>
    );
};

export default IIFEPage;