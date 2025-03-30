import React from 'react';
import {Box, Container, Typography} from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";

const IntroductionPage = () => {
    return (
        <Container>
            <BookHeader>Вступ</BookHeader>

            <Paragraph>
                Спливання подій - це важливий механізм в JavaScript, який впливає на те, як події поширюються в DOM-дереві. Ми докладно вивчимо, як цей механізм працює, і як його використовувати для ефективної обробки подій.
            </Paragraph>

            <Paragraph>
                Делегування подій - це техніка, яка дозволяє вам оптимізувати роботу з багатьма елементами DOM та ефективно відслідковувати події на динамічно створених елементах. Ми розглянемо, як використовувати цю техніку для покращення користувацького інтерфейсу ваших додатків.
            </Paragraph>

            <Paragraph>
                Браузерний об'єктний об'єкт (BOM) - дозволяє взаємодіяти з вікном браузера та керувати різними аспектами сторінки. Ми докладно розглянемо об'єкт <Code>window</Code> та його властивості та методи, які вам допоможуть керувати вікном браузера та URL.
            </Paragraph>
        </Container>
    );
};

export default IntroductionPage;