import React from 'react';

const StaticMethodsPropertiesPage = () => {
    return (
        <div className="page-container">
            <h1>Статичні методи та властивості</h1>
            <p>
                Статичні методи та властивості в класах JavaScript дозволяють створювати функціональність, яка відноситься до класу в цілому, а не до конкретних екземплярів. Це корисний інструмент для реалізації загальної логіки, яка не пов'язана з конкретним об'єктом. Розглянемо, як створювати та використовувати статичні методи та властивості в JavaScript.
            </p>

            <h2>Переваги використання статичних членів класу</h2>
            <ul>
                <li>
                    <strong>Загальні функції:</strong> Статичні методи та властивості можна використовувати для реалізації загальних функцій, які не залежать від конкретного об'єкта класу.
                </li>
                <li>
                    <strong>Легка доступність:</strong> Статичні члени класу доступні без створення екземпляру класу, що робить їх легко використовуваними в програмі.
                </li>
                <li>
                    <strong>Збереження загальних даних:</strong> Статичні властивості можна використовувати для збереження загальних даних, які відносяться до всього класу.
                </li>
            </ul>

            <h2>1. Створення статичних методів та властивостей</h2>
            <p>
                Для створення статичного методу чи властивості в класі, ми використовуємо ключове слово <code>static</code>. Це робить метод чи властивість доступними не для екземплярів класу, а для самого класу.
            </p>
            <pre>
        <code>
          {`
class MathOperations {
  static square(number) {
    return number * number;
  }

  static PI = 3.14159;
}

const result = MathOperations.square(5); // Виклик статичного методу
console.log(result); // Виведе 25

console.log(MathOperations.PI); // Виведе 3.14159
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі, метод <code>square</code> та властивість <code>PI</code> є статичними та доступними без створення екземпляру класу.
            </p>

            <h2>2. Використання статичних членів класу</h2>
            <p>
                Статичні методи та властивості дозволяють реалізувати загальні функції, що не пов'язані з конкретним екземпляром класу. Наприклад, в класі для роботи з файлами можна використовувати статичний метод для перевірки наявності файлу.
            </p>
            <pre>
        <code>
          {`
class FileManager {
  static fileExists(filePath) {
    // Логіка перевірки наявності файлу
    return true; // Зараз тимчасовий результат
  }
}

const filePath = '/path/to/file.txt';
const fileExists = FileManager.fileExists(filePath); // Виклик статичного методу
console.log(\`File \${filePath} exists: \${fileExists}\`); // Виведе "File /path/to/file.txt exists: true"
          `}
        </code>
      </pre>
            <p>
                У цьому прикладі, <code>fileExists</code> - статичний метод, який може бути викликаний без створення екземпляру класу.
            </p>

            <div className='conclusion'>
                <h2>Заключення</h2>
                <p>
                    Статичні методи та властивості є потужним інструментом у JavaScript, який дозволяє реалізовувати
                    загальну логіку, що відноситься до класу в цілому. Вони спрощують доступ до функціональності, яка не
                    залежить від конкретних екземплярів класу, і дозволяють зберігати загальні дані. Використання
                    статичних членів класу робить код більш організованим та зручним для використання.
                </p>
            </div>
        </div>
    );
};

export default StaticMethodsPropertiesPage;