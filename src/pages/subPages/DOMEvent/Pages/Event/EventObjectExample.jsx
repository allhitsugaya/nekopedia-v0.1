import React from 'react';
import {Container} from "@mui/material";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";

const EventObjectExample = () => {
    return (
        <Container>
            <BookHeader>Об'єкт Події</BookHeader>
            <Paragraph>
                Об'єкт Події (Event Object) - це об'єкт, який містить інформацію про подію, яка сталася, і може бути використаний за бажанням розробника. Кожен обробник в JavaScript отримує такий об'єкт.
            </Paragraph>

            <SubHeader>Властивості Об'єкта Події</SubHeader>
            <Chapter>1. type</Chapter>
            <Paragraph>
                Властивість <Code>type</Code> містить строку з ім'ям події, таке як "click" для події кліка мишею або "keydown" для події натискання клавіші.
            </Paragraph>
            <CodeBlock>
          {`
element.addEventListener('click', function(event) {
  console.log(event.type); // Виведе "click"
});
          `}
            </CodeBlock>

            <Chapter>2. target</Chapter>
            <Paragraph>
                Властивість <Code>target</Code> містить елемент, на якому сталася подія. Ця властивість корисна для визначення елемента, який спричинив подію.
            </Paragraph>
            <CodeBlock>
          {`
element.addEventListener('click', function(event) {
  console.log(event.target); // Виведе посилання на елемент, на якому клікнули
});
          `}
            </CodeBlock>

            <Chapter>3. currentTarget</Chapter>
            <Paragraph>
                Властивість <Code>currentTarget</Code> містить елемент, на якому встановлено обробник події. Вона може відрізнятися від <Code>target</Code>, якщо обробник події встановлений на батьківському елементі.
            </Paragraph>
            <CodeBlock>
          {`
parentElement.addEventListener('click', function(event) {
  console.log(event.currentTarget); // Виведе посилання на батьківський елемент
  console.log(event.target); // Виведе посилання на елемент, на якому клікнули
});
          `}
            </CodeBlock>

            <Chapter>4. eventPhase</Chapter>
            <Paragraph>
                Властивість <Code>eventPhase</Code> містить значення, яке показує фазу обробки події. Це може бути <Code>CAPTURING_PHASE</Code>, <Code>AT_TARGET</Code> або <Code>BUBBLING_PHASE</Code>.
            </Paragraph>
            <CodeBlock>
          {`
element.addEventListener('click', function(event) {
  console.log(event.eventPhase); // Виведе значення 2, що відповідає фазі BUBBLING_PHASE
}, true); // Останній аргумент true вказує на використання фази захоплення (CAPTURING_PHASE)
          `}
            </CodeBlock>

            <Chapter>5. preventDefault()</Chapter>
            <Paragraph>
                Метод <Code>preventDefault()</Code> дозволяє відмінити стандартну дію, яка відбувається при спрацюванні події. Наприклад, використовується для відміни переходу за посиланням при кліку на нього.
            </Paragraph>
            <CodeBlock>
          {`
anchorElement.addEventListener('click', function(event) {
  event.preventDefault(); // Відміняє стандартну дію (перехід за посиланням)
});
          `}
            </CodeBlock>

            <Chapter>6. stopPropagation()</Chapter>
            <Paragraph>
                Метод <Code>stopPropagation()</Code> дозволяє зупинити подальше поширення події вгору або вниз по DOM-дереву. Це корисно для заборони спливання подій або зупинки захоплення.
            </Paragraph>
            <CodeBlock>
          {`
element.addEventListener('click', function(event) {
  event.stopPropagation(); // Зупиняє подальше поширення події
});
          `}
            </CodeBlock>
        </Container>
    );
}

export default EventObjectExample;
