import { Typography} from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const OOPPage = () => {
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
                Класи та об'єктно-орієнтоване програмування
            </Typography>

            <Paragraph>
                Об'єктно-орієнтоване програмування (ООП) — це парадигма програмування, що базується на концепції об'єктів, які мають властивості та поведінку, і взаємодіють один з одним. TypeScript, як розширення JavaScript, дозволяє нам використовувати основні принципи ООП для створення структурованих, модульних та повторно використовуваних кодових баз.
            </Paragraph>

            <Paragraph>
                У цій частині ми розглянемо основні поняття та засоби об'єктно-орієнтованого програмування в TypeScript. Ми детально розглянемо визначення класів, використання конструкторів, наслідування та інтерфейси. Під час подальших прикладів ми поглибимося в роботу з функціями, типами та важливими аспектами створення ефективного коду в ООП-стилі з використанням TypeScript.
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
                Визначення класів та використання конструкторів
            </Typography>

            <Paragraph>
                В TypeScript класи використовуються для створення об'єктно-орієнтованих структур. Вони описують властивості та методи об'єктів і включають конструктор для ініціалізації екземплярів класу. Приклад нижче демонструє створення класу <Code>Car</Code> з властивостями <Code>brand</Code> та <Code>model</Code> та методом <Code>startEngine</Code>.
            </Paragraph>

            <CodeBlock>
                {`class Car {
  // Властивості класу
  brand: string;
  model: string;

  // Конструктор для ініціалізації об'єкта
  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  // Метод класу
  startEngine() {
    console.log(\`The \${this.brand} \${this.model}'s engine is started.\`);
  }
}

// Створення екземпляра класу
const myCar = new Car('Toyota', 'Camry');
myCar.startEngine();`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі <Code>Car</Code> — це клас, а <Code>myCar</Code> — його екземпляр. Конструктор класу викликається при створенні нового екземпляра, і властивості можуть бути ініціалізовані переданими значеннями.
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
                Наслідування
            </Typography>

            <Paragraph>
                В TypeScript можна використовувати наслідування для створення нового класу, який успадковує властивості та методи іншого класу. Це дозволяє створювати ієрархії класів та використовувати вже існуючий код.
            </Paragraph>

            <CodeBlock>
                {`// Базовий клас
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log('Some generic sound');
  }
}

// Клас, який успадковує Animal
class Dog extends Animal {
  // Додаткова властивість класу Dog
  breed: string;

  constructor(name: string, breed: string) {
    // Виклик конструктора базового класу
    super(name);
    this.breed = breed;
  }

  // Перевизначений метод
  makeSound() {
    console.log('Woof! Woof!');
  }
}

// Створення екземплярів класів
const genericAnimal = new Animal('Generic Animal');
const myDog = new Dog('Buddy', 'Labrador');

genericAnimal.makeSound(); // Output: Some generic sound
myDog.makeSound();        // Output: Woof! Woof!`}
            </CodeBlock>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2,
                }}
            >
                Інтерфейси
            </Typography>

            <Paragraph>
                Крім того, TypeScript використовує інтерфейси для визначення контрактів, які класи повинні виконувати. Інтерфейс може включати визначення методів та властивостей, які повинні бути реалізовані класами, що імплементують цей інтерфейс.
            </Paragraph>

            <CodeBlock>
                {`// Інтерфейс для класу, який має метод logDetails
interface Loggable {
  logDetails(): void;
}

// Клас, який реалізує інтерфейс
class Logger implements Loggable {
  logDetails() {
    console.log('Logging details...');
  }
}

// Створення екземпляру класу
const logger = new Logger();
logger.logDetails(); // Output: Logging details...`}
            </CodeBlock>

            <>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    Заключення
                </Typography>
                <Paragraph>
                    Таким чином, використання класів, наслідування та інтерфейсів у TypeScript робить код більш читабельним, розширюваним та підтримуваним.
                </Paragraph>
            </>
        </>
    );
};

export default OOPPage;