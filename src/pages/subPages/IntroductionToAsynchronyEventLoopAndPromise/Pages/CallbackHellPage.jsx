import React from 'react';
import { Box } from "@mui/material";
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const CallbackHellPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Callback Hell (Ад колбеків)</BookHeader>

            <Paragraph>
                Асинхронне програмування у JavaScript часто призводить до виникнення так званого "Callback Hell" або "Аду колбеків". Це термін виник під час вирішення проблем, пов'язаних із злиттям великої кількості вкладених колбеків у коді, що робить його важким для читання та розуміння.
            </Paragraph>

            <Paragraph>
                Callback Hell виник через особливості асинхронного програмування в JavaScript. Колбеки, або функції зворотнього виклику, часто використовуються для обробки результатів асинхронних операцій, таких як завантаження файлів, запити до сервера тощо. За невеликий час використання цього підходу, код може стати густим, непереглядним та важким для управління.
            </Paragraph>

            <SubHeader>1. Суть проблеми: вкладеність колбеків та важкість читання коду</SubHeader>
            <Paragraph>
                Головна проблема Callback Hell - це велика кількість вкладених колбеків. Коли є багато асинхронних операцій, які повинні відбутися послідовно, код виглядає подібно до "п'ятиконтурного пекла". Нижче наведений приклад такого коду:
            </Paragraph>
            <CodeBlock>
                {`getData((data) => {
  processData(data, (processedData) => {
    updateUI(processedData, () => {
      logAction('UI updated', () => {
        // Ще колбеки та операції...
      });
    });
  });
});`}
            </CodeBlock>
            <Paragraph>
                Це не тільки важко читати, але й ускладнює розуміння порядку виконання операцій. Крім того, такий код важко тестувати та утримувати.
            </Paragraph>

            <SubHeader>2. Приклад коду з Callback Hell</SubHeader>
            <Paragraph>
                Давайте розглянемо більш конкретний приклад коду з Callback Hell, який моделює асинхронне завантаження та обробку даних:
            </Paragraph>
            <CodeBlock>
                {`function loadData(callback) {
  setTimeout(() => {
    const data = 'Дані завантажено';
    callback(data);
  }, 1000);
}

function processData(data, callback) {
  setTimeout(() => {
    const processedData = \`\${data} і оброблено\`;
    callback(processedData);
  }, 1000);
}

function updateUI(processedData, callback) {
  setTimeout(() => {
    console.log(processedData);
    callback();
  }, 1000);
}

// Виклик функцій
loadData((data) => {
  processData(data, (processedData) => {
    updateUI(processedData, () => {
      console.log('UI оновлено');
    });
  });
});`}
            </CodeBlock>
            <Paragraph>
                В цьому прикладі <Code>loadData</Code>, <Code>processData</Code> та <Code>updateUI</Code> є функціями, які симулюють асинхронні операції. Кожна з них має колбек для продовження ланцюжка операцій, і код стає важкочитаним та ускладненим для розуміння з кожним додатковим кроком.
            </Paragraph>

            <Box className='conclusion'>
                <SubHeader>3. Заключення</SubHeader>
                <Paragraph>
                    Callback Hell є однією з головних проблем асинхронного програмування в JavaScript. Зручно
                    використовувати альтернативи, такі як <Code>Promise</Code> та <Code>async/await</Code>, які
                    забезпечують більш читабельний та керований код. У подальших конспектах буде розглянуто, як
                    використовувати <Code>Promise</Code> для полегшення асинхронного коду.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default CallbackHellPage;