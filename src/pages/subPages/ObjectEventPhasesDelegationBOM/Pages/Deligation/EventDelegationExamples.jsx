import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Conclusion from "../../../../../features/Conclusion/Conclusion.jsx";

const EventDelegationExamples = () => {
    return (
        <Container>
            <BookHeader variant="h2" component="h2">Приклади Делегування Подій</BookHeader>

                <SubHeader variant="h2" component="h2">Обробка кліків на списку елементів</SubHeader>
                <Paragraph>
                    Розглянемо приклад обробки кліків на списку елементів за допомогою делегування подій. Уявімо, що у нас є ненумерований список <Code>ul</Code>, і ми хочемо реагувати на кліки на кожному пункті списку. Ми можемо встановити обробник подій на батьківському елементі <Code>ul</Code> та визначити, який саме пункт був клікнутий.
                </Paragraph>

                <CodeBlock>
                    {`<ul id="myList">
    <li>Пункт 1</li>
    <li>Пункт 2</li>
    <li>Пункт 3</li>
</ul>`}
                </CodeBlock>

                <CodeBlock>
                    {`const myList = document.getElementById("myList");

myList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        // Отримати текст клікнутого пункту
        const clickedItemText = event.target.textContent;
        console.log("Клікнуто на пункті: " + clickedItemText);
    }
});`}
                </CodeBlock>

                <Paragraph>
                    У цьому прикладі ми використовуємо делегування подій, щоб відслідковувати кліки на кожному пункті списку, хоча обробник подій призначено батьківському елементу <Code>ul</Code>.
                </Paragraph>



                <SubHeader variant="h2" component="h2">Валідація форми за допомогою делегування</SubHeader>
                <Paragraph>
                    Інший приклад використання делегування подій - це валідація форми перед її відправленням. Ми можемо встановити обробник подій на формі та перевірити валідність даних, коли користувач намагається відправити форму.
                </Paragraph>

                <CodeBlock>
                    {`<form id="myForm">
    <input type="text" name="username" placeholder="Ім'я користувача">
    <input type="email" name="email" placeholder="Email">
    <button type="submit">Відправити</button>
</form>`}
                </CodeBlock>

                <CodeBlock>
                    {`const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

function validateForm() {
    // Ваш код валідації форми
    return true; // Повернути true, якщо дані коректні
}`}
                </CodeBlock>

                <Paragraph>
                    У цьому прикладі ми використовуємо делегування подій, щоб відслідковувати подію <Code>submit</Code> на формі і викликати функцію валідації. Якщо дані не відповідають вимогам, ми зупиняємо подію і запобігаємо відправленню форми.
                </Paragraph>



                <Conclusion>Висновок</Conclusion>
                <Paragraph>
                    Делегування подій - це потужний підхід до роботи з подіями в JavaScript, який дозволяє зменшити
                    кількість обробників подій на сторінці та спрощує роботу з багатьма елементами. Використовуючи
                    делегування, ви можете покращити продуктивність та підтримуваність свого коду, особливо при
                    взаємодії з багатою кількістю динамічно створених елементів.
                </Paragraph>

        </Container>
    );
};

export default EventDelegationExamples;