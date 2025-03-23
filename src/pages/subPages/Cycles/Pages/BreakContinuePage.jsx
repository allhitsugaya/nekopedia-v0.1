import React from 'react';

const BreakContinuePage = () => {
    return (
        <div className="page-container">
            <h1>Використання break та continue у циклах</h1>
            <p>
                Цикли є однією з найбільш важливих структур в програмуванні, і вони дозволяють виконувати певні операції декілька разів. Проте іноді виникають ситуації, коли потрібно вийти із циклу раніше, ніж всі ітерації будуть завершені, або ж пропустити певну ітерацію. Для цього в JavaScript існують ключові слова <code>break</code> і <code>continue</code>. Ми розглянемо їхнє використання в різних типах циклів: <code>while</code>, <code>do...while</code> і <code>for</code>.
            </p>

            <h2>Використання break у циклах</h2>
            <p>
                Ключове слово <code>break</code> використовується для виходу із циклу раніше, ніж всі ітерації будуть завершені. Воно особливо корисне, коли виникає необхідність негайно зупинити цикл при заданій умові. Нижче наведено приклад використання <code>break</code> у циклі <code>while</code>:
            </p>
            <pre>
        <code>
          {`
let i = 0;
while (i < 5) {
    console.log(i);
    if (i === 3) {
        break; // Вийти з циклу, якщо i дорівнює 3
    }
    i++;
}
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі цикл <code>while</code> виведе числа від 0 до 3, і коли <code>i</code> буде дорівнювати 3, <code>break</code> припинить подальшу ітерацію циклу.
            </p>
            <p>
                Ключове слово <code>break</code> також можна використовувати в циклах <code>do...while</code> та <code>for</code>, і його використання вони мають схожий принцип.
            </p>

            <h2>Використання continue у циклах</h2>
            <p>
                Ключове слово <code>continue</code> використовується для переходу до наступної ітерації циклу без виконання після нього решти коду в поточній ітерації. Це корисно, коли потрібно пропустити певні ітерації на підставі певної умови. Ось приклад використання <code>continue</code> у циклі <code>for</code>:
            </p>
            <pre>
        <code>
          {`
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Пропустити ітерацію, коли i дорівнює 2
    }
    console.log(i);
}
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі цикл <code>for</code> виведе числа від 0 до 4, але пропустить число 2 через використання <code>continue</code>.
            </p>

            <h2>Використання break та continue в реальних сценаріях</h2>
            <p>
                Існує безліч сценаріїв, де <code>break</code> та <code>continue</code> є дуже корисними. Один із них - пошук певного значення у масиві та виходження із циклу, якщо воно знайдено. Ось приклад:
            </p>
            <pre>
        <code>
          {`
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 6;
let found = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === target) {
        found = true;
        break; // Завершити цикл, коли знайдено значення
    }
}

if (found) {
    console.log(\`Знайдено \${target} у масиві.\`);
} else {
    console.log(\`\${target} не знайдено у масиві.\`);
}
          `}
        </code>
      </pre>
            <p>
                В цьому прикладі ми шукаємо значення <code>target</code> у масиві <code>numbers</code>. Якщо воно знайдено, ми використовуємо <code>break</code>, щоб завершити цикл раніше.
            </p>
            <p>
                Ще однією типовою ситуацією є обробка непарних чи парних чисел у масиві. За допомогою <code>continue</code> ми можемо пропустити числа, які не відповідають нашій умові:
            </p>
            <pre>
        <code>
          {`
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        continue; // Пропустити парні числа
    }
    console.log(numbers[i]);
}
          `}
        </code>
      </pre>
            <p>
                У цьому випадку ми пропускаємо парні числа і виводимо лише непарні.
            </p>

            <div className='conclusion'>
                <h2>Висновок</h2>
                <p>
                    Ключові слова <code>break</code> та <code>continue</code> дозволяють керувати виконанням циклів в
                    JavaScript. Вони роблять код більш гнучким і дозволяють виходити з циклів або пропускати окремі
                    ітерації на основі певних умов. Розуміння їхнього використання робить вас більш ефективним
                    розробником, оскільки ви можете писати більш читабельний та продуктивний код.
                </p>
            </div>
        </div>
    );
};

export default BreakContinuePage;