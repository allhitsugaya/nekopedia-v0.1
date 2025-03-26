import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const ArraysPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Array та способи роботи з ним</BookHeader>

            <Paragraph>
                Масиви - це упорядковані колекції даних, де кожен елемент може бути іншого типу. Вони створюються за допомогою літерала <Code>[]</Code> та заповнюються значеннями. Масиви можуть містити числа, рядки, об'єкти та навіть інші масиви. Базовими операціями є створення масиву, отримання доступу до елементу, зміна значення та отримання довжини масиву:
            </Paragraph>

            <CodeBlock>
                {`// Створення масиву
const fruits = ['apple', 'banana', 'cherry'];
// Отримання доступу до елементу за індексом
const firstFruit = fruits[0]; // 'apple'
// Зміна значення елементу
fruits[1] = 'orange'; // fruits стане ['apple', 'orange', 'cherry']
// Отримання довжини масиву
const length = fruits.length; // 3`}
            </CodeBlock>

            <Paragraph>
                Проте давайте подивимося на деталі роботи з масивами.
            </Paragraph>

            <SubHeader>Створення масивів та основні операції з ними</SubHeader>
            <Paragraph>
                Масиви створюються за допомогою літерала <Code>[]</Code>, і ми розглянемо цей процес, а також різні способи ініціалізації масивів. Вивчимо, як додавати елементи до масиву, змінювати їх значення та отримувати доступ до конкретних елементів.
            </Paragraph>
            <Paragraph>
                В JavaScript існує кілька способів створення масивів, та ось декілька прикладів разом із поясненнями:
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                1. Літеральний спосіб
            </Typography>
            <Paragraph>
                Створення масиву без використання конструктора <Code>Array</Code>:
            </Paragraph>
            <CodeBlock>
                {`const fruits = ['apple', 'banana', 'cherry'];`}
            </CodeBlock>
            <Paragraph>
                Це найпоширеніший спосіб створення масиву. Ви просто перераховуєте елементи масиву в квадратних дужках, розділені комами.
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                2. З використанням конструктора Array
            </Typography>
            <CodeBlock>
                {`const colors = new Array('red', 'green', 'blue');`}
            </CodeBlock>
            <Paragraph>
                Ви також можете створювати масиви за допомогою конструктора <Code>Array</Code>. Проте цей спосіб рідко використовується, оскільки літеральний спосіб є більш зручним.
            </Paragraph>

            <Typography variant="h3" component="h3" sx={{ fontWeight: 600 }}>
                3. Спрощений синтаксис створення масиву
            </Typography>
            <Paragraph>
                Для створення масиву заданого розміру:
            </Paragraph>
            <CodeBlock>
                {`const numbers = new Array(5);`}
            </CodeBlock>
            <Paragraph>
                У цьому випадку створиться масив з 5 "порожніми" елементами. Вам потрібно буде додати значення до цих елементів пізніше.
            </Paragraph>

            <Paragraph>
                Різниця між цими підходами полягає в структурі та зручності створення масиву:
            </Paragraph>
            <List>
                <ListItem>
                    Літеральний спосіб є найбільш читабельним та коротким. Ви вказуєте всі елементи одразу.
                </ListItem>
                <ListItem>
                    Використання конструктора <Code>Array</Code> може бути менш зручним і займати більше місця.
                </ListItem>
                <ListItem>
                    Спрощений синтаксис для масиву зазначеного розміру може бути корисним, коли вам потрібно створити масив із заздалегідь відомим розміром, але в цьому випадку масив буде містити порожні елементи.
                </ListItem>
            </List>
            <Paragraph>
                Зазвичай, для створення масивів використовується літеральний спосіб, оскільки він є найзручнішим та читабельним для більшості випадків.
            </Paragraph>

            <SubHeader>Додавання та видалення елементів з масивів</SubHeader>
            <Paragraph>
                Отже, масиви в JavaScript надають гнучкість для роботи з даними. Методи <Code>push</Code>, <Code>pop</Code>, <Code>unshift</Code>, <Code>shift</Code> дозволяють додавати та видаляти елементи, а <Code>splice</Code> надає більший контроль над редагуванням масиву.
            </Paragraph>
            <CodeBlock>
                {`// Додавання елементу в кінець масиву
fruits.push('grape'); // fruits стане ['apple', 'orange', 'cherry', 'grape']

// Видалення останнього елементу
const removedFruit = fruits.pop(); // 'grape', fruits стане ['apple', 'orange', 'cherry']

// Додавання елементу в початок масиву
fruits.unshift('kiwi'); // fruits стане ['kiwi', 'apple', 'orange', 'cherry']

// Видалення першого елементу
const removedFruit = fruits.shift(); // 'kiwi', fruits стане ['apple', 'orange', 'cherry']`}
            </CodeBlock>
        </Box>
    );
};

export default ArraysPage;