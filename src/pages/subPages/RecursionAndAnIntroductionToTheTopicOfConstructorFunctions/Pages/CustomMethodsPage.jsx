import { Typography, useTheme } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const CustomMethodsPage = () => {
    const theme = useTheme();

    return (
        <>
            <Typography
                variant="h1"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    mb: 4,
                }}
            >
                Кастомні методи об'єкта
            </Typography>

            <Paragraph>
                Методи об'єкта - це функції, які відомі об'єкту та можуть викликатися для виконання певних операцій над об'єктом. Вони дозволяють нам організовувати та виконувати дії, пов'язані з об'єктом, та надають об'єкту його функціональність.
            </Paragraph>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                }}
            >
                Використання Методів Об'єкта
            </Typography>

            <Paragraph>
                Об'єкти в JavaScript можуть містити не лише дані, але й функції, які називаються методами. Методи - це функції, які виконують дії над даними об'єкта. Давайте розглянемо приклад об'єкта "Автомобіль" з методами:
            </Paragraph>

            <CodeBlock>
                {`const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  start: function() {
    console.log("Двигун запущено.");
  },
  stop: function() {
    console.log("Двигун зупинено.");
  },
};

car.start(); // Виведе "Двигун запущено."
car.stop();  // Виведе "Двигун зупинено."`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі <Code>start</Code> та <Code>stop</Code> - це методи об'єкта <Code>car</Code>, які виконують відповідні дії.
            </Paragraph>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                }}
            >
                Відмінність Методів Об'єкта від Звичайних Функцій
            </Typography>

            <Paragraph>
                Важливою різницею між методами об'єкта та звичайними функціями є те, що методи об'єкта завжди пов'язані з об'єктом, на якому вони були визвані. Це означає, що метод може отримувати доступ до властивостей об'єкта через ключове слово <Code>this</Code>.
            </Paragraph>

            <CodeBlock>
                {`const person = {
  firstName: "Василь",
  lastName: "Петров",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName()); // Виведе "Василь Петров"`}
            </CodeBlock>

            <Paragraph>
                У методі <Code>fullName</Code>, <Code>this</Code> посилається на об'єкт <Code>person</Code>, що дозволяє нам отримати доступ до його властивостей.
            </Paragraph>
        </>
    );
};

export default CustomMethodsPage;