import { List, ListItem, Typography, Box } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const RecursionPage = () => {
    return (
        <Box sx={{
            maxWidth: '100%',
            padding: 2,
            textAlign: 'left'
        }}>
            <Typography
                variant="h1"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    mb: 4,
                    color: 'text.primary'
                }}
            >
                Рекурсія
            </Typography>

            <Paragraph>
                Рекурсія в програмуванні - це техніка, коли функція викликає сама себе для вирішення завдання. В JavaScript рекурсія є потужним інструментом, який дозволяє розв'язувати складні завдання шляхом діління їх на більш прості підзадачі. У цій доповіді ми розглянемо основні поняття рекурсії, надамо приклади рекурсивних функцій та визначимо ситуації, коли використання рекурсії є найкращим вибором.
            </Paragraph>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Що таке рекурсія?
            </Typography>

            <Paragraph>
                Рекурсія - це процес, коли функція викликає сама себе. У рекурсивних функціях завдання ділиться на більш прості підзавдання, і функція викликається для кожного з цих підзавдань до завершення всього завдання. Рекурсія базується на ідейному поділі та владному підкоренні проблеми.
            </Paragraph>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Приклад рекурсивної функції 1: Факторіал числа
            </Typography>

            <Paragraph>
                Факторіал числа - це добуток всіх цілих чисел від 1 до цього числа. Факторіал <Code>n</Code> позначається як <Code>n!</Code> і обчислюється як <Code>n! = n * (n-1) * (n-2) * ... * 2 * 1</Code>. Ми можемо обчислити факторіал за допомогою рекурсивної функції:
            </Paragraph>

            <CodeBlock>
                {`function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Виведе 120 (5! = 5 * 4 * 3 * 2 * 1)`}
            </CodeBlock>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Приклад рекурсивної функції 2: Сума елементів масиву
            </Typography>

            <Paragraph>
                Ми можемо використовувати рекурсію для обчислення суми всіх елементів масиву:
            </Paragraph>

            <CodeBlock>
                {`function sumArray(arr, index) {
  if (index === 0) {
    return arr[0];
  } else {
    return arr[index] + sumArray(arr, index - 1);
  }
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers, numbers.length - 1)); // Виведе 15 (1 + 2 + 3 + 4 + 5)`}
            </CodeBlock>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Завдання, де рекурсія є найкращим вибором
            </Typography>

            <List sx={{
                pl: 2,
                listStyleType: 'disc',
                '& .MuiListItem-root': {
                    display: 'list-item',
                    py: 0.5,
                    pl: 1,
                    ml: 2
                }
            }}>
                <ListItem>
                    <Typography component="span" fontWeight="bold">Пошук у глибину (Depth-First Search):</Typography> В рекурсивних алгоритмах обходу графів (наприклад, дерев), рекурсія зазвичай є природнім вибором.
                </ListItem>
                <ListItem>
                    <Typography component="span" fontWeight="bold">Форматування дерева об'єктів:</Typography> Рекурсивні функції дозволяють обходити та форматувати складні структури даних, такі як дерева об'єктів.
                </ListItem>
                <ListItem>
                    <Typography component="span" fontWeight="bold">Графічні інтерфейси:</Typography> В деяких бібліотеках і фреймворках для створення графічних інтерфейсів використовують рекурсивні методи для побудови складних інтерфейсів.
                </ListItem>
            </List>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                    color: 'text.primary'
                }}
            >
                Заключення
            </Typography>
            <Paragraph>
                Рекурсія - це потужний інструмент, який допомагає розв'язувати складні завдання шляхом розкладання їх на менші частини. Вона використовується в багатьох аспектах програмування і може значно полегшити розробку програм. Тим не менше, рекурсія повинна використовуватися ретельно, оскільки некоректно написана рекурсивна функція може призвести до переповнення стеку і викликів функцій.
            </Paragraph>
        </Box>
    );
};

export default RecursionPage;