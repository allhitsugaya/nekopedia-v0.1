import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import Conclusion from "../../../../../features/Conclusion/Conclusion.jsx";

const CommonEventErrorsPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Часті Помилки під час Роботи з Подіями</BookHeader>
            <Paragraph>
                При роботі з подіями в JavaScript, існують певні загальні помилки, на які варто звертати увагу, щоб забезпечити стабільну та надійну роботу вашого додатку. Ось декілька з них:
            </Paragraph>

            <SubHeader>1. Не перевіряти наявність елементів перед додаванням обробника подій</SubHeader>
            <Paragraph>
                Якщо ви намагаєтеся додати обробник події до неіснуючого елемента, це призведе до помилки. Щоб уникнути цього, завжди перевіряйте наявність елемента перед додаванням обробника подій. Проте це не завжди доречно:
            </Paragraph>
            <CodeBlock>
          {`
const button = document.querySelector('#myButton');
if (button) {
  button.addEventListener('click', function() {
    alert('Кнопку натиснули!');
  });
}
          `}
            </CodeBlock>

            <SubHeader>2. Використання неправильного синтаксису обробника</SubHeader>
            <Paragraph>
                Помилки в синтаксисі обробника можуть призвести до того, що подія не буде оброблена. Всі обробники повинні бути функціями.
            </Paragraph>
            <CodeBlock>
          {`
// Помилково
button.addEventListener('click', 'некоректний обробник');

// Правильно
button.addEventListener('click', function() {
  alert('Кнопку натиснули!');
});
          `}
            </CodeBlock>

            <SubHeader>3. Незвільнення ресурсів</SubHeader>
            <Paragraph>
                Якщо ви додаєте багато обробників подій до одного елемента і не звільняєте їх, це може спричинити витоки пам'яті. Переконайтесь, що ви видаляєте обробники, коли вони більше не потрібні.
            </Paragraph>
            <CodeBlock>
          {`
function handleClick() {
  alert('Кнопку натиснули!');
}

button.addEventListener('click', handleClick);

// Потрібно видалити обробник, коли він більше не потрібен
button.removeEventListener('click', handleClick);
          `}
            </CodeBlock>

            <SubHeader>4. Запобігання спливанню подій</SubHeader>
            <Paragraph>
                Події в JavaScript можуть спливати вгору по DOM-дереву, викликаючи обробники на батьківських елементах. Іноді це може призвести до несподіваних результатів. Використовуйте метод <Code>stopPropagation</Code>, щоб зупинити спливання подій, якщо це необхідно.
            </Paragraph>
            <CodeBlock>
          {`
button.addEventListener('click', function(event) {
  event.stopPropagation();
  alert('Кнопку натиснули!');
});
          `}
            </CodeBlock>

                <Conclusion>Висновок</Conclusion>
                <Paragraph>
                    Робота з подіями - це важливий аспект розробки веб-додатків. Правильна обробка різних типів подій і
                    уникнення поширених помилок допомагає забезпечити стабільну та функціональну роботу вашого додатку.
                    Знання різних типів подій і їх обробки допомагає створювати веб-додатки, які взаємодіють з
                    користувачем ефективно та інтуїтивно.
                </Paragraph>
        </Container>
    );
};

export default CommonEventErrorsPage;