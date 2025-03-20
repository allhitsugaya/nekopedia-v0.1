import React from 'react';

const DOMElementsManipulation = () => {
    return (
        <div>
            <h1>Робота з DOM-елементами</h1>
            <p>
                Тут ви дізнаєтеся, як ефективно вибирати DOM-елементи за їх ідентифікаторами, класами, тегами або за допомогою селекторів. Ми також розглянемо, що таке HTMLCollection та як ефективно працювати з ним.
            </p>

            <p>
                Цей розділ допоможе вам зрозуміти, як змінювати властивості та атрибути DOM-елементів, щоб створювати динамічні веб-сторінки. Ви дізнаєтеся, як додавати, видаляти та модифікувати DOM-елементи за допомогою JavaScript.
            </p>

            <h2>Вибір DOM-елементів</h2>
            <p>
                Робота з DOM-елементами є важливою частиною розвитку веб-сторінок, оскільки це дозволяє нам додавати функціональність та змінювати зовнішній вигляд сторінок. Розглянемо основні методи вибору DOM-елементів.
            </p>

            <h3>Вибір за ідентифікатором</h3>
            <p>
                Щоб вибрати елемент за його ідентифікатором, використовуємо метод <code>getElementById</code>:
            </p>
            <pre>
        <code>
          {`
const element = document.getElementById("myElementId");
          `}
        </code>
      </pre>

            <h3>Вибір за класом</h3>
            <p>
                Для вибору елементів за класом використовуємо метод <code>getElementsByClassName</code>:
            </p>
            <pre>
        <code>
          {`
const elements = document.getElementsByClassName("myClassName");
          `}
        </code>
      </pre>

            <h3>Вибір за тегом</h3>
            <p>
                Для вибору всіх елементів певного тегу використовуємо метод <code>getElementsByTagName</code>:
            </p>
            <pre>
        <code>
          {`
const elements = document.getElementsByTagName("div");
          `}
        </code>
      </pre>

            <h3>Вибір за селектором</h3>
            <p>
                Для вибору елементів за CSS-селекторами в JavaScript можна використовувати <code>querySelector</code> та <code>querySelectorAll</code>. <code>querySelector</code> повертає перший елемент, що відповідає заданому CSS-селектору, тоді як <code>querySelectorAll</code> повертає NodeList, який містить усі елементи, що відповідають цьому селектору.
            </p>
            <pre>
        <code>
          {`
const element = document.querySelector(".myClass");
const elementById = document.querySelector("#myElementId");
          `}
        </code>
      </pre>

            <p>Або <code>querySelectorAll</code>, щоб отримати всі збіги:</p>
            <pre>
        <code>
          {`
const elements = document.querySelectorAll(".myClass");
          `}
        </code>
      </pre>

            <h2>Робота з HTMLCollection</h2>
            <p>
                <code>HTMLCollection</code> - це тип об'єкта в JavaScript, який представляє собою колекцію елементів, що належать до одного типу на веб-сторінці. В основному, <code>HTMLCollection</code> використовується для представлення колекції дочірніх елементів певного батьківського елемента. Важливо відзначити, що <code>HTMLCollection</code> є живим об'єктом, тобто він автоматично оновлюється, коли сторінка змінюється.
            </p>

            <pre>
        <code>
          {`
const paragraphs = document.getElementsByTagName("p");
const paragraphCount = paragraphs.length;
const firstParagraph = paragraphs[0];
firstParagraph.textContent = "Це новий текст для першого абзацу";
firstParagraph.classList.add("highlight");
          `}
        </code>
      </pre>
        </div>
    );
}

export default DOMElementsManipulation;
