import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";

const ClassCreationPage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Створення класів</BookHeader>

            <SubHeader>1. Створення конструктора класу</SubHeader>
            <Paragraph>
                Почнемо з оголошення класу та визначення конструктора. Конструктор - це метод з ім'ям <Code>constructor</Code>, який викликається автоматично при створенні нового екземпляру класу. Основна його роль - ініціалізація об'єкта, тобто задання його початкового стану та властивостей.
            </Paragraph>
            <CodeBlock>
          {`
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}
          `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми визначимо клас <Code>Book</Code>, який має конструктор з параметрами <Code>title</Code>, <Code>author</Code> та <Code>year</Code>.
            </Paragraph>

            <SubHeader>2. Створення об'єктів за допомогою конструктора</SubHeader>
            <Paragraph>
                Тепер, коли маємо конструктор, можемо створювати нові об'єкти з його допомогою. При створенні об'єкта за допомогою класу <Code>Book</Code>, конструктор буде автоматично викликаний для ініціалізації властивостей об'єкта:
            </Paragraph>
            <CodeBlock>
          {`
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
console.log(book1);
console.log(book2);
          `}
            </CodeBlock>
            <Paragraph>
                У цьому прикладі ми створюємо два об'єкти <Code>book1</Code> та <Code>book2</Code>, передаючи їх конструктору відповідні значення. Кожен об'єкт отримує властивості <Code>title</Code>, <Code>author</Code> та <Code>year</Code>, які встановлюються значеннями з конструктора.
            </Paragraph>

            <SubHeader>3. Використання конструктора для ініціалізації об'єктів</SubHeader>
            <Paragraph>
                Один з ключових аспектів конструктора - це можливість ініціалізувати об'єкт певним початковим станом. Давайте додамо метод до класу <Code>Book</Code>, який виводитиме інформацію про книгу:
            </Paragraph>
            <CodeBlock>
          {`
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  displayInfo() {
    console.log(\`\${this.title} by \${this.author}, published in \${this.year}\`);
  }
}

const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);

book1.displayInfo(); // "The Great Gatsby by F. Scott Fitzgerald, published in 1925"
book2.displayInfo(); // "To Kill a Mockingbird by Harper Lee, published in 1960"
          `}
            </CodeBlock>

            <Paragraph>
                Тепер, при виклику методу <Code>displayInfo</Code>, ми можемо отримати інформацію про кожну книгу, а початковий стан об'єкта був встановлений конструктором.
            </Paragraph>

                <Conclusion>Заключення</Conclusion>
                <Paragraph>
                    Конструктор класу використовується для надання об'єктам початкового стану та ініціалізації їхніх
                    властивостей. Це стає основною складовою при створенні об'єктів за допомогою класів в JavaScript. З
                    його допомогою код стає більш структурованим та підтримуваним, а об'єкти отримують необхідні
                    початкові значення.
                </Paragraph>
        </Container>
    );
};

export default ClassCreationPage;