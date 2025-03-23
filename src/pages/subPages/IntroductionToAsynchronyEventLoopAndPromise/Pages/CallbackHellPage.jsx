import React from 'react';

const CallbackHellPage = () => {
    return (
        <div className="page-container">
            <h1>Callback Hell (Ад колбеків)</h1>

            <p>
                Асинхронне програмування у JavaScript часто призводить до виникнення так званого "Callback Hell" або "Аду колбеків". Це термін виник під час вирішення проблем, пов'язаних із злиттям великої кількості вкладених колбеків у коді, що робить його важким для читання та розуміння.
            </p>

            <p>
                Callback Hell виник через особливості асинхронного програмування в JavaScript. Колбеки, або функції зворотнього виклику, часто використовуються для обробки результатів асинхронних операцій, таких як завантаження файлів, запити до сервера тощо. За невеликий час використання цього підходу, код може стати густим, непереглядним та важким для управління.
            </p>

            <h2>1. Суть проблеми: вкладеність колбеків та важкість читання коду</h2>
            <p>
                Головна проблема Callback Hell - це велика кількість вкладених колбеків. Коли є багато асинхронних операцій, які повинні відбутися послідовно, код виглядає подібно до "п'ятиконтурного пекла". Нижче наведений приклад такого коду:
            </p>
            <pre>
                <code>
{`getData((data) => {
  processData(data, (processedData) => {
    updateUI(processedData, () => {
      logAction('UI updated', () => {
        // Ще колбеки та операції...
      });
    });
  });
});`}
                </code>
            </pre>
            <p>
                Це не тільки важко читати, але й ускладнює розуміння порядку виконання операцій. Крім того, такий код важко тестувати та утримувати.
            </p>

            <h2>2. Приклад коду з Callback Hell</h2>
            <p>
                Давайте розглянемо більш конкретний приклад коду з Callback Hell, який моделює асинхронне завантаження та обробку даних:
            </p>
            <pre>
                <code>
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
                </code>
            </pre>
            <p>
                В цьому прикладі <code>loadData</code>, <code>processData</code> та <code>updateUI</code> є функціями, які симулюють асинхронні операції. Кожна з них має колбек для продовження ланцюжка операцій, і код стає важкочитаним та ускладненим для розуміння з кожним додатковим кроком.
            </p>

            <div className='conclusion'>
                <h2>3. Заключення</h2>
                <p>
                    Callback Hell є однією з головних проблем асинхронного програмування в JavaScript. Зручно
                    використовувати альтернативи, такі як <code>Promise</code> та <code>async/await</code>, які
                    забезпечують більш читабельний та керований код. У подальших конспектах буде розглянуто, як
                    використовувати <code>Promise</code> для полегшення асинхронного коду.
                </p>
            </div>
        </div>
    );
};

export default CallbackHellPage;