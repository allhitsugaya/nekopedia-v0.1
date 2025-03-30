import {Container, List, ListItem, Typography} from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";

const AnyTypePage = () => {

    return (
        <Container>
            <BookHeader
                component="h2"
                variant="h2"
                sx={{
                    fontWeight: 700,
                    mb: 4,
                    textAlign: 'left',
                    paddingLeft: 0,
                    marginLeft: 0,
                    fontSize: '2rem'
                }}
            >
                Any в TypeScript та його обмеження 💩
            </BookHeader>

            <Paragraph sx={{
                textAlign: 'left',
                paddingLeft: 0,
                marginLeft: 0
            }}>
                В TypeScript ключове поняття <Code>any</Code> використовується для оголошення типу, який може представляти будь-який об'єкт або значення. В принципі, використання <Code>any</Code> може здатися привабливим, особливо коли ви стикаєтеся з кодом, який не має жорсткого визначення типів, або коли вам необхідно швидко імпортувати JavaScript-код до TypeScript-проекту.
            </Paragraph>

            <Paragraph sx={{
                textAlign: 'left',
                paddingLeft: 0,
                marginLeft: 0
            }}>
                Однак використання <Code>any</Code> зазвичай вважається не найкращою практикою в TypeScript з кількох причин:
            </Paragraph>

            <List sx={{
                mb: 4,
                paddingLeft: '18px',
                listStyleType: 'disc',
                '& .MuiListItem-root': {
                    display: 'list-item',
                    py: 0.5,
                    pl: 0,
                    ml: '18px',
                    textAlign: 'left',
                    fontWeight: 500
                }
            }}>
                <ListItem>
                    Втрата переваг TypeScript: Однією з переваг TypeScript є його статична система типів, яка дозволяє виявляти помилки на етапі розробки. Використання <Code>any</Code> обминає цю перевагу, тому ви втрачаєте переваги від статичної перевірки типів.
                </ListItem>
                <ListItem>
                    Непереносимість коду: Коли ви використовуєте <Code>any</Code>, ваш код стає менш переносимим між проектами та командами. Визначення типів допомагає розробникам розуміти, які дані можна передавати функціям та які результати очікувати.
                </ListItem>
                <ListItem>
                    Потенційні помилки: Використання <Code>any</Code> може призвести до помилок під час виконання через недостатню перевірку типів. Це може призвести до непередбачуваного поведінки та важкоуловимих помилок.
                </ListItem>
            </List>

            <Paragraph sx={{
                textAlign: 'left',
                paddingLeft: 0,
                marginLeft: 0
            }}>
                У TypeScript краще визначати конкретні типи для змінних та параметрів функцій, щоб використовувати всі переваги статичної перевірки типів та покращити читабельність та надійність коду. Ось приклад використання <Code>any</Code> та його альтернативи з використанням конкретного типу в TypeScript:
            </Paragraph>

            <CodeBlock>
                {`// Використання any
function multiply(a: any, b: any): any {
  return a * b;
}

const result = multiply("2", 3); // Немає статичної перевірки типів

// Використання конкретного типу
function multiplyWithNumber(a: number, b: number): number {
  return a * b;
}

const resultWithNumber = multiplyWithNumber(2, 3); // Статична перевірка типів працює`}
            </CodeBlock>

            <Paragraph sx={{
                textAlign: 'left',
                paddingLeft: 0,
                marginLeft: 0,
                mt: 3
            }}>
                У вищеподаному прикладі <Code>multiply</Code> використовує <Code>any</Code>, що дозволяє передавати будь-які типи в аргументи, але це призводить до втрати статичної перевірки типів. У той час як <Code>multiplyWithNumber</Code> використовує конкретний тип <Code>number</Code>, що забезпечує статичну перевірку типів і робить код більш надійним.
            </Paragraph>
        </Container>
    );
};

export default AnyTypePage;