import React from 'react';
import {Box, Container, List, ListItem} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../../features/Code/Code.jsx";

const EfficiencyAndOptimizationPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Частина 4: Ефективність та оптимізація</BookHeader>
            <Paragraph>
                Один із ключових аспектів розробки програмного забезпечення на JavaScript - це вибір оптимальних структур даних для конкретних завдань. Правильний вибір допомагає покращити продуктивність, зменшити споживання пам'яті та підвищити зрозумілість коду. У цьому розділі ми розглянемо, як правильно вибирати та використовувати структури даних в JavaScript, а також як уникати зайвого використання пам'яті.
            </Paragraph>

            <SubHeader>1. Приклади неоптимальних структур даних</SubHeader>
            <Paragraph>
                Використання неоптимальних структур даних може призвести до ряду негативних наслідків, таких як зайве витрачання пам'яті, сповільнення роботи програми та збільшення часу виконання. Ось деякі приклади негативного впливу використання неоптимальних структур даних:
            </Paragraph>

            <Chapter>Зайве витрачання пам'яті</Chapter>
            <Paragraph>
                Використання надто об'ємних структур даних, коли для задачі досить меншої, призводить до зайвого споживання пам'яті. Наприклад, збереження чисел в об'єкті замість масиву:
            </Paragraph>
            <CodeBlock>
          {`
// Неоптимальний варіант
const data = { 0: 'zero', 1: 'one', 2: 'two' };

// Оптимальний варіант
const data = ['zero', 'one', 'two'];
          `}
            </CodeBlock>

            <Chapter>Збільшення часу виконання</Chapter>
            <Paragraph>
                Вибір неправильної структури даних може призвести до збільшення часу виконання операцій. Наприклад, пошук елемента в неіндексованому масиві:
            </Paragraph>
            <CodeBlock>
          {`
// Неоптимальний варіант
const items = [10, 20, 30, 40, 50];
const target = 30;
const index = items.indexOf(target); // Потребує перебору масиву

// Оптимальний варіант
const items = { 10: true, 20: true, 30: true, 40: true, 50: true };
const target = 30;
const exists = items[target]; // Швидший доступ
          `}
            </CodeBlock>
            <Paragraph>
                Таким чином, вибір оптимальних структур даних є важливим аспектом при розробці програм на JavaScript, оскільки це допомагає покращити продуктивність, споживання пам'яті та час виконання.
            </Paragraph>

            <SubHeader>2. Базові умови вибору структур даних</SubHeader>
            <Chapter>Масиви (Arrays)</Chapter>
            <Paragraph>
                Масиви є однією з основних структур даних в JavaScript і ідеально підходять для зберігання послідовностей значень. Наприклад, масив може бути використаний для зберігання списку користувачів або елементів меню. Ось приклад:
            </Paragraph>
            <CodeBlock>
          {`
const users = ['John', 'Alice', 'Bob'];
          `}
            </CodeBlock>

            <Chapter>Об'єкти (Objects)</Chapter>
            <Paragraph>
                Об'єкти використовуються для представлення сутностей з різними властивостями. Наприклад, для зберігання інформації про користувачів можна використовувати об'єкти:
            </Paragraph>
            <CodeBlock>
          {`
const user = {
    name: 'John',
    age: 30,
    country: 'USA',
};
          `}
            </CodeBlock>

            <Chapter>Мапи (Maps)</Chapter>
            <Paragraph>
                Мапи введені в стандарті ES6 і дозволяють зберігати пари "ключ-значення". Вони корисні для реалізації словників та інших структур даних:
            </Paragraph>
            <CodeBlock>
          {`
const dictionary = new Map();
dictionary.set('apple', 'a fruit');
dictionary.set('book', 'a printed publication');
          `}
            </CodeBlock>

            <Chapter>Сети (Sets)</Chapter>
            <Paragraph>
                Сети - це колекція унікальних значень. Вони можуть бути використані для вилучення дублікатів та зберігання унікальних даних:
            </Paragraph>
            <CodeBlock>
          {`
const uniqueValues = new Set([1, 2, 3, 1]);
          `}
            </CodeBlock>
            <Paragraph>
                Ці практичні приклади допомагають вам зберігати пам'ять та зробити ваш код більш продуктивним. Використання оптимальних структур даних є ключовим аспектом у веб-розробці та допомагає покращити продуктивність вашого JavaScript-коду.
            </Paragraph>

            <SubHeader>3. Оптимізації коду для покращення продуктивності</SubHeader>
            <Paragraph>
                Профілювання та оптимізація коду - дозволяє покращити продуктивність та ефективність вашого програмного продукту. Профілювання - це процес аналізу роботи програми для виявлення "гарячих точок" або місць, де витрати часу і ресурсів є найбільшими. Після виявлення таких точок можна вжити оптимізаційних заходів для поліпшення продуктивності.
            </Paragraph>

            <Chapter>Виявлення та усунення "гарячих точок" в коді</Chapter>
            <Paragraph>
                Один з перших кроків при оптимізації коду - це ідентифікація "гарячих точок" або місць, де програма витрачає найбільше часу. Для цього можна використовувати різні інструменти профілювання, такі як браузерні DevTools або зовнішні профілювальні програми.
            </Paragraph>
            <Paragraph>
                Наприклад, цей код представляє собою приклад використання інструменту профілювання у JavaScript для вимірювання часу виконання певного фрагмента коду:
            </Paragraph>
            <CodeBlock>
          {`
// Приклад коду для профілювання
function timeConsumingFunction() {
    // ...
    // Гаряча точка: інтенсивне обчислення
    for (let i = 0; i < 1000000; i++) {
        // Обчислення
    }
    // ...
}

// Профілювання функції
console.time("timeConsumingFunction");
timeConsumingFunction();
console.timeEnd("timeConsumingFunction");
          `}
            </CodeBlock>
            <Paragraph>
                Давайте розглянемо його детальніше:
            </Paragraph>

            <Box sx={{ml:2}}>
                <List sx={{
                    pl: 2,
                    listStyleType: 'disc',
                    '& .MuiListItem-root': {
                        display: 'list-item',
                        py: 0.5,
                        pl: 1,
                        ml: 2,
                        fontSize: 14,
                        fontWeight: 800
                    }
                }}>
                <ListItem>
                    Ми маємо функцію <Code>timeConsumingFunction()</Code>, яка імітує обчислення, що можуть займати значний час. В даному випадку, у циклі з 1000000 ітерацій, ми виконуємо певні обчислення. Ця частина коду є "гарячою точкою" (hotspot), оскільки витрати часу на неї є значними і можуть стати об'єктом оптимізації.
                </ListItem>
                <ListItem>
                    Потім, ми використовуємо <Code>console.time("timeConsumingFunction")</Code>, щоб почати вимірювати час виконання функції <Code>timeConsumingFunction</Code>. Ми передаємо ярлик ("timeConsumingFunction") для ідентифікації таймера.
                </ListItem>
                <ListItem>
                    Після цього ми викликаємо функцію <Code>timeConsumingFunction()</Code>. Під час виконання цієї функції, браузер або середовище виконання JavaScript почне вимірювати час.
                </ListItem>
                <ListItem>
                    Завершуючи виконання функції, ми викликаємо <Code>console.timeEnd("timeConsumingFunction")</Code>. Ця функція завершує вимірювання часу для таймера з ярликом "timeConsumingFunction" і виводить результат в консоль.
                </ListItem>
                </List>
            </Box>
            <Paragraph>
                Після виконання цього коду в консолі ви побачите результат у форматі "timeConsumingFunction: [час виконання]ms". Це дасть вам інформацію про те, скільки часу зайняло виконання функції <Code>timeConsumingFunction</Code>.
            </Paragraph>
            <Paragraph>
                Цей підхід допомагає ідентифікувати "гарячі точки" в коді, тобто місця, де програма витрачає найбільше часу, і виявити потребу в оптимізації цих частин коду для покращення продуктивності.
            </Paragraph>
            <Paragraph>
                Загалом, профілювання та оптимізація коду - це важливий етап розробки для забезпечення продуктивності та ефективності програм. Вибір правильних інструментів профілювання, ідентифікація "гарячих точок" та вжиття оптимізаційних заходів допомагають створити швидкий та продуктивний код.
            </Paragraph>
        </Container>
    );
};

export default EfficiencyAndOptimizationPage;