import React from 'react';
import { Box, Typography, Paper, List, ListItem } from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";

const StaticMethodsPropertiesPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Статичні методи та властивості в класах JavaScript</BookHeader>

            <Paragraph>
                Статичні методи та властивості належать самому класу, а не його екземплярам. Вони корисні для реалізації функціональності, яка є спільною для всіх екземплярів класу або не потребує створення об'єкта.
            </Paragraph>

            <SubHeader>Основні переваги статичних членів класу</SubHeader>
            <List sx={{ mb: 3 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Утилітарні функції:</Typography> Методи, які не потребують доступу до стану об'єкта
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Зберігання спільних даних:</Typography> Налаштування або константи, пов'язані з класом
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Фабричні методи:</Typography> Альтернативні способи створення екземплярів
                </ListItem>
            </List>

            <SubHeader>1. Базовий синтаксис</SubHeader>
            <Paragraph>
                Статичні методи та властивості оголошуються за допомогою ключового слова <Code>static</Code>:
            </Paragraph>
            <CodeBlock>
                {`class MathUtils {
  static PI = 3.14159; // Статична властивість

  static square(x) {   // Статичний метод
    return x * x;
  }
}

// Використання без створення екземпляру
console.log(MathUtils.PI);      // 3.14159
console.log(MathUtils.square(5)); // 25`}
            </CodeBlock>

            <SubHeader>2. Фабричні методи</SubHeader>
            <Paragraph>
                Статичні методи часто використовуються як фабрики для створення екземплярів:
            </Paragraph>
            <CodeBlock>
                {`class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createAdmin() {
    const admin = new User('Admin', 30);
    admin.isAdmin = true;
    return admin;
  }
}

const admin = User.createAdmin(); // Використання фабричного методу
console.log(admin);`}
            </CodeBlock>

            <SubHeader>3. Статичні приватні члени</SubHeader>
            <Paragraph>
                Статичні властивості та методи можуть бути приватними:
            </Paragraph>
            <CodeBlock>
                {`class Configuration {
  static #defaultTheme = 'light'; // Приватна статична властивість

  static #validateConfig(config) { // Приватний статичний метод
    return typeof config === 'object';
  }

  static setTheme(theme) {
    if (this.#validateConfig(theme)) {
      this.#defaultTheme = theme;
    }
  }
}

Configuration.setTheme('dark');
// Configuration.#defaultTheme - недоступний ззовні`}
            </CodeBlock>

            <SubHeader>4. Використання в утилітарних класах</SubHeader>
            <Paragraph>
                Статичні методи ідеально підходять для створення утилітарних класів:
            </Paragraph>
            <CodeBlock>
                {`class StringUtils {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static truncate(str, length) {
    return str.length > length ? str.slice(0, length) + '...' : str;
  }
}

console.log(StringUtils.capitalize('hello')); // "Hello"
console.log(StringUtils.truncate('Long text', 4)); // "Long..."`}
            </CodeBlock>

            <SubHeader>5. Наслідування статичних членів</SubHeader>
            <Paragraph>
                Статичні методи та властивості також успадковуються:
            </Paragraph>
            <CodeBlock>
                {`class Base {
  static baseMethod() {
    return 'Base method';
  }
}

class Derived extends Base {
  static derivedMethod() {
    return 'Derived method';
  }
}

console.log(Derived.baseMethod()); // "Base method"
console.log(Derived.derivedMethod()); // "Derived method"`}
            </CodeBlock>

            <Paper sx={{ p: 3, mt: 3, backgroundColor: 'background.paper' }} className='conclusion'>
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Статичні методи та властивості є потужним інструментом для:
                </Paragraph>
                <List>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        Створення утилітарних функцій, пов'язаних з класом
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        Реалізації фабричних методів для створення екземплярів
                    </ListItem>
                    <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                        Зберігання спільних даних або конфігурацій
                    </ListItem>
                </List>
                <Paragraph>
                    Вони особливо корисні при створенні бібліотек та утиліт, де потрібен легкий доступ до функціональності без необхідності створювати екземпляри класу.
                </Paragraph>
            </Paper>
        </Box>
    );
};

export default StaticMethodsPropertiesPage;