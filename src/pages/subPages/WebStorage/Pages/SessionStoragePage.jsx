import React from 'react';

const SessionStoragePage = () => {
    return (
        <div className="page-container">
            <h1>SessionStorage</h1>
            <p>
                SessionStorage - це механізм для збереження даних на боці клієнта в рамках однієї сесії браузера. Це означає, що дані зберігаються лише на час тривалості сесії користувача. Коли користувач закриває вкладку або виходить з браузера, дані, збережені в SessionStorage, будуть видалені. SessionStorage корисний для тимчасового зберігання даних, які повинні бути доступні лише протягом поточної сесії.
            </p>

            <h2>LocalStorage vs. SessionStorage</h2>
            <p>
                Однією з ключових відмінностей між LocalStorage і SessionStorage є те, що LocalStorage зберігає дані назавжди, поки їх явно не видалити або поки не скинути кеш браузера, в той час як SessionStorage зберігає дані лише на тривалість однієї сесії браузера.
            </p>

            <h2>Практичний приклад використання SessionStorage</h2>
            <p>
                Давайте розглянемо приклад використання SessionStorage для збереження користувацьких налаштувань. Припустимо, ми створюємо веб-додаток з можливістю зміни фонового кольору інтерфейсу. Користувач може обирати різні кольори, і ми хочемо зберігати його вибір для подальших відвідувань веб-сайту.
            </p>

            <pre>
        <code>
          {`
// Перевіряємо, чи є попередні налаштування в SessionStorage
const savedColor = sessionStorage.getItem("backgroundColor");
if (savedColor) {
    document.body.style.backgroundColor = savedColor;
}

// Обробник події для зміни кольору
document.getElementById("colorPicker").addEventListener("change", function (event) {
    const selectedColor = event.target.value;
    // Зберігаємо вибраний колір в SessionStorage
    sessionStorage.setItem("backgroundColor", selectedColor);
    // Встановлюємо фоновий колір
    document.body.style.backgroundColor = selectedColor;
});
          `}
        </code>
      </pre>

            <p>
                У цьому прикладі ми перевіряємо, чи є збережені налаштування в SessionStorage. Якщо так, ми встановлюємо фоновий колір сторінки відповідно до збережених даних. Коли користувач вибирає новий колір за допомогою інтерфейсу вибору, ми зберігаємо цей вибір в SessionStorage, щоб використовувати його при наступних відвідуваннях.
            </p>

            <div className='conclusion'>
                <h2>Заключення</h2>
                <p>
                    SessionStorage - це потужний інструмент для збереження даних на боці клієнта протягом однієї сесії
                    браузера. Його використання дозволяє покращити користувацький досвід, зберігаючи та використовуючи
                    дані в реальному часі. Ця можливість дуже корисна для зберігання налаштувань, тимчасового кешування
                    та багатьох інших завдань веб-розробки.
                </p>
            </div>
        </div>
    );
};

export default SessionStoragePage;