import {Container, Typography, useTheme} from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";

const IntroductionPage = () => {


    return (
        <Container>
            <BookHeader
                variant="h1"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    mb: 4,
                }}
            >
                Вступ
            </BookHeader>

            <Paragraph>
                В світі JavaScript, рекурсія, конструктори та методи об'єкту є ключовими поняттями, які розширюють можливості мови та дозволяють розробникам елегантно та ефективно реалізовувати різноманітні завдання.
            </Paragraph>

            <SubHeader
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                }}
            >
                Рекурсія
            </SubHeader>

            <Paragraph>
                Рекурсія — це техніка в програмуванні, коли функція викликає сама себе для розв'язання певного завдання чи обчислення значення. Рекурсивні функції можуть спрощувати складні задачі та полегшувати їх розуміння.
            </Paragraph>

            <SubHeader
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                }}
            >
                Конструктори
            </SubHeader>

            <Paragraph>
                Конструктори є спеціальним типом функцій, призначених для створення та ініціалізації об'єктів. Вони використовуються для створення багаторазових шаблонів об'єктів, що спрощує роботу з об'єктами та полегшує їхнє використання в коді. Розглядання конструкторів розкриє перед нами можливості об'єктно-орієнтованого програмування в JavaScript.
            </Paragraph>

            <SubHeader
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                }}
            >
                Методи об'єкту
            </SubHeader>

            <Paragraph>
                Методи об'єкту — це функції, які визначені всередині об'єкта і використовуються для виконання певних дій з даними цього об'єкта. Вони дозволяють інкапсулювати логіку, пов'язану з об'єктом, і роблять код більш організованим та зрозумілим.
            </Paragraph>

            <>
                <Conclusion
                    variant="h2"
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    Заключення
                </Conclusion>
                <Paragraph>
                    Розглядаючи рекурсію, конструктори та методи об'єкту, ми розкриємо глибокі можливості мови та навчимося використовувати ці концепції для розробки ефективних та структурованих програм.
                </Paragraph>
            </>
        </Container>
    );
};

export default IntroductionPage;