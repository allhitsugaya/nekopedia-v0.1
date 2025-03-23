import React from 'react';

const EventHandlingPage = () => {
    return (
        <div className="page-container">
            <h1>Реєстрація та видалення обробників Подій</h1>
            <p>
                Робота з подіями в Document Object Model (DOM) є дуже важливою частиною розробки веб-додатків, оскільки події дозволяють створювати інтерактивні та реактивні додатки. В цій частині ми розглянемо наступні аспекти роботи з подіями:
            </p>

            <h2>Реєстрація Обробників Подій</h2>
            <p>
                Для реєстрації обробників подій використовується метод <code>addEventListener()</code>. Цей метод призначений для прослуховування різних типів подій, таких як <code>"click"</code>, <code>"keydown"</code>, <code>"submit"</code> та інші. Наприклад, для реєстрації обробника події кліка на кнопці ми можемо використати такий код:
            </p>
            <pre>
        <code>
          {`
const myButton = document.getElementById('my-button');
myButton.addEventListener('click', function(event) {
    // Ваш код обробки події тут
});
          `}
        </code>
      </pre>

            <h2>Видалення Обробників Подій</h2>
            <p>
                Інколи може бути необхідно видалити обробник події, наприклад, для очищення ресурсів або після того, як він більше не потрібний. Для цього використовується метод <code>removeEventListener()</code>. Ось приклад видалення обробника події:
            </p>
            <pre>
        <code>
          {`
const myButton = document.getElementById('my-button');
function handleClick(event) {
    // Ваш код обробки події тут
}
myButton.addEventListener('click', handleClick);

// Для видалення обробника:
myButton.removeEventListener('click', handleClick);
          `}
        </code>
      </pre>
            <p>
                Проте дуже важливо мати одне посилання на функцію. Бо такий код обробник не видалить:
            </p>
            <pre>
        <code>
          {`
const myButton = document.getElementById('my-button');

myButton.addEventListener('click', function handleClick(event) {
    console.log('click')
});

// Для видалення обробника:
myButton.removeEventListener('click', function handleClick(event) {
    console.log('click')
});
          `}
        </code>
      </pre>
        </div>
    );
};

export default EventHandlingPage;