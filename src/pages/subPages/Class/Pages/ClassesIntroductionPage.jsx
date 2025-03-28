import React from 'react';
import { Box, Paper, Typography, List, ListItem } from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import Code from "../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";

const ClassesIntroductionPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Вступ до класів</BookHeader>
            <Paragraph>
                JavaScript володіє потужним засобом для роботи з об'єктами і створення класів, що надає програмістам можливість створювати більш структуровані та організовані програми. У цьому розділі ми розглянемо основи класів в JavaScript, здійснимо повторення базових понять та розглянемо переваги використання класів у програмуванні.
            </Paragraph>

            <SubHeader>1. Повторення прототипів та основи класів в JavaScript</SubHeader>
            <Paragraph>
                JavaScript використовує прототипне наслідування, завдяки чому кожен об'єкт може успадковувати властивості і методи іншого об'єкта. Прототипи — сильна частина мови, проте не завжди зрозуміла. У базовому варіанті, це так:
            </Paragraph>
            <CodeBlock>
                {`
// Функція конструктора для створення об'єкта Person
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Додавання методу greet до прототипу об'єкта Person
Person.prototype.greet = function() {
  console.log(\`Привіт, мене звати \${this.name} і мені \${this.age} років.\`);
};

// Створення об'єкта за допомогою функції конструктора
const person1 = new Person("Іван", 25);
person1.greet(); // "Привіт, мене звати Іван і мені 25 років."
                `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі функція <Code>Person</Code> виступає як конструктор, який створює новий об'єкт з властивостями <Code>name</Code> та <Code>age</Code>. Метод <Code>greet</Code> додається до прототипу об'єкта, щоб всі об'єкти, створені за допомогою конструктора <Code>Person</Code>, могли використовувати цей метод.
            </Paragraph>
            <Paragraph>
                Однак у сучасному JavaScript існують класи, які надають більш зручний та зрозумілий спосіб створення об'єктів. Наприклад, визначимо клас <Code>Person</Code>, який буде мати властивості "ім'я" та "вік" і метод "привітатися":
            </Paragraph>
            <CodeBlock>
                {`
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Привіт, мене звати \${this.name} і мені \${this.age} років.\`);
  }
}

// Створення об'єкта за допомогою класу
const person1 = new Person("Іван", 25);
person1.greet(); // "Привіт, мене звати Іван і мені 25 років."
                `}
            </CodeBlock>

            <SubHeader>2. Переваги використання класів у програмуванні</SubHeader>
            <Paragraph>
                Використання класів у програмуванні має ряд переваг:
            </Paragraph>
            <List sx={{ mb: 2 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Організація коду:</Typography> Використання класів сприяє більшій організації коду, дозволяючи групувати властивості та методи, що відносяться до одного об'єкта, в один модуль.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Полегшення створення об'єктів:</Typography> Класи надають зручний спосіб створювати нові об'єкти. Конструктор класу визначає, які властивості має об'єкт, та встановлює їх по замовчуванню при створенні нового екземпляру.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Спадкування та розширенство:</Typography> Класи підтримують спадкування, що дозволяє створювати нові класи на основі існуючих. Це зменшує дублювання коду і дозволяє використовувати властивості та методи батьківського класу.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Зрозумілість:</Typography> Використання класів робить код більш зрозумілим для розробників, оскільки вони можуть легко визначити структуру об'єктів та їхні можливості.
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Модульність:</Typography> Класи сприяють модульності, що дозволяє структурувати програму за концепцією об'єктно-орієнтованого програмування (ООП).
                </ListItem>
            </List>

            <Paper sx={{ p: 3, mt: 3, backgroundColor: 'background.paper' }} className='conclusion'>
                <SubHeader>Заключення</SubHeader>
                <Paragraph>
                    Класи в JavaScript надають потужний інструмент для створення структурованих та організованих
                    програм. Вони дозволяють легко створювати об'єкти, групувати властивості та методи, а також
                    реалізовувати спадкування. Використання класів робить код більш зрозумілим, модульним та
                    підтримуваним, що є ключовим аспектом сучасного програмування.
                </Paragraph>
            </Paper>
        </Box>
    );
};

export default ClassesIntroductionPage;