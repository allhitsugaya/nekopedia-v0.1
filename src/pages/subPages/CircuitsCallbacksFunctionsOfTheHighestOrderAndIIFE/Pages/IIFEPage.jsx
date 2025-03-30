import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";
import Code from "../../../../features/Code/Code.jsx";

const IIFEPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Функція, що самовикликається (IIFE)</BookHeader>
            <Paragraph>
                Самовикликаючіся функції, також відомі як IIFE (Immediately Invoked Function Expressions), - це потужний інструмент в JavaScript, який дозволяє створювати функції та викликати їх безпосередньо після визначення. Ця техніка корисна для ізоляції змінних, створення приватних областей видимості та уникнення конфліктів імен. Тут розглянемо синтаксис IIFE та способи їх використання для створення приватних областей видимості в JavaScript.
            </Paragraph>

            <SubHeader>Синтаксис IIFE</SubHeader>
            <Paragraph>
                IIFE - це функція, яка визначається та викликається одразу. Ось загальний синтаксис IIFE:
            </Paragraph>
            <CodeBlock>
          {`
(function () {
  // код функції
})();
          `}
      </CodeBlock>
            <Paragraph>
                Визначення функції розміщується в круглих дужках, що негайно викликають її для виконання. Функція може бути анонімною, тобто вона не має імені.
            </Paragraph>

            <SubHeader>Використання IIFE для створення приватних областей видимості</SubHeader>
            <Paragraph>
                Однією з ключових переваг IIFE є їх здатність створювати приватні області видимості для змінних. Це означає, що змінні, оголошені всередині IIFE, недоступні ззовні і не конфліктують з іншими змінними в глобальному контексті. Ось приклад:
            </Paragraph>
            <CodeBlock>
          {`
(function () {
  var privateVariable = 'Ця змінна приватна';
  // Отримання доступу до приватної змінної
  console.log(privateVariable);
})();

console.log(privateVariable); // Спроба доступу до privateVariable ззовні IIFE призведе до помилки:
// Uncaught ReferenceError: privateVariable is not defined
          `}
        </CodeBlock>
            <Paragraph>
                В даному прикладі <Code>privateVariable</Code> є приватною змінною, доступною лише всередині IIFE. Це дозволяє уникнути конфліктів імен та зберегти дані відсутніми для зовнішнього світу.
            </Paragraph>
            <Paragraph>
                IIFE також корисні для уникнення забруднення глобального об'єкту, оскільки змінні та функції, оголошені всередині IIFE, не забруднюють глобальний об'єкт <Code>window</Code> (у веб-середовищі) чи глобальний об'єкт <Code>Node.js</Code>.
            </Paragraph>

            <SubHeader>Приклади використання IIFE</SubHeader>

            <SubHeader variant="h3">1. Захист даних</SubHeader>
            <Paragraph>
                Використання IIFE для захисту конфіденційних даних:
            </Paragraph>
        <CodeBlock>
          {`
(function () {
  var secretKey = 'mySecretKey';
  function encryptData(data) {
    // Логіка шифрування з використанням secretKey
  }
  // Захищені функції та дані
})();
          `}
        </CodeBlock>

            <SubHeader variant='h3'>2. Модульний підхід</SubHeader>
            <Paragraph>
                Використання IIFE для створення модульних компонентів коду:
            </Paragraph>
            <CodeBlock>
          {`
var myModule = (function () {
  var privateVar = 'Це приватна змінна';

  function privateFunction() {
    // Приватна функція
  }

  return {
    publicVar: 'Це публічна змінна',
    publicFunction: function () {
      // Публічна функція
    },
  };
})();
          `}
        </CodeBlock>


                <Conclusion>Заключення</Conclusion>
                <Paragraph>
                    IIFE є потужним інструментом в JavaScript, який дозволяє створювати приватні області видимості та
                    захищати дані від неповноважних доступів. Вони знаходять застосування в багатьох аспектах розробки,
                    допомагаючи створювати надійний та організований код.
                </Paragraph>
        </Container>
    );
};

export default IIFEPage;