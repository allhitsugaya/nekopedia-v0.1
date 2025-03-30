import React from 'react';
import {Box, Container, List, ListItem} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";
import Code from "../../../../features/Code/Code.jsx";

const CurryingPage = () => {
    return (
        <Container className="page-container">
            <BookHeader >Каррінг</BookHeader >
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
          {`
// Функція з двома аргументами
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
console.log(curryAdd(5)(10)); // Виведе 15
          `}
           </CodeBlock>`
            <Paragraph>
                У цьому прикладі <code>curryAdd</code> перетворює функцію <code>add</code> з двома аргументами у функцію, яка приймає один аргумент <code>x</code> і повертає іншу функцію, яка приймає аргумент <code>y</code> і виконує додавання. Це дозволяє створити нові функції, які додають до <code>x</code> певне значення.
            </Paragraph>

            <SubHeader>Користь каррінгу</SubHeader>
            <Paragraph>
                Каррінг корисний для:
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
                        fontSize: 14
                    }
                }}>
                <ListItem><Code>Часткового застосування функцій:</Code> Створення нових функцій з меншою кількістю аргументів.</ListItem>
                <ListItem><Code>Покращення зрозумілості коду:</Code> Каррінг дозволяє розбивати складні функції на простіші, що робить код більш читабельним.</ListItem>
                <ListItem><Code>Створення функцій вищого порядку:</Code> Каррінг дозволяє легко створювати функції, які можуть передавати додаткову поведінку до існуючих функцій.</ListItem>
            </List>
            </Box>

                <Conclusion>Заключення</Conclusion>
                <Paragraph>
                    Каррінг є потужним інструментом у функціональному програмуванні, який дозволяє створювати більш
                    гнучкий та зрозумілий код. Використання каррінгу допомагає уникнути повторень, покращує
                    читабельність коду та полегшує створення складних функцій.
                </Paragraph>
        </Container>
    );
};

export default CurryingPage;