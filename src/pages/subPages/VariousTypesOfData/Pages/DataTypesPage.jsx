import React from 'react';
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../features/Code/Code.jsx";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import {Box, Container} from "@mui/material";

const DataTypesPage = () => {
    return (
          <Container>
              <Box sx={{ mb: 3 }}>
            <BookHeader>Вступ</BookHeader>
            <Paragraph>
                Ви дізнаєтеся про різні типи даних, які використовуються в мові програмування JavaScript, та їхню роль у вашому коді.
            </Paragraph>
            <Paragraph>
                Спочатку ви розглянете базові примітивні типи даних, такі як числа, рядки, булеві значення та <Code>null</Code>. Ви навчитеся створювати та операціювати змінними, що містять ці примітивні типи даних. Ви також розглянете різницю між змінними, що мають значення, та тими, що посилаються на об'єкти.
            </Paragraph>
            <Paragraph>
                Ця тема також включає важливі поняття, такі як приведення типів, динамічна типізація та операції порівняння типів даних у JavaScript. Ви будете готові до вирішення різних завдань, де важливо правильно керувати типами даних у вашому коді.
            </Paragraph>
              </Box>
          </Container>
    );
};

export default DataTypesPage;