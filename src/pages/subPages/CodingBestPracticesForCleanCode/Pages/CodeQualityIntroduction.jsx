import React from 'react';
import { Box } from '@mui/material';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';

const CodeQualityIntroduction = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Вступ</BookHeader>

            <Paragraph>
                Ця тема розглядає основні принципи та практики, які допомагають покращити якість програмного коду в розробці на JavaScript. Вона включає в себе загальні принципи чистого коду, а також конкретні підходи до неймінгу змінних, коментування коду та оформлення.
            </Paragraph>

            <Paragraph>
                Тема також наголошує на важливості ефективності та оптимізації коду, зокрема виборі оптимальних структур даних та методів профілювання та оптимізації. Вивчення цієї теми допомагає розробникам створювати більш читабельний, підтримуваний та ефективний код, що є важливим для успішного розвитку програмних проектів.
            </Paragraph>
        </Box>
    );
};

export default CodeQualityIntroduction;