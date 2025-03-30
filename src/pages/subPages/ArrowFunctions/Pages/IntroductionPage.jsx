import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";

const IntroductionPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Вступ</BookHeader>
            <Paragraph>
                Стрілкові функції — це сучасний та ефективний інструмент у світі JavaScript, ідеальний для простих функцій, що використовуються для обробки подій, маніпулювання масивами, фільтрації даних та інших операцій. Вони роблять код більш зрозумілим і компактним, забезпечуючи читачам можливість легше розуміти та утримувати код у порядку. Проте, важливо ретельно ознайомитися із їхніми відмінностями в порівнянні зі звичайними функціями.
            </Paragraph>
            <Paragraph>
                Але не менш важливим є розуміння контексту виклику. Це поняття визначає, як функції отримують доступ до об'єкту, в якому вони були викликані. Знання цього концепту є вирішальним для зміни поведінки функцій та їхнього використання в різних контекстах.
            </Paragraph>
            <Paragraph>
                Розглядаючи ці аспекти, ми зможемо вдосконалити наші навички в програмуванні та забезпечити більш чистий та продуктивний код у JavaScript.
            </Paragraph>
        </Container>
    );
};

export default IntroductionPage;