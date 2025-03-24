import React from 'react';
import { Box, Typography } from "@mui/material";
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import Code from '../../../../../features/Code/Code.jsx';

const EventDelegationPage = () => {
    return (
        <Box>
            <Typography variant="h2" component="h2">Делегування подій (Event Delegation)</Typography>

            <Box component="section">
                <Typography variant="h2" component="h2">Що таке делегування подій?</Typography>
                <Paragraph>
                    Делегування подій - це підхід до обробки подій в JavaScript, при якому обробники подій призначаються батьківському елементу для обробки подій, спровокованих дочірніми елементами. Іншими словами, замість того, щоб призначати обробники подій кожному окремому елементу, ми встановлюємо один обробник на батьківському елементі і використовуємо його для визначення, який конкретний дочірній елемент спровокував подію.
                </Paragraph>
            </Box>

            <Box component="section">
                <Typography variant="h2" component="h2">В яких випадках варто використовувати делегування?</Typography>
                <Paragraph>
                    Делегування подій варто використовувати в таких випадках:
                </Paragraph>
                <ul>
                    <li>
                        <Paragraph><Code>Багато схожих елементів:</Code> Якщо на сторінці є багато елементів з однаковою функціональністю (наприклад, список пунктів меню), ви можете уникнути повторення коду, присвоюючи обробник подій батьківському елементу.</Paragraph>
                    </li>
                    <li>
                        <Paragraph><Code>Динамічно створені елементи:</Code> Якщо елементи створюються динамічно (наприклад, через JavaScript), то делегування подій дає можливість автоматично призначати обробники новим елементам, які з'являються на сторінці.</Paragraph>
                    </li>
                </ul>
            </Box>

            <Box component="section">
                <Typography variant="h2" component="h2">Переваги делегування подій</Typography>
                <Typography variant="h3" component="h3">Оптимізація роботи з багатьма елементами</Typography>
                <Paragraph>
                    Однією з головних переваг делегування подій є зменшення кількості обробників подій на сторінці, що полегшує обслуговування та підтримку коду. Замість того, щоб призначати обробник кожному елементу окремо, ви можете використовувати один обробник на батьківському елементі.
                </Paragraph>

                <CodeBlock>
                    {`// Приклад без делегування (цикл)
const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        // Обробник події для кожної окремої кнопки
    });
});

// Приклад з делегуванням
const container = document.getElementById("buttonContainer");

container.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        // Обробник події на батьківському контейнері, для усіх кнопок одразу
    }
});`}
                </CodeBlock>

                <Typography variant="h3" component="h3">Можливість відслідковувати динамічно створені елементи</Typography>
                <Paragraph>
                    Якщо елементи створюються або змінюються динамічно під час виконання вашого веб-додатку, делегування подій стає важливим інструментом. Ви можете призначити обробник подій батьківському елементу під час завантаження сторінки, і цей обробник буде автоматично відслідковувати всі нові дочірні елементи, які з'являються на сторінці пізніше.
                </Paragraph>

                <CodeBlock>
                    {`// Приклад динамічно створених елементів з делегуванням
const container = document.getElementById("dynamicContainer");

// Додавання нового кнопки з обробником подій
const newButton = document.createElement("button");
newButton.textContent = "Нова кнопка";
container.appendChild(newButton);

container.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
        // Обробник події для всіх кнопок у контейнері
    }
});`}
                </CodeBlock>
            </Box>
        </Box>
    );
};

export default EventDelegationPage;