import React from 'react';

const EventHandlingPage = () => {
    return (
        <div className="page-container">
            <h1>Приклад роботи з об'єктом події та типи подій</h1>

            <h2>Приклад роботи з об'єктом події</h2>
            <p>
                Розглянемо приклад роботи з об'єктом Події при кліку на кнопку:
            </p>
            <pre>
        <code>
          {`
<!DOCTYPE html>
<html>
<head>
  <title>Приклад Об'єкта Події</title>
</head>
<body>
  <button id="myButton">Клікни мене</button>

  <script>
    const button = document.querySelector('#myButton');

    button.addEventListener('click', function(event) {
      console.log('Тип події: ' + event.type);
      console.log('Ціль події: ' + event.target);
      console.log('Фаза події: ' + event.eventPhase);

      // Зупинити спливання події
      event.stopPropagation();
    });
  </script>
</body>
</html>
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі ми створили кнопку і прикріпили до неї обробник події на клік. При кліку на кнопку в консолі будуть виведені різні властивості об'єкта Події, такі як тип події, ціль події та фаза події. Ми також використали метод <code>stopPropagation()</code>, щоб зупинити подальше поширення події.
            </p>

            <h2>Типи подій</h2>
            <p>
                DOM підтримує багато різних типів подій, таких як клік, наведення, зміна, введення тексту та багато інших. Кожен тип події відповідає певній події взаємодії користувача зі сторінкою. Наприклад, подія <code>click</code> спрацьовує при кліку на елемент:
            </p>

            <h3>1. Клік (click)</h3>
            <p>
                Подія <code>click</code> спрацьовує, коли користувач клікає на елементі сторінки. Це може бути корисно для обробки подій, пов'язаних з кліками кнопок, посилань тощо. Приклад:
            </p>
            <pre>
        <code>
          {`
const button = document.querySelector('#myButton');
button.addEventListener('click', function() {
  alert('Кнопку натиснули!');
});
          `}
        </code>
      </pre>

            <h3>2. Клавіша натиснута (keydown)</h3>
            <p>
                Подія <code>keydown</code> спрацьовує, коли користувач натискає клавішу на клавіатурі. Вона може використовуватися для обробки натискання певних клавіш. Приклад:
            </p>
            <pre>
        <code>
          {`
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    console.log('Enter була натиснута');
  }
});
          `}
        </code>
      </pre>

            <h3>3. Зміна розміру вікна (resize)</h3>
            <p>
                Подія <code>resize</code> спрацьовує, коли розмір вікна браузера змінюється. Це може бути корисно для адаптивного дизайну та підлаштування інтерфейсу до різних розмірів вікон. Приклад:
            </p>
            <pre>
        <code>
          {`
window.addEventListener('resize', function() {
  console.log('Розмір вікна було змінено');
});
          `}
        </code>
      </pre>

            <h3>4. Втрата фокусу (blur) і отримання фокусу (focus)</h3>
            <p>
                Події <code>blur</code> і <code>focus</code> спрацьовують, коли елемент втрачає або отримує фокус. Це може бути корисно при валідації введених даних у формах. Приклад:
            </p>
            <pre>
        <code>
          {`
const inputElement = document.querySelector('#myInput');
inputElement.addEventListener('blur', function() {
  console.log('Елемент втратив фокус');
});

inputElement.addEventListener('focus', function() {
  console.log('Елемент отримав фокус');
});
          `}
        </code>
      </pre>
        </div>
    );
};

export default EventHandlingPage;