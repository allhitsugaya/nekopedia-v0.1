import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";
import Code from "../../../../features/Code/Code.jsx";

const FunctionParametersPage = () => {
    return (
        <Container>
            <BookHeader>Параметри функцій, значення за замовчуванням</BookHeader>
            <Paragraph>
                Функції в JavaScript є важливим засобом для структурування та організації коду. Вони дозволяють визначати блоки коду, які можна використовувати багаторазово, щоб виконувати конкретні завдання. Однією з ключових аспектів роботи з функціями є передача параметрів, визначення значень за промовчанням та розпакування параметрів. У цій доповіді ми розглянемо ці аспекти та наведемо приклади їх використання.
            </Paragraph>

            <SubHeader>Передача параметрів в функцію</SubHeader>
            <Paragraph>
                Параметри - це значення, які функція отримує при своєму виклику. Вони дозволяють передавати дані функції, які можуть використовуватися всередині функції для виконання певних дій. Параметри визначаються у дужках при створенні функції, і їх може бути багато або жодного.
            </Paragraph>
            <CodeBlock>
          {`
function showMessage(message) {
    console.log(message);
}

showMessage("Привіт, світ!"); // Виведе "Привіт, світ!" в консоль
          `}
      </CodeBlock>
            <Paragraph>
                У цьому прикладі <Code>message</Code> - це параметр функції <Code>showMessage</Code>, і ми передаємо йому рядок <Code>"Привіт, світ!"</Code>. Функція виведе цей рядок у консоль.
            </Paragraph>

            <SubHeader>Значення за замовчуванням</SubHeader>
            <Paragraph>
                Іноді буває необхідно вказати значення за замовчуванням для параметрів функції, тобто значення, які використовуються, якщо значення для параметра не передано при виклику функції.
            </Paragraph>
            <CodeBlock>
          {`
function sayHi(name = "Гість") {
    console.log(\`Привіт, \${name}!\`);
}

sayHi(); // Виведе "Привіт, Гість!" в консоль
sayHi("Іван"); // Виведе "Привіт, Іван!" в консоль
          `}
      </CodeBlock>
            <Paragraph>
                У цьому прикладі параметр <Code>name</Code> має значення за промовчанням <Code>"Гість"</Code>. Якщо при виклику функції не передано значення для <Code>name</Code>, воно приймає значення <Code>"Гість"</Code>. Однак, якщо передати значення, наприклад <Code>"Іван"</Code>, то воно перезапише значення за замовчуванням.
            </Paragraph>

            <SubHeader>Розпакування параметрів</SubHeader>
            <Paragraph>
                Розпакування параметрів дозволяє функції приймати аргументи у вигляді об'єкта або масиву і розпаковувати їх у окремі параметри. Це дуже корисно при роботі зі складними структурами даних.
            </Paragraph>
            <CodeBlock>
          {`
function createUser({ name, age }) {
    console.log(\`Ім'я: \${name}, Вік: \${age}\`);
}

const user = { name: "Іван", age: 30 };
createUser(user); // Виведе "Ім'я: Іван, Вік: 30"
          `}
      </CodeBlock>
            <Paragraph>
                У цьому прикладі ми передаємо об'єкт <Code>user</Code> у функцію <Code>createUser</Code>, і цей об'єкт розпаковується у параметри функції. Ми можемо звертатися до <Code>name</Code> та <Code>age</Code> безпосередньо, не використовуючи <Code>user.name</Code> або <Code>user.age</Code>.
            </Paragraph>

                <Conclusion>Заключення</Conclusion>
                <Paragraph>
                    Розуміння того, як працюють параметри, значення за промовчанням та розпакування параметрів, є
                    важливою частиною роботи з функціями в JavaScript. Ці концепції допомагають створювати більш гнучкий
                    та повторно використовуваний код, що є важливим для розробки ефективних програм на JavaScript.
                </Paragraph>
        </Container>
    );
};

export default FunctionParametersPage;