import {Box, Typography} from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';

const ControlFlowPage = () => {
    return (
        <Box style={{
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
                Вступ
            </Typography>

            <Paragraph>
                Ми глибоко розглянемо основні засоби керування програмним потоком та обробки даних в мові програмування JavaScript. Почнемо з розгляду спливу змінних (hoisting), що дозволяє розуміти, як JavaScript обробляє змінні та функції під час виконання коду.
            </Paragraph>
            <Paragraph>
                Далі ви дізнаєтеся про правила та порядок виконання операторів, включаючи арифметичні операції, оператори присвоєння, інкремент та декремент, а також операції для роботи зі залишком від ділення. Ці знання стануть фундаментом для ефективної роботи з числовими значеннями в JavaScript.
            </Paragraph>

            <Paragraph>
                Ми також вивчимо бінарні та логічні оператори, такі як & (AND), | (OR), && (логічне AND), || (логічне OR), ?? (оператор злиття nullish), і дізнаємося, як вони застосовуються для створення умов та контролю логіки програми.
            </Paragraph>

            <Paragraph>
                Завершимо тему, розглядаючи тернарний оператор та роботу з умовними конструкціями if/else if/else та switch/case, що дозволять створювати гнучкі умови в вашому JavaScript-коді. Ця тема допоможе вам вдосконалити навички розробки та оптимізації програмного коду в JavaScript.
            </Paragraph>
        </Box>
    );
};

export default ControlFlowPage;