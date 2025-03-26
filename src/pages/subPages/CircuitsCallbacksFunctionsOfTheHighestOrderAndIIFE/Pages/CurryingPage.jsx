import React from 'react';
import { Box, Typography, Paper, List, ListItem } from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";

const CurryingPage = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <BookHeader>Каррінг у JavaScript</BookHeader>

            <Paragraph>
                Каррінг (Currying) - це техніка в функціональному програмуванні, яка полягає в трансформації функції з багатьма аргументами у послідовність функцій з одним аргументом кожна.
            </Paragraph>

            <Paragraph>
                Це дозволяє легко створювати нові функції з меншою кількістю аргументів та більшою зрозумілістю коду. В JavaScript каррінг реалізується за допомогою замикань.
            </Paragraph>

            <SubHeader>Приклад каррінгу в JavaScript</SubHeader>
            <Paragraph>
                Ось приклад, що ілюструє каррінг в JavaScript:
            </Paragraph>
            <CodeBlock>
                {`// Функція з двома аргументами
function add(x, y) {
  return x + y;
}

// Функція, що застосовує каррінг до add
function curryAdd(x) {
  return function(y) {
    return x + y;
  };
}

// Використання функції curryAdd
const addFive = curryAdd(5);
console.log(addFive(10)); // Виведе 15

// Або можна зробити так
console.log(curryAdd(5)(10)); // Виведе 15`}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі <Code>curryAdd</Code> перетворює функцію <Code>add</Code> з двома аргументами у функцію, яка приймає один аргумент <Code>x</Code> і повертає іншу функцію, яка приймає аргумент <Code>y</Code> і виконує додавання. Це дозволяє створити нові функції, які додають до <Code>x</Code> певне значення.
            </Paragraph>

            <SubHeader>Універсальна функція каррінгу</SubHeader>
            <Paragraph>
                Можна створити універсальну функцію для каррінгу будь-якої функції:
            </Paragraph>
            <CodeBlock>
                {`function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

// Приклад використання
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6`}
            </CodeBlock>

            <SubHeader>Користь каррінгу</SubHeader>
            <Paragraph>
                Каррінг корисний для:
            </Paragraph>
            <List sx={{ mb: 3 }}>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Часткового застосування функцій:</Typography> Створення нових функцій з меншою кількістю аргументів
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Покращення зрозумілості коду:</Typography> Розбиття складних функцій на простіші, що робить код більш читабельним
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Створення функцій вищого порядку:</Typography> Легке створення функцій, які можуть передавати додаткову поведінку до існуючих функцій
                </ListItem>
                <ListItem sx={{ display: 'list-item', listStyleType: 'disc', pl: 1, ml: 2 }}>
                    <Typography component="span" fontWeight="bold">Композиції функцій:</Typography> Краща підтримка композиції функцій у функціональному програмуванні
                </ListItem>
            </List>

            <SubHeader>Практичне застосування</SubHeader>
            <Paragraph>
                Каррінг часто використовується в бібліотеках та фреймворках:
            </Paragraph>
            <CodeBlock>
                {`// Приклад з React - каррінг для обробників подій
function handleChange(fieldName) {
  return function(event) {
    setFormData(prev => ({
      ...prev,
      [fieldName]: event.target.value
    }));
  };
}

// Використання
<input onChange={handleChange('username')} />
<input onChange={handleChange('password')} />`}
            </CodeBlock>

            <Paper sx={{ p: 3, mt: 3, backgroundColor: 'background.paper' }} className="conclusion">
                <SubHeader>Висновок</SubHeader>
                <Paragraph>
                    Каррінг є потужним інструментом у функціональному програмуванні, який дозволяє створювати більш гнучкий та зрозумілий код.
                </Paragraph>
                <Paragraph>
                    Хоча каррінг може здатися складною концепцією спочатку, його використання призводить до більш модульного, повторно використовуваного та легшого для тестування коду. Він особливо корисний у поєднанні з іншими техніками функціонального програмування, такими як композиція функцій.
                </Paragraph>
            </Paper>
        </Box>
    );
};

export default CurryingPage;