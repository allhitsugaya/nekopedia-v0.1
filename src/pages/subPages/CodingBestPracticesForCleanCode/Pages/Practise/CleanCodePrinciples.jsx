import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../../features/SubHeader/SubHeader.jsx";
import Chapter from "../../../../../features/Chapter/Chapter.jsx";
import CodeBlock from "../../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../../features/Code/Code.jsx";
import Conclusion from "../../../../../features/Conclusion/Conclusion.jsx";

const CleanCodePrinciples = () => {
    return (
        <Container className="page-container">
            <BookHeader>Частина 1: Загальні принципи</BookHeader>
            <Paragraph>
                У світі розробки програмного забезпечення чистий код вважається справжньою скарбницею. Це поняття охоплює низку принципів та практик, які роблять ваш код більш зрозумілим, читабельним та підтримуваним. Чистий код допомагає вам та вашій команді працювати більш продуктивно, робить процес розробки більш ефективним і зменшує кількість помилок. У цьому розділі ми розглянемо, чому чистий код важливий, і подамо приклади його впливу на розробку на JavaScript.
            </Paragraph>

            <SubHeader>1. Читабельність та зрозумілість коду</SubHeader>
            <Paragraph>
                Однією з ключових переваг чистого коду є його читабельність і зрозумілість. Чим легше читати та розуміти код, тим менше часу витрачається на розбір і аналіз, і тим більше часу залишається для розв'язання реальних завдань.
            </Paragraph>

            <Chapter>Приклад 1: Погано читабельний код</Chapter>
            <CodeBlock>
                    {`
function ct(x){
if(x<10){return 10+x}
else{return x-10}
}
                    `}
                </CodeBlock>

            <Chapter>Приклад 2: Чистий код</Chapter>
            <CodeBlock>
                    {`
function calculateTotalPrice(quantity) {
  if (quantity < 10) {
    return 10 + quantity;
  } else {
    return quantity - 10;
  }
}
                    `}
            </CodeBlock>

            <SubHeader>2. Підтримуваність та розширюваність проекту</SubHeader>
            <Paragraph>
                Чистий код полегшує підтримку та розширення проекту. Якщо ваш код читабельний і добре структурований, інші розробники можуть легко зрозуміти його і вносити необхідні зміни без значного ризику введення помилок.
            </Paragraph>

            <Chapter>Приклад 3: Розширення функціональності</Chapter>
            <CodeBlock>
                    {`
// Початковий код
function calculateTotalPrice(quantity, discount) {
  if (quantity < 10) {
    return (10 + quantity) * (1 - discount);
  } else {
    return (quantity - 10) * (1 - discount);
  }
}
                    `}
            </CodeBlock>

            <CodeBlock>
                    {`
// Розширений та чистий код
function calculateTotalPrice(quantity, discount) {
  const basePrice = quantity < 10 ? 10 + quantity : quantity - 10;
  return basePrice * (1 - discount);
}
                    `}
            </CodeBlock>

            <SubHeader>3. Відсутність зайвих помилок та багів</SubHeader>
            <Paragraph>
                Чистий код допомагає уникнути зайвих помилок та багів. Коли код читабельний і легко зрозуміти, розробники можуть легше виявити помилки та виправити їх перед тим, як вони стануть серйозними проблемами.
            </Paragraph>

            <Chapter>Приклад 4: Виявлення помилки</Chapter>
            <CodeBlock>
                    {`
// Нечистий код
function calculateDiscountedPrice(quantity, discount) {
  const price = quantity * (1 - discount);
  iff (discount > 0.5) { // Потенційна помилка: неправильний розрахунок
    return price + 5; 
  } else {
    return price;
  }
}
                    `}
            </CodeBlock>

            <CodeBlock>
                    {`
// Чистий код
function calculateDiscountedPrice(quantity, discount) {
  const price = quantity * (1 - discount);
  return discount > 0.5 ? price + 5 : price // Нема if, менше вірогідність опечатки
}
                    `}
            </CodeBlock>

                <Conclusion>Висновок</Conclusion>
                <Paragraph>
                    Чистий код важливий, оскільки він полегшує читабельність, підтримку, розширення і допомагає уникнути
                    помилок. Розробники, які дотримуються принципів чистого коду, стають більш продуктивними та
                    забезпечують більшу якість свого програмного забезпечення.
                </Paragraph>
        </Container>
    );
};

export default CleanCodePrinciples;