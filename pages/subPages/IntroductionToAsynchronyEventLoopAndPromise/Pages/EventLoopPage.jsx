import React from 'react';

const EventLoopPage = () => {
    return (
        <div className="page-container">
            <h1>Event Loop</h1>
            <p>
                <strong>Event Loop</strong> (петля подій) - це механізм у багатьох мов програмування, включаючи JavaScript, який керує потоком виконання подій або запитів в програмі.
            </p>
            <p>
                Основна ідея Event Loop полягає в тому, що програма необхідно постійно очікувати на події або запити, які можуть виникнути асинхронно. Замість блокування виконання програми на очікуванні результату або відповіді, Event Loop дозволяє програмі продовжувати виконувати інші завдання, поки очікується на результат або подію.
            </p>
            <p>
                У JavaScript, Event Loop відповідає за обробку подій, таких як клік мишею, завантаження сторінки, отримання відповіді з сервера, таймери, тощо. Коли подія виникає, вона додається до черги подій. Event Loop постійно перевіряє цю чергу, виконуючи обробку подій в порядку їх надходження.
            </p>
            <p>
                Це дозволяє JavaScript використовувати асинхронні операції, такі як запити до сервера, без блокування виконання інших частин програми. Завдяки Event Loop, JavaScript може забезпечувати плавне та реагуюче взаємодію з користувачем, навіть при виконанні великих обчислень або завантаженні ресурсів.
            </p>

            <h2>1. Яка ідея циклу подій?</h2>
            <p>
                Існує нескінченний цикл подій, в якому JavaScript рушій чекає своє завдання, виконує його і чекає на нове. Алгоритм роботи рушія ми можемо бачити під час перегляду будь-якої веб-сторінки. Він входить у роботу тоді, коли необхідно обробити будь-яку подію чи скрипт. Схема роботи виглядає так:
            </p>
            <p>
                На початку JavaScript не діє і чекає на своє завдання. Але як тільки завдання з'являються, рушій починає їх виконання, починаючи з першого. Якщо надійшло нове завдання, але рушій зайнятий виконанням попереднього - воно ставиться в чергу.
            </p>

            <h2>2. Основні частини можна описати так:</h2>
            <ul>
                <li>
                    <strong>Call Stack (Стек):</strong> Являє собою потік виконання коду JavaScript. Event Loop виконує одне просте завдання – здійснює контроль стеку викликів та черги зворотних викликів. Якщо стек викликів порожній, цикл подій візьме першу подію з черги і відправить її в стек викликів, який запустить. При виклику нового способу зверху стека виділяється окремий блок пам'яті. Стек викликів відповідає за відстеження всіх операцій у черзі, які мають бути здійснені. При завершенні черги вона витягується зі стека.
                </li>
                <li>
                    <strong>Heap (Купа):</strong> Це область пам'яті, де розміщуються об'єкти. Куча не має строгого порядку і дозволяє динамічно виділяти і звільняти пам'ять для об'єктів.
                </li>
                <li>
                    <strong>Queue (Черга):</strong> Черга подій відповідає за надсилання нових функцій на трек обробки. Він слідує структурі даних черги, щоб підтримувати правильну послідовність, в якій всі операції повинні надійти на виконання. Якщо простіше, то це і є список завдань, які повинні вирушити на обробку і чекають на свій час.
                </li>
                <li>
                    <strong>Web API:</strong> Не є частиною JavaScript, вони створені на основі JS. Щоразу, коли викликається асинхронна функція, вона відправляється до API браузера. На основі команди, отриманої зі стеку викликів, API запускає власну однопотокову операцію.
                </li>
            </ul>

            <h2>3. Як події додаються до черги</h2>
            <p>
                Всі події в браузерах постійно додаються до черги, якщо вони відбулися або мають свій обробник. <code>setTimeout</code> може додавати подію в чергу не відразу, а після зазначеного часу. Якщо на даний момент у черзі немає подій, воно надійде в обробку відразу.
            </p>
            <p>
                Коли операція <code>setTimeout</code> обробляється в стеку, вона надсилається відповідному API, який чекає до вказаного часу, щоб відправити цю операцію в обробку. Середовище керує кількома паралельними циклами подій, наприклад для обробки викликів API. Веб-воркери також працюють у своєму циклі подій.
            </p>
            <p>
                Операція вирушає у чергу подій. Отже, у нас є циклічна схема для виконання асинхронних операцій на JavaScript. Сама мова є однопоточною, але API-інтерфейси браузера діють як окремі потоки.
            </p>
            <p>
                Цикл подій постійно перевіряє, чи стек викликів порожній. Якщо він порожній, нові функції додаються із черги подій. Якщо це не так, то поточний виклик функції.
            </p>
            <p>
                Давайте подивимося, як відкласти виконання функції доти, доки стек не очиститься.
            </p>
            <p>
                Приклад використання <code>setTimeout(() => {}, 0)</code> полягає в тому, щоб викликати функцію, але виконати її після виконання решти всіх функцій у коді. Приклад:
            </p>
            <pre>
        <code>
          {`
const bar = () => console.log('bar')
const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}

foo()
          `}
        </code>
      </pre>
            <p>
                При запуску коду спочатку викликається <code>foo()</code>. Усередині <code>foo()</code> ми спочатку викликаємо <code>setTimeout</code>, передаючи <code>bar</code> як аргумент, і інструктуємо його таким чином, щоб він запускався якнайшвидше, передаючи <code>0</code> як таймер. Потім ми викликаємо <code>baz()</code>.
            </p>
            <p>
                Порядок функцій у програмі:
            </p>
            <pre>
        <code>
          {`
foo
baz
bar
          `}
        </code>
      </pre>

            <h2>4. Черга подій</h2>
            <p>
                Під час виклику <code>setTimeout()</code>, браузер або Node.js запускають таймер. Після закінчення таймера (у нашому випадку ми встановили <code>0</code> як тайм-аут), функція зворотного виклику поміститься в чергу подій.
            </p>
            <p>
                Черга подій також є місцем, де ініційовані користувачем події (кліки мишею, введення з клавіатури та ін) розміщуються в чергу до того, як код зможе на них відреагувати.
            </p>
            <p>
                Event Loop надає пріоритет стеку викликів. Спочатку він обробляє все, що знаходить у стеку викликів, а коли там нічого не лишається, переходить до обробки черги подій.
            </p>
            <p>
                <code>setTimeout</code> з аргументом <code>0</code> не гарантує, що обробка буде виконана миттєво. Все залежить від того, скільки завдань зараз перебуває в черзі. У прикладі нижче "message" буде виведено швидше обробника <code>callback_1</code>. Пояснюється це тим, що затримка є мінімальним часом, необхідним середовищі на виконання запиту.
            </p>
            <pre>
        <code>
          {`
(function () {
  console.log('start');
  setTimeout(function callback() {
    console.log('message from callback');
  });

  console.log('message');

  setTimeout(function callback_1() {
    console.log('message from callback_1');
  }, 0);

  console.log('finish');
})();

// "start"
// "message"
// "finish"
// "message from callback"
// "message from callback_1"
          `}
        </code>
      </pre>

            <h2>5. Заключення</h2>
            <p>
                Веб-сайти стали більш інтерактивними і динамічними, необхідність виконання інтенсивних операцій стала більш актуальною (наприклад, виконання зовнішніх мережевих запитів для отримання даних API). Щоб обробляти ці операції, потрібне використання методів асинхронного програмування. Вбудований механізм Event Loop допомагає JavaScript обробляти асинхронний код.
            </p>
        </div>
    );
};

export default EventLoopPage;