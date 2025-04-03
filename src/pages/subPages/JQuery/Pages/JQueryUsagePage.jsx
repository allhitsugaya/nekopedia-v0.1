import { Box, Typography, useTheme } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const JQueryUsagePage = () => {
    const theme = useTheme();

    return (
        <Box>
            <Typography variant="h3" sx={{ mb: 4 }}>
                Чи треба використовувати jQuery у нових проектах?
            </Typography>

            <Paragraph>
                Питання використання jQuery у нових проектах є предметом активних
                обговорень серед веб-розробників. Хоча jQuery була надзвичайно популярною
                в минулому, сьогодні її використання не завжди є обґрунтованим через
                появу сучасних стандартів JavaScript та нових фреймворків. Ось кілька
                аспектів, які варто врахувати при прийнятті рішення:
            </Paragraph>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                1. Розмір проекту
            </Typography>
            <Paragraph>
                У невеликих проектах використання jQuery може бути зайвим, оскільки вона
                додає додатковий обсяг коду (близько 30 КБ у стислому вигляді). Якщо
                проект не потребує складних маніпуляцій з DOM або AJAX, можна обійтися
                сучасними методами JavaScript, які є легшими та швидшими.
            </Paragraph>
            <Paragraph>
                <Box component="strong">Приклад:</Box>
            </Paragraph>
            <CodeBlock>
                <Code>
                    {`// Замість jQuery для вибору елементів можна використовувати
const elements = document.querySelectorAll('.myClass');

// Замість $.ajax можна використовувати fetch для роботи з асинхронними запитами
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));`}
                </Code>
            </CodeBlock>
            <Paragraph>
                <Box component="strong">Коментар:</Box> У цьому прикладі показано, як
                можна замінити jQuery на сучасні методи JavaScript для вибору елементів
                та роботи з асинхронними запитами.
            </Paragraph>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                2. Сучасні стандарти та API
            </Typography>
            <Paragraph>
                Сучасні браузери підтримують більшість функціональностей, які раніше
                вимагали jQuery. Наприклад:
            </Paragraph>
            <Paragraph>
                <Box component="strong">Вибір елементів:</Box>
            </Paragraph>
            <CodeBlock>
                <Code>
                    {`// Замість $('.myClass') можна використовувати
const elements = document.querySelectorAll('.myClass');`}
                </Code>
            </CodeBlock>
            <Paragraph>
                <Box component="strong">Коментар:</Box> Цей приклад демонструє, як можна
                використовувати сучасні методи JavaScript для вибору елементів.
            </Paragraph>

            <Paragraph>
                <Box component="strong">Обробка подій:</Box>
            </Paragraph>
            <CodeBlock>
                <Code>
                    {`// Замість $('#myButton').click(...) можна використовувати
document.getElementById('myButton').addEventListener('click', () => {
    console.log('Button clicked!');
});`}
                </Code>
            </CodeBlock>
            <Paragraph>
                <Box component="strong">Коментар:</Box> Цей приклад показує, як можна
                обробляти події за допомогою сучасних методів JavaScript.
            </Paragraph>

            <Paragraph>
                <Box component="strong">AJAX-запити:</Box>
            </Paragraph>
            <CodeBlock>
                <Code>
                    {`// Замість $.ajax можна використовувати fetch
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));`}
                </Code>
            </CodeBlock>
            <Paragraph>
                <Box component="strong">Коментар:</Box> Цей приклад демонструє, як можна
                робити асинхронні запити за допомогою `fetch`.
            </Paragraph>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                3. Швидкодія
            </Typography>
            <Paragraph>
                jQuery додає додатковий шар абстракції, що може вплинути на швидкодію,
                особливо у великих проектів. Чистий JavaScript зазвичай працює швидше,
                оскільки не потребує додаткових обчислень, пов'язаних з jQuery.
            </Paragraph>
            <Paragraph>
                <Box component="strong">Приклад:</Box>
            </Paragraph>
            <CodeBlock>
                <Code>
                    {`// Анімації через requestAnimationFrame у чистому JavaScript працюють швидше,
// ніж анімації через $.animate.
function animateElement(element) {
    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        element.style.transform = \`translateX(\${Math.min(progress / 10, 200)}px)\`;
        if (progress < 2000) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
}

animateElement(document.getElementById('myElement'));`}
                </Code>
            </CodeBlock>
            <Paragraph>
                <Box component="strong">Коментар:</Box> Цей приклад показує, як можна
                використовувати `requestAnimationFrame` для анімацій.
            </Paragraph>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                4. Навчання та досвід команди
            </Typography>
            <Paragraph>
                Якщо ваша команда вже має досвід роботи з jQuery і відчуває себе
                комфортно при її використанні, це може бути вагомим аргументом на користь
                jQuery. Однак варто враховувати, що сучасні фреймворки (React, Vue,
                Angular) та чисті JavaScript API стають стандартом у веб-розробці, тому
                навчання новим технологіям може бути корисним у довгостроковій
                перспективі.
            </Paragraph>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                5. Сумісність зі старим кодом
            </Typography>
            <Paragraph>
                Якщо проект пов'язаний зі старим кодом або сторонніми бібліотеками, які
                використовують jQuery, її використання може бути обґрунтованим. Це
                дозволить уникнути проблем із сумісністю та полегшить інтеграцію.
            </Paragraph>
            <Paragraph>
                <Box component="strong">Приклад:</Box>
            </Paragraph>
            <CodeBlock>
                <Code>
                    {`// Якщо ви підключаєте старий плагін, який залежить від jQuery,
// її використання буде необхідним.
import $ from 'jquery';
import 'old-plugin';

$('#myElement').oldPluginMethod();`}
                </Code>
            </CodeBlock>
            <Paragraph>
                <Box component="strong">Коментар:</Box> Цей приклад показує, як можна
                інтегрувати старий плагін, який залежить від jQuery.
            </Paragraph>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                6. Альтернативи jQuery
            </Typography>
            <Paragraph>
                Сьогодні існує багато сучасних альтернатив jQuery, які пропонують більш
                ефективні та сучасні рішення:
            </Paragraph>
            <Box component="ul" sx={{ pl: 4 }}>
                <Box component="li" sx={{ mb: 1 }}>
                    <Box component="strong">React, Vue, Angular:</Box> Для створення
                    складних інтерфейсів.
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                    <Box component="strong">Axios:</Box> Для роботи з AJAX-запитами.
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                    <Box component="strong">Lodash:</Box> Для роботи з даними та функціями.
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                    <Box component="strong">Modern JavaScript (ES6+):</Box> Для роботи з
                    DOM, подіями та асинхронними операціями.
                </Box>
            </Box>

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                7. Коли jQuery може бути корисним?
            </Typography>
            <Paragraph>
                jQuery все ще може бути корисним у таких випадках:
            </Paragraph>
            <Box component="ul" sx={{ pl: 4 }}>
                <Box component="li" sx={{ mb: 1 }}>
                    <Box component="strong">Швидкий прототип:</Box> Для швидкого створення
                    прототипів або невеликих проектів.
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                    <Box component="strong">Підтримка старих браузерів:</Box> Якщо проект
                    повинен підтримувати старі браузери (наприклад, Internet Explorer).
                </Box>
                <Box component="li" sx={{ mb: 1 }}>
                    <Box component="strong">Легкість використання:</Box> Для розробників,
                    які не хочуть вивчати складні фреймворки.
                </Box>
            </Box>

            <Box sx={{ mt: 4 }} className='conclusion'>
                <Typography variant="h6" sx={{ mb: 2 }}>
                    Висновок
                </Typography>
                <Paragraph>
                    Використання jQuery у нових проектах залежить від конкретних вимог та
                    обставин. Якщо проект невеликий, не потребує підтримки старих браузерів
                    і може бути реалізований за допомогою сучасних стандартів JavaScript,
                    краще обійтися без jQuery. Однак для швидкого прототипування, підтримки
                    старих систем або інтеграції зі старим кодом jQuery може бути корисним
                    інструментом.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default JQueryUsagePage;