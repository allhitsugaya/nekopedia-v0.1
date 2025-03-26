import React from 'react';
import { Box } from '@mui/material';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';

const LoopsIntroductionPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Вступ</BookHeader>

            <Paragraph>
                У цій темі ми поглиблено вивчимо основні конструкції, які дозволяють керувати повторюваними діями в JavaScript. Ми розглянемо різні види циклів, включаючи цикли <Code>while</Code>, <Code>do while</Code> та <Code>for</Code>. Дізнаємося, як правильно їх використовувати та в чому полягають їх особливості.
            </Paragraph>

            <Paragraph>
                Окремо розглянемо цикли <Code>for...in</Code> та <Code>for...of</Code>, які дозволяють обходити елементи об'єктів та масивів. Ми також вивчимо ключові слова <Code>break</Code> та <Code>continue</Code>, які допомагають контролювати виконання циклів.
            </Paragraph>

            <Paragraph>
                Важливою частиною цієї теми буде вивчення вкладених циклів, коли один цикл розташований всередині іншого. Ми розглянемо ситуації, коли це необхідно для вирішення складних завдань.
            </Paragraph>

            <Paragraph>
                Завершимо тему, розглядаючи поняття нескінченних циклів та способи уникнення їх виникнення. Ця тема допоможе вам зрозуміти роботу циклів в JavaScript та використовувати їх для ефективної обробки даних та вирішення завдань в програмному коді.
            </Paragraph>
        </Box>
    );
};

export default LoopsIntroductionPage;