import React from 'react';
import { Box, Typography } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import Code from '../../../../../features/Code/Code.jsx';

const EventObjectExample = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Об'єкт Події</BookHeader>

            <Paragraph>
                Об'єкт Події (Event Object) - це об'єкт, який містить інформацію про подію, яка сталася, і може бути використаний за бажанням розробника. Кожен обробник в JavaScript отримує такий об'єкт.
            </Paragraph>

            <SubHeader>Властивості Об'єкта Події</SubHeader>

            <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                1. type
            </Typography>
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

            <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                2. target
            </Typography>
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

            <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                3. currentTarget
            </Typography>
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

            <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                4. eventPhase
            </Typography>
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

            <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                5. preventDefault()
            </Typography>
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

            <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                6. stopPropagation()
            </Typography>
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
        </Box>
    );
};

export default EventObjectExample;