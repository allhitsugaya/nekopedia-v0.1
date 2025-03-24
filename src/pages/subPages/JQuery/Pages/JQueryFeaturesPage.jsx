import React from 'react';
import { Box, Typography } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const JQueryFeaturesPage = () => {
    return (
        <Box>
            <Typography variant="h6" component="h6">Базові можливості jQuery</Typography>

            <Paragraph>
                jQuery надає розробникам потужний та зручний інструментарій для роботи з DOM, обробки подій, створення анімацій та виконання AJAX-запитів. Основна перевага jQuery полягає в її простоті та лаконічності, що дозволяє швидко вирішувати складні задачі. Ось основні можливості jQuery:
            </Paragraph>

            <Box component="section">
                <Typography variant="h6" component="h6">1. Вибір елементів за допомогою CSS-подібного синтаксису</Typography>
                <Paragraph>
                    Однією з ключових можливостей jQuery є легкий та зручний вибір елементів за допомогою CSS-подібного синтаксису. Це дозволяє швидко знаходити елементи на сторінці та працювати з ними.
                </Paragraph>
                <CodeBlock>
                    {`// Вибір всіх елементів <div> на сторінці
$('div');

// Вибір елементу з ідентифікатором 'myElement'
$('#myElement');

// Вибір всіх елементів з класом 'myClass'
$('.myClass');

// Вибір всіх елементів <p> всередині елементу з ідентифікатором 'container'
$('#container p');

// Вибір першого елементу <li> у списку
$('li:first');`}
                </CodeBlock>
            </Box>

            <Box component="section">
                <Typography variant="h6" component="h6">2. Зміна вмісту та стилів елементів</Typography>
                <Paragraph>
                    jQuery дозволяє легко змінювати вміст, атрибути та стилі елементів. Наприклад:
                </Paragraph>
                <CodeBlock>
                    {`// Зміна тексту елементу з ідентифікатором 'myText'
$('#myText').text('Новий текст');

// Зміна HTML-вмісту елементу
$('#myElement').html('<strong>Новий HTML-вміст</strong>');

// Зміна значення атрибуту 'src' для зображення
$('#myImage').attr('src', 'new-image.jpg');

// Зміна стилю елементу
$('#myElement').css('color', 'red');

// Додавання класу до елементу
$('#myElement').addClass('active');

// Видалення класу з елементу
$('#myElement').removeClass('inactive');`}
                </CodeBlock>
            </Box>

            <Box component="section">
                <Typography variant="h6" component="h6">3. Обробка подій</Typography>
                <Paragraph>
                    jQuery спрощує обробку подій, таких як кліки, наведення курсора, введення тексту тощо. Наприклад:
                </Paragraph>
                <CodeBlock>
                    {`// Обробка кліку на кнопці з ідентифікатором 'myButton'
$('#myButton').click(function() {
  alert('Клікнуто!');
});

// Обробка наведення курсора на елемент
$('#myElement').hover(
  function() {
    $(this).css('background-color', 'yellow');
  },
  function() {
    $(this).css('background-color', 'white');
  }
);

// Обробка введення тексту в поле вводу
$('#myInput').on('input', function() {
  console.log('Введений текст:', $(this).val());
});`}
                </CodeBlock>
            </Box>

            <Box component="section">
                <Typography variant="h6" component="h6">4. Анімації</Typography>
                <Paragraph>
                    jQuery надає зручні методи для створення анімацій, таких як зміна прозорості, розміру чи положення елементів.
                </Paragraph>
                <CodeBlock>
                    {`// Зміна прозорості елементу протягом 1 секунди
$('#myElement').animate({ opacity: 0.5 }, 1000);

// Зміна ширини та висоти елементу
$('#myElement').animate({ width: '200px', height: '200px' }, 500);

// Переміщення елементу вправо на 100px
$('#myElement').animate({ marginLeft: '+=100px' }, 1000);`}
                </CodeBlock>
            </Box>

            <Box component="section">
                <Typography variant="h6" component="h6">5. Робота з AJAX</Typography>
                <Paragraph>
                    jQuery спрощує роботу з асинхронними запитами (AJAX), дозволяючи легко отримувати та відправляти дані на сервер.
                </Paragraph>
                <CodeBlock>
                    {`// Відправка GET-запиту
$.get('https://api.example.com/data', function(response) {
  console.log('Отримані дані:', response);
});

// Відправка POST-запиту
$.post('https://api.example.com/submit', { name: 'John', age: 30 }, function(response) {
  console.log('Відповідь сервера:', response);
});

// Використання методу $.ajax для більш гнучких запитів
$.ajax({
  url: 'https://api.example.com/data',
  method: 'GET',
  success: function(response) {
    console.log('Дані успішно отримано:', response);
  },
  error: function(error) {
    console.error('Помилка:', error);
  }
});`}
                </CodeBlock>
            </Box>

            <Box component="section">
                <Typography variant="h6" component="h6">6. Фільтрація та пошук елементів</Typography>
                <Paragraph>
                    jQuery дозволяє фільтрувати та шукати елементи всередині інших елементів.
                </Paragraph>
                <CodeBlock>
                    {`// Вибір всіх елементів <li> з класом 'active'
$('li').filter('.active');

// Пошук елементів <span> всередині елементу з ідентифікатором 'myElement'
$('#myElement').find('span');

// Вибір наступного елементу після поточного
$('#myElement').next();

// Вибір попереднього елементу перед поточним
$('#myElement').prev();`}
                </CodeBlock>
            </Box>

            <Box component="section">
                <Typography variant="h6" component="h6">7. Додавання та видалення елементів</Typography>
                <Paragraph>
                    jQuery дозволяє динамічно додавати, видаляти та модифікувати елементи DOM.
                </Paragraph>
                <CodeBlock>
                    {`// Додавання нового елементу в кінець контейнера
$('#container').append('<p>Новий елемент</p>');

// Додавання нового елементу на початок контейнера
$('#container').prepend('<p>Перший елемент</p>');

// Видалення елементу
$('#myElement').remove();

// Очищення вмісту елементу
$('#myElement').empty();`}
                </CodeBlock>
            </Box>

            <Box component="section">
                <Typography variant="h6" component="h6">8. Практичне використання jQuery</Typography>
                <Paragraph>
                    Ось приклад, який демонструє комбінацію основних можливостей jQuery:
                </Paragraph>
                <CodeBlock>
                    {`// Додавання обробника події кліку на кнопку
$('#myButton').click(function() {
  // Зміна тексту елементу
  $('#myText').text('Клік зареєстровано!');

  // Зміна стилю елементу
  $('#myText').css('color', 'green');

  // Виконання анімації
  $('#myText').animate({ fontSize: '24px' }, 500);

  // Відправка AJAX-запиту
  $.get('https://api.example.com/data', function(response) {
    console.log('Дані отримано:', response);
  });
});`}
                </CodeBlock>
            </Box>

            <Box component="section">
                <Typography variant="h6" component="h6">Чому jQuery залишається популярним?</Typography>
                <Paragraph>
                    Незважаючи на появу сучасних фреймворків, jQuery залишається популярним завдяки своїй простоті та широким можливостям. Вона дозволяє швидко вирішувати рутинні задачі, такі як обробка подій, зміна DOM чи робота з AJAX, без необхідності вивчати складні фреймворки. jQuery також підтримує кросбраузерну сумісність, що робить її ідеальним інструментом для підтримки старих проектів.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default JQueryFeaturesPage;