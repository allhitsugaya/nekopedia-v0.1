import React from 'react';
import { Box, Paper } from '@mui/material';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const CommentingPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Частина 2.2: Коментування</BookHeader>

            <SubHeader>Коректне коментування в JavaScript</SubHeader>
            <Paragraph>
                Коментування грає важливу роль у написанні якісного коду. Від якості коментарів залежить зрозумілість та підтримуваність коду. Ми розглянемо важливі принципи коректного коментування в JavaScript, включаючи коментарі для пояснення складних частин коду та документування API.
            </Paragraph>

            <SubHeader level={3}>Коментарі для пояснення складних частин коду</SubHeader>
            <Paragraph>
                Один із основних видів коментування - це додати пояснення до складних або нетривіальних частин коду. Це допомагає іншим розробникам легше розуміти вашу логіку.
            </Paragraph>
            <CodeBlock>
                {`
// Підрахунок суми всіх елементів масиву
function calculateSum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
                `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі коментар пояснює, що робить функція <Code>calculateSum</Code>, яка ітерується через масив та обчислює суму його елементів.
            </Paragraph>

            <SubHeader level={3}>Коментарі для документування API та публічних методів</SubHeader>
            <Paragraph>
                Коли ви створюєте бібліотеки або модулі, корисно документувати API, яке ви надаєте. Документація API робить ваш код більш зрозумілим для інших розробників, які його використовують.
            </Paragraph>
            <CodeBlock>
                {`
/**
 * Клас, який представляє книгу.
 */
class Book {
    /**
     * Створює новий екземпляр книги.
     * @param {string} title - Заголовок книги.
     * @param {string} author - Автор книги.
     */
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    /**
     * Повертає рядок, який представляє книгу.
     * @returns {string} Рядок з інформацією про книгу.
     */
    getInfo() {
        return \`\${this.title} - \${this.author}\`;
    }
}
                `}
            </CodeBlock>
            <Paragraph>
                Цей приклад показує, як використовувати коментарі документації (за допомогою JSDoc) для опису класу <Code>Book</Code> та його методів. Інші розробники можуть легко зрозуміти, як використовувати цей клас і його методи.
            </Paragraph>

            <SubHeader level={3}>Уникнення зайвих коментарів</SubHeader>
            <Paragraph>
                Хоча коментарі корисні, важливо не перевантажувати код зайвими коментарями. Якщо код сам по собі зрозумілий, зайві коментарі можуть створити більше плутанини.
            </Paragraph>
            <CodeBlock>
                {`
// Приростити змінну \`counter\` на одиницю
counter++;
                `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі коментар зовсім не додає корисної інформації, оскільки операція <Code>counter++</Code> вже зрозуміла. Уникайте зайвих коментарів та додавайте коментарі тільки тоді, коли вони дійсно необхідні для зрозуміння коду.
            </Paragraph>

            <Paper sx={{ p: 3, mt: 3, backgroundColor: 'background.paper' }}>
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Коректне коментування - це важливий аспект написання чистого та зрозумілого коду в JavaScript.
                    Правильні коментарі допомагають іншим розробникам легше розуміти ваш код і використовувати ваші API.
                    Пам'ятайте про збалансований підхід до коментування та уникайте зайвих коментарів, коли код вже
                    зрозумілий.
                </Paragraph>
            </Paper>
        </Box>
    );
};

export default CommentingPage;