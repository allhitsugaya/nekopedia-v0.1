import React from 'react';
import {Box, Container, List, ListItem} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Code from "../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";

const StaticMethodsPropertiesPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Статичні методи та властивості</BookHeader>
            <Paragraph>
                Статичні методи та властивості в класах JavaScript дозволяють створювати функціональність, яка відноситься до класу в цілому, а не до конкретних екземплярів. Це корисний інструмент для реалізації загальної логіки, яка не пов'язана з конкретним об'єктом. Розглянемо, як створювати та використовувати статичні методи та властивості в JavaScript.
            </Paragraph>

            <SubHeader>Переваги використання статичних членів класу</SubHeader>
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
                    <Code>Загальні функції:</Code> Статичні методи та властивості можна використовувати для реалізації загальних функцій, які не залежать від конкретного об'єкта класу.
                </ListItem>
                <ListItem>
                    <Code>Легка доступність:</Code> Статичні члени класу доступні без створення екземпляру класу, що робить їх легко використовуваними в програмі.
                </ListItem>
                <ListItem>
                    <Code>Збереження загальних даних:</Code> Статичні властивості можна використовувати для збереження загальних даних, які відносяться до всього класу.
                </ListItem>
                </List>
            </Box>

            <SubHeader>1. Створення статичних методів та властивостей</SubHeader>
            <Paragraph>
                Для створення статичного методу чи властивості в класі, ми використовуємо ключове слово <Code>static</Code>. Це робить метод чи властивість доступними не для екземплярів класу, а для самого класу.
            </Paragraph>
            <CodeBlock>
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
            </CodeBlock>
            <Paragraph>
                У цьому прикладі, метод <Code>square</Code> та властивість <Code>PI</Code> є статичними та доступними без створення екземпляру класу.
            </Paragraph>

            <SubHeader>2. Використання статичних членів класу</SubHeader>
            <Paragraph>
                Статичні методи та властивості дозволяють реалізувати загальні функції, що не пов'язані з конкретним екземпляром класу. Наприклад, в класі для роботи з файлами можна використовувати статичний метод для перевірки наявності файлу.
            </Paragraph>
            <CodeBlock>
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
            </CodeBlock>

            <Paragraph>
                У цьому прикладі, <Code>fileExists</Code> - статичний метод, який може бути викликаний без створення екземпляру класу.
            </Paragraph>

                <Conclusion>Заключення</Conclusion>
                <Paragraph>
                    Статичні методи та властивості є потужним інструментом у JavaScript, який дозволяє реалізовувати
                    загальну логіку, що відноситься до класу в цілому. Вони спрощують доступ до функціональності, яка не
                    залежить від конкретних екземплярів класу, і дозволяють зберігати загальні дані. Використання
                    статичних членів класу робить код більш організованим та зручним для використання.
                </Paragraph>
        </Container>
    );
};

export default StaticMethodsPropertiesPage;