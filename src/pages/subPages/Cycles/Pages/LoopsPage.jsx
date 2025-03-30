import React from 'react';
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Code from "../../../../features/Code/Code.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import {Box, Container, List, ListItem} from "@mui/material";
import Chapter from "../../../../features/Chapter/Chapter.jsx";

const LoopsPage = () => {
    return (
        <Container>
            <BookHeader
                >Введення в цикли та види циклів</BookHeader>
            <Paragraph>
                Цикли - це потужний інструмент в програмуванні, який дозволяє виконувати певну послідовність коду кілька разів. Вони дозволяють автоматизувати однотипні завдання та обробку даних. У JavaScript існує кілька видів циклів, і кожен з них має свої власні особливості та сферу застосування.
            </Paragraph>
            <Paragraph>
                У цій доповіді ми розглянемо основи циклів у JavaScript та вивчимо види циклів, такі як <Code>for</Code>, <Code>while</Code> та <Code>do...while</Code>.
            </Paragraph>
            <Paragraph>
                Це лише початок вивчення циклів у JavaScript. Цикли - важлива частина будь-якої мови програмування і дозволяють вам створювати більш потужні та гнучкі програми.
            </Paragraph>

            <SubHeader>Основи циклів</SubHeader>
            <Paragraph>
                Цикли в JavaScript дозволяють виконувати блок коду доти, доки задана умова виконується. Основною метою використання циклів є автоматизація виконання однотипних дій. Давайте розглянемо загальний синтаксис циклу:
            </Paragraph>
            <CodeBlock>
          {`
for (ініціалізація; умова; інкремент) {
    // Блок коду, який виконується
}
          `}
      </CodeBlock>
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
                <ListItem><Code>ініціалізація</Code> - вираз або змінна, яка ініціалізує лічильник циклу.</ListItem>
                <ListItem><Code>умова</Code> - умова, яка перевіряється перед кожним кроком циклу. Якщо умова стає <Code>false</Code>, цикл завершується.</ListItem>
                <ListItem><Code>інкремент</Code> - вираз або змінна, яка змінює лічильник після кожного кроку циклу.</ListItem>
                </List>
            </Box>
            <Paragraph>
                Простий приклад виведення чисел від 1 до 5 за допомогою циклу <Code>for</Code>:
            </Paragraph>
            <CodeBlock>
          {`
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
          `}
      </CodeBlock>
            <Paragraph>
                Цей цикл ініціалізує <Code>i</Code> зі значенням 1, перевіряє, чи <Code>i</Code> не більше 5, та збільшує <Code>i</Code> на 1 після кожного кроку. Код у фігурних дужках виконується п'ять разів.
            </Paragraph>

            <SubHeader>Види циклів</SubHeader>

            <Chapter>Цикл for</Chapter>
            <Paragraph>
                Цикл <Code>for</Code> використовується, коли заздалегідь відомо, скільки разів потрібно виконати код.
            </Paragraph>
            <CodeBlock>
          {`
for (let i = 0; i < 5; i++) {
    console.log(i);
}
          `}
      </CodeBlock>

            <Chapter>Цикл while</Chapter>
            <Paragraph>
                Цикл <Code>while</Code> виконується, поки умова є <Code>true</Code>.
            </Paragraph>
            <CodeBlock>
          {`
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
          `}
      </CodeBlock>

            <Chapter> Цикл do...while</Chapter>
            <Paragraph>
                Цикл <Code>do...while</Code> гарантує виконання блоку коду хоча б один раз, навіть якщо умова відразу <Code>false</Code>.
            </Paragraph>
            <CodeBlock>
          {`
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);
          `}
      </CodeBlock>
        </Container>
    );
};

export default LoopsPage;