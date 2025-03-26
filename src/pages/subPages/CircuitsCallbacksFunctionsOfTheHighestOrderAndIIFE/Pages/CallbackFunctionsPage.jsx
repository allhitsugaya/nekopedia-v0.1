import React from 'react';
import { Box, Paper } from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";

const CallbackFunctionsPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Функції-колбеки: Основи та Асинхронність</BookHeader>

            <Paragraph>
                Функції-колбеки є важливою концепцією в JavaScript, особливо у контексті асинхронного програмування та обробки подій. У цій доповіді ми детально розглянемо, що таке функції-колбеки, як їх використовувати та робити асинхронні виклики за допомогою них.
            </Paragraph>

            <SubHeader>Основи функцій-колбеків</SubHeader>
            <Paragraph>
                Функція-колбек - це функція, яка передається іншій функції як аргумент. Ця концепція є основою функцій вищого порядку, і вона дозволяє структурувати код та здійснювати динамічні виклики.
            </Paragraph>
            <CodeBlock>
                {`function process(callback) {
  // Виконуємо певні обчислення
  const result = 42;
  // Викликаємо колбек, передаючи результат
  callback(result);
}

// Виклик функції process з функцією-колбеком
process(function (data) {
  console.log('Результат обробки: ' + data);
});`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі <code>process</code> - це функція, яка приймає функцію-колбек <code>callback</code>. Після обчислення результату вона викликає колбек і передає йому результат.
            </Paragraph>

            <SubHeader>Використання функцій-колбеків</SubHeader>
            <Paragraph>
                Функції-колбеки широко використовуються в асинхронному програмуванні, такому як робота з таймерами, завантаженням файлів, запитами до сервера та іншими операціями, які займають час.
            </Paragraph>
            <CodeBlock>
                {`// Асинхронний таймер
setTimeout(function () {
  console.log('Таймер викликав цей колбек');
}, 1000);

// Асинхронний запит до сервера
fetch('https://api.example.com/data')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Дані з сервера: ' + JSON.stringify(data));
  });`}
            </CodeBlock>
            <Paragraph>
                У цих прикладах ми бачимо, що функції-колбеки передаються до <code>setTimeout</code> та методів <code>then</code> об'єкта <code>Promise</code> для асинхронного коду.
            </Paragraph>

            <SubHeader>Асинхронні колбеки</SubHeader>
            <Paragraph>
                Асинхронні функції-колбеки є потужним інструментом для управління асинхронним кодом та подіями. Вони використовуються для реалізації зворотного виклику, коли операція завершилася.
            </Paragraph>
            <CodeBlock>
                {`function fetchData(url, callback) {
  // Симулюємо асинхронний запит до сервера
  setTimeout(function () {
    const data = { name: 'John', age: 30 };
    callback(data);
  }, 1000);
}

// Виклик функції з асинхронним колбеком
fetchData('https://api.example.com/user', function (user) {
  console.log('Отримані дані користувача: ' + JSON.stringify(user));
});`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі <code>fetchData</code> симулює асинхронний запит та передає дані через колбек.
            </Paragraph>

            <Paper sx={{ p: 3, mt: 3, backgroundColor: 'background.paper' }} className='conclusion'>
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Функції-колбеки є потужним інструментом в JavaScript для роботи з асинхронним кодом та обробки подій. Вони дозволяють створювати динамічні та гнучкі програми, які можуть взаємодіяти з подіями та асинхронними операціями.
                </Paragraph>
                <Paragraph>
                    Хоча сучасний JavaScript пропонує новіші підходи (як Promises та async/await), розуміння колбеків залишається важливим для роботи зі старим кодом та деякими API.
                </Paragraph>
            </Paper>
        </Box>
    );
};

export default CallbackFunctionsPage;