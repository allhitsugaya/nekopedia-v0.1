import React from 'react';

const PromisePage = () => {
    return (
        <div className="page-container">
            <h1>Promise</h1>

            <p>
                Асинхронне програмування в JavaScript може бути більш керованим та зручним завдяки об'єкту <code>Promise</code>. У цьому розділі ми розглянемо визначення та призначення <code>Promise</code>, його структуру, методи та переваги порівняно з Callback Hell.
            </p>

            <p>
                <code>Promise</code> - це об'єкт, який представляє результат або помилку асинхронної операції та дозволяє вам працювати з результатом асинхронного запиту в подальший час. Використовуючи <code>Promise</code>, можна зробити код більш читабельним та керованим, особливо коли маємо декілька асинхронних операцій.
            </p>

            <h2>Структура та методи Promise</h2>
            <h3>1. Створення промісу:</h3>
            <pre>
                <code>
{`const promise = new Promise((resolve, reject) => {
  // Асинхронний код, який вирішує (resolve) або відхиляє (reject) проміс
});`}
                </code>
            </pre>

            <h3>2. Методи Promise:</h3>
            <ul>
                <li>
                    <code>then()</code> - викликається, коли проміс вирішується успішно.
                </li>
                <li>
                    <code>catch()</code> - викликається, коли проміс відхиляється.
                </li>
                <li>
                    <code>finally()</code> - викликається незалежно від того, чи вирішується, чи відхиляється проміс.
                </li>
            </ul>

            <h2>Переваги в порівнянні з Callback Hell</h2>
            <h3>1. Читабельність коду:</h3>
            <pre>
                <code>
{`loadData()
  .then(processData)
  .then(updateUI)
  .catch(handleError)
  .finally(() => console.log('Операції завершено'));`}
                </code>
            </pre>
            <p>
                В порівнянні з Callback Hell, <code>Promise</code> надає можливість ланцюга промісів, що полегшує читання та розуміння коду.
            </p>

            <h3>2. Управління помилками:</h3>
            <p>
                Використовуючи <code>.catch()</code>, можна централізовано обробляти помилки для всіх промісів у ланцюжку, що робить код менш вразливим до помилок.
            </p>

            <h3>3. Зручність роботи з асинхронним кодом:</h3>
            <p>
                <code>Promise</code> дозволяє елегантно працювати з асинхронним кодом, відокремлюючи логіку роботи з результатами асинхронних операцій.
            </p>

            <h2>Приклад коду з використанням Promise:</h2>
            <pre>
                <code>
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
                </code>
            </pre>
            <p>
                У цьому прикладі ми використали <code>Promise</code> для кращого організації асинхронних операцій та легкості читання коду. За допомогою <code>then</code>, <code>catch</code> та <code>finally</code> керуємо логікою вирішення та обробкою помилок.
            </p>
        </div>
    );
};

export default PromisePage;