import React from 'react';
import { Box } from '@mui/material';
import Paragraph from '../../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../../features/Code/Code.jsx';
import BookHeader from '../../../../../features/BookHeader/BookHeader.jsx';
import SubHeader from '../../../../../features/SubHeader/SubHeader.jsx';
import CodeBlock from '../../../../../features/CodeBlock/CodeBlock.jsx';

const ArrayOfObjectsPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Робота з масивами об'єктів</BookHeader>

            <Paragraph>
                Робота з масивами об'єктів в JavaScript може бути досить складною, але в той же час потужною. Відфільтрувати, пошукати та змінювати дані в масивах об'єктів можна використовуючи різні методи та прийоми. Давайте розглянемо кілька прикладів.
            </Paragraph>

            <SubHeader>Приклад 1: Фільтрація за умовою</SubHeader>
            <Paragraph>
                Допустимо, у нас є масив об'єктів, що представляють користувачів, і ми хочемо відфільтрувати лише активних користувачів:
            </Paragraph>
            <CodeBlock>
                {`const users = [
  { id: 1, name: 'Анна', isActive: true },
  { id: 2, name: 'Петро', isActive: false },
  { id: 3, name: 'Ірина', isActive: true },
];

const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);`}
            </CodeBlock>

            <SubHeader>Приклад 2: Пошук за певною умовою</SubHeader>
            <Paragraph>
                Допустимо, у нас є масив об'єктів, які представляють товари, і ми хочемо знайти товар з певним ID:
            </Paragraph>
            <CodeBlock>
                {`const products = [
  { id: 1, name: 'Книга' },
  { id: 2, name: 'Флешка' },
  { id: 3, name: 'Мишка' },
];

const productIdToFind = 2;
const foundProduct = products.find(product => product.id === productIdToFind);
console.log(foundProduct);`}
            </CodeBlock>

            <SubHeader>Приклад 3: Зміна значення у масиві об'єктів</SubHeader>
            <Paragraph>
                Якщо ми хочемо змінити значення у певному об'єкті у масиві, ми можемо використовувати метод <Code>map()</Code>:
            </Paragraph>
            <CodeBlock>
                {`const students = [
  { id: 1, name: 'Марія', grade: 'A' },
  { id: 2, name: 'Іван', grade: 'C' },
  { id: 3, name: 'Оля', grade: 'B' },
];

const updatedStudents = students.map(student => {
  if (student.id === 2) {
    return { ...student, grade: 'A' };
  }
  return student;
});

console.log(updatedStudents);`}
            </CodeBlock>

            <Box className='conclusion'>
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Робота з масивами об'єктів в JavaScript може бути великим викликом, але це дозволяє структурувати та обробляти складні дані у вашому додатку. Наведені приклади допоможуть вам почати.
                </Paragraph>
            </Box>
        </Box>
    );
};

export default ArrayOfObjectsPage;