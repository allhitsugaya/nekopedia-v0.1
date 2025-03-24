import React from 'react';

const ArrayOfObjectsPage = () => {
    return (
        <div>
            <h1>Робота з масивами об'єктів</h1>

            <p>
                Робота з масивами об'єктів в JavaScript може бути досить складною, але в той же час потужною. Відфільтрувати, пошукати та змінювати дані в масивах об'єктів можна використовуючи різні методи та прийоми. Давайте розглянемо кілька прикладів.
            </p>

            <h2>Приклад 1: Фільтрація за умовою</h2>
            <p>
                Допустимо, у нас є масив об'єктів, що представляють користувачів, і ми хочемо відфільтрувати лише активних користувачів:
            </p>
            <pre>
        {`const users = [
  { id: 1, name: 'Анна', isActive: true },
  { id: 2, name: 'Петро', isActive: false },
  { id: 3, name: 'Ірина', isActive: true },
];

const activeUsers = users.filter(user => user.isActive);
console.log(activeUsers);`}
      </pre>

            <h2>Приклад 2: Пошук за певною умовою</h2>
            <p>
                Допустимо, у нас є масив об'єктів, які представляють товари, і ми хочемо знайти товар з певним ID:
            </p>
            <pre>
        {`const products = [
  { id: 1, name: 'Книга' },
  { id: 2, name: 'Флешка' },
  { id: 3, name: 'Мишка' },
];

const productIdToFind = 2;
const foundProduct = products.find(product => product.id === productIdToFind);
console.log(foundProduct);`}
      </pre>

            <h2>Приклад 3: Зміна значення у масиві об'єктів</h2>
            <p>
                Якщо ми хочемо змінити значення у певному об'єкті у масиві, ми можемо використовувати метод map():
            </p>
            <pre>
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
      </pre>

            <p>
                Робота з масивами об'єктів в JavaScript може бути великим викликом, але це дозволяє структурувати та обробляти складні дані у вашому додатку. Наведені приклади допоможуть вам почати.
            </p>
        </div>
    );
}

export default ArrayOfObjectsPage;
