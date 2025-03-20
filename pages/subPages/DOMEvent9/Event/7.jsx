import React from 'react';

const EventObjectExample = () => {
    return (
        <div>
            <h1>Об'єкт Події</h1>
            <p>
                Об'єкт Події (Event Object) - це об'єкт, який містить інформацію про подію, яка сталася, і може бути використаний за бажанням розробника. Кожен обробник в JavaScript отримує такий об'єкт.
            </p>

            <h2>Властивості Об'єкта Події</h2>
            <h3>1. type</h3>
            <p>
                Властивість <code>type</code> містить строку з ім'ям події, таке як "click" для події кліка мишею або "keydown" для події натискання клавіші.
            </p>
            <pre>
        <code>
          {`
element.addEventListener('click', function(event) {
  console.log(event.type); // Виведе "click"
});
          `}
        </code>
      </pre>

            <h3>2. target</h3>
            <p>
                Властивість <code>target</code> містить елемент, на якому сталася подія. Ця властивість корисна для визначення елемента, який спричинив подію.
            </p>
            <pre>
        <code>
          {`
element.addEventListener('click', function(event) {
  console.log(event.target); // Виведе посилання на елемент, на якому клікнули
});
          `}
        </code>
      </pre>

            <h3>3. currentTarget</h3>
            <p>
                Властивість <code>currentTarget</code> містить елемент, на якому встановлено обробник події. Вона може відрізнятися від <code>target</code>, якщо обробник події встановлений на батьківському елементі.
            </p>
            <pre>
        <code>
          {`
parentElement.addEventListener('click', function(event) {
  console.log(event.currentTarget); // Виведе посилання на батьківський елемент
  console.log(event.target); // Виведе посилання на елемент, на якому клікнули
});
          `}
        </code>
      </pre>

            <h3>4. eventPhase</h3>
            <p>
                Властивість <code>eventPhase</code> містить значення, яке показує фазу обробки події. Це може бути <code>CAPTURING_PHASE</code>, <code>AT_TARGET</code> або <code>BUBBLING_PHASE</code>.
            </p>
            <pre>
        <code>
          {`
element.addEventListener('click', function(event) {
  console.log(event.eventPhase); // Виведе значення 2, що відповідає фазі BUBBLING_PHASE
}, true); // Останній аргумент true вказує на використання фази захоплення (CAPTURING_PHASE)
          `}
        </code>
      </pre>

            <h3>5. preventDefault()</h3>
            <p>
                Метод <code>preventDefault()</code> дозволяє відмінити стандартну дію, яка відбувається при спрацюванні події. Наприклад, використовується для відміни переходу за посиланням при кліку на нього.
            </p>
            <pre>
        <code>
          {`
anchorElement.addEventListener('click', function(event) {
  event.preventDefault(); // Відміняє стандартну дію (перехід за посиланням)
});
          `}
        </code>
      </pre>

            <h3>6. stopPropagation()</h3>
            <p>
                Метод <code>stopPropagation()</code> дозволяє зупинити подальше поширення події вгору або вниз по DOM-дереву. Це корисно для заборони спливання подій або зупинки захоплення.
            </p>
            <pre>
        <code>
          {`
element.addEventListener('click', function(event) {
  event.stopPropagation(); // Зупиняє подальше поширення події
});
          `}
        </code>
      </pre>
        </div>
    );
}

export default EventObjectExample;
