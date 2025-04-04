import React from 'react';
import { Box, Typography } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';
import Code from '../../../../../features/Code/Code.jsx';

const SecondEventHandlingPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Приклад роботи з об'єктом події та типи подій</BookHeader>

            <SubHeader>Приклад роботи з об'єктом події</SubHeader>
            <Paragraph>
                Розглянемо приклад роботи з об'єктом Події при кліку на кнопку:
            </Paragraph>

            <CodeBlock>
                {`
<!DOCTYPE html>
<html lang="uk">
<head>
  <title>Приклад Об'єкта Події</title>
</head>
<body>
  <button id="myButton">Клікни мене</button>

  <script>
    const button = document.querySelector('#myButton');

    button.addEventListener('click', function(event) {
      console.log('Тип події: ' + event.type);
      console.log('Ціль події: ' + event.target);
      console.log('Фаза події: ' + event.eventPhase);

      // Зупинити спливання події
      event.stopPropagation();
    });
  </script>
</body>
</html>
                `}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі ми створили кнопку і прикріпили до неї обробник події на клік. При кліку на кнопку в консолі будуть виведені різні властивості об'єкта Події, такі як тип події, ціль події та фаза події. Ми також використали метод <Code>stopPropagation()</Code>, щоб зупинити подальше поширення події.
            </Paragraph>

            <SubHeader>Типи подій</SubHeader>
            <Paragraph>
                DOM підтримує багато різних типів подій, таких як клік, наведення, зміна, введення тексту та багато інших. Кожен тип події відповідає певній події взаємодії користувача зі сторінкою. Наприклад, подія <Code>click</Code> спрацьовує при кліку на елемент:
            </Paragraph>

            <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                1. Клік (click)
            </Typography>
            <Paragraph>
                Подія <Code>click</Code> спрацьовує, коли користувач клікає на елементі сторінки. Це може бути корисно для обробки подій, пов'язаних з кліками кнопок, посилань тощо. Приклад:
            </Paragraph>
            <CodeBlock>
                {`
const button = document.querySelector('#myButton');
button.addEventListener('click', function() {
  alert('Кнопку натиснули!');
});
                `}
            </CodeBlock>

            <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                2. Клавіша натиснута (keydown)
            </Typography>
            <Paragraph>
                Подія <Code>keydown</Code> спрацьовує, коли користувач натискає клавішу на клавіатурі. Вона може використовуватися для обробки натискання певних клавіш. Приклад:
            </Paragraph>
            <CodeBlock>
                {`
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    console.log('Enter була натиснута');
  }
});
                `}
            </CodeBlock>

            <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                3. Зміна розміру вікна (resize)
            </Typography>
            <Paragraph>
                Подія <Code>resize</Code> спрацьовує, коли розмір вікна браузера змінюється. Це може бути корисно для адаптивного дизайну та підлаштування інтерфейсу до різних розмірів вікон. Приклад:
            </Paragraph>
            <CodeBlock>
                {`
window.addEventListener('resize', function() {
  console.log('Розмір вікна було змінено');
});
                `}
            </CodeBlock>

            <Typography variant="h4" component="h3" sx={{ fontWeight: 600, mt: 3, mb: 2 }}>
                4. Втрата фокусу (blur) і отримання фокусу (focus)
            </Typography>
            <Paragraph>
                Події <Code>blur</Code> і <Code>focus</Code> спрацьовують, коли елемент втрачає або отримує фокус. Це може бути корисно при валідації введених даних у формах. Приклад:
            </Paragraph>
            <CodeBlock>
                {`
const inputElement = document.querySelector('#myInput');
inputElement.addEventListener('blur', function() {
  console.log('Елемент втратив фокус');
});

inputElement.addEventListener('focus', function() {
  console.log('Елемент отримав фокус');
});
                `}
            </CodeBlock>
        </Box>
    );
};

export default SecondEventHandlingPage;