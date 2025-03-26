import React from 'react';
import { Box } from '@mui/material';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';

const ClassesPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Вступ</BookHeader>

            <Paragraph>
                JavaScript, з введенням стандарту ECMAScript 2015 (ES6), отримав потужний інструмент - класи. Це відносно новий підхід до створення та управління об'єктами в JS.
            </Paragraph>

            <Paragraph>
                Класи дозволяють вам організовувати свій код більш структуровано та ефективно, надаючи можливості для створення об'єктів, визначення властивостей та методів, а також реалізацію концепцій об'єктно-орієнтованого програмування (ООП).
            </Paragraph>

            <Paragraph>
                У цьому конспекті ми розглянемо основні концепції класів в JavaScript, вивчимо створення та використання класів, а також дослідимо їхні переваги в розробці програм на цій мові. Приготуйтеся долучитися до захоплюючого світу об'єктно-орієнтованого програмування у JavaScript!
            </Paragraph>
        </Box>
    );
};

export default ClassesPage;