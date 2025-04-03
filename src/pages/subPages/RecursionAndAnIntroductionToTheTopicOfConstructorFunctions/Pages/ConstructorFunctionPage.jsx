import { Typography, useTheme } from "@mui/material";
import Paragraph from '../../../../features/Paragraph/Paragraph.jsx';
import Code from '../../../../features/Code/Code.jsx';
import CodeBlock from '../../../../features/CodeBlock/CodeBlock.jsx';

const ConstructorFunctionPage = () => {
    const theme = useTheme();

    return (
        <>
            <Typography
                variant="h1"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 700,
                    mb: 4
            }}
            >
                Функція конструктор
            </Typography>

            <Paragraph>
                Конструктори об'єктів та методи об'єкта - це потужні інструменти, які дозволяють створювати та працювати з об'єктами в JavaScript. Вони допомагають організувати код та робити його більш структурованим та ефективним.
            </Paragraph>

            <Typography
                variant="h2"
                sx={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    mt: 4,
                    mb: 2
                }}
            >
                1. Функція конструктор
            </Typography>

            <Paragraph>
                Функція конструктор - це спеціальна функція в JavaScript, призначена для створення нових об'єктів певного типу. Вона дозволяє нам визначити структуру та властивості об'єкта та використовувати її для створення багатьох об'єктів з однаковою структурою.
            </Paragraph>

            <Typography
                variant="h3"
                sx={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    mt: 3,
                    mb: 2
                }}
            >
                Створення Багаторазових Об'єктів
            </Typography>

            <Paragraph>
                Однією з основних функцій конструкторів є можливість створювати багаторазові об'єкти одного типу. Замість того, щоб кожен раз вручну створювати новий об'єкт з однаковою структурою, ми можемо використовувати конструктор для швидкого створення нових екземплярів.
            </Paragraph>

            <CodeBlock>
                {`function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car("Toyota", "Camry", 2022);
const car2 = new Car("Honda", "Civic", 2023);
const car3 = new Car("Ford", "Focus", 2022);`}
            </CodeBlock>

            <Paragraph>
                Тут <Code>Car</Code> - це конструктор, який дозволяє створювати об'єкти для різних автомобілів, зберігаючи загальну структуру.
            </Paragraph>

            <Typography
                variant="h3"
                sx={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    mt: 3,
                    mb: 2
                }}
            >
                Інкапсуляція Даних
            </Typography>

            <Paragraph>
                Конструктори також дозволяють досягнути інкапсуляції даних, тобто обмеження доступу до деяких властивостей об'єкта. Ми можемо використовувати приватні властивості та методи для збереження даних та додаткової логіки в межах об'єкта.
            </Paragraph>

            <CodeBlock>
                {`function BankAccount(accountNumber) {
  let balance = 0;

  this.getAccountNumber = function() {
    return accountNumber;
  };

  this.getBalance = function() {
    return balance;
  };

  this.deposit = function(amount) {
    balance += amount;
  };

  this.withdraw = function(amount) {
    if (balance >= amount) {
      balance -= amount;
    } else {
      console.log("Недостатньо коштів на рахунку.");
    }
  };
}

const account1 = new BankAccount("123456");
account1.deposit(1000);
account1.withdraw(500);`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі <Code>balance</Code> - це приватна змінна, і ми використовуємо методи для доступу до неї та зміни її значення. Це дозволяє контролювати доступ до даних об'єкта та забезпечує безпеку даних.
            </Paragraph>

            <Typography
                variant="h3"
                sx={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    mt: 3,
                    mb: 2
                }}
            >
                Наслідування та Прототипи
            </Typography>

            <Paragraph>
                JavaScript також використовує концепцію прототипів для спадкування властивостей та методів. Конструктори можуть бути використані для створення прототипів об'єктів, що дозволяє створювати ієрархії об'єктів та спадкувати їхню функціональність.
            </Paragraph>

            <CodeBlock>
                {`function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function() {
  console.log(\`\${this.name} говорить\`);
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.makeSound = function() {
  console.log(\`\${this.name} гавкає\`);
};

const dog1 = new Dog("Барсік");
dog1.makeSound(); // "Барсік гавкає"`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі <Code>Animal</Code> є базовим конструктором, і <Code>Dog</Code> успадковує від нього, перевизначаючи метод <Code>makeSound</Code>. Це дозволяє створювати спеціалізовані об'єкти на основі загальних конструкторів.
            </Paragraph>

            <Typography
                variant="h3"
                sx={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    mt: 3,
                    mb: 2
                }}
            >
                Варіативність та Параметри
            </Typography>

            <Paragraph>
                Конструктори також можуть приймати параметри, що робить їх більш гнучкими та варіативними. Ми можемо передавати різну кількість аргументів при створенні об'єктів.
            </Paragraph>

            <CodeBlock>
                {`function Product(name, price) {
  this.name = name;
  this.price = price || 0;
}

const product1 = new Product("Молоко");
const product2 = new Product("Хліб", 2.5);`}
            </CodeBlock>

            <Paragraph>
                У цьому прикладі <Code>Product</Code> може мати один або два параметри, і об'єкти створюються залежно від переданих аргументів.
            </Paragraph>

            <Box className='conclusion'>
                <Typography
                    variant="h2"
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        mb: 2
                    }}
                >
                    Заключення
                </Typography>
                <Paragraph>
                    Конструктори - це потужний механізм мови JavaScript, який дозволяє створювати об'єкти, виконувати інкапсуляцію даних та створювати ієрархії об'єктів. Вони роблять код більш структурованим, зручним та ефективним. Розуміння цих концепцій є важливим для успішного програмування в JavaScript.
                </Paragraph>
            </Box>
        </>
    );
};

export default ConstructorFunctionPage;