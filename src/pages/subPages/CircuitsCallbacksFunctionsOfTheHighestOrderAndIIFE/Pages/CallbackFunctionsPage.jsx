import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";
import Code from "../../../../features/Code/Code.jsx";

const CallbackFunctionsPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Функція-колбек: Основи та Асинхронність</BookHeader>
            <Paragraph>
                Функції-колбеки є важливою концепцією в JavaScript, особливо у контексті асинхронного програмування та обробки подій. У цій доповіді ми детально розглянемо, що таке функції-колбеки, як їх використовувати та робити асинхронні виклики за допомогою них.
            </Paragraph>

            <SubHeader>Основи функцій-колбеків</SubHeader>
            <Paragraph>
                Функція-колбек - це функція, яка передається іншій функції як аргумент. Ця концепція є основою функцій вищого порядку, і вона дозволяє структурувати код та здійснювати динамічні виклики.
            </Paragraph>
            <CodeBlock>
          {`
function process(callback) {
  // Виконуємо певні обчислення
  const result = 42;
  // Викликаємо колбек, передаючи результат
  callback(result);
}

// Виклик функції process з функцією-колбеком
process(function (data) {
  console.log('Результат обробки: ' + data);
});
          `}
      </CodeBlock>
            <Paragraph>
                У цьому прикладі <Code>process</Code> - це функція, яка приймає функцію-колбек <Code>callback</Code>. Після обчислення результату вона викликає колбек і передає йому результат.
            </Paragraph>

            <SubHeader>Використання функцій-колбеків</SubHeader>
            <Paragraph>
                Функції-колбеки широко використовуються в асинхронному програмуванні, такому як робота з таймерами, завантаженням файлів, запитами до сервера та іншими операціями, які займають час.
            </Paragraph>
            <CodeBlock>
          {`
// Асинхронний таймер
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
  });
          `}
      </CodeBlock>
            <Paragraph>
                У цих прикладах ми бачимо, що функції-колбеки передаються до <Code>setTimeout</Code> та методів <Code>then</Code> об'єкта <Code>Promise</Code> для асинхронного коду.
            </Paragraph>

            <SubHeader>Асинхронні колбеки</SubHeader>
            <Paragraph>
                Асинхронні функції-колбеки є потужним інструментом для управління асинхронним кодом та подіями. Вони використовуються для реалізації зворотного виклику, коли операція завершилася.
            </Paragraph>
            <CodeBlock>
          {`
function fetchData(url, callback) {
  // Симулюємо асинхронний запит до сервера
  setTimeout(function () {
    const data = { name: 'John', age: 30 };
    callback(data);
  }, 1000);
}

// Виклик функції з асинхронним колбеком
fetchData('https://api.example.com/user', function (user) {
  console.log('Отримані дані користувача: ' + JSON.stringify(user));
});
          `}
      </CodeBlock>
            <Paragraph>
                У цьому прикладі <Code>fetchData</Code> симулює асинхронний запит та передає дані через колбек.
            </Paragraph>

                <Conclusion>Заключні слова</Conclusion>
                <Paragraph>
                    Функції-колбеки є потужним інструментом в JavaScript для роботи з асинхронним кодом та обробки
                    подій. Вони дозволяють створювати динамічні та гнучкі програми, які можуть взаємодіяти з подіями та
                    асинхронними операціями. Розуміння цієї концепції є важливим для розвитку навичок програмування в
                    JavaScript.
                </Paragraph>
        </Container>
    );
};

export default CallbackFunctionsPage;