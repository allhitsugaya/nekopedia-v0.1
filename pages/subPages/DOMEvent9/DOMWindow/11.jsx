import React from 'react';

const UsingDomContentLoadedAndWindowOnloadPage = () => {
    return (
        <div className="page-container">
            <h1>Використання DOMContentLoaded та window.onload</h1>

            <h2>1. Завантаження Скриптів</h2>
            <p>
                Використовуйте <code>DOMContentLoaded</code>, коли вам потрібно впевнитися, що ваш JavaScript код не спрацює до завершення побудови DOM. Це важливо, наприклад, коли ви взаємодієте з елементами DOM, які повинні бути доступні.
            </p>
            <pre>
        <code>
          {`
document.addEventListener('DOMContentLoaded', function() {
  // Ваш код тут
});
          `}
        </code>
      </pre>

            <h2>2. Завантаження Ресурсів</h2>
            <p>
                Використовуйте <code>window.onload</code>, якщо ваш код повинен виконатися тільки після завантаження всіх ресурсів, таких як зображення, стилі і файли скриптів.
            </p>
            <pre>
        <code>
          {`
window.onload = function() {
  // Ваш код тут
};
          `}
        </code>
      </pre>

            <h2>3. Оптимізація завантаження сторінки</h2>
            <p>
                Використовуйте обидві події, коли потрібно оптимізувати завантаження сторінки. Використовуйте <code>DOMContentLoaded</code> для початкового взаємодії з DOM та <code>window.onload</code> для виконання інших операцій, які чекають на завершення завантаження ресурсів.
            </p>

            <h2>Висновок</h2>
            <p>
                <code>DOMContentLoaded</code> та <code>window.onload</code> - це дві важливі події в JavaScript, які дозволяють вам керувати тим, коли ваш код взаємодіє з DOM сторінки. <code>DOMContentLoaded</code> спрацьовує, коли DOM готовий для взаємодії, навіть якщо ще завантажуються зовнішні ресурси, тоді як <code>window.onload</code> спрацьовує після завантаження всіх ресурсів сторінки. Використання цих подій допомагає створити ефективний та відзивчивий користувацький інтерфейс та оптимізувати завантаження сторінки.
            </p>

            <h2>Приклад використання обох подій</h2>
            <p>
                Ось приклад, де ми використовуємо обидві події для оптимізації завантаження сторінки:
            </p>
            <pre>
        <code>
          {`
document.addEventListener('DOMContentLoaded', function() {
  // Виконати код після завантаження DOM
  const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    alert('Клікнули на кнопці!');
  });
});

window.onload = function() {
  // Виконати код після завантаження всіх ресурсів
  const image = document.getElementById('myImage');
  image.src = 'new-image.jpg';
};
          `}
        </code>
      </pre>
            <p>
                В цьому прикладі код, який відповідає за клік на кнопці, виконується після завантаження DOM завдяки <code>DOMContentLoaded</code>, а зміна джерела зображення відбувається тільки після завантаження всіх ресурсів, завдяки <code>window.onload</code>.
            </p>
        </div>
    );
};

export default UsingDomContentLoadedAndWindowOnloadPage;