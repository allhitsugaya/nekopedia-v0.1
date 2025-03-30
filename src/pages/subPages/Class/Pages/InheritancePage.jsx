import React from 'react';
import {Container} from "@mui/material";
import BookHeader from "../../../../features/BookHeader/BookHeader.jsx";
import Paragraph from "../../../../features/Paragraph/Paragraph.jsx";
import SubHeader from "../../../../features/SubHeader/SubHeader.jsx";
import CodeBlock from "../../../../features/CodeBlock/CodeBlock.jsx";
import Code from "../../../../features/Code/Code.jsx";
import Conclusion from "../../../../features/Conclusion/Conclusion.jsx";

const InheritancePage = () => {
    return (
        <Container className="page-container">
            <BookHeader>Спадкування</BookHeader>
            <Paragraph>
                Спадкування в програмуванні - це механізм, що дозволяє класу (підкласу) успадковувати властивості та методи іншого класу (батьківського класу). У JavaScript цей механізм реалізується за допомогою ключового слова <Code>extends</Code>. Давайте детальніше розглянемо, як працює спадкування класів у JavaScript.
            </Paragraph>

            <SubHeader>1. Оголошення батьківського класу</SubHeader>
            <Paragraph>
                Почнемо з оголошення класу <Code>Animal</Code> в якості батьківського класу. В цьому класі ми визначимо конструктор та метод <Code>makeSound</Code>:
            </Paragraph>
            <CodeBlock>
          {`
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Some generic animal sound');
  }
}
          `}
            </CodeBlock>

            <Paragraph>
                Тут <Code>Animal</Code> має конструктор, який встановлює властивість <Code>name</Code>, та метод <Code>makeSound</Code>, який виводить загальний звук для всіх тварин.
            </Paragraph>

            <SubHeader>2. Створення підкласу з використанням extends</SubHeader>
            <Paragraph>
                Тепер давайте створимо підклас <Code>Dog</Code>, який успадковує властивості та методи від класу <Code>Animal</Code>. Ми використовуємо ключове слово <Code>extends</Code> для вказання батьківського класу.
            </Paragraph>
            <CodeBlock>
          {`
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Викликає конструктор батьківського класу
    this.breed = breed;
  }

  bark() {
    console.log('Woof! Woof!');
  }
}
          `}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі клас <Code>Dog</Code> успадковує властивість <Code>name</Code> та метод <Code>makeSound</Code> від класу <Code>Animal</Code>. Ми також додаємо власну властивість <Code>breed</Code> та метод <Code>bark</Code>.
            </Paragraph>

            <SubHeader>3. Створення екземплярів підкласу та виклик методів</SubHeader>
            <Paragraph>
                Тепер ми можемо створити екземпляр класу <Code>Dog</Code> та викликати його методи, включаючи ті, які успадковані від класу <Code>Animal</Code>.
            </Paragraph>
            <CodeBlock>
          {`
const myDog = new Dog('Buddy', 'Labrador');
myDog.makeSound(); // Викличе метод makeSound з класу Animal
myDog.bark(); // Викличе метод bark з класу Dog
console.log(myDog.name); // Виведе ім'я, успадковане від класу Animal
console.log(myDog.breed); // Виведе породу, додану в класі Dog
          `}
            </CodeBlock>
            <Paragraph>
                Ми створюємо екземпляр <Code>myDog</Code> класу <Code>Dog</Code> з ім'ям "Buddy" та породою "Labrador". Виклик методів <Code>makeSound</Code> та <Code>bark</Code> демонструє, як підклас може успадковувати та розширювати функціональність батьківського класу.
            </Paragraph>

            <SubHeader>4. Використання ключового слова super</SubHeader>
            <Paragraph>
                У конструкторі підкласу ми використовуємо ключове слово <Code>super</Code> для виклику конструктора батьківського класу. Це необхідно для правильної ініціалізації властивостей, успадкованих від батьківського класу.
            </Paragraph>
            <CodeBlock>
          {`
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Викликає конструктор батьківського класу
    this.breed = breed;
  }
  // Решта коду...
}
          `}
            </CodeBlock>
            <Paragraph>
                Спадкування класів в JavaScript дозволяє створювати більш узагальнені та структуровані класи, сприяє перевикористанню коду та полегшує розширення функціональності. Клас <Code>Dog</Code> успадковує властивості та методи від класу <Code>Animal</Code>, а також може мати свої власні унікальні характеристики та методи.
            </Paragraph>

                <Conclusion>Заключення</Conclusion>
                <Paragraph>
                    Спадкування є важливим механізмом у програмуванні, який дозволяє створювати ієрархії класів,
                    успадковувати властивості та методи, а також розширювати функціональність. Використання ключового
                    слова <Code>extends</Code> та <Code>super</Code> робить код більш структурованим, зрозумілим та
                    підтримуваним.
                </Paragraph>
        </Container>
    );
};

export default InheritancePage;