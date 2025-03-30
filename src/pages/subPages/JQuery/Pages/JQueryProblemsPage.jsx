import React from 'react';
import {Box, Container} from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../features/Chapter/Chapter.jsx";

const JQueryProblemsPage = () => {
    return (
        <Container  >
            <SubHeader variant="h6" component="h6">Які проблеми вирішує jQuery</SubHeader>

            <Paragraph>
                jQuery була створена для вирішення низки проблем, з якими стикалися веб-розробники на початку 2000-х років. На той час робота з JavaScript та DOM була досить складною через відсутність стандартизації та різні реалізації браузерів. Ось основні проблеми, які jQuery успішно вирішує:
            </Paragraph>

            <Box component="section">
                <Chapter variant="h6" component="h6">1. Різні реалізації DOM у браузерах</Chapter>
                <Paragraph>
                    У ранні роки розвитку вебу кожен браузер мав свою власну реалізацію DOM (Document Object Model), що ускладнювало написання кросбраузерного коду. Наприклад, методи для вибору елементів чи обробки подій могли працювати по-різному в Internet Explorer, Firefox чи Chrome. jQuery надала єдиний інтерфейс для роботи з DOM, який працював однаково добре у всіх популярних браузерах. Це дозволило розробникам писати код, який не потребував численних перевірок на сумісність.
                </Paragraph>
            </Box>

            <Box component="section">
                <Chapter variant="h6" component="h6">2. Складний вибір елементів та обробка подій</Chapter>
                <Paragraph>
                    У нативному JavaScript вибір елементів на сторінці та їх обробка могли бути досить громіздкими. jQuery спростила цей процес, запровадивши CSS-подібний синтаксис для вибору елементів (наприклад, <Code>$(".class")</Code> або <Code>$("#id")</Code>). Крім того, вона надала зручні методи для обробки подій, таких як кліки, наведення курсора чи введення тексту, що значно скорочувало кількість коду.
                </Paragraph>
            </Box>

            <Box component="section">
                <Chapter variant="h6" component="h6">3. Анімація та зміна стилів</Chapter>
                <Paragraph>
                    Робота з анімаціями та зміною стилів в DOM завжди була складною задачею, яка вимагала багато коду та знання специфіки браузерів. jQuery надала простий та інтуїтивно зрозумілий інтерфейс для створення анімацій (наприклад, <Code>fadeIn()</Code>, <Code>slideUp()</Code>) та зміни стилів (наприклад, <Code>css()</Code>). Це дозволило розробникам швидко додавати динамічні ефекти на сторінки без необхідності глибокого занурення в CSS чи JavaScript.
                </Paragraph>
            </Box>

            <Box component="section">
                <Chapter variant="h6" component="h6">4. Робота з AJAX-запитами</Chapter>
                <Paragraph>
                    AJAX-запити, які використовуються для отримання та відправлення даних на сервер без перезавантаження сторінки, були досить складними у реалізації через різні підходи браузерів. jQuery спростила цей процес, надавши зручні методи, такі як <Code>$.ajax()</Code>, <Code>$.get()</Code> та <Code>$.post()</Code>. Це дозволило розробникам легко працювати з асинхронними запитами, не турбуючись про специфіку браузерів.
                </Paragraph>
            </Box>

            <Box component="section">
                <Chapter variant="h6" component="h6">5. Кросбраузерна обробка подій</Chapter>
                <Paragraph>
                    Обробка подій, таких як кліки чи наведення курсора, могла викликати проблеми через різні реалізації в браузерах. jQuery надала єдиний інтерфейс для роботи з подіями, який працював однаково добре у всіх браузерах. Наприклад, метод <Code>on()</Code> дозволяв легко додавати обробники подій до елементів, не турбуючись про сумісність.
                </Paragraph>
            </Box>

            <Box component="section">
                <SubHeader variant="h6" component="h6">Чому jQuery залишається актуальною?</SubHeader>
                <Paragraph>
                    Незважаючи на те, що сучасні стандарти JavaScript (ES6+) та нові фреймворки, такі як React чи Vue.js, вирішили багато з цих проблем, jQuery залишається корисним інструментом для підтримки старих проектів або швидкого вирішення простих завдань. Її мінімалістичний підхід та велика спільнота користувачів роблять її ідеальним вибором для тих, хто шукає простий та ефективний спосіб роботи з веб-сторінками.
                </Paragraph>
            </Box>
        </Container>
    );
};

export default JQueryProblemsPage;