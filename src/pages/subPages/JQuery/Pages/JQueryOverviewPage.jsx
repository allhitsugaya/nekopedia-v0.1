import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";

const JQueryOverviewPage = () => {
    return (
        <Container>
            <BookHeader variant="h3" component="h3">Огляд бібліотеки jQuery</BookHeader>

            <Paragraph>
                jQuery — це одна з найпопулярніших бібліотек JavaScript, яка значно спрощує роботу з DOM, обробку подій, створення анімацій та виконання AJAX-запитів. Створена Джоном Резігом у 2006 році, вона швидко здобула популярність завдяки своїй простоті та зручності. jQuery дозволяє розробникам писати менше коду, надаючи потужний та уніфікований API, який працює однаково добре в різних браузерах.
            </Paragraph>

            <Paragraph>
                Незважаючи на появу сучасних фреймворків, таких як React чи Vue.js, jQuery залишається актуальною для підтримки старих проектів або швидкого вирішення простих завдань. Її мінімалістичний підхід та велика спільнота роблять її ідеальним інструментом для тих, хто шукає простий та ефективний спосіб роботи з веб-сторінками.
            </Paragraph>
        </Container>
    );
};

export default JQueryOverviewPage;