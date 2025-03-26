import React from 'react';
import { Box } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import BookHeader from '../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../features/SubHeader/SubHeader.jsx';

const IntroductionPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Вступ до сучасного JavaScript</BookHeader>

            <Box component="article" sx={{ mb: 4 }}>
                <Paragraph>
                    Сучасний JavaScript - це потужна та гнучка мова програмування, яка постійно розвивається. У цьому розділі ми розглянемо дві ключові концепції, які є фундаментом для ефективної роботи з JavaScript: стрілкові функції та контекст виклику.
                </Paragraph>
            </Box>

            <Box component="section" sx={{ mb: 5 }}>
                <SubHeader>Стрілкові функції</SubHeader>
                <Paragraph sx={{ mb: 2 }}>
                    Стрілкові функції (arrow functions) - це сучасний синтаксис для створення функцій у JavaScript, введений у ES6. Вони пропонують:
                </Paragraph>
                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                    <li><Paragraph component="span">Більш короткий та лаконічний синтаксис</Paragraph></li>
                    <li><Paragraph component="span">Автоматичне повернення значення при скороченому записі</Paragraph></li>
                    <li><Paragraph component="span">Лексичне зв'язування <code>this</code>, що вирішує багато проблем з контекстом</Paragraph></li>
                </ul>
                <Paragraph>
                    Однак стрілкові функції мають важливі відмінності від звичайних функцій, які потрібно враховувати під час їх використання.
                </Paragraph>
            </Box>

            <Box component="section" sx={{ mb: 5 }}>
                <SubHeader>Контекст виклику (this)</SubHeader>
                <Paragraph sx={{ mb: 2 }}>
                    Контекст виклику - це одна з найважливіших і водночас найскладніших для розуміння концепцій JavaScript. Основні аспекти:
                </Paragraph>
                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                    <li><Paragraph component="span"><code>this</code> визначається способом виклику функції</Paragraph></li>
                    <li><Paragraph component="span">Методи об'єктів мають спеціальну поведінку контексту</Paragraph></li>
                    <li><Paragraph component="span">Можливість явного встановлення контексту через <code>call</code>, <code>apply</code> та <code>bind</code></Paragraph></li>
                </ul>
                <Paragraph>
                    Розуміння контексту виклику дозволяє уникнути поширених помилок і писати більш передбачуваний код.
                </Paragraph>
            </Box>

            <Box component="section" sx={{
                backgroundColor: 'background.paper',
                p: 3,
                borderRadius: 1,
                borderLeft: '4px solid',
                borderColor: 'primary.main'
            }}>
                <SubHeader>Чому це важливо?</SubHeader>
                <Paragraph>
                    Стрілкові функції та контекст виклику - це фундаментальні концепції, які:
                </Paragraph>
                <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                    <li><Paragraph component="span">Дозволяють писати більш чистий та сучасний код</Paragraph></li>
                    <li><Paragraph component="span">Покращують читабельність та підтримку коду</Paragraph></li>
                    <li><Paragraph component="span">Допомагають уникнути поширених помилок</Paragraph></li>
                    <li><Paragraph component="span">Є необхідними для роботи з сучасними фреймворками</Paragraph></li>
                </ul>
                <Paragraph>
                    У наступних розділах ми детально розглянемо ці концепції, щоб ви могли повністю розкрити їх потенціал у своїх проектах.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default IntroductionPage;